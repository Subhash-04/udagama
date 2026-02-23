'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import GoldParticles from './GoldParticles';

const STATS = [
    { value: '24', label: 'Hours', icon: '⏰' },
    { value: 'Goodies', label: 'for Participants', icon: '🛍️' },
    { value: 'Medals & Gifts', label: 'Prizes', icon: '🏆' },
    { value: 'Offline', label: 'Mode', icon: '🏫' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' as const },
    }),
};

export default function About() {
    return (
        <section id="about" className={`section section-alt ${styles.about}`}>
            <GoldParticles count={15} />
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                >
                    About Udgama
                </motion.h2>
                <hr className="section-divider" />
                <motion.p
                    className="section-subtitle"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={1}
                >
                    Where innovation meets determination
                </motion.p>

                <motion.div
                    className={styles.description}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={2}
                >
                    <p>
                        <strong>Udgama</strong> is a <span className={styles.highlight}>24-hour offline hackathon</span> bringing
                        together student developers to build innovative software solutions addressing real-world challenges.
                        Organized by the <span className={styles.highlight}>VVITU ACM Student Chapter</span> at VVITU,
                        Guntur, Andhra Pradesh, the event promotes hands-on learning, rapid prototyping, and collaborative
                        innovation.
                    </p>
                    <p>
                        Teams of passionate coders will converge to brainstorm, design, and develop solutions that push the
                        boundaries of technology. Whether you&apos;re a seasoned developer or a curious beginner, Udgama offers the
                        perfect platform to showcase your talent.
                    </p>
                </motion.div>

                <div className={styles.statsGrid}>
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className={`glass-card ${styles.statCard}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={i + 3}
                        >
                            <span className={styles.statIcon}>{stat.icon}</span>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
