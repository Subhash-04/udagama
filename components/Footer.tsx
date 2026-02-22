'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const NAV_LINKS = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Rounds', id: 'rounds' },
    { label: 'Prizes', id: 'prizes' },
    { label: 'Timeline', id: 'timeline' },
    { label: 'FAQ', id: 'faq' },
];

export default function Footer() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            {/* Top Section — 4 Columns */}
            <div className={styles.topSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Brand Column */}
                        <div className={styles.brandCol}>
                            <div className={styles.brandHeader}>
                                <h3 className={styles.brandLogo}>UDGAMA 1.O</h3>
                                <span className={styles.brandSub}>Hackathon</span>
                            </div>
                            <p className={styles.brandDesc}>
                                Udgama 1.O — A 24-hour national level hackathon at VVITU.
                                Where innovation meets determination and ideas transform into reality.
                            </p>
                            <div className={styles.socials}>
                                <a
                                    href="https://www.instagram.com/acm_vvitu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialIcon}
                                    aria-label="Instagram"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/acmvvit/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialIcon}
                                    aria-label="LinkedIn"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Navigate Column */}
                        <div className={styles.navCol}>
                            <h4 className={styles.colTitle}>Navigate</h4>
                            <ul className={styles.navList}>
                                {NAV_LINKS.map((link) => (
                                    <li key={link.id}>
                                        <button
                                            className={styles.navItem}
                                            onClick={() => scrollTo(link.id)}
                                        >
                                            <span className={styles.navDot}>•</span>
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div className={styles.contactCol}>
                            <h4 className={styles.colTitle}>Contact</h4>
                            <div className={styles.contactList}>
                                <div className={styles.contactItem}>
                                    <span className={styles.contactIcon}>✉</span>
                                    <a href="mailto:acm.vvit@gmail.com" className={styles.contactText}>
                                        acm.vvit@gmail.com
                                    </a>
                                </div>
                                <div className={styles.contactItem}>
                                    <span className={styles.contactIcon}>📞</span>
                                    <a href="tel:+917842671226" className={styles.contactText}>
                                        +91 78426 71226
                                    </a>
                                </div>
                                <div className={styles.contactItem}>
                                    <span className={styles.contactIcon}>📍</span>
                                    <span className={styles.contactText}>
                                        Vasireddy Venkatadri Institute of Technology, Nambur, Guntur — 522508
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Map Column */}
                        <div className={styles.mapCol}>
                            <h4 className={styles.colTitle}>Find Us</h4>
                            <div className={styles.mapWrapper}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.6787476442584!2d80.55548499678956!3d16.35478940000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a08478466e451%3A0x3e1d0650dc7be8e2!2sVasireddy%20Venkatadri%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1708629600000!5m2!1sen!2sin"
                                    width="100%"
                                    height="180"
                                    style={{ border: 0, borderRadius: '12px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="VVITU Location"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ACM Chapter Banner */}
            <motion.div
                className={styles.chapterBanner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h3 className={styles.chapterTitle}>VVITU ACM Student Chapter</h3>
                <div className={styles.chapterDivider} />
                <p className={styles.chapterTagline}>Fostering Tech Innovation and Technological Creativity</p>
            </motion.div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div className={styles.container}>
                    <div className={styles.bottomInner}>
                        <p className={styles.copyright}>
                            © 2026 VVITU ACM Student Chapter. All rights reserved.
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    );
}
