import React from 'react';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaUserFriends, FaCalendarAlt } from 'react-icons/fa';

const GetInvolved: React.FC = () => {
    const options = [
        {
            icon: <FaHandHoldingHeart />,
            title: 'Donate',
            text: 'Your contributions directly fund our scholarships and health programs.',
            btn: 'Give Now'
        },
        {
            icon: <FaUserFriends />,
            title: 'Volunteer',
            text: 'Join our local chapters and make a difference on the ground.',
            btn: 'Join Us'
        },
        {
            icon: <FaCalendarAlt />,
            title: 'Partner',
            text: 'We welcome corporate partnerships and long-term collaborations.',
            btn: 'Contact Partnerships'
        }
    ];

    return (
        <div className="get-involved">
            <section style={{ backgroundColor: 'var(--accent-color)', color: 'var(--white)', padding: 'var(--spacer-xl) 0', textAlign: 'center' }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Become a Catalyst for Change
                    </motion.h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: 'var(--spacer-md) auto 0' }}>
                        There are many ways to support our mission. Find the one that resonates with you.
                    </p>
                </div>
            </section>

            <section style={{ padding: 'var(--spacer-xl) 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacer-lg)' }}>
                        {options.map((opt, i) => (
                            <motion.div
                                key={i}
                                style={{ textAlign: 'center', padding: 'var(--spacer-md)', borderRadius: '12px', boxShadow: 'var(--shadow-md)', border: '1px solid #eee' }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                            >
                                <div style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: 'var(--spacer-sm)' }}>{opt.icon}</div>
                                <h2>{opt.title}</h2>
                                <p style={{ margin: 'var(--spacer-sm) 0 var(--spacer-md)' }}>{opt.text}</p>
                                <button className="btn btn-primary">{opt.btn}</button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: 'var(--spacer-xl) 0', backgroundColor: 'var(--neutral-dark)', color: 'var(--white)', textAlign: 'center' }}>
                <div className="container">
                    <h2>Upcoming Events</h2>
                    <p>Join our community in action. From fundraisers to skill-sharing workshops.</p>
                    <div style={{ margin: 'var(--spacer-lg) auto', maxWidth: '600px', padding: 'var(--spacer-md)', border: '1px dashed var(--accent-color)', borderRadius: '8px' }}>
                        <h3>No upcoming events scheduled.</h3>
                        <p>Check back soon or sign up for our newsletter to stay updated.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetInvolved;
