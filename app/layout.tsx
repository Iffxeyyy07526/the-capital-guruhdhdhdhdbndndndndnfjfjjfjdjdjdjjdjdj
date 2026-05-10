import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { PageTransition } from "@/components/PageTransition";
import { LoadingProvider } from "@/components/LoadingProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata = {
  title: "The Capital Guru - Premium Trading Signals",
  description: "Master the Markets with Precision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} dark`}>
      <body className="antialiased min-h-screen flex flex-col font-inter bg-black text-white selection:bg-emerald-500/30 overflow-x-hidden">
        <LoadingProvider>
          <PageTransition>{children}</PageTransition>
        </LoadingProvider>
      </body>
    </html>
  );
}
