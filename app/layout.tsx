import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PageTransition } from '@/components/page-transition';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'The Capital Guru - Premium Trading Signals',
  description: 'Premium trading signals for the Indian market (NSE/BSE futures and options).',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="bg-brand-black text-white min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <Toaster theme="dark" richColors position="top-right" />
      </body>
    </html>
  );
}
