import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

interface HeroProps {
    title: string;
    vision: string;
    ctaPrimaryText: string;
    ctaPrimaryLink: string;
    ctaSecondaryText: string;
    ctaSecondaryLink: string;
    backgroundImage?: string;
}

const HeroSection: React.FC<HeroProps> = ({
    title,
    vision,
    ctaPrimaryText,
    ctaPrimaryLink,
    ctaSecondaryText,
    ctaSecondaryLink,
    backgroundImage
}) => {
    return (
        <section className={styles.hero}>
            {backgroundImage && (
                <img
                    src={backgroundImage}
                    alt="Hero background"
                    className={styles.heroImage}
                />
            )}
            <div className={styles.heroOverlay} />

            <div className={`container ${styles.heroContent}`}>
                <motion.h1
                    className={styles.heroTitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {title}
                </motion.h1>

                <motion.p
                    className={styles.heroVision}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {vision}
                </motion.p>

                <motion.div
                    className={styles.ctaGroup}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a href={ctaPrimaryLink} className="btn btn-highlight">
                        {ctaPrimaryText}
                    </a>
                    <a href={ctaSecondaryLink} className="btn btn-outline" style={{ color: 'var(--white)', borderColor: 'var(--white)' }}>
                        {ctaSecondaryText}
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
