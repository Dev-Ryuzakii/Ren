import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <section style={{ backgroundColor: 'var(--secondary-color)', color: 'var(--white)', padding: 'var(--spacer-xl) 0', textAlign: 'center' }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Get in Touch
                    </motion.h1>
                    <p style={{ fontSize: '1.25rem' }}>We'd love to hear from you. Our team is here to help and answer any questions you may have.</p>
                </div>
            </section>

            <section style={{ padding: 'var(--spacer-xl) 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacer-lg)' }}>
                        <div>
                            <h2 style={{ marginBottom: 'var(--spacer-md)' }}>Contact Information</h2>
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacer-sm)', marginBottom: 'var(--spacer-md)' }}>
                                    <FaMapMarkerAlt style={{ color: 'var(--primary-color)', fontSize: '1.25rem' }} />
                                    <div>
                                        <strong>Office Location</strong>
                                        <p>123 Hope Street, Unity City, UC 12345</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacer-sm)', marginBottom: 'var(--spacer-md)' }}>
                                    <FaPhone style={{ color: 'var(--primary-color)', fontSize: '1.25rem' }} />
                                    <div>
                                        <strong>Phone</strong>
                                        <p>07072547821</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacer-sm)', marginBottom: 'var(--spacer-md)' }}>
                                    <FaEnvelope style={{ color: 'var(--primary-color)', fontSize: '1.25rem' }} />
                                    <div>
                                        <strong>Email</strong>
                                        <p>info@renracham.org</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacer-sm)', marginBottom: 'var(--spacer-md)' }}>
                                    <FaClock style={{ color: 'var(--primary-color)', fontSize: '1.25rem' }} />
                                    <div>
                                        <strong>Response Time</strong>
                                        <p>We typically respond within 24-48 business hours.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div style={{ backgroundColor: 'var(--neutral-light)', padding: 'var(--spacer-md)', borderRadius: '12px' }}>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
