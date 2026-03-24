'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Redirect to the upwork portfolio — must be client-side to avoid SSR window crash
export default function PitchDeckRedirect() {
    const router = useRouter();
    useEffect(() => {
        router.replace('/pitch-deck/upwork-portfolio');
    }, [router]);
    return null;
}
