/**
 * CONTACT PAGE - CORE_MISSION-CONTROL-WEB V2.0
 * Direct Line to MD ABU HASAN | Official Manager.io Partner
 * Authority: INSPIRON TECH
 */

import React from 'react';
import { MapPin, Phone, Mail, MessageSquareCode, Clock, Shield } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-deep-navy-black pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-action-gold/10 border border-action-gold/30 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest text-action-gold mb-8">
                        <Shield size={14} />
                        Get In Touch
                    </div>

                    <h1 className="font-institutional text-5xl md:text-7xl font-medium text-institutional-white uppercase tracking-tighter leading-[0.9] mb-6">
                        Contact <span className="text-action-gold">Us</span>
                    </h1>

                    <p className="font-institutional text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                        Direct line to MD ABU HASAN. Every inquiry receives a response within 24 hours.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white/5 border-2 border-action-gold/30 rounded-3xl p-10">
                            <h2 className="font-institutional text-3xl font-bold text-action-gold uppercase mb-8">
                                Direct Contact
                            </h2>

                            <div className="space-y-6">
                                {/* Name */}
                                <div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                                        Founder
                                    </div>
                                    <div className="text-2xl font-bold text-institutional-white">
                                        MD ABU HASAN
                                    </div>
                                    <div className="text-gray-400 font-light">
                                        Founder & CEO, INSPIRON TECH
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div className="flex items-start gap-4 p-6 bg-electric-cyan/10 border border-electric-cyan/30 rounded-2xl">
                                    <MessageSquareCode className="text-electric-cyan flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                                            WhatsApp (Preferred)
                                        </div>
                                        <a
                                            href="https://wa.me/8801719300849"
                                            className="text-xl font-bold text-electric-cyan hover:underline"
                                        >
                                            +880 1719-300849
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <Phone className="text-gray-400 flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                                            Direct Line
                                        </div>
                                        <a
                                            href="tel:+8801719300849"
                                            className="text-lg font-medium text-institutional-white hover:text-action-gold transition"
                                        >
                                            +880 1719-300849
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <Mail className="text-gray-400 flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                                            Email
                                        </div>
                                        <a
                                            href="mailto:hello@inspiron.tech"
                                            className="text-lg font-medium text-institutional-white hover:text-action-gold transition break-all"
                                        >
                                            hello@inspiron.tech
                                        </a>
                                    </div>
                                </div>

                                {/* Office Location */}
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-gray-400 flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                                            Office Location
                                        </div>
                                        <address className="text-lg font-light text-gray-300 not-italic leading-relaxed">
                                            Eastern Kamalapur Complex (2nd Floor)<br />
                                            64-68, North Kamalapur<br />
                                            Motijheel, Dhaka - 1217, Bangladesh
                                        </address>
                                    </div>
                                </div>

                                {/* Operating Hours */}
                                <div className="flex items-start gap-4">
                                    <Clock className="text-gray-400 flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                                            Operating Hours
                                        </div>
                                        <div className="text-lg font-light text-gray-300">
                                            Saturday - Thursday: 10:00 AM - 7:00 PM<br />
                                            <span className="text-gray-500">Friday: Closed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Inquiry Form */}
                    <div className="bg-white/5 border-2 border-electric-cyan/30 rounded-3xl p-10">
                        <h2 className="font-institutional text-3xl font-bold text-electric-cyan uppercase mb-8">
                            Quick Inquiry
                        </h2>

                        <div className="space-y-6">
                            <p className="text-gray-400 leading-relaxed">
                                For fastest response, message directly via WhatsApp. For formal inquiries, use the contact details provided.
                            </p>

                            <div className="space-y-4">
                                <a
                                    href="https://wa.me/8801719300849?text=Inquiry: Manager.io Implementation"
                                    className="w-full flex items-center justify-center gap-3 bg-action-gold text-deep-navy-black px-8 py-5 rounded-xl font-black uppercase text-sm tracking-widest hover:bg-action-gold/90 transition active:scale-95"
                                >
                                    <MessageSquareCode size={20} />
                                    Manager.io Implementation
                                </a>

                                <a
                                    href="https://wa.me/8801719300849?text=Inquiry: Custom Dashboard Solution"
                                    className="w-full flex items-center justify-center gap-3 bg-electric-cyan text-deep-navy-black px-8 py-5 rounded-xl font-black uppercase text-sm tracking-widest hover:bg-electric-cyan/90 transition active:scale-95"
                                >
                                    <MessageSquareCode size={20} />
                                    Custom Dashboard Solution
                                </a>

                                <a
                                    href="https://wa.me/8801719300849?text=Request: Free Accounting Audit"
                                    className="w-full flex items-center justify-center gap-3 bg-institutional-white text-deep-navy-black px-8 py-5 rounded-xl font-black uppercase text-sm tracking-widest hover:bg-institutional-white/90 transition active:scale-95"
                                >
                                    <MessageSquareCode size={20} />
                                    Free Accounting Audit
                                </a>

                                <a
                                    href="https://wa.me/8801719300849?text=General Inquiry"
                                    className="w-full flex items-center justify-center gap-3 bg-white/10 text-institutional-white border-2 border-white/30 px-8 py-5 rounded-xl font-black uppercase text-sm tracking-widest hover:bg-white/20 transition active:scale-95"
                                >
                                    <MessageSquareCode size={20} />
                                    General Inquiry
                                </a>
                            </div>
                        </div>

                        {/* Enterprise Guarantee */}
                        <div className="mt-10 p-6 bg-action-gold/10 border border-action-gold/30 rounded-xl">
                            <div className="flex items-start gap-3">
                                <Shield className="text-action-gold flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <div className="font-bold text-action-gold mb-1">
                                        24-Hour Response Guarantee
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Every inquiry receives a response within 24 hours. Enterprise clients receive priority handling.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Official Partner Badge */}
                <div className="max-w-4xl mx-auto mt-20 text-center">
                    <div className="inline-flex items-center gap-3 bg-white/5 border border-action-gold/30 px-8 py-4 rounded-2xl">
                        <Shield className="text-action-gold" size={24} />
                        <span className="font-institutional text-lg font-bold text-action-gold uppercase tracking-wider">
                            Official Manager.io Partner Bangladesh
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
