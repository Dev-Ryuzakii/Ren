import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaHandshake, FaHistory, FaCheckCircle, FaUsers, FaGlobe } from 'react-icons/fa';

const About: React.FC = () => {
    const objectives = [
        "Eradicate childhood illiteracy",
        "Provide sustainable clean water solutions",
        "Empower women through vocational training",
        "Ensure healthcare access for rural communities"
    ];

    const coreValues = [
        "Integrity", "Compassion", "Equity and Inclusion",
        "Collaboration", "Innovation", "Sustainability", "Peace and Justice"
    ];

    const areasOfOperation = [
        "Food and nutrition support", "Inclusive education", "Healthcare outreach",
        "Disability advocacy", "Economic empowerment", "Youth development",
        "Climate action", "Community mediation", "Environmental sustainability"
    ];

    const beneficiaries = [
        "Persons living with disabilities", "Vulnerable families", "Children",
        "Women", "Youths", "Low-income households", "Underserved communities"
    ];

    return (
        <div className="about-page">
            <section style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)', padding: 'var(--spacer-xl) 0', textAlign: 'center' }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        About REN RACHAM Charity Foundation
                    </motion.h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '900px', margin: 'var(--spacer-md) auto 0' }}>
                        A Non-Governmental, Non-Profit, Humanitarian and Development Foundation dedicated to inclusive development and reducing social disparities.
                    </p>
                </div>
            </section>

            <section style={{ padding: 'var(--spacer-xl) 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--spacer-lg)' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacer-sm)' }}><FaEye style={{ color: 'var(--secondary-color)' }} /> Vision</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                To ensure the creation of inclusive, peaceful and sustainable communities where every person, including those with disabilities and other vulnerable groups, has equal opportunity, access to essential services, and an ability to live with dignity.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacer-sm)' }}><FaGlobe style={{ color: 'var(--accent-color)' }} /> Mission</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                To reduce inequality and strengthen community well-being through support for education, health, food security, economic empowerment, environmental responsibility, innovation, and partnerships, with particular commitment to persons living with disabilities.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section style={{ padding: 'var(--spacer-xl) 0', backgroundColor: 'var(--neutral-light)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--spacer-lg)' }}>
                        <h2>Core Values</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--spacer-sm)', marginTop: 'var(--spacer-md)' }}>
                            {coreValues.map((value, i) => (
                                <span key={i} style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '50px', fontWeight: '600' }}>
                                    {value}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacer-lg)' }}>
                        <div>
                            <h3>Areas of Operation</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {areasOfOperation.map((item, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <FaCheckCircle style={{ color: 'var(--accent-color)' }} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3>Beneficiaries</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {beneficiaries.map((item, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <FaUsers style={{ color: 'var(--secondary-color)' }} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: 'var(--spacer-xl) 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2>Our Primary Objective</h2>
                    <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: 'var(--spacer-md) auto' }}>
                        In fostering inclusive development and reducing social disparities, empower vulnerable populations through programs with priority support for people living with disabilities, while advancing key SDGs.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
