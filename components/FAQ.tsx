'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQ.module.css';

const FAQS = [
    {
        q: 'Who can participate in Udgama?',
        a: 'Udgama is open to all college students across India. Whether you\'re a fresher or a final-year student, you\'re welcome to participate. Teams of 2–4 members can register.',
    },
    {
        q: 'Is there a registration fee?',
        a: 'Registrations are now closed. There was no fee for this event.',
    },
    {
        q: 'What is the team size?',
        a: 'Each team must have 2 to 4 members. All team members must be currently enrolled in a recognized educational institution.',
    },
    {
        q: 'What should we bring?',
        a: 'Bring your laptops, chargers, any hardware if needed, and a lot of enthusiasm! Food and refreshments will be provided.',
    },
    {
        q: 'What are the judging criteria?',
        a: 'Projects will be evaluated on innovation, technical complexity, real-world applicability, UI/UX design, and the quality of the final presentation.',
    },
    {
        q: 'Will there be mentorship during the hackathon?',
        a: 'Yes! Industry experts and faculty mentors will be available throughout the 24 hours to guide teams and provide technical support.',
    },
    {
        q: 'What happens after registration?',
        a: 'Following the closed registration period, teams participated in a performance test on March 12th. Shortlisted teams have been notified via email and invited to the on-campus hackathon.',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
    }),
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className={`section ${styles.faq}`}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                >
                    Frequently Asked Questions
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
                    Everything you need to know
                </motion.p>

                <div className={styles.faqList}>
                    {FAQS.map((faq, i) => (
                        <motion.div
                            key={i}
                            className={`glass-card ${styles.faqItem} ${openIndex === i ? styles.open : ''}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={i + 2}
                        >
                            <button
                                className={styles.faqQuestion}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                aria-expanded={openIndex === i}
                            >
                                <span>{faq.q}</span>
                                <span className={styles.faqToggle}>{openIndex === i ? '−' : '+'}</span>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        className={styles.faqAnswer}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <p>{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
