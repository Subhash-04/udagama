'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import Snowflakes from './Snowflakes';

export default function Hero() {
    return (
        <section id="home" className={styles.hero}>
            {/* Background Image */}
            <img
                className={styles.bgImage}
                src="/home.png"
                alt="UDGAMA 1.O background"
            />

            {/* Dark Overlay */}
            <div className={styles.overlay} />

            {/* Snowflakes */}
            <Snowflakes count={25} />

            {/* Content */}
            <div className={styles.content}>
                <motion.div
                    className={styles.badge}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <span className={styles.badgeText}>VVITU ACM Student Chapter Presents</span>
                </motion.div>

                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                >
                    <span className={styles.titleMain}>UDGAMA</span>
                    <span className={styles.titleVersion}>1.O</span>
                </motion.h1>

                <motion.p
                    className={styles.tagline}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    24-Hour National Level Hackathon
                </motion.p>

                <motion.div
                    className={styles.details}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                >
                    <div className={styles.detailItem}>
                        <span className={styles.detailIcon}>📅</span>
                        <span>March 14–15, 2026</span>
                    </div>
                    <div className={styles.detailDivider} />
                    <div className={styles.detailItem}>
                        <span className={styles.detailIcon}>📍</span>
                        <span>VVITU, Guntur, AP</span>
                    </div>
                    <div className={styles.detailDivider} />
                    <div className={styles.detailItem}>
                        <span className={styles.detailIcon}>🏆</span>
                        <span>Medals and Gifts</span>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.ctas}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <button
                        className={styles.ctaPrimary}
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore More
                    </button>
                    <button
                        className={styles.ctaSecondary}
                        disabled
                    >
                        <span className={styles.statusDot} /> Registrations Closed
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <div className={styles.scrollMouse}>
                    <div className={styles.scrollDot} />
                </div>
                <span className={styles.scrollText}>Scroll to explore</span>
            </motion.div>
        </section>
    );
}
