'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LaserFlow from './LaserFlow';
import Snowflakes from './Snowflakes';
import styles from './Preloader.module.css';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Preloader disappears after 4 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    // Provide a smooth fade out
    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className={styles.preloaderContainer}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    {/* Laser Flow Background */}
                    <div className={styles.laserContainer}>
                        <LaserFlow
                            horizontalBeamOffset={0}
                            verticalBeamOffset={0}
                            color="#81D4FA" // Ice blue matching theme
                            horizontalSizing={1}
                            verticalSizing={4}
                            wispDensity={1}
                            wispSpeed={15}
                            wispIntensity={5}
                            flowSpeed={0.35}
                            flowStrength={0.25}
                            fogIntensity={0.45}
                            fogScale={0.3}
                            fogFallSpeed={0.6}
                            decay={1.1}
                            falloffStart={1.2}
                        />
                    </div>

                    {/* Snow Effect */}
                    <div className={styles.snowContainer}>
                        <Snowflakes count={40} />
                    </div>

                    {/* Content Box */}
                    <motion.div
                        className={styles.contentBox}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    >
                        <h1 className={styles.loadingTitle}>UDGAMA 1.O</h1>
                        <p className={styles.loadingSubtitle}>Awaiting your creativity...</p>

                        {/* Loading Bar */}
                        <div className={styles.loadingBarContainer}>
                            <motion.div
                                className={styles.loadingBar}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3.8, ease: "linear" }}
                            />
                        </div>
                    </motion.div>


                </motion.div>
            )}
        </AnimatePresence>
    );
}
