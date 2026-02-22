'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Timeline.module.css';
import Snowflakes from './Snowflakes';

const TIMELINE_EVENTS = [
    {
        time: 'February 2026',
        title: 'Registrations Open',
        desc: 'Teams register with project abstracts online. Spread the word!',
        icon: '📢',
        side: 'left' as const,
    },
    {
        time: 'Early March 2026',
        title: 'Team Shortlisting',
        desc: 'Expert panel reviews abstracts. Shortlisted teams are notified via email.',
        icon: '✉️',
        side: 'right' as const,
    },
    {
        time: 'March 14, Morning',
        title: 'Check-in & Inauguration',
        desc: 'Teams arrive at VVITU campus. Inauguration ceremony and mentor introductions.',
        icon: '🎪',
        side: 'left' as const,
    },
    {
        time: 'March 14, 10:00 AM',
        title: 'Hack Begins!',
        desc: 'The 24-hour coding marathon begins. Build, iterate, innovate with mentor support.',
        icon: '🚀',
        side: 'right' as const,
    },
    {
        time: 'March 14, Evening',
        title: 'Midway Check-in',
        desc: 'Progress review with mentors. Snacks, networking, and support sessions.',
        icon: '☕',
        side: 'left' as const,
    },
    {
        time: 'March 15, 10:00 AM',
        title: 'Hack Ends & Presentations',
        desc: 'Teams finalize and present their solutions to the judging panel.',
        icon: '🎯',
        side: 'right' as const,
    },
    {
        time: 'March 15, Afternoon',
        title: 'Awards & Closing',
        desc: 'Winners announced! Medals, certificates, and prize money awarded.',
        icon: '🏆',
        side: 'left' as const,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' as const },
    }),
};

export default function Timeline() {
    return (
        <section id="timeline" className={`section section-alt ${styles.timeline}`}>
            <Snowflakes count={18} />
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                >
                    Event Timeline
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
                    March 14–15, 2026 — VVITU, Guntur
                </motion.p>

                <div className={styles.timelineTrack}>
                    <div className={styles.line} />
                    {TIMELINE_EVENTS.map((event, i) => (
                        <motion.div
                            key={i}
                            className={`${styles.event} ${styles[event.side]}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={i + 2}
                        >
                            <div className={styles.dot}>
                                <span>{event.icon}</span>
                            </div>
                            <div className={`glass-card ${styles.eventCard}`}>
                                <span className={styles.eventTime}>{event.time}</span>
                                <h3 className={styles.eventTitle}>{event.title}</h3>
                                <p className={styles.eventDesc}>{event.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
