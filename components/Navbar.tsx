'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'rounds', label: 'Rounds' },

    { id: 'media', label: 'Media' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'faq', label: 'FAQ' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        NAV_ITEMS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { threshold: 0.35 }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setMobileOpen(false);
        }
    };

    return (
        <motion.nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className={styles.inner}>
                <button className={styles.logo} onClick={() => scrollTo('home')}>
                    <img src="/logo.png" alt="Udgama Logo" className={styles.logoImage} />
                    UDGAMA
                </button>

                {/* Desktop Nav */}
                <ul className={styles.navLinks}>
                    {NAV_ITEMS.map((item) => (
                        <li key={item.id}>
                            <button
                                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                                onClick={() => scrollTo(item.id)}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <motion.span
                                        className={styles.activeBar}
                                        layoutId="activeBar"
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Register CTA */}
                <button
                    className={styles.registerBtn}
                    disabled
                >
                    Free Registration - Closes at 1PM on 12th March ✦
                </button>

                {/* Hamburger */}
                <button
                    className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                className={`${styles.mobileLink} ${activeSection === item.id ? styles.active : ''}`}
                                onClick={() => scrollTo(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                        <a
                            href="https://acm.vvitguntur.com/contact-us/register"
                            className={styles.mobileRegister}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Register Now ✦
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
