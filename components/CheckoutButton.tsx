"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CheckoutButtonProps {
  priceId?: string;
  planName: string;
  className?: string;
}

export function CheckoutButton({ priceId, planName, className }: CheckoutButtonProps) {
  const planParam = priceId || "monthly";

  return (
    <Link 
      href={`/checkout/${planParam}`}
      className={`inline-flex flex-row items-center justify-center gap-2 ${className}`}
    >
      Choose {planName}
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
}


