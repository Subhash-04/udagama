'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Media.module.css';
import GoldParticles from './GoldParticles';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' as const },
    }),
};

export default function Media() {
    return (
        <section id="media" className={`section ${styles.media}`}>
            <GoldParticles count={12} />
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                >
                    Experience Udgama 1.O
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
                    A glimpse into the ultimate hackathon experience
                </motion.p>

                <motion.div
                    className={styles.videoWrapper}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={2}
                >
                    <video
                        className={styles.promoVideo}
                        controls
                        playsInline
                        poster="/home.png"
                    >
                        <source src="/promo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>
        </section>
    );
}
