"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Copy } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function CheckoutClient({ planId, planDetails, userId, userEmail }: { 
  planId: string; 
  planDetails: { name: string, price: number };
  userId: string;
  userEmail: string;
}) {
  const [utrNumber, setUtrNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const upiId = process.env.NEXT_PUBLIC_UPI_ID || "mahir.7056@waaxis";

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    alert("UPI ID copied to clipboard!");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!utrNumber || utrNumber.length < 12) {
      setError("Please enter a valid 12-digit UTR number.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const supabase = createClient();
      
      // Save payment locally
      const { error: dbError } = await supabase
        .from('payments')
        .insert({
          user_id: userId,
          plan_id: planId,
          amount: planDetails.price,
          utr_number: utrNumber,
          status: 'pending',
          user_email: userEmail
        });
      
      if (dbError) {
        // If the table doesn't exist yet, we still proceed to WhatsApp redirect but log error.
        console.error("Database error (Table might not exist yet):", dbError);
        // Create table SQL needed: 'payments'
      }

      // Send email via API route or webhook (we will trigger our Next API)
      await fetch('/api/payment/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          userEmail,
          planId,
          amount: planDetails.price,
          utrNumber
        })
      });

      setSuccess(true);
      
      // Redirect to WhatsApp
      const waNumber = "919106713107";
      const message = `Hello Capital Guru,\n\nI have made a payment of ₹${planDetails.price} for the ${planDetails.name} plan.\n\nMy Email: ${userEmail}\nUTR Number: ${utrNumber}\n\nPlease find the payment screenshot attached.`;
      
      setTimeout(() => {
        window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
      }, 1500);

    } catch (err: any) {
      setError(err.message || "An error occurred submitting your payment.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-8 rounded-3xl text-center">
        <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-emerald-500" />
        <h2 className="text-2xl font-bold mb-2">Payment Submitted!</h2>
        <p className="text-gray-300 max-w-lg mx-auto mb-6">
          Thank you! Our team will manually verify your UTR number. Redirecting you to WhatsApp so you can send the payment screenshot...
        </p>
        <p className="text-sm">If you are not redirected automatically, <a href={`https://wa.me/919106713107?text=${encodeURIComponent(`Here is my screenshot for email: ${userEmail} UTR: ${utrNumber}`)}`} target="_blank" rel="noreferrer" className="underline hover:text-white">click here</a>.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-200">
      {/* 1. Payment Details Section */}
      <div className="flex flex-col border border-white/10 bg-zinc-950 p-8 rounded-3xl h-full">
        <div className="mb-6">
          <div className="inline-flex h-8 w-8 rounded-full bg-emerald-500/20 text-emerald-400 items-center justify-center font-bold mb-4">1</div>
          <h2 className="text-xl font-bold">Scan & Pay with UPI</h2>
          <p className="text-sm text-gray-400 mt-2">Open your preferred UPI app and scan the QR code to make the payment.</p>
        </div>
        
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl mb-6 mx-auto w-fit">
          <Image 
            src="https://i.ibb.co/JjvmfJvZ/IMG-20260507-202558.png" 
            alt="UPI QR Code" 
            width={200} 
            height={200} 
            referrerPolicy="no-referrer"
            className="rounded-xl"
          />
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-400 mb-2">Or pay to this UPI ID:</p>
          <div className="flex items-center justify-center gap-2 bg-black py-3 px-4 rounded-xl border border-white/10">
            <span className="font-mono text-lg">{upiId}</span>
            <button onClick={handleCopyUpi} className="text-gray-400 hover:text-white" title="Copy UPI ID">
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Submit Verification Section */}
      <div className="flex flex-col border border-white/10 bg-zinc-950 p-8 rounded-3xl h-full">
        <div className="mb-6">
          <div className="inline-flex h-8 w-8 rounded-full bg-emerald-500/20 text-emerald-400 items-center justify-center font-bold mb-4">2</div>
          <h2 className="text-xl font-bold">Submit UTR Details</h2>
          <p className="text-sm text-gray-400 mt-2">After successful payment, enter the 12-digit UTR/Reference number below to process your verification.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center">
          {error && (
            <div className="mb-4 p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg">
              {error}
            </div>
          )}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-2">UTR / Reference Number</label>
            <input
              type="text"
              required
              value={utrNumber}
              onChange={(e) => setUtrNumber(e.target.value)}
              placeholder="e.g. 312345678901"
              className="w-full px-4 py-3 border border-white/10 rounded-xl bg-black text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 font-mono text-lg"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition-colors disabled:opacity-50 mt-auto"
          >
            {loading ? "Submitting..." : "Submit Payment & Open WhatsApp"}
          </button>
        </form>

        <div className="mt-6 text-xs text-gray-500 text-center">
          By clicking above, you confirm that you have made the payment. Fake submissions will result in account ban.
        </div>
      </div>
    </div>
  );
}
