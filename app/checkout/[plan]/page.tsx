import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import CheckoutClient from './checkout-client';
import { TrendingUp, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function CheckoutPage(props: { params: Promise<{ plan: string }> }) {
  const params = await props.params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/login?next=/checkout/${params.plan}`);
  }

  const plans = {
    'monthly': { name: '1 Month', price: 2499 },
    'semi-annual': { name: '6 Months', price: 11999 },
    'annual': { name: '12 Months', price: 19999 },
  };

  const selectedPlan = plans[params.plan as keyof typeof plans];

  if (!selectedPlan) {
    redirect('/');
  }

  return (
    <main className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-8">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-emerald-500 w-8 h-8" />
            <h1 className="font-space font-bold text-3xl tracking-tighter">Complete Payment</h1>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm uppercase tracking-wide font-semibold">Selected Plan</p>
            <p className="text-xl font-bold">{selectedPlan.name} <span className="text-emerald-400 ml-2">₹ {selectedPlan.price}</span></p>
          </div>
        </div>
      </div>
      
      <CheckoutClient planId={params.plan} planDetails={selectedPlan} userId={user.id} userEmail={user.email || ''} />
    </main>
  );
}
