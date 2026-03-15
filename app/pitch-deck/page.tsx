'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Redirect to the first slide — must be client-side to avoid SSR window crash
export default function PitchDeckRedirect() {
    const router = useRouter();
    useEffect(() => {
        router.replace('/pitch-deck/slide-01');
    }, [router]);
    return null;
}
