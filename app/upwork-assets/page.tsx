"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { RefinedLogo, RefinedIcon } from '@/components/Branding/RefinedLogo';
import { Download, Layout, Target, FileText, CheckCircle, Smartphone } from 'lucide-react';

type ActiveMode = 'uw-hero' | 'uw-before-after' | 'uw-process' | 'uw-pricing';

interface UpworkData {
    tag: string;
    headline: string;
    highlight: string;
    subtext: string;
}

export default function UpworkAssetsStudio() {
    const [activeMode, setActiveMode] = useState<ActiveMode>('uw-hero');
    const [isExporting, setIsExporting] = useState(false);
    
    // Config
    const [uwData, setUwData] = useState<UpworkData>({
        tag: "Zero-Loss Data Migration",
        headline: "Clean Migration",
        highlight: "from QuickBooks · Tally · Excel",
        subtext: "Full audit trail · 0.1% tolerance · Verified"
    });

    // Canvas scaling
    const [scale, setScale] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const calculateScale = () => {
            if (!containerRef.current) return;
            const container = containerRef.current;
            const padding = 120;
            const availableWidth = container.clientWidth - padding;
            const availableHeight = container.clientHeight - padding;
            
            const targetWidth = 1600;
            const targetHeight = 1200;

            const scaleX = availableWidth / targetWidth;
            const scaleY = availableHeight / targetHeight;
            const newScale = Math.min(scaleX, scaleY, 1);
            
            setScale(Math.max(0.1, newScale));
        };

        calculateScale();
        window.addEventListener('resize', calculateScale);
        return () => window.removeEventListener('resize', calculateScale);
    }, [activeMode]);

    const handleExport = async () => {
        setIsExporting(true);
        try {
            const { default: html2canvas } = await import('html2canvas');
            const element = document.getElementById('data-export-canvas');
            if (!element) return;

            const canvas = await html2canvas(element, {
                scale: 1, // Already 1600x1200
                useCORS: true,
                backgroundColor: '#010409',
                allowTaint: true,
            });

            const link = document.createElement('a');
            link.download = `inspiron_upwork-${activeMode}_${Date.now()}.jpg`;
            link.href = canvas.toDataURL('image/jpeg', 0.95);
            link.click();
        } catch (err) {
            console.error('Export failed:', err);
            alert('Export failed. Check console.');
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="min-h-screen bg-deep-navy-black text-institutional-white font-institutional selection:bg-electric-cyan selection:text-black flex flex-col overflow-hidden">
            
            {/* HUD NAV */}
            <nav className="sticky top-0 z-50 bg-deep-navy-black/90 backdrop-blur border-b border-white/10 shrink-0 h-14 flex items-center justify-between px-6">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 pr-6 border-r border-white/10">
                        <RefinedLogo size={24} />
                    </div>
                    <Link href="/" className="text-gray-500 hover:text-white text-[10px] font-mono tracking-widest transition-colors hidden md:block">← HOME</Link>
                    <Link href="/social-assets" className="text-gray-500 hover:text-white text-[10px] font-mono tracking-widest transition-colors hidden sm:block">Social Studio →</Link>
                    <Link href="/pitch-deck/upwork-portfolio" className="text-gray-500 hover:text-white text-[10px] font-mono tracking-widest transition-colors hidden sm:block">Pitch Deck →</Link>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => setActiveMode('uw-hero')} className={`px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${activeMode === 'uw-hero' ? 'bg-electric-cyan text-deep-navy-black' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>Hero</button>
                    <button onClick={() => setActiveMode('uw-before-after')} className={`px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${activeMode === 'uw-before-after' ? 'bg-electric-cyan text-deep-navy-black' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>Before/After</button>
                    <button onClick={() => setActiveMode('uw-process')} className={`px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${activeMode === 'uw-process' ? 'bg-electric-cyan text-deep-navy-black' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>Process</button>
                    <button onClick={() => setActiveMode('uw-pricing')} className={`px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${activeMode === 'uw-pricing' ? 'bg-electric-cyan text-deep-navy-black' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>Pricing</button>
                </div>
            </nav>

            <main className="flex-1 flex flex-col lg:flex-row h-[calc(100vh-56px)] overflow-hidden min-w-0">
                {/* CONTROLS */}
                <aside className="w-full lg:w-[420px] bg-deep-navy-black border-r border-white/10 overflow-y-auto shrink-0 z-10 p-6 flex flex-col">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-electric-cyan mb-8 border-b border-white/10 pb-4">Upwork Canvas Editor</h2>
                    
                    <div className="space-y-6 flex-1">
                        <div>
                            <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Tag / Eyebrow</label>
                            <input type="text" value={uwData.tag} onChange={(e) => setUwData({...uwData, tag: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-electric-cyan text-white transition-colors" />
                        </div>
                        <div>
                            <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Headline</label>
                            <input type="text" value={uwData.headline} onChange={(e) => setUwData({...uwData, headline: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-electric-cyan text-white transition-colors" />
                        </div>
                        <div>
                            <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Highlight (Gold)</label>
                            <input type="text" value={uwData.highlight} onChange={(e) => setUwData({...uwData, highlight: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-action-gold text-action-gold transition-colors" />
                        </div>
                        <div>
                            <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Subtext</label>
                            <textarea value={uwData.subtext} onChange={(e) => setUwData({...uwData, subtext: e.target.value})} className="w-full bg-[#0f172a] border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-electric-cyan text-white transition-colors resize-none" rows={3}></textarea>
                        </div>
                    </div>

                    <button
                        onClick={handleExport}
                        disabled={isExporting}
                        className="mt-8 w-full bg-electric-cyan hover:bg-electric-cyan/90 text-deep-navy-black font-bold uppercase tracking-widest py-4 rounded-lg flex items-center justify-center gap-3 transition-colors disabled:opacity-50"
                    >
                        {isExporting ? <span className="animate-spin text-xl">◌</span> : <Download size={18} />}
                        {isExporting ? 'Exporting...' : 'Export JPG (0.95)'}
                    </button>
                </aside>

                {/* CANVAS STAGE */}
                <section ref={containerRef} className="flex-1 bg-deep-navy-black flex items-center justify-center p-8 overflow-hidden relative" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                    <div style={{ transform: `scale(${scale})` }} className="origin-center transition-transform duration-200">
                        {/* THE EXPORT WRAPPER */}
                        <div id="data-export-canvas" className="w-[1600px] h-[1200px] bg-[#010409] relative overflow-hidden flex flex-col p-24 border border-white/5 shadow-2xl">
                            
                            {/* Global Canvas Ornaments */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00D2FF08_1px,transparent_1px),linear-gradient(to_bottom,#00D2FF08_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none z-0" />
                            <div className="absolute top-[-400px] right-[-400px] w-[1200px] h-[1200px] bg-[#00D2FF] rounded-full blur-[250px] opacity-10 pointer-events-none z-0" />
                            <div className="absolute bottom-16 right-16 z-50 opacity-50">
                                <RefinedIcon size={80} />
                            </div>

                            {/* DYNAMIC CONTENT */}
                            <div className="relative z-10 flex flex-col h-full items-center justify-center text-center">
                                {activeMode === 'uw-hero' && (
                                    <div className="flex flex-col items-center">
                                        <div className="inline-block px-8 py-4 border border-[#00D2FF]/30 bg-[#00D2FF]/10 text-[#00D2FF] font-bold tracking-[0.3em] uppercase rounded-full mb-16 text-2xl backdrop-blur-md">
                                            {uwData.tag}
                                        </div>
                                        <h1 className="text-[120px] font-black text-white leading-[1.1] tracking-tight mb-6 max-w-[1300px]">
                                            {uwData.headline}
                                        </h1>
                                        <h2 className="text-[90px] font-light italic text-[#FFD700] leading-tight mb-16 max-w-[1300px]">
                                            {uwData.highlight}
                                        </h2>
                                        <p className="text-4xl text-[#9CA3AF] max-w-[1000px] leading-relaxed">
                                            {uwData.subtext}
                                        </p>
                                    </div>
                                )}

                                {activeMode === 'uw-before-after' && (
                                    <div className="flex flex-col items-center w-full h-full justify-between">
                                        <div className="text-center mb-12">
                                            <div className="text-[#00D2FF] font-bold tracking-[0.3em] uppercase mb-6 text-2xl">{uwData.tag}</div>
                                            <h1 className="text-[72px] font-black text-white px-8 leading-tight">
                                                {uwData.headline} <span className="text-[#FFD700] italic font-light">{uwData.highlight}</span>
                                            </h1>
                                        </div>
                                        
                                        <div className="grid grid-cols-2 gap-12 w-full flex-1 mb-8">
                                            <div className="bg-[#0f172a]/80 border border-red-500/20 rounded-3xl p-16 relative backdrop-blur">
                                                <div className="absolute top-0 left-12 transform -translate-y-1/2 bg-red-900/90 text-white px-8 py-3 rounded-full font-bold tracking-widest uppercase border border-red-500/50 text-xl">Before INSPIRON</div>
                                                <div className="text-[100px] mb-8">⚠️</div>
                                                <p className="text-3xl text-gray-300 leading-relaxed font-light">Manual processes across Excel. Data silos. No unified visibility.</p>
                                            </div>
                                            <div className="bg-[#00D2FF]/10 border border-[#00D2FF]/30 rounded-3xl p-16 relative backdrop-blur">
                                                <div className="absolute top-0 left-12 transform -translate-y-1/2 bg-[#00D2FF] text-[#010409] px-8 py-3 rounded-full font-black tracking-widest uppercase shadow-[0_0_20px_rgba(0,210,255,0.4)] text-xl">After INSPIRON</div>
                                                <div className="text-[100px] mb-8 text-[#00D2FF]">🛡️</div>
                                                <p className="text-3xl text-white leading-relaxed font-light">{uwData.subtext || 'Automated, cloud-native architecture. 100% compliant visibility.'}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeMode === 'uw-process' && (
                                    <div className="flex flex-col items-center w-full h-full justify-between">
                                        <div className="text-center mb-16">
                                            <div className="text-[#FFD700] font-bold tracking-[0.3em] uppercase mb-6 text-2xl">{uwData.tag}</div>
                                            <h1 className="text-[80px] font-black text-white leading-tight">
                                                {uwData.headline}
                                            </h1>
                                            <p className="text-3xl text-[#9CA3AF] mt-6 max-w-[1000px] mx-auto italic">"{uwData.highlight}"</p>
                                        </div>
                                        
                                        <div className="grid grid-cols-4 gap-8 w-full">
                                            {[1, 2, 3, 4].map(step => (
                                                <div key={step} className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-white/10 rounded-3xl p-12 relative">
                                                    <div className="w-20 h-20 rounded-full border border-[#00D2FF] bg-[#00D2FF]/10 flex items-center justify-center text-[#00D2FF] text-3xl font-black absolute -top-10 left-1/2 -translate-x-1/2">0{step}</div>
                                                    <div className="text-[#FFD700] font-bold tracking-widest mt-8 mb-4">STAGE {step}</div>
                                                    <p className="text-2xl text-white">{step === 1 ? 'Architecture Review' : step === 2 ? 'Logic Mapping' : step === 3 ? 'System Migration' : 'Go-Live Handover'}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-16 bg-white/5 px-12 py-6 rounded-2xl border border-white/10 text-2xl text-white font-mono">{uwData.subtext || 'Zero-Loss Protocol Enforced at Every Stage'}</div>
                                    </div>
                                )}

                                {activeMode === 'uw-pricing' && (
                                    <div className="flex flex-col items-center w-full h-full justify-between pt-12">
                                        <div className="text-center mb-16">
                                            <h1 className="text-[80px] font-black text-white leading-tight">
                                                {uwData.headline} <span className="text-[#00D2FF]">{uwData.highlight}</span>
                                            </h1>
                                            <p className="text-3xl text-[#FFD700] font-mono mt-6">{uwData.tag}</p>
                                        </div>
                                        
                                        <div className="w-full max-w-[1200px] bg-[#0f172a]/90 backdrop-blur border border-white/10 rounded-3xl p-16 flex flex-col gap-8">
                                            <h3 className="text-3xl font-bold text-white border-b border-white/10 pb-8">{uwData.subtext}</h3>
                                            <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                                                <div className="flex gap-4 items-center">
                                                    <div className="w-4 h-4 rounded-full bg-[#FFD700]"></div>
                                                    <p className="text-2xl text-gray-300">Phase 1: Deep Audit & Architecture</p>
                                                </div>
                                                <div className="flex gap-4 items-center">
                                                    <div className="w-4 h-4 rounded-full bg-[#00D2FF]"></div>
                                                    <p className="text-2xl text-gray-300">Phase 3: Turn-Key Handover</p>
                                                </div>
                                                <div className="flex gap-4 items-center">
                                                    <div className="w-4 h-4 rounded-full bg-[#FFD700]"></div>
                                                    <p className="text-2xl text-gray-300">Phase 2: Cloud Migration Protocol</p>
                                                </div>
                                                <div className="flex gap-4 items-center">
                                                    <div className="w-4 h-4 rounded-full bg-[#00D2FF]"></div>
                                                    <p className="text-2xl text-gray-300">Phase 4: 30-Day Support Loop</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
