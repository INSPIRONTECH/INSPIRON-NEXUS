import React from 'react';

export default function UnauthorizedPage() {
    return (
        <div className="min-h-screen bg-[#010409] flex items-center justify-center text-center px-8">
            <div className="border border-[rgba(255,50,50,0.3)] bg-[rgba(255,50,50,0.04)] rounded-2xl p-12 max-w-md">
                <div className="text-6xl font-black text-[#ff6b6b] mb-4 font-mono">401</div>
                <h1 className="text-white text-xl font-bold mb-3 uppercase tracking-widest">Access Denied</h1>
                <p className="text-[rgba(255,255,255,0.5)] text-sm leading-relaxed">
                    This area requires authorization. Contact the system administrator.
                </p>
                <a
                    href="/"
                    className="inline-block mt-8 px-6 py-3 bg-[#FFD700] text-[#010409] font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#FFD700]/80 transition-colors"
                >
                    ← Return Home
                </a>
            </div>
        </div>
    );
}
