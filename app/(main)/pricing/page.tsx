/**
 * PRICING PAGE — INSPIRON TECH
 * Transparent pricing. No vaporware products.
 */

import React from 'react';
import { Check, Shield, MessageSquareCode, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-deep-navy-black pt-32 pb-24 px-6">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <div className="inline-flex items-center gap-2 bg-action-gold/10 border border-action-gold/30 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest text-action-gold mb-8">
                    <Shield size={14} />
                    Fixed-Price Packages
                </div>

                <h1 className="font-institutional text-5xl md:text-7xl font-medium text-institutional-white uppercase tracking-tighter leading-[0.9] mb-6">
                    Transparent <span className="text-action-gold">Pricing</span>
                </h1>

                <p className="font-institutional text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                    No hourly billing. No scope creep. You know the price before we start.
                </p>
            </div>

            {/* Pricing Grid */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {/* Manager.io Starter */}
                <div className="bg-white/5 border-2 border-action-gold/30 rounded-3xl p-10 hover:border-action-gold/50 transition-all group">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-institutional text-2xl font-bold text-action-gold uppercase">Starter Setup</h3>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-black text-institutional-white">৳50,000</span>
                        </div>
                        <p className="text-gray-400 text-sm font-light flex items-center gap-2">
                            <Clock size={12} /> 5-Day Delivery
                        </p>
                    </div>

                    <ul className="space-y-4 mb-10">
                        {[
                            "Complete Chart of Accounts setup",
                            "Manager.io Cloud deployment",
                            "Staff training & documentation",
                            "30-day post-delivery support",
                            "Bangladesh VAT Act 2012 compliance"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="text-action-gold flex-shrink-0 mt-1" size={18} />
                                <span className="text-gray-300 text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="https://wa.me/8801719300849?text=Inquiry: Manager.io Starter Setup - BDT 50,000"
                        className="w-full flex items-center justify-center gap-2 bg-action-gold text-deep-navy-black px-6 py-4 rounded-xl font-black uppercase text-[11px] tracking-widest hover:bg-action-gold/90 transition haptic-button"
                    >
                        <MessageSquareCode size={14} />
                        Get Started
                    </a>
                </div>

                {/* Full Implementation */}
                <div className="bg-white/5 border-2 border-electric-cyan/30 rounded-3xl p-10 hover:border-electric-cyan/50 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-electric-cyan text-deep-navy-black px-4 py-1 text-[9px] font-black uppercase tracking-wider rounded-bl-xl">
                        Most Popular
                    </div>

                    <div className="flex items-center justify-between mb-8 mt-6">
                        <h3 className="font-institutional text-2xl font-bold text-electric-cyan uppercase">Full Implementation</h3>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-black text-institutional-white">৳100,000+</span>
                        </div>
                        <p className="text-gray-400 text-sm font-light flex items-center gap-2">
                            <Clock size={12} /> 10-Day Delivery
                        </p>
                    </div>

                    <ul className="space-y-4 mb-10">
                        {[
                            "Everything in Starter Setup",
                            "Legacy data migration (Excel/Tally)",
                            "Multi-currency support (BDT/USD/AUD)",
                            "Automated recurring workflows",
                            "Up to 3 bank reconciliations",
                            "Team training for up to 5 users"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="text-electric-cyan flex-shrink-0 mt-1" size={18} />
                                <span className="text-gray-300 text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="https://wa.me/8801719300849?text=Inquiry: Full Manager.io Implementation"
                        className="w-full flex items-center justify-center gap-2 bg-electric-cyan text-deep-navy-black px-6 py-4 rounded-xl font-black uppercase text-[11px] tracking-widest hover:bg-electric-cyan/90 transition haptic-button"
                    >
                        <MessageSquareCode size={14} />
                        Get Started
                    </a>
                </div>

                {/* Enterprise */}
                <div className="bg-white/5 border-2 border-institutional-white/30 rounded-3xl p-10 hover:border-institutional-white/50 transition-all group">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-institutional text-2xl font-bold text-institutional-white uppercase">Enterprise</h3>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-black text-institutional-white">Custom</span>
                        </div>
                        <p className="text-gray-400 text-sm font-light flex items-center gap-2">
                            <Clock size={12} /> 20+ Day Delivery
                        </p>
                    </div>

                    <ul className="space-y-4 mb-10">
                        {[
                            "Everything in Full Implementation",
                            "Production order & batch tracking",
                            "Custom financial dashboards",
                            "Manager.io Server (self-hosted) deployment",
                            "NBR and AEO compliance reporting",
                            "60-day critical support"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="text-institutional-white flex-shrink-0 mt-1" size={18} />
                                <span className="text-gray-300 text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="https://wa.me/8801719300849?text=Inquiry: Enterprise Manager.io Solution - Custom Quote"
                        className="w-full flex items-center justify-center gap-2 bg-institutional-white text-deep-navy-black px-6 py-4 rounded-xl font-black uppercase text-[11px] tracking-widest hover:bg-institutional-white/90 transition haptic-button"
                    >
                        <MessageSquareCode size={14} />
                        Request Quote
                    </a>
                </div>
            </div>

            {/* Guarantee */}
            <div className="max-w-4xl mx-auto mt-20 bg-action-gold/10 border border-action-gold/30 rounded-3xl p-12 text-center">
                <h3 className="font-institutional text-3xl font-bold text-action-gold uppercase mb-4">
                    Our Promise
                </h3>
                <p className="text-gray-300 text-lg font-light leading-relaxed">
                    If the final setup doesn&apos;t match what we agreed, we fix it at no extra cost.
                    Every delivery is verified against your requirements before handover.
                </p>
            </div>

            {/* Manager.io Cloud Pricing Note */}
            <div className="max-w-4xl mx-auto mt-12 bg-electric-cyan/10 border border-electric-cyan/30 rounded-3xl p-12">
                <h3 className="font-institutional text-2xl font-bold text-electric-cyan uppercase mb-6">
                    Manager.io License Costs
                </h3>
                <div className="space-y-4 text-gray-300 font-light leading-relaxed">
                    <p>
                        <span className="text-institutional-white font-bold">Manager.io Cloud Edition:</span> $590 USD/year (fixed, paid directly to Manager.io). Our setup and support charges are separate — see the tiers above.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Manager.io also offers a free Desktop Edition and a self-hosted Server Edition. Talk to us about which option fits your business best.
                    </p>
                </div>
            </div>

            {/* FAQ-style bottom */}
            <div className="max-w-3xl mx-auto mt-16 text-center">
                <p className="text-gray-500 mb-6">Not sure which package? No problem.</p>
                <a
                    href="https://wa.me/8801719300849?text=Hi, I'd like to discuss pricing options for my business."
                    className="inline-flex items-center gap-3 text-electric-cyan hover:text-action-gold transition text-sm font-bold uppercase tracking-widest"
                >
                    Send us a message — consultations are free <ArrowRight size={14} />
                </a>
            </div>
        </div>
    );
}
