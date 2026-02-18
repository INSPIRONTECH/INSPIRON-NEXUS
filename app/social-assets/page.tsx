import React from 'react';
import { ShieldCheck, MessageSquareCode, Users, Building2, TrendingUp, BadgeCheck } from 'lucide-react';
import { V121Factory } from '@/components/Branding/v121Factory';

/**
 * INTERNAL TOOL: SOCIAL ASSETS GENERATOR
 * Renders brand assets for screenshotting/export.
 * Visit /social-assets to view and capture.
 */

export default function SocialAssetsPage() {
    return (
        <div className="min-h-screen bg-neutral-900 p-8 space-y-24">

            {/* INSTRUCTIONS */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-3xl font-bold text-white mb-4">Brand Asset Command</h1>
                <p className="text-gray-400">
                    Use the <strong>Brand Factory</strong> to generate custom assets, or scroll down for standard static downloads.
                    <br />
                    <span className="text-electric-cyan">Dimensions are optimized for LinkedIn, Facebook, and WhatsApp.</span>
                </p>
            </div>

            {/* ─── 0. BRAND FACTORY (Dynamic Generator) ────────────────────────── */}
            <section className="flex flex-col items-center gap-8 w-full max-w-[1600px] mx-auto">
                <h2 className="text-gray-500 uppercase tracking-widest text-xs">Dynamic Asset Lab (v1.2.1)</h2>
                <V121Factory />
            </section>

            {/* ─── 1. PROFILE PICTURE (LinkedIn / WhatsApp / Email) ───────────── */}
            <section className="flex flex-col items-center gap-4">
                <h2 className="text-gray-500 uppercase tracking-widest text-xs">Profile Picture (400x400)</h2>

                <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden bg-deep-navy-black border-4 border-action-gold shadow-2xl flex items-center justify-center group">
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-[radial-gradient(#00C2FF_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>

                    {/* Content (If no photo, use Initials/Logo) */}
                    <div className="z-10 text-center">
                        <div className="text-8xl font-black text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">IT</div>
                        <div className="w-48 h-48 bg-gray-800 rounded-full flex items-center justify-center mb-4 border-2 border-white/10 mx-auto">
                            <Users size={64} className="text-gray-600" />
                            {/* USER NOTE: Paste your actual photo here in post-production or overlay it */}
                        </div>
                        <div className="bg-action-gold text-deep-navy-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block">
                            Chief Architect
                        </div>
                    </div>
                </div>
                <p className="text-xs text-gray-600">Tip: Replace gray circle with your headshot.</p>
            </section>


            {/* ─── 2. LINKEDIN COVER BANNER VARIANTS (1584 x 396) ────────────────────── */}
            <section className="flex flex-col items-center gap-12 w-full">
                <h2 className="text-gray-500 uppercase tracking-widest text-xs">LinkedIn Banner Variants (1584 x 396)</h2>

                {[
                    { title: "The Architect", headline: "Deploy Your", highlight: "Architecture", sub: "We architect the accounting logic other consultants walk away from." },
                    { title: "Zero Fluff", headline: "Stop Buying Software.", highlight: "Buy Outcomes.", sub: "We don't have account managers. We have architects." },
                    { title: "Financial Forensics", headline: "Find The Leak.", highlight: "Plug The Gap.", sub: "Your ledger is bleeding capital. We know exactly where." },
                    { title: "Complexity Challenge", headline: "Simple Shop?", highlight: "Use Excel.", sub: "Multi-entity manufacturing with inter-company billing? Call us." },
                    { title: "The Execution", headline: "Theory is Free.", highlight: "Logic is expensive.", sub: "Deploy Your Logic. 0.1% Error Tolerance." }
                ].map((variant, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2">
                        <div className="text-xs text-gray-600 uppercase tracking-widest mb-2">Option {idx + 1}: {variant.title}</div>
                        <div className="w-[1584px] h-[396px] bg-deep-navy-black relative overflow-hidden flex items-center justify-between px-24 border border-white/10 scale-50 origin-top mb-[-150px]">
                            {/* Tech Grid Background */}
                            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:24px_24px]"></div>
                            <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-electric-cyan/5 blur-[120px] rounded-full"></div>

                            {/* Left: Value Prop */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-3 py-1 border border-electric-cyan text-electric-cyan text-xl font-bold rounded uppercase tracking-widest">
                                        Official Partner
                                    </span>
                                    <span className="text-white/50 text-xl font-light">|</span>
                                    <span className="text-white text-xl font-bold tracking-wider">Manager.io</span>
                                </div>

                                <h1 className="text-7xl font-black text-white uppercase tracking-tight leading-none mb-4 whitespace-nowrap">
                                    {variant.headline}<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-action-gold to-yellow-600">
                                        {variant.highlight}
                                    </span>
                                </h1>
                                <p className="text-gray-300 text-2xl font-light max-w-2xl">
                                    {variant.sub}
                                </p>
                            </div>

                            {/* Right: CTA & Authority */}
                            <div className="relative z-10 text-right space-y-8">
                                <div>
                                    <div className="text-electric-cyan font-mono text-xl mb-2">inspiron.tech/architect</div>
                                    <div className="text-white font-bold text-3xl">MD ABU HASAN</div>
                                    <div className="text-gray-400 uppercase tracking-widest">Founder & Chief Architect</div>
                                </div>

                                <div className="flex gap-4 justify-end">
                                    <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-sm">
                                        <div className="text-action-gold font-bold text-2xl">14+</div>
                                        <div className="text-[10px] text-gray-400 uppercase">Years Exp</div>
                                    </div>
                                    <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-sm">
                                        <div className="text-electric-cyan font-bold text-2xl">0.1%</div>
                                        <div className="text-[10px] text-gray-400 uppercase">Tolerance</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>


            {/* ─── 3. FACEBOOK COVER (820 x 312) ────────────────────────────── */}
            <section className="flex flex-col items-center gap-4">
                <h2 className="text-gray-500 uppercase tracking-widest text-xs">Facebook Cover (820 x 312)</h2>

                <div className="w-[820px] h-[312px] bg-deep-navy-black relative overflow-hidden flex items-center justify-center text-center border border-white/10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-deep-navy-light/[0.2] to-transparent"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 text-action-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            <BadgeCheck size={14} /> Official Manager.io Advisor
                        </div>
                        <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">
                            Institutional-Grade<br />Financial Architecture
                        </h2>
                        <div className="inline-block px-6 py-2 bg-electric-cyan text-deep-navy-black font-bold uppercase tracking-widest text-sm rounded-full">
                            inspiron.tech/manager-bd
                        </div>
                    </div>
                </div>
            </section>


            {/* ─── 4. EMAIL SIGNATURE LOGO (Hosted Asset Mockup) ────────────── */}
            <section className="flex flex-col items-center gap-4 pb-24">
                <h2 className="text-gray-500 uppercase tracking-widest text-xs">Email Signature Logo (200x200) - Master Vault Asset</h2>

                <div className="flex flex-col items-center gap-6">
                    <div className="w-[200px] h-[200px] bg-transparent flex items-center justify-center p-0 border border-white/10 group relative">
                        {/* The SVG Logo - EXACT MATCH from n-law MasterLockup */}
                        <svg width="200" height="200" viewBox="0 0 358.846 350.3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <mask id="VaultMask_Final_Social" x="-1075.154" y="-1075" width="3000" height="3000" maskUnits="userSpaceOnUse">
                                    <path fill="#fff" d="M-1075.154-1075h3000v3000h-3000z" />
                                    <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z"
                                        fill="none" stroke="#000" strokeWidth="24px" strokeLinecap="round" strokeLinejoin="round" />
                                </mask>
                            </defs>
                            <g mask="url(#VaultMask_Final_Social)">
                                <path d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9-15.4-24.2-16.9-55-4.2-80.5 7.8-14.2 32.9-53.9 57.4-92.4 15.1-23.7 29.3-46.1 39.3-62.6 2.7-4.3 4.8-7.8 8.4-11.5 11.4-13.1 28.1-20.6 45.6-20.6s33.8 8.1 43.8 22.1c5.5 7.8,9.1,16.9,10.3 26.4.3 2.5-.4 4.8-2.1 7.5-1.9 3.3-21.8 34.6-21.8 34.6-.6.9-1.2 1.9-1.8 2.8-1.3 2.2-2.4 4.2-3.9 4.2s-1.2-.3-1.8-.9c-4.2-4.9-8.2-11.5-12-18-2.4-4-4.5-7.9-6.9-11.2-1.8-2.8-4.8-4.5-7.8-4.5s-4.2 1-5.8 3c-5.2 8.1-27.5 43.8-45.6 72.7-11.8 18.9-22.1 35.3-25.4 40.4-2.2 3.6-5.2 8.1-7.9 12.5-1.6 2.7-3.3 5.4-4.8 7.8-.6 1-1.3 2.1-1.9 3.1-2.5 4-4.6 7.5-6.1 11.1-5.2 12.4-.4 27.3 10.9 34.6,5.5 3.6 11.4 5.4 17.5 5.4 12.3 0,25-7.6,32.9-20,5.5-8.1,23.6-37,45-70.6,31.7-50.4 67.9-107.5 76.1-118.7 6.3-6.7 14.5-10.8 22.7-10.8 9.3 0,18.2 5.1,23.2 13.1,4.8 7.9 5.4 16.8 1 24.7-3.6 7-6.6 11.3-10.9 18-3.1 4.9-7.3 11.2-13 20.6-14.4 22.5-31 48.7-47 74.2-24.4 38.9-47.7 75.7-55.3 86.8-17.5 24.1-45.5 38.6-75.1 38.6z" fill="#00D2FF" />
                            </g>
                            <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z" fill="#00D2FF" />
                            <circle cx="321.346" cy="37.5" r="37.5" fill="#FFD700" />
                        </svg>
                    </div>

                    <div className="w-full max-w-lg space-y-4">
                        <textarea
                            readOnly
                            className="w-full h-32 bg-black border border-white/10 rounded-xl p-4 text-[10px] font-mono text-electric-cyan focus:outline-none"
                            value={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 358.846 350.3"><defs><mask id="inspiron-gap" x="-1075.154" y="-1075" width="3000" height="3000" maskUnits="userSpaceOnUse"><path fill="#fff" d="M-1075.154-1075h3000v3000h-3000z"/><path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z" style="fill:none; stroke:#000; stroke-width:24px; stroke-linecap:round; stroke-linejoin:round"/></mask></defs><g mask="url(#inspiron-gap)"><path d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9-15.4-24.2-16.9-55-4.2-80.5 7.8-14.2 32.9-53.9 57.4-92.4 15.1-23.7 29.3-46.1 39.3-62.6 2.7-4.3 4.8-7.8 8.4-11.5 11.4-13.1 28.1-20.6 45.6-20.6s33.8 8.1 43.8 22.1c5.5 7.8,9.1,16.9,10.3 26.4.3 2.5-.4 4.8-2.1 7.5-1.9 3.3-21.8 34.6-21.8 34.6-.6.9-1.2 1.9-1.8 2.8-1.3 2.2-2.4 4.2-3.9 4.2s-1.2-.3-1.8-.9c-4.2-4.9-8.2-11.5-12-18-2.4-4-4.5-7.9-6.9-11.2-1.8-2.8-4.8-4.5-7.8-4.5s-4.2 1-5.8 3c-5.2 8.1-27.5 43.8-45.6 72.7-11.8 18.9-22.1 35.3-25.4 40.4-2.2 3.6-5.2 8.1-7.9 12.5-1.6 2.7-3.3 5.4-4.8 7.8-.6 1-1.3 2.1-1.9 3.1-2.5 4-4.6 7.5-6.1 11.1-5.2 12.4-.4 27.3 10.9 34.6,5.5 3.6 11.4 5.4 17.5 5.4 12.3 0,25-7.6,32.9-20,5.5-8.1,23.6-37,45-70.6,31.7-50.4 67.9-107.5 76.1-118.7 6.3-6.7 14.5-10.8 22.7-10.8 9.3 0,18.2 5.1,23.2 13.1,4.8 7.9 5.4 16.8 1 24.7-3.6 7-6.6 11.3-10.9 18-3.1 4.9-7.3 11.2-13 20.6-14.4 22.5-31 48.7-47 74.2-24.4 38.9-47.7 75.7-55.3 86.8-17.5 24.1-45.5 38.6-75.1 38.6z" fill="#00D2FF"/></g><path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z" fill="#00D2FF"/><circle cx="321.346" cy="37.5" r="37.5" fill="#FFD700"/></svg>`}
                        />
                        <p className="text-xs text-gray-500 text-center">Copy code above or screenshot the preview.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}
