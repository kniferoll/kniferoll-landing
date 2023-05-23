'use client'
import Newsletter from "@/app/components/Newsletter";
import Hero from "@/app/components/Hero";
import { PrimaryFeatures } from "@/app/components/PrimaryFeatures";
import CTA from "@/app/components/CTA";

export default function Home() {
  return (
    <>
      <main className="bg-slate-50 py-20">
        <Hero />
        <PrimaryFeatures />
        <CTA />
        <Newsletter />
      </main>
    </>
  );
}
