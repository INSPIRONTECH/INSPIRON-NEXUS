/**
 * CASE STUDIES — INSPIRON TECH
 * Real implementations with verified numbers.
 */

import React from 'react';
import { Building2, TrendingUp, ArrowRight, CheckCircle2, MessageSquareCode } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-deep-navy-black pt-32 pb-24 px-6">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <div className="inline-flex items-center gap-2 bg-electric-cyan/10 border border-electric-cyan/30 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest text-electric-cyan mb-8">
                    <Building2 size={14} />
                    Real Implementations
                </div>

                <h1 className="font-institutional text-5xl md:text-7xl font-medium text-institutional-white uppercase tracking-tighter leading-[0.9] mb-6">
                    Case <span className="text-action-gold">Studies</span>
                </h1>

                <p className="font-institutional text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                    See how we&apos;ve helped businesses across Bangladesh move from spreadsheets and manual ledgers to clean, automated accounting.
                </p>
            </div>

            {/* Case Study Grid */}
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Nobin Agro Limited */}
                <div className="bg-white/5 border-2 border-action-gold/30 rounded-3xl p-12 hover:border-action-gold/50 transition-all group">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-action-gold/10 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-action-gold mb-4">
                                Aquaculture · Manager.io
                            </div>
                            <h2 className="font-institutional text-4xl font-bold text-institutional-white mb-3">
                                Nobin Agro Limited
                            </h2>
                            <p className="text-gray-400 text-lg font-light">
                                Full Manager.io implementation for a large-scale aquaculture operation
                            </p>
                        </div>
                        <div className="text-right">
                            <div className="text-5xl font-black text-action-gold mb-2">৳150Cr+</div>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">Annual Transaction Volume</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-10">
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <div className="text-3xl font-black text-electric-cyan mb-2">~40%</div>
                            <p className="text-gray-400 text-sm">Reduction in Admin Overhead</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <div className="text-3xl font-black text-action-gold mb-2">29 Ponds</div>
                            <p className="text-gray-400 text-sm">Managed on One Platform</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <div className="text-3xl font-black text-institutional-white mb-2">50+ Staff</div>
                            <p className="text-gray-400 text-sm">Trained and Supported</p>
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        <h3 className="font-institutional text-xl font-bold text-institutional-white uppercase">
                            What We Delivered
                        </h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {[
                                "Complete Chart of Accounts for aquaculture",
                                "Multi-pond production order tracking",
                                "Feed inventory reconciliation",

                                "Batch-lease allocation logic",
                                "Staff training across the organization"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-action-gold flex-shrink-0 mt-1" size={18} />
                                    <span className="text-gray-300 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link
                        href="/case-studies/nobin-agro"
                        className="inline-flex items-center gap-2 bg-action-gold text-deep-navy-black px-8 py-4 rounded-xl font-black uppercase text-[11px] tracking-widest hover:bg-action-gold/90 transition haptic-button"
                    >
                        Read Full Story
                        <ArrowRight size={14} />
                    </Link>
                </div>

                {/* Industries We've Served */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-12">
                    <h3 className="font-institutional text-2xl font-bold text-institutional-white mb-6">
                        Other Industries We&apos;ve Served
                    </h3>
                    <p className="text-gray-400 mb-8 font-light">
                        We&apos;ve implemented Manager.io across diverse business types. Each solution is custom-built for the specific workflow.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'Trims & Label Printing', type: 'Manufacturing' },
                            { name: 'Government Tender Services', type: 'Construction' },
                            { name: 'Leathergoods Manufacturing', type: 'Manufacturing' },
                            { name: 'Cooperative Society', type: 'Financial Services' },
                            { name: 'Medical Equipment Trading', type: 'Healthcare' },
                            { name: 'Construction Services', type: 'Construction' },
                        ].map((client, i) => (
                            <div key={i} className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-electric-cyan/30 transition">
                                <h4 className="font-bold text-institutional-white mb-1">{client.name}</h4>
                                <p className="text-gray-500 text-sm">{client.type}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto mt-20 bg-electric-cyan/10 border border-electric-cyan/30 rounded-3xl p-12 text-center">
                <TrendingUp className="mx-auto mb-6 text-electric-cyan" size={48} />
                <h3 className="font-institutional text-3xl font-bold text-electric-cyan uppercase mb-4">
                    Ready to Modernize Your Accounting?
                </h3>
                <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
                    Every project starts with a free conversation. Tell us about your business and we&apos;ll show you what&apos;s possible.
                </p>
                <a
                    href="https://wa.me/8801719300849?text=Hi, I'd like to discuss Manager.io for my business."
                    className="inline-flex items-center gap-2 bg-electric-cyan text-deep-navy-black px-10 py-5 rounded-xl font-black uppercase text-[11px] tracking-widest hover:bg-electric-cyan/90 transition haptic-button"
                >
                    <MessageSquareCode size={14} />
                    Start a Conversation
                </a>
            </div>
        </div>
    );
}
