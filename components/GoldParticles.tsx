'use client';

import React, { useMemo, useState, useEffect } from 'react';
import styles from './GoldParticles.module.css';

interface GoldParticlesProps {
    count?: number;
}

export default function GoldParticles({ count = 20 }: GoldParticlesProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const particles = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 20}%`,
            size: Math.random() * 5 + 2,
            delay: Math.random() * 12,
            duration: Math.random() * 10 + 8,
            opacity: Math.random() * 0.5 + 0.2,
            drift: (Math.random() - 0.5) * 100,
        }));
    }, [count]);

    if (!mounted) return null;

    return (
        <div className={styles.container} aria-hidden="true">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className={styles.particle}
                    style={{
                        left: p.left,
                        bottom: p.bottom,
                        width: p.size,
                        height: p.size,
                        animationDelay: `${p.delay}s`,
                        animationDuration: `${p.duration}s`,
                        opacity: p.opacity,
                        ['--drift' as string]: `${p.drift}px`,
                    }}
                />
            ))}
        </div>
    );
}
