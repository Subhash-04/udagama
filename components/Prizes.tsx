'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Prizes.module.css';
import GoldParticles from './GoldParticles';

const PRIZES = [
    {
        rank: 'Gold',
        title: 'Winner',
        prize: '₹15,000',
        icon: '🥇',
        gradient: 'linear-gradient(135deg, #E1F5FE, #81D4FA)',
        shadow: 'rgba(79, 195, 247, 0.3)',
        border: 'rgba(129, 212, 250, 0.4)',
    },
    {
        rank: 'Silver',
        title: 'Runner-Up',
        prize: '₹7,000',
        icon: '🥈',
        gradient: 'linear-gradient(135deg, #B0BEC5, #ECEFF1)',
        shadow: 'rgba(176, 190, 197, 0.3)',
        border: 'rgba(176, 190, 197, 0.4)',
    },
    {
        rank: 'Bronze',
        title: '2nd Runner-Up',
        prize: '₹3,000',
        icon: '🥉',
        gradient: 'linear-gradient(135deg, #BCAAA4, #D7CCC8)',
        shadow: 'rgba(188, 170, 164, 0.3)',
        border: 'rgba(188, 170, 164, 0.4)',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' as const },
    }),
};

export default function Prizes() {
    return (
        <section id="prizes" className={`section section-alt ${styles.prizes}`}>
            <GoldParticles count={18} />
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                >
                    Prizes & Awards
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
                    Total Prize Pool — ₹25,000
                </motion.p>

                <div className={styles.prizesGrid}>
                    {PRIZES.map((prize, i) => (
                        <motion.div
                            key={prize.rank}
                            className={`glass-card ${styles.prizeCard} ${i === 0 ? styles.featured : ''}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={i + 2}
                            style={{
                                borderColor: prize.border,
                                ['--glow-color' as string]: prize.shadow,
                            }}
                        >
                            <div className={styles.prizeIcon}>{prize.icon}</div>
                            <h3
                                className={styles.prizeRank}
                                style={{
                                    background: prize.gradient,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                {prize.rank}
                            </h3>
                            <p className={styles.prizeTitle}>{prize.title}</p>
                            <div className={styles.prizeDivider} />
                            <p
                                className={styles.prizeAmount}
                                style={{
                                    background: prize.gradient,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                {prize.prize}
                            </p>
                            <ul className={styles.perks}>
                                <li>Prize Money</li>
                                <li>Medal</li>
                                <li>Recognition Certificate</li>
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
