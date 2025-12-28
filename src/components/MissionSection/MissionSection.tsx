import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaHeartbeat, FaUsers } from 'react-icons/fa';
import styles from './MissionSection.module.css';

const MissionSection: React.FC = () => {
    const values = [
        {
            icon: <FaGraduationCap />,
            title: 'Quality Education',
            description: 'Ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all.'
        },
        {
            icon: <FaHeartbeat />,
            title: 'Health & Wellbeing',
            description: 'Ensuring healthy lives and promoting well-being for all at all ages.'
        },
        {
            icon: <FaUsers />,
            title: 'Community Empowerment',
            description: 'Strengthening the means of implementation and revitalizing the global partnership for sustainable development.'
        }
    ];

    return (
        <section className={styles.missionSection}>
            <div className="container">
                <motion.div
                    className={styles.missionContent}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className={styles.missionTitle}>Our Mission</h2>
                    <p className={styles.missionText}>
                        To reduce inequality and strengthen community well-being through support for education, health, food security, economic empowerment, environmental responsibility, innovation, and partnerships, with particular commitment to persons living with disabilities.
                    </p>
                </motion.div>

                <div className={styles.valuesGrid}>
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className={styles.valueCard}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className={styles.valueIcon}>{value.icon}</div>
                            <h3 className={styles.valueTitle}>{value.title}</h3>
                            <p>{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
