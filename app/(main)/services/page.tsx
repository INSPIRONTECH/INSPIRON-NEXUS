/**
 * SERVICES PAGE — INSPIRON TECH
 * What we actually do. Plain language. No pricing here — that lives on /pricing.
 */

import React from 'react';
import {
    CheckCircle2, ShieldCheck,
    ArrowRight, MessageSquareCode, Users, Database, BarChart3
} from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
    {
        icon: Database,
        title: "Manager.io Setup & Migration",
        desc: "We set up Manager.io from scratch or migrate your existing data from Excel, Tally, or other systems. Clean chart of accounts, bank integrations, invoice templates — everything configured for your business.",
        deliverables: [
            "Custom Chart of Accounts for your industry",
            "Data migration from your existing system",
            "Bank account integration and reconciliation",
            "Professional invoice and receipt templates",
            "Bangladesh VAT Act 2012 compliance"
        ]
    },
    {
        icon: BarChart3,
        title: "Custom Dashboards & Reporting",
        desc: "Need to see your business data in real-time? We build custom financial dashboards that pull directly from Manager.io, giving you the visibility you need to make decisions.",
        deliverables: [
            "Real-time financial dashboards (Next.js)",
            "Custom report templates",
            "Production tracking and batch management",
            "Multi-currency support (BDT/USD/AUD)",
            "Automated recurring workflows"
        ]
    },
    {
        icon: Users,
        title: "Training & Ongoing Support",
        desc: "We don't just set it up and leave. We train your team properly and stay available for whenever you need help. Call us anytime.",
        deliverables: [
            "One-on-one training for your staff",
            "Team training (up to 5 users per session)",
            "Post-delivery support (30–60 days included)",
            "Ongoing phone/WhatsApp support",
            "System updates and optimization"
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-deep-navy-black text-institutional-white selection:bg-electric-cyan selection:text-deep-navy-black">

            {/* PAGE HEADER */}
            <section className="py-24 px-10 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-electric-cyan/5 via-transparent to-transparent -z-10" />
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 bg-electric-cyan/10 border border-electric-cyan/20 px-6 py-2 rounded-full mb-10">
                        <ShieldCheck size={14} className="text-electric-cyan" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-electric-cyan">Official Manager.io Partner</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                        Our <span className="text-electric-cyan">Services</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-400 leading-relaxed font-light">
                        We listen first, then build exactly what your business needs. No jargon, no surprises.
                    </p>
                </div>
            </section>

            {/* HOW WE WORK */}
            <section className="py-16 px-10 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-black uppercase tracking-widest mb-12 text-center">How We Work</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-action-gold/20 flex items-center justify-center mx-auto mb-4">
                                <span className="text-action-gold font-black">1</span>
                            </div>
                            <h3 className="font-bold text-sm uppercase tracking-wider mb-2">Listen</h3>
                            <p className="text-gray-500 text-sm">We spend hours understanding your business, staff, and real challenges.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-electric-cyan/20 flex items-center justify-center mx-auto mb-4">
                                <span className="text-electric-cyan font-black">2</span>
                            </div>
                            <h3 className="font-bold text-sm uppercase tracking-wider mb-2">Design</h3>
                            <p className="text-gray-500 text-sm">We map out the exact setup plan — what sequence, what logic, no gaps.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-action-gold/20 flex items-center justify-center mx-auto mb-4">
                                <span className="text-action-gold font-black">3</span>
                            </div>
                            <h3 className="font-bold text-sm uppercase tracking-wider mb-2">Build</h3>
                            <p className="text-gray-500 text-sm">Setup, customization, migration, training — everything delivered on time.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-electric-cyan/20 flex items-center justify-center mx-auto mb-4">
                                <span className="text-electric-cyan font-black">4</span>
                            </div>
                            <h3 className="font-bold text-sm uppercase tracking-wider mb-2">Support</h3>
                            <p className="text-gray-500 text-sm">After delivery, we stay available. Call us whenever you need help.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICE DESCRIPTIONS — No prices, just what we do */}
            <section className="py-20 px-10">
                <div className="max-w-5xl mx-auto space-y-12">
                    {SERVICES.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white/[0.02] border border-white/10 rounded-3xl p-10 md:p-12 hover:border-electric-cyan/30 transition"
                        >
                            <div className="flex items-start gap-5 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-electric-cyan/10 flex items-center justify-center shrink-0">
                                    <service.icon size={22} className="text-electric-cyan" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black uppercase tracking-tight">{service.title}</h3>
                                    <p className="text-gray-400 font-light mt-2 leading-relaxed">{service.desc}</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-3 ml-0 md:ml-[68px]">
                                {service.deliverables.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={14} className="text-electric-cyan mt-1 shrink-0" />
                                        <span className="text-sm text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* GUARANTEE */}
            <section className="py-20 px-10">
                <div className="max-w-4xl mx-auto bg-action-gold/10 border border-action-gold/30 rounded-3xl p-12 text-center">
                    <h3 className="font-institutional text-2xl font-bold text-action-gold uppercase mb-4">
                        Our Promise
                    </h3>
                    <p className="text-gray-300 text-lg font-light leading-relaxed">
                        If the final setup doesn&apos;t match what we agreed on, we fix it at no extra cost. Every delivery is verified against your requirements before handover.
                    </p>
                </div>
            </section>

            {/* CTA TO PRICING */}
            <section className="py-16 text-center border-t border-white/5">
                <div className="flex flex-col items-center gap-6">
                    <p className="text-gray-400 text-lg">Ready to see what it costs?</p>
                    <Link
                        href="/pricing"
                        className="inline-flex items-center gap-3 bg-electric-cyan text-deep-navy-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm haptic-button hover:bg-electric-cyan/90 transition"
                    >
                        View Pricing <ArrowRight size={18} />
                    </Link>
                    <a
                        href="https://wa.me/8801719300849?text=Hi, I'd like to discuss which Manager.io service is right for my business."
                        className="inline-flex items-center gap-3 text-action-gold hover:text-electric-cyan transition text-sm font-bold uppercase tracking-widest mt-2"
                    >
                        <MessageSquareCode size={16} /> Or talk to us — it&apos;s free
                    </a>
                    <div className="flex gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mt-8">
                        <Link href="/" className="hover:text-electric-cyan transition-colors">Home</Link>
                        <Link href="/case-studies" className="hover:text-electric-cyan transition-colors">Case Studies</Link>
                        <Link href="/pricing" className="hover:text-electric-cyan transition-colors">Pricing</Link>
                        <Link href="/contact" className="hover:text-electric-cyan transition-colors">Contact</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
