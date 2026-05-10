"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    // Use Supabase auth with resend email
    const { error: signUpError, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
    } else {
      if (data.session) {
        // User is logged in right away (if auto confirm is on)
        router.push("/dashboard");
        router.refresh();
      } else {
        // Requires email verification
        setSuccess(true);
        setLoading(false);
      }
    }
  };

  if (success) {
    return (
      <div className="text-center text-emerald-400 bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">
        Registration successful! Please check your email to verify your account before logging in.
      </div>
    );
  }

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="w-full px-4 py-2 border border-white/10 rounded-xl bg-black text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          placeholder="John Doe"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-white/10 rounded-xl bg-black text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          className="w-full px-4 py-2 border border-white/10 rounded-xl bg-black text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-4 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition-colors disabled:opacity-50"
      >
        {loading ? "Creating account..." : "Sign Up"}
      </button>
    </form>
  );
}
