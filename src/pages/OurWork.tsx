import React from 'react';
import SDGsDashboard from '../components/SDGsDashboard/SDGsDashboard';
import ProgramsShowcase from '../components/ProgramsShowcase/ProgramsShowcase';
import { motion } from 'framer-motion';

const OurWork: React.FC = () => {
    return (
        <div className="our-work-page">
            <section style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)', padding: 'var(--spacer-xl) 0', textAlign: 'center' }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        The Impact We Make
                    </motion.h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: 'var(--spacer-md) auto 0' }}>
                        Explore how we align our initiatives with the UN Sustainable Development Goals to create lasting change.
                    </p>
                </div>
            </section>

            <SDGsDashboard />

            <div style={{ backgroundColor: 'var(--neutral-light)' }}>
                <ProgramsShowcase />
            </div>

            <section style={{ padding: 'var(--spacer-xl) 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2>Annual Reports & Transparency</h2>
                    <p style={{ marginBottom: 'var(--spacer-lg)' }}>We believe in absolute transparency about our funding and impact.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacer-md)' }}>
                        <button className="btn btn-primary">Download 2024 Report</button>
                        <button className="btn btn-outline">Financial Integrity</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurWork;
