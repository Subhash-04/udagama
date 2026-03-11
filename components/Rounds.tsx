'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Rounds.module.css';
import Snowflakes from './Snowflakes';

const ROUNDS = [
    {
        number: '01',
        title: 'Registration',
        desc: 'Registrations closed on March 11th, 2026 at 12:00 PM. Thank you for your interest in Udgama!',
        icon: '📝',
        color: '#B3E5FC',
    },
    {
        number: '02',
        title: 'Shortlisting',
        desc: 'Teams participate in a performance test on March 12th. Shortlisted teams based on test performance will be invited to the hackathon.',
        icon: '🔍',
        color: '#81D4FA',
    },
    {
        number: '03',
        title: '24-Hour Hack',
        desc: 'Selected teams arrive at VVITU campus for an intense 24-hour coding sprint. Build, iterate, and innovate.',
        icon: '💻',
        color: '#4FC3F7',
    },
    {
        number: '04',
        title: 'Judging & Awards',
        desc: 'Teams present their solutions to a panel of judges. Winners are awarded medals, certificates, and prizes.',
        icon: '🏆',
        color: '#29B6F6',
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

export default function Rounds() {
    return (
        <section id="rounds" className={`section ${styles.rounds}`}>
            <Snowflakes count={20} />
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                >
                    Hackathon Rounds
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
                    Your journey from idea to innovation
                </motion.p>

                <div className={styles.roundsGrid}>
                    {ROUNDS.map((round, i) => (
                        <motion.div
                            key={round.number}
                            className={`glass-card ${styles.roundCard}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={i + 2}
                        >
                            <div className={styles.roundNumber} style={{ color: round.color }}>
                                {round.number}
                            </div>
                            <div className={styles.roundIcon}>{round.icon}</div>
                            <h3 className={styles.roundTitle}>{round.title}</h3>
                            <p className={styles.roundDesc}>{round.desc}</p>
                            <div className={styles.roundLine} style={{ background: round.color }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
