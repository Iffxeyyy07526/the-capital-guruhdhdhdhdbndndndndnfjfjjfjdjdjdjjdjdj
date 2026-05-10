'use client';

import { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { UploadCloud, CheckCircle2, ArrowRight, Check, User, Mail, Phone, MessageCircle, Send, Hash } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'motion/react';

const PLAN_DETAILS: Record<string, { name: string; price: string; amount: number }> = {
  'monthly': { name: 'Pro Monthly', price: '₹2,499', amount: 2499 },
  'six-monthly': { name: 'Elite Bi-Annual', price: '₹11,999', amount: 11999 },
  'yearly': { name: 'Mastery Annual', price: '₹19,999', amount: 19999 },
};

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  mobile: z.string().min(10, 'Valid mobile number required'),
  whatsapp: z.string().min(10, 'Valid WhatsApp number required'),
  telegramId: z.string().min(2, 'Telegram ID is required'),
  utrNumber: z.string().min(6, 'Valid UTR transaction number required'),
  agreedToTerms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and conditions'
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function PaymentPage({ params }: { params: Promise<{ planId: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const plan = PLAN_DETAILS[resolvedParams.planId];
  
  const [screenshotName, setScreenshotName] = useState<string>('');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '', email: '', mobile: '', whatsapp: '', telegramId: '', utrNumber: '', agreedToTerms: false
    }
  });

  if (!plan) {
    return (
      <div className="py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 font-display">Plan Not Found</h1>
        <button onClick={() => router.push('/pricing')} className="text-gold-500 hover:text-gold-400 font-medium">Return to Pricing</button>
      </div>
    );
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshotName(e.target.files[0].name);
    }
  };

  const onSubmit = (data: FormValues) => {
    if (!screenshotName) {
      toast.error('Please upload a payment screenshot');
      return;
    }

    const message = `*New Subscription Request*\nPlan: ${plan.name} (${plan.price})\nName: ${data.name}\nEmail: ${data.email}\nMobile: ${data.mobile}\nWhatsApp: ${data.whatsapp}\nTelegram ID: ${data.telegramId}\nUTR Number: ${data.utrNumber}\nAgreed to Terms: Yes`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919106713107?text=${encodedMessage}`;
    
    toast.success('Redirecting to WhatsApp to complete verification...');
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      router.push('/dashboard?status=pending');
    }, 1500);
  };

  return (
    <div className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Complete Your Enrollment</h1>
            <p className="text-white/50 text-lg font-light">You selected <span className="text-gold-400 font-medium">{plan.name}</span> for {plan.price}.</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column - Payment Details */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-brand-gray/30 backdrop-blur-md rounded-3xl p-8 border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl" />
              
              <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-brand-black text-sm font-bold shadow-lg">1</span>
                Scan to Pay
              </h2>
              
              <div className="bg-white p-4 rounded-xl mb-8 w-full max-w-[280px] mx-auto flex items-center justify-center shadow-2xl relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://i.ibb.co/spXv708j/IMG-20260507-202558.png" alt="UPI QR Code" className="w-full h-auto object-contain rounded-lg" />
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span className="text-white/40 uppercase tracking-widest text-[10px] font-semibold">Amount to Pay</span>
                  <span className="font-display font-bold text-2xl text-gold-400">{plan.price}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span className="text-white/40 uppercase tracking-widest text-[10px] font-semibold">UPI ID</span>
                  <span className="font-mono text-sm tracking-wide">mahir.7056@waaxis</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-white/40 uppercase tracking-widest text-[10px] font-semibold">Merchant</span>
                  <span className="font-medium text-white/90">The Capital Guru</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-gold-500/5 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6"
            >
              <h3 className="text-gold-400 font-bold mb-4 font-display">Important Instructions</h3>
              <ul className="space-y-3 text-sm text-white/60 font-light">
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-gold-500/50 shrink-0 mt-0.5" /> Please make the exact payment shown.</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-gold-500/50 shrink-0 mt-0.5" /> Note down the 12-digit UTR/Reference number.</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-gold-500/50 shrink-0 mt-0.5" /> Take a clear screenshot of the successful payment.</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-gold-500/50 shrink-0 mt-0.5" /> Allow 2-4 hours for manual verification process.</li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Submission Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="bg-brand-black/80 backdrop-blur-xl border border-brand-border rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50" />
              
              <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-brand-black text-sm font-bold shadow-lg">2</span>
                Submit Details
              </h2>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-white/40 uppercase tracking-widest pl-1">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-white/30" />
                      </div>
                      <input 
                        {...form.register('name')}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all font-light" 
                        placeholder="John Doe"
                      />
                    </div>
                    {form.formState.errors.name && <p className="text-red-400 text-xs pl-1">{form.formState.errors.name.message}</p>}
                  </div>
                  
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-white/40 uppercase tracking-widest pl-1">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-white/30" />
                      </div>
                      <input 
                        {...form.register('email')}
                        type="email"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all font-light" 
                        placeholder="you@example.com"
                      />
                    </div>
                    {form.formState.errors.email && <p className="text-red-400 text-xs pl-1">{form.formState.errors.email.message}</p>}
                  </div>

                  {/* Mobile Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-white/40 uppercase tracking-widest pl-1">Mobile Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-white/30" />
                      </div>
                      <input 
                        {...form.register('mobile')}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all font-light" 
                        placeholder="+91"
                      />
                    </div>
                    {form.formState.errors.mobile && <p className="text-red-400 text-xs pl-1">{form.formState.errors.mobile.message}</p>}
                  </div>

                  {/* WhatsApp Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-white/40 uppercase tracking-widest pl-1">WhatsApp Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <MessageCircle className="h-5 w-5 text-white/30" />
                      </div>
                      <input 
                        {...form.register('whatsapp')}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all font-light" 
                        placeholder="+91"
                      />
                    </div>
                    {form.formState.errors.whatsapp && <p className="text-red-400 text-xs pl-1">{form.formState.errors.whatsapp.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-white/40 uppercase tracking-widest pl-1">Telegram ID</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Send className="h-5 w-5 text-white/30" />
                      </div>
                      <input 
                        {...form.register('telegramId')}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all font-light" 
                        placeholder="@yourusername"
                      />
                    </div>
                    {form.formState.errors.telegramId && <p className="text-red-400 text-xs pl-1">{form.formState.errors.telegramId.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-semibold text-white/40 uppercase tracking-widest pl-1">12-Digit UTR Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Hash className="h-5 w-5 text-white/30" />
                      </div>
                      <input 
                        {...form.register('utrNumber')}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all font-mono tracking-widest font-light" 
                        placeholder="XXXX XXXX XXXX"
                      />
                    </div>
                    {form.formState.errors.utrNumber && <p className="text-red-400 text-xs pl-1">{form.formState.errors.utrNumber.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-semibold text-white/40 uppercase tracking-widest pl-1">Payment Screenshot</label>
                  <div className="relative border border-dashed border-white/10 bg-white/[0.02] rounded-2xl p-8 hover:bg-white/[0.04] transition-colors cursor-pointer group text-center">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                    />
                    <div className="flex flex-col items-center justify-center space-y-3">
                      {screenshotName ? (
                        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex flex-col items-center gap-2">
                          <CheckCircle2 className="h-10 w-10 text-gold-500" />
                          <span className="text-sm text-white/90 font-medium">{screenshotName}</span>
                        </motion.div>
                      ) : (
                        <>
                          <div className="w-16 h-16 rounded-full bg-brand-black flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300">
                            <UploadCloud className="h-6 w-6 text-white/40 group-hover:text-gold-500 transition-colors" />
                          </div>
                          <span className="text-sm text-white/50 font-light mt-2">Click or drag receipt image here</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                  <div className="relative flex items-start mt-1">
                    <input 
                      type="checkbox" 
                      id="terms"
                      {...form.register('agreedToTerms')}
                      className="peer h-5 w-5 appearance-none rounded border border-white/20 bg-brand-black checked:bg-gold-500 checked:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all cursor-pointer" 
                    />
                    <Check className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-black opacity-0 peer-checked:opacity-100 pointer-events-none" />
                  </div>
                  <label htmlFor="terms" className="text-sm text-white/50 font-light leading-relaxed cursor-pointer select-none">
                    I agree to the <a href="/terms" className="text-gold-400 hover:text-gold-300 transition-colors">Terms & Conditions</a>, <a href="/privacy" className="text-gold-400 hover:text-gold-300 transition-colors">Privacy Policy</a>, and understand the <a href="/sebi" className="text-gold-400 hover:text-gold-300 transition-colors">SEBI Guidelines</a> regarding financial risk.
                  </label>
                </div>
                {form.formState.errors.agreedToTerms && <p className="text-red-400 text-xs pl-9">{form.formState.errors.agreedToTerms.message}</p>}

                <button 
                  type="submit"
                  className="w-full h-16 rounded-sm bg-gradient-to-r from-gold-500 to-gold-600 text-brand-black font-bold text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex justify-center items-center gap-3 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative flex items-center gap-2">
                    Submit & Verify via WhatsApp
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
