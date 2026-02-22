'use client';

import React, { useMemo, useState, useEffect } from 'react';
import styles from './Snowflakes.module.css';

interface SnowflakesProps {
    count?: number;
}

export default function Snowflakes({ count = 30 }: SnowflakesProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const flakes = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 6 + 2,
            delay: Math.random() * 10,
            duration: Math.random() * 8 + 8,
            opacity: Math.random() * 0.6 + 0.2,
        }));
    }, [count]);

    if (!mounted) return null;

    return (
        <div className={styles.container} aria-hidden="true">
            {flakes.map((f) => (
                <div
                    key={f.id}
                    className={styles.snowflake}
                    style={{
                        left: f.left,
                        width: f.size,
                        height: f.size,
                        animationDelay: `${f.delay}s`,
                        animationDuration: `${f.duration}s`,
                        opacity: f.opacity,
                    }}
                />
            ))}
        </div>
    );
}
