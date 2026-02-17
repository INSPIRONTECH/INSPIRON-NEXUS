import React from 'react';
import { InstitutionalHero } from '@/components/InstitutionalHero';
import { Users, Building2, HeadphonesIcon, ArrowRight, MessageSquareCode } from 'lucide-react';
import Link from 'next/link';

/**
 * INSPIRON TECH — Homepage
 * Real content. Plain language. No jargon.
 */

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-deep-navy-black text-institutional-white selection:bg-electric-cyan selection:text-deep-navy-black">

            {/* HERO */}
            <InstitutionalHero />

            {/* WHY CHOOSE US — Real reasons, not jargon */}
            <section id="why-us" className="py-32 border-y border-white/5 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-institutional text-3xl md:text-5xl font-medium text-center uppercase tracking-tight mb-4">
                        Why Businesses Choose Us
                    </h2>
                    <p className="text-gray-500 text-center text-lg mb-16 max-w-2xl mx-auto">
                        We don&apos;t just install software. We understand your business first, then build the right solution.
                    </p>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="p-12 bg-white/5 border border-white/10 rounded-[40px] hover:border-action-gold/50 transition-all group">
                            <Users className="text-action-gold mb-8 group-hover:scale-110 transition" size={40} />
                            <h3 className="font-institutional text-2xl font-bold uppercase mb-4">We Listen First</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-light">
                                We spend 10–20 hours understanding your workflow, staff capabilities, and real challenges before proposing anything.
                            </p>
                        </div>
                        <div className="p-12 bg-white/5 border border-white/10 rounded-[40px] hover:border-electric-cyan/50 transition-all group">
                            <Building2 className="text-electric-cyan mb-8 group-hover:scale-110 transition" size={40} />
                            <h3 className="font-institutional text-2xl font-bold uppercase mb-4">Every Industry</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-light">
                                Aquaculture, manufacturing, construction, government projects, cooperatives, healthcare — we&apos;ve done it all on Manager.io.
                            </p>
                        </div>
                        <div className="p-12 bg-white/5 border border-white/10 rounded-[40px] hover:border-white/50 transition-all group">
                            <HeadphonesIcon className="text-institutional-white mb-8 group-hover:scale-110 transition" size={40} />
                            <h3 className="font-institutional text-2xl font-bold uppercase mb-4">Support That Lasts</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-light">
                                After delivery, we stay available. Whenever you forget something or face a new situation, we adjust and support again.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES SERVED — Show real breadth */}
            <section className="py-24 px-8 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="font-institutional text-2xl md:text-4xl font-medium uppercase tracking-tight mb-12">
                        Industries We&apos;ve Served
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            'Aquaculture & Agro',
                            'Manufacturing',
                            'Trims & Label Printing',
                            'Government Tender',
                            'Leathergoods',
                            'Cooperative Societies',
                            'Medical Equipment',
                            'Construction Services',
                        ].map((industry) => (
                            <span
                                key={industry}
                                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:border-electric-cyan/50 transition"
                            >
                                {industry}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF — Real, verifiable */}
            <section className="py-24 px-8 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div>
                            <div className="text-5xl font-black text-action-gold mb-2">15+</div>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">Years Experience</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-electric-cyan mb-2">10+</div>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">Years on Manager.io</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-institutional-white mb-2">6+</div>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">Industries Served</p>
                        </div>
                    </div>

                    {/* Real quote from Commander's email to Lubos — his own authentic words */}
                    <blockquote className="text-xl md:text-2xl text-gray-300 italic font-light leading-relaxed max-w-3xl mx-auto mb-6">
                        &ldquo;I am not selling software — I architect logic for any kind of workflow. Agro farm, construction, government project, cooperative, or any model I have not seen yet.&rdquo;
                    </blockquote>
                    <p className="text-action-gold font-black uppercase tracking-widest text-xs">
                        — MD ABU HASAN, Founder
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-8 bg-gradient-to-t from-electric-cyan/[0.03] to-transparent">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-institutional text-3xl md:text-5xl font-medium uppercase tracking-tight mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 font-light">
                        Every project starts with a free conversation. Tell us about your business and we&apos;ll show you what&apos;s possible.
                    </p>
                    <a
                        href="https://wa.me/8801719300849?text=Hi, I'd like to discuss Manager.io setup for my business."
                        className="inline-flex items-center gap-3 gold-racer haptic-button px-12 py-6 rounded-2xl uppercase tracking-widest text-sm shadow-2xl"
                    >
                        <MessageSquareCode size={22} /> Start a Conversation
                    </a>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-16 border-t border-white/5 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-center md:text-left">
                            <p className="font-institutional text-gray-400 font-light">
                                <span className="text-action-gold font-bold">MD ABU HASAN</span> · Founder, INSPIRON TECH
                            </p>
                            <p className="text-gray-600 text-sm mt-1">
                                Official Manager.io Partner · Dhaka 1217, Bangladesh
                            </p>
                        </div>

                        <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-gray-600">
                            <Link href="/services" className="hover:text-electric-cyan transition-colors">Services</Link>
                            <Link href="/case-studies" className="hover:text-electric-cyan transition-colors">Case Studies</Link>
                            <Link href="/pricing" className="hover:text-electric-cyan transition-colors">Pricing</Link>
                            <Link href="/contact" className="hover:text-electric-cyan transition-colors">Contact</Link>
                            <Link href="/privacy" className="hover:text-electric-cyan transition-colors">Privacy</Link>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        <a
                            href="https://www.upwork.com/freelancers/~011085e2a7cde3f437?viewMode=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-electric-cyan text-sm hover:underline"
                        >
                            Verify on Upwork ↗
                        </a>
                        <a
                            href="https://www.manager.io/advisors"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-action-gold text-sm hover:underline"
                        >
                            Verify on Manager.io ↗
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
