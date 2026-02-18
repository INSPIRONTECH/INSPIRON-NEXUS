'use client';

import React, { useState, useRef, useEffect } from 'react';
// REMOVED static import of html2canvas to prevent SSR issues
// import html2canvas from 'html2canvas'; 
import { RefinedLogo, RefinedIcon } from "./RefinedLogo";
import { Download, Layout, Smartphone, CheckCircle2, AlertCircle } from 'lucide-react';

const SIZES = {
    'pfp-icon': { label: 'Precision Icon (WhatsApp)', width: 1080, height: 1080 },
    'pfp-brand': { label: 'Full Brand Center (FB/LI)', width: 1080, height: 1080 },
    'cover-li': { label: 'LinkedIn (Right-Weighted)', width: 1584, height: 396 },
    'cover-wa': { label: 'WhatsApp Landscape (16:9)', width: 1920, height: 1080 },
    'cover-fb': { label: 'Facebook (Executive)', width: 1640, height: 924 },
    'post-portrait': { label: 'LinkedIn Portrait (4:5)', width: 1080, height: 1350 },
    'post-story': { label: 'WhatsApp Story (9:16)', width: 1080, height: 1920 },
};

export const V121Factory = () => {
    const [activeTab, setActiveTab] = useState('pfp-icon');
    const [headline, setHeadline] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [showCrop, setShowCrop] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    const canvasRef = useRef<HTMLDivElement>(null);

    const exportAsset = async () => {
        if (!canvasRef.current) return;
        setIsExporting(true);
        try {
            // Dynamic import to avoid SSR issues
            const html2canvas = (await import('html2canvas')).default;

            const canvas = await html2canvas(canvasRef.current, { scale: 3, useCORS: true });
            const link = document.createElement('a');
            link.download = `INSPIRON-${activeTab.toUpperCase()}-${Date.now()}.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
        } catch (err) {
            console.error('Export failed:', err);
        } finally {
            setIsExporting(false);
        }
    };

    const getActiveSize = () => SIZES[activeTab as keyof typeof SIZES];

    return (
        <div className="flex flex-col lg:flex-row gap-8 bg-black/40 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            {/* Sidebar Controls */}
            <div className="w-full lg:w-80 space-y-8">
                <div>
                    <label className="text-[10px] text-gold font-black uppercase tracking-widest mb-4 block underline decoration-aqua/30 underline-offset-4">1. Asset Topology</label>
                    <div className="space-y-1">
                        {Object.entries(SIZES).map(([id, size]) => (
                            <button
                                key={id}
                                onClick={() => setActiveTab(id)}
                                className={`w-full text-left p-3 rounded-lg text-xs font-bold transition-all uppercase tracking-tighter border ${activeTab === id
                                    ? 'bg-navy border-aqua text-aqua shadow-[0_0_15px_rgba(0,255,255,0.1)]'
                                    : 'bg-white/5 border-transparent text-gray-500 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {size.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-4 block">2. Safety Protocols</label>
                    <button
                        onClick={() => setShowCrop(!showCrop)}
                        className="w-full py-3 px-4 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-white/70 hover:bg-white/10 transition flex items-center justify-between"
                    >
                        CIRCLE SAFETY MASK {showCrop ? <CheckCircle2 size={14} className="text-aqua" /> : <AlertCircle size={14} />}
                    </button>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/10">
                    <label className="text-[10px] text-gold font-black uppercase tracking-widest block">3. Data Injection</label>
                    <input
                        type="text"
                        placeholder="Main Headline..."
                        value={headline}
                        onChange={(e) => setHeadline(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-xs focus:border-aqua outline-none text-white placeholder:text-gray-700 transition-all font-mono"
                    />
                    <textarea
                        placeholder="Metric or Detail..."
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-xs h-32 focus:border-aqua outline-none text-white placeholder:text-gray-700 transition-all font-mono resize-none"
                    />
                </div>

                <button
                    onClick={exportAsset}
                    disabled={isExporting}
                    className="w-full bg-aqua hover:bg-[#00e5e5] text-navy font-black py-5 rounded-2xl uppercase text-[11px] tracking-[0.2em] shadow-[0_10px_30px_-10px_rgba(0,255,255,0.5)] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                    {isExporting ? 'ENGINEERING 4K...' : <>EXPORT SYSTEM ASSET <Download size={16} /></>}
                </button>
            </div>

            {/* Viewport */}
            <div className="flex-1 relative bg-black/60 rounded-3xl border border-white/5 overflow-hidden min-h-[600px] flex items-center justify-center">
                {/* Canvas Wrapper - Absolute to prevent layout shift */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div
                        ref={canvasRef}
                        className="bg-[#010409] shadow-2xl transition-all duration-500 origin-center"
                        style={{
                            width: getActiveSize()?.width,
                            height: getActiveSize()?.height,
                            transform: `scale(${Math.min(1, 500 / Math.max(getActiveSize()?.width || 1, getActiveSize()?.height || 1))})`,
                            flexShrink: 0 // Prevent flex from squishing it
                        }}
                    >
                        {/* Background Grid */}
                        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(0, 255, 255, 0.07) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
                        <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-[#010409] via-[#010409] to-[#003c64]"></div>

                        {/* Circle Safety Crop */}
                        {showCrop && (
                            <div className="absolute inset-0 border-[6px] border-dashed border-white/20 rounded-full pointer-events-none z-50"></div>
                        )}

                        {/* Dynamic Content Mapping */}
                        {activeTab === 'pfp-icon' && (
                            <div className="absolute inset-0 flex items-center justify-center p-32">
                                <RefinedIcon size={800} className="w-full drop-shadow-[0_20px_50px_rgba(0,255,255,0.3)]" />
                            </div>
                        )}

                        {activeTab === 'pfp-brand' && (
                            <div className="absolute inset-0 flex items-center justify-center p-24">
                                <RefinedLogo size={800} className="w-full" />
                            </div>
                        )}

                        {activeTab === 'cover-li' && (
                            <>
                                <div className="absolute right-20 inset-y-0 flex flex-col justify-center items-end text-right">
                                    <h2 className="text-[75px] font-black uppercase text-white leading-none">
                                        {headline ? headline.split(' ').map((w, i) => <React.Fragment key={i}>{i > 0 && <br />}{w}</React.Fragment>) : <>WE INSTALL <br /><span className="text-gold">CONTROL.</span></>}
                                    </h2>
                                    <div className="h-2 w-48 bg-aqua mt-6 mb-4"></div>
                                    <p className="text-white/40 text-xl font-bold uppercase tracking-[0.5em]">{subtitle || 'Dhaka Command Node'}</p>
                                </div>
                                <div className="absolute left-10 top-1/2 -translate-y-1/2 w-80 opacity-10">
                                    <RefinedLogo size={320} />
                                </div>
                            </>
                        )}

                        {activeTab === 'cover-wa' && (
                            <>
                                <div className="absolute top-20 left-20 w-[600px]">
                                    <RefinedLogo size={400} />
                                </div>
                                <div className="absolute bottom-20 right-20 text-right">
                                    <h2 className="text-[130px] font-black uppercase text-gold leading-[0.8]">
                                        {headline ? headline.replace(' ', '\n') : 'STABILIZING\nGRAVITY.'}
                                    </h2>
                                    <p className="text-aqua text-4xl font-bold uppercase tracking-[0.6em] mt-10">{subtitle || 'Verified Meta Developer'}</p>
                                </div>
                            </>
                        )}

                        {activeTab === 'post-portrait' && (
                            <div className="p-20 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-24">
                                    <div className="w-64"><RefinedLogo size={250} /></div>
                                    <div className="w-24"><RefinedIcon size={100} /></div>
                                </div>
                                <h2 className="text-[115px] font-black uppercase leading-[0.9]">
                                    {headline || '0.1% ERROR TOLERANCE'}
                                </h2>
                                <div className="h-8 w-48 bg-gold my-16"></div>
                                <p className="text-white text-5xl font-medium leading-tight">
                                    {subtitle || 'Engineering custom logic for 100+ Crore aquaculture operations.'}
                                </p>
                                <div className="absolute bottom-20 right-20 text-aqua font-black text-3xl tracking-widest uppercase font-mono">www.inspiron.tech</div>
                            </div>
                        )}

                        {activeTab === 'post-story' && (
                            <div className="p-16 flex flex-col justify-center text-center h-full">
                                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 text-white">
                                    <RefinedLogo size={320} />
                                </div>
                                <h2 className="text-[110px] font-black uppercase leading-none mb-12 tracking-tighter text-white">
                                    {headline ? headline.replace(' ', '\n') : 'DATA\nSTRIKE'}
                                </h2>
                                <div className="h-4 w-32 bg-aqua mx-auto mb-10"></div>
                                <p className="text-gold text-5xl font-bold uppercase tracking-widest">
                                    {subtitle || 'NOBIN Agro: 14,478 Transactions Verified.'}
                                </p>
                                <div className="absolute bottom-40 left-1/2 -translate-x-1/2 border-2 border-white/20 text-white font-black px-14 py-6 rounded-full text-3xl uppercase tracking-widest backdrop-blur-md">Swipe Up</div>
                            </div>
                        )}

                        {/* FB Cover */}
                        {activeTab === 'cover-fb' && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-20">
                                <div className="w-[500px] mb-20 opacity-20 absolute top-10 grayscale brightness-200"><RefinedLogo size={500} /></div>
                                <h2 className="text-[100px] font-black uppercase text-white leading-tight z-10">
                                    {headline || 'INSTITUTIONAL\nINTELLIGENCE'}
                                </h2>
                                <div className="h-[2px] w-[600px] bg-gradient-to-r from-transparent via-aqua to-transparent my-10"></div>
                                <p className="text-gold text-3xl font-bold uppercase tracking-[0.8em]">
                                    {subtitle || 'MD ABU HASAN | STRATEGIC ARCHITECT'}
                                </p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};
