import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'INSPIRON TECH | Official Manager.io Partner Bangladesh';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '1200px',
                    height: '630px',
                    background: '#010409',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Grid background */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    display: 'flex',
                }} />

                {/* Top-left corner accent */}
                <div style={{
                    position: 'absolute', top: 0, left: 0,
                    width: '300px', height: '300px',
                    background: 'radial-gradient(circle at top left, rgba(0,210,255,0.08), transparent 70%)',
                    display: 'flex',
                }} />

                {/* Bottom-right corner accent */}
                <div style={{
                    position: 'absolute', bottom: 0, right: 0,
                    width: '300px', height: '300px',
                    background: 'radial-gradient(circle at bottom right, rgba(255,215,0,0.06), transparent 70%)',
                    display: 'flex',
                }} />

                {/* Content */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0px', zIndex: 1 }}>

                    {/* Badge */}
                    <div style={{
                        display: 'flex',
                        background: 'rgba(0,210,255,0.1)',
                        border: '1px solid rgba(0,210,255,0.3)',
                        borderRadius: '4px',
                        padding: '6px 20px',
                        color: '#00D2FF',
                        fontSize: '13px',
                        letterSpacing: '0.2em',
                        fontWeight: 700,
                        marginBottom: '32px',
                        textTransform: 'uppercase',
                    }}>
                        OFFICIAL MANAGER.IO PARTNER · BANGLADESH
                    </div>

                    {/* Logo mark — SVG inline */}
                    <svg width="70" height="68" viewBox="0 0 358.846 350.3" style={{ marginBottom: '28px' }}>
                        <path d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9-15.4-24.2-16.9-55-4.2-80.5 7.8-14.2 32.9-53.9 57.4-92.4 15.1-23.7 29.3-46.1 39.3-62.6 2.7-4.3 4.8-7.8 8.4-11.5 11.4-13.1 28.1-20.6 45.6-20.6s33.8 8.1 43.8 22.1c5.5 7.8 9.1 16.9 10.3 26.4.3 2.5-.4 4.8-2.1 7.5-1.9 3.3-21.8 34.6-21.8 34.6-.6.9-1.2 1.9-1.8 2.8-1.3 2.2-2.4 4.2-3.9 4.2s-1.2-.3-1.8-.9c-4.2-4.9-8.2-11.5-12-18-2.4-4-4.5-7.9-6.9-11.2-1.8-2.8-4.8-4.5-7.8-4.5s-4.2 1-5.8 3c-5.2 8.1-27.5 43.8-45.6 72.7-11.8 18.9-22.1 35.3-25.4 40.4-2.2 3.6-5.2 8.1-7.9 12.5-1.6 2.7-3.3 5.4-4.8 7.8-.6 1-1.3 2.1-1.9 3.1-2.5 4-4.6 7.5-6.1 11.1-5.2 12.4-.4 27.3 10.9 34.6 5.5 3.6 11.4 5.4 17.5 5.4 12.3 0 25-7.6 32.9-20 5.5-8.1 23.6-37 45-70.6 31.7-50.4 67.9-107.5 76.1-118.7 6.3-6.7 14.5-10.8 22.7-10.8 9.3 0 18.2 5.1 23.2 13.1 4.8 7.9 5.4 16.8 1 24.7-3.6 7-6.6 11.3-10.9 18-3.1 4.9-7.3 11.2-13 20.6-14.4 22.5-31 48.7-47 74.2-24.4 38.9-47.7 75.7-55.3 86.8-17.5 24.1-45.5 38.6-75.1 38.6z" fill="#00D2FF" />
                        <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z" fill="#00D2FF" />
                        <circle cx="321.346" cy="37.5" r="37.5" fill="#FFD700" />
                    </svg>

                    {/* Main headline */}
                    <div style={{
                        fontSize: '56px',
                        fontWeight: 900,
                        color: '#FFFFFF',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                        textAlign: 'center',
                        marginBottom: '16px',
                        display: 'flex',
                    }}>
                        INSPIRON TECH
                    </div>

                    {/* Gold divider */}
                    <div style={{
                        width: '80px',
                        height: '3px',
                        background: '#FFD700',
                        borderRadius: '2px',
                        marginBottom: '20px',
                        display: 'flex',
                    }} />

                    {/* Sub tagline */}
                    <div style={{
                        fontSize: '20px',
                        color: 'rgba(255,255,255,0.65)',
                        letterSpacing: '0.05em',
                        textAlign: 'center',
                        maxWidth: '700px',
                        lineHeight: 1.5,
                        display: 'flex',
                    }}>
                        We architect workflow logic. 14+ years · 100+ migrations · 0.1% error tolerance.
                    </div>

                    {/* URL tag */}
                    <div style={{
                        marginTop: '32px',
                        fontSize: '15px',
                        color: '#00D2FF',
                        letterSpacing: '0.15em',
                        fontWeight: 700,
                        display: 'flex',
                    }}>
                        inspiron.tech
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
