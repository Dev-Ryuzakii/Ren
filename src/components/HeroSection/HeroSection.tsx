import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// Import all hero images
const heroImages = [
    '/src/assets/hero-images/20251215_120128(0).jpg',
    '/src/assets/hero-images/20251215_120153.jpg',
    '/src/assets/hero-images/20251215_121234.jpg',
    '/src/assets/hero-images/20251215_121239.jpg',
    '/src/assets/hero-images/20251215_121501.jpg',
    '/src/assets/hero-images/20251218_125623.jpg',
    '/src/assets/hero-images/20251218_130251.jpg',
    '/src/assets/hero-images/20251219_162354.jpg',
    '/src/assets/hero-images/20251219_162427.jpg',
    '/src/assets/hero-images/20251219_162446.jpg',
    '/src/assets/hero-images/20251219_175624.jpg',
    '/src/assets/hero-images/20251219_175737.jpg',
];

const HeroSection: React.FC<HeroProps> = ({
    title,
    vision,
    ctaPrimaryText,
    ctaPrimaryLink,
    ctaSecondaryText,
    ctaSecondaryLink,
    backgroundImage
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <section className={styles.hero}>
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentImageIndex}
                    src={heroImages[currentImageIndex]}
                    alt={`Hero slide ${currentImageIndex + 1}`}
                    className={styles.heroImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>
            
            {/* Slider Indicators */}
            <div className={styles.sliderIndicators}>
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicator} ${
                            index === currentImageIndex ? styles.activeIndicator : ''
                        }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

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
