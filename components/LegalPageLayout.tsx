import { AppNavbar } from "@/components/AppNavbar";
import { AppFooter } from "@/components/AppFooter";
import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white selection:bg-emerald-500/30">
      <AppNavbar />
      
      <main className="flex-1 relative pb-24 overflow-hidden">
        {/* Abstract Background for Legal Pages */}
        <div className="absolute top-0 inset-x-0 h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-black to-black -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <FadeIn delay={0.1}>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-10 group text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </FadeIn>

          <FadeIn delay={0.2}>
            <header className="mb-12 pb-8 border-b border-white/10">
              <h1 className="text-4xl sm:text-5xl font-space font-bold tracking-tight mb-4 text-white">
                {title}
              </h1>
              <p className="text-gray-400">
                Last updated: {lastUpdated}
              </p>
            </header>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="prose prose-invert prose-emerald max-w-none">
              {children}
            </div>
          </FadeIn>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
