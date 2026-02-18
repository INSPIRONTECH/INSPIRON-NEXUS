/**
 * GLOBAL NAVIGATION HEADER - V2.0
 * 8px Monolithic Gap Enforcement via RefinedLogo
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, MessageSquareCode } from 'lucide-react';
import { RefinedLogo } from '../Branding/RefinedLogo';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' }
];

export const GlobalHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo - 8px Monolithic Gap */}
                <Link href="/">
                    <RefinedLogo size={48} />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="font-institutional text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-institutional-white transition"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/8801719300849"
                        className="flex items-center gap-2 bg-electric-cyan text-deep-navy-black px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-electric-cyan/90 transition haptic-button"
                    >
                        <MessageSquareCode size={14} /> Free Consult
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-institutional-white"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-deep-navy-black border-t border-white/5 px-6 py-8">
                    <div className="flex flex-col gap-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="font-institutional text-lg font-bold uppercase tracking-wide text-gray-300 hover:text-institutional-white py-2"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/8801719300849"
                            className="flex items-center justify-center gap-2 bg-electric-cyan text-deep-navy-black px-6 py-4 rounded-xl font-black uppercase tracking-widest mt-4"
                        >
                            <MessageSquareCode size={18} /> Free Consult
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};
