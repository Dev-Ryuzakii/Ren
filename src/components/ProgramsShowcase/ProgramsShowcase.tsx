import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaArrowRight, FaChartLine } from 'react-icons/fa';
import programData from '../../data/programs-data.json';
import styles from './ProgramsShowcase.module.css';

const ProgramsShowcase: React.FC = () => {
    return (
        <section className={styles.showcase}>
            <div className="container">
                <h2 className={styles.title}>Our Core Programs</h2>

                <div className={styles.grid}>
                    {programData.map((program) => (
                        <article key={program.id} className={styles.card}>
                            <LazyLoadImage
                                src={program.image}
                                alt={program.title}
                                className={styles.image}
                                effect="blur"
                            />
                            <div className={styles.content}>
                                <span className={styles.category}>{program.category}</span>
                                <h3 className={styles.programTitle}>{program.title}</h3>
                                <p className={styles.description}>{program.description}</p>

                                <div className={styles.impact}>
                                    <FaChartLine />
                                    <span>{program.impact}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsShowcase;
