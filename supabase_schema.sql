-- Run this in your Supabase SQL Editor

-- 1. Create the payments table
CREATE TABLE public.payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  user_email TEXT NOT NULL,
  plan_id TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  utr_number TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE
);

-- 2. Setup row level security (RLS)
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own payments
CREATE POLICY "Users can view their own payments"
  ON public.payments FOR SELECT
  USING (auth.uid() = user_id);

-- Allow users to insert their own payments
CREATE POLICY "Users can insert their own payments"
  ON public.payments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Admin policies (You should set up an admin role or handle manual updates via Supabase Dashboard UI, which bypasses RLS).

-- 3. Trigger for managing 'expires_at' when a payment is approved
CREATE OR REPLACE FUNCTION set_payment_expiry()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.status = 'approved' AND OLD.status != 'approved' THEN
    IF NEW.plan_id = 'monthly' THEN
      NEW.expires_at = NOW() + INTERVAL '1 month';
    ELSIF NEW.plan_id = 'semi-annual' THEN
      NEW.expires_at = NOW() + INTERVAL '6 months';
    ELSIF NEW.plan_id = 'annual' THEN
      NEW.expires_at = NOW() + INTERVAL '1 year';
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_payment_approved
BEFORE UPDATE ON public.payments
FOR EACH ROW
EXECUTE FUNCTION set_payment_expiry();

-- ==========================================
-- WEBHOOK INSTRUCTIONS
-- ==========================================
-- 1. In Supabase Dashboard -> Database -> Webhooks -> Create new Webhook
-- 2. Name: "Payment Approved Email"
-- 3. Table: "payments", Events: "UPDATE"
-- 4. HTTP Request -> Method: POST, URL: "https://thecapitalguru.net/api/webhooks/supabase?secret=YOUR_WEBHOOK_SECRET"
-- 5. HTTP Headers -> Content-Type: application/json
-- Wait! Since you host on Vercel, this is triggered instantly when an admin sets status='approved' through the Supabase Table editor.
