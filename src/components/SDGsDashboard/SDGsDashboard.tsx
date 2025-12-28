import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import sdgData from '../../data/sdgs-data.json';
import styles from './SDGsDashboard.module.css';

const SDGsDashboard: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Social', 'Economic', 'Environmental', 'Partnership'];

    const filteredSDGs = filter === 'All'
        ? sdgData
        : sdgData.filter(sdg => sdg.category === filter);

    return (
        <section className={styles.dashboard}>
            <div className="container">
                <h2 className={styles.title}>Sustainable Development Goals We Address</h2>

                <div className={styles.filterGroup} role="group" aria-label="Filter SDGs by category">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${filter === cat ? styles.filterBtnActive : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className={styles.grid}>
                    <AnimatePresence>
                        {filteredSDGs.map((sdg) => (
                            <motion.div
                                key={sdg.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className={styles.card}
                                style={{ backgroundColor: sdg.color }}
                            >
                                <div className={styles.cardTitle}>{sdg.title}</div>
                                <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>{sdg.category}</p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default SDGsDashboard;
