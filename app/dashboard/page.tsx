"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { AppNavbar } from "@/components/AppNavbar"
import { Lock, Crown, LogOut, ExternalLink } from "lucide-react"
import { CheckoutButton } from "@/components/CheckoutButton"

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activePlan, setActivePlan] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      } else {
        setUser(session.user);
        
        // Fetch active payment
        const { data: payments } = await supabase
          .from("payments")
          .select("*")
          .eq("user_id", session.user.id)
          .eq("status", "approved")
          .gt("expires_at", new Date().toISOString())
          .order("expires_at", { ascending: false })
          .limit(1);

        if (payments && payments.length > 0) {
          setActivePlan(payments[0]);
        }
      }
      setLoading(false);
    };

    checkUser();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col bg-black text-white items-center justify-center">
        <div className="w-8 h-8 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <AppNavbar />
      
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-space font-bold mb-2">My Dashboard</h1>
            <p className="text-gray-400">Welcome back, {user?.user_metadata?.full_name || user?.email}</p>
          </div>
          <button 
            onClick={handleSignOut}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Subscription Status */}
          <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] -z-10 translate-x-1/3 -translate-y-1/3" />
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2 bg-emerald-500/10 rounded-xl">
                <Crown className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-xl font-bold">Subscription</h2>
            </div>
            
            <div className="mb-6 relative z-10">
              <p className="text-sm text-gray-400 mb-1">Current Plan</p>
              <p className="text-2xl font-space font-bold text-white capitalize">{activePlan ? activePlan.plan_id : "Free Tier"}</p>
              {activePlan && (
                <p className="text-xs text-emerald-400 font-medium mt-1">
                  Valid till: {new Date(activePlan.expires_at).toLocaleDateString()}
                </p>
              )}
            </div>
            
            {!activePlan && (
              <CheckoutButton 
                priceId="monthly"
                planName="Monthly"
                className="w-full py-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl font-bold hover:bg-emerald-500/20 transition-colors relative z-10"
              />
            )}
          </div>

          {/* Telegram Invite */}
          <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8 relative overflow-hidden lg:col-span-2">
            <div className={`absolute top-0 right-0 w-64 h-64 ${activePlan ? 'bg-emerald-500/10' : 'bg-blue-500/10'} rounded-full blur-[60px] -z-10 translate-x-1/3 -translate-y-1/3`} />
            
            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <h2 className="text-2xl font-space font-bold mb-3">Premium Telegram Channel</h2>
                <p className="text-gray-400 max-w-lg mb-6">
                  Get instant notifications for all our high-probability trades. 
                  Access requires an active Pro or Elite subscription.
                </p>
              </div>
              
              <div className={`flex items-center gap-4 ${activePlan ? 'bg-emerald-900/20 border-emerald-500/20' : 'bg-zinc-900 border-white/5'} border rounded-2xl p-4`}>
                <div className={`w-12 h-12 ${activePlan ? 'bg-emerald-500/20 text-emerald-400' : 'bg-zinc-800 text-gray-400'} rounded-xl flex items-center justify-center shrink-0`}>
                  {activePlan ? <Crown className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white">The Capital Guru VIP</h3>
                  <p className={`text-sm ${activePlan ? 'text-emerald-400' : 'text-gray-500'}`}>
                    {activePlan ? 'Unlocked - Active Subscription' : 'Locked - Upgrade required'}
                  </p>
                </div>
                <a 
                  href={activePlan ? (process.env.NEXT_PUBLIC_TELEGRAM_GROUP_LINK || "https://t.me/your_telegram_channel") : "#"} 
                  target={activePlan ? "_blank" : "_self"}
                  rel="noreferrer"
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${activePlan ? 'bg-emerald-500 text-black hover:bg-emerald-400' : 'bg-zinc-800 text-gray-500 cursor-not-allowed'} hidden sm:flex items-center gap-2 transition-colors`}
                >
                  Join Channel <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
