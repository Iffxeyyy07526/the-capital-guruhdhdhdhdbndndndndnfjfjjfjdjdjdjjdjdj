import { ReactNode } from "react";

export interface CampaignEmail {
  id: string;
  type: 'educational' | 'sales';
  subject: string;
  headline: string;
  content: string[];
  ctaText?: string;
  ctaLink?: string;
}

export const educationalEmails: CampaignEmail[] = [
  {
    id: "edu_1",
    type: "educational",
    subject: "The Institutional Blueprint: Why Retail Loses",
    headline: "Stop Trading Like Retail",
    content: [
      "Welcome to the inner circle.",
      "90% of retail traders lose 90% of their capital in 90 days. Why? Because they trade patterns they see on YouTube while institutions trade liquidity.",
      "The market is a mechanism for transferring wealth from the impatient to the patient.",
      "Today's lesson: Identify where retail puts their stop losses. That's your entry zone."
    ],
    ctaText: "Read Full Strategy",
    ctaLink: "https://thecapitalguru.net/blog/institutional-blueprint"
  },
  {
    id: "edu_2",
    type: "educational",
    subject: "Risk Management: The Billionaire's Secret",
    headline: "Preservation Over Profits",
    content: [
      "Amateurs focus on how much they can make. Professionals focus on how much they can lose.",
      "Never risk more than 1-2% of your total capital on a single trade. If you take 10 losses in a row at 1%, you still have 90% of your capital to recover.",
      "Capital preservation is your primary job. Trading is secondary."
    ]
  },
  {
    id: "edu_3",
    type: "educational",
    subject: "Mastering Market Structure",
    headline: "The Anatomy of a Trend",
    content: [
      "Higher highs and higher lows. It sounds simple, but 80% of traders get trapped in counter-trend moves.",
      "Before taking any position, zoom out. If the 4-hour chart is bearish, don't look for 15-minute buy setups.",
      "Trade with the institutional flow, not against it."
    ]
  },
  {
    id: "edu_4",
    type: "educational",
    subject: "The Psychology of Drawdowns",
    headline: "Surviving the Inevitable",
    content: [
      "Every great trader experiences drawdowns. The difference between a professional and an amateur is how they act during one.",
      "When in a drawdown: reduce position size, stick to prime setups A+ only, and stop revenge trading.",
      "Accept the loss. Protect the mindset."
    ]
  },
  {
    id: "edu_5",
    type: "educational",
    subject: "Volume Spread Analysis Basics",
    headline: "The Footprints of Smart Money",
    content: [
      "Price tells you what happened. Volume tells you how serious it was.",
      "A breakout with low volume is a trap. A reversal with massive volume is an institutional footprint.",
      "Stop ignoring volume. It is the fuel of the market."
    ]
  },
  ...Array.from({ length: 45 }).map((_, i) => ({
    id: `edu_${i + 6}`,
    type: "educational" as const,
    subject: `Market Mastery Principle #${i + 6}`,
    headline: `Advanced Tactic: Level ${i + 6}`,
    content: [
      "This is an automated lesson from our core curriculum.",
      "Consistency requires discipline, patience, and absolute adherence to your trading plan.",
      "Focus on the process, not the PnL. The profits will follow the discipline."
    ],
    ctaText: "Review Masterclass",
    ctaLink: "https://thecapitalguru.net/academy"
  }))
];

export const salesEmails: CampaignEmail[] = [
  {
    id: "sales_1",
    type: "sales",
    subject: "Unlock Institutional-Grade Signals",
    headline: "The Edge You've Been Missing",
    content: [
      "You've learned the theory. Now it's time to execute alongside the elite.",
      "Our VIP members are getting 3-5 high-probability setups daily, complete with precise entries, targets, and invalidation levels.",
      "Stop guessing. Start executing with precision."
    ],
    ctaText: "Join the Inner Circle",
    ctaLink: "https://thecapitalguru.net/#pricing"
  },
  {
    id: "sales_2",
    type: "sales",
    subject: "Only 5 Spots Left in Mentorship",
    headline: "Elite 1-on-1 Access",
    content: [
      "This isn't for everyone. We only work with dedicated traders who want to build generational wealth.",
      "Our 12-month mentorship includes live trading sessions, portfolio reviews, and direct access to our head traders.",
      "Secure your spot before we close the doors."
    ],
    ctaText: "Apply for Mentorship",
    ctaLink: "https://thecapitalguru.net/mentorship"
  },
  {
    id: "sales_3",
    type: "sales",
    subject: "Your Free Trial is Ending",
    headline: "Don't Lose Your Edge",
    content: [
      "You've seen the accuracy. You've witnessed the market intelligence.",
      "Upgrade to the Premium tier today to keep receiving our institutional flow alerts and deep-dive technical reports.",
      "Invest in your financial future."
    ],
    ctaText: "Upgrade Now",
    ctaLink: "https://thecapitalguru.net/#pricing"
  },
  {
    id: "sales_4",
    type: "sales",
    subject: "Flash Opportunity: Lifetime Access",
    headline: "A Legacy Investment",
    content: [
      "For 48 hours only, we are opening up Lifetime Access to The Capital Guru ecosystem.",
      "Pay once. Benefit forever.",
      "This is the last time we will offer this tier for the year."
    ],
    ctaText: "Claim Lifetime Access",
    ctaLink: "https://thecapitalguru.net/#pricing"
  },
  {
    id: "sales_5",
    type: "sales",
    subject: "Why 765 Elite Traders Chose Us",
    headline: "The Premium Standard",
    content: [
      "Our private group is capped to maintain quality and direct support.",
      "Join 765 disciplined traders who treat the market as a business, not a casino.",
      "Get access to the VIP Telegram, live webinars, and the proprietary dashboard."
    ],
    ctaText: "Join the Elite",
    ctaLink: "https://thecapitalguru.net/#pricing"
  },
  ...Array.from({ length: 25 }).map((_, i) => ({
    id: `sales_${i + 6}`,
    type: "sales" as const,
    subject: `Exclusive Elite Invitation #${i + 6}`,
    headline: `Capitalize on Market Inefficiencies`,
    content: [
      "An elite trader doesn't guess; they react to confirmed data.",
      "Secure your access to our proprietary data streams and institutional-grade setups.",
      "Take the leap and upgrade your operating system."
    ],
    ctaText: "Upgrade Your Access",
    ctaLink: "https://thecapitalguru.net/#pricing"
  }))
];

export const allCampaigns = [...educationalEmails, ...salesEmails];
