import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerGrid}`}>
                <div>
                    <h3 className={styles.footerTitle}>Ren Racham Charity</h3>
                    <p>Empowering communities and driving sustainable change through dedicated support and strategic action.</p>
                    <div className={styles.socialIcons}>
                        <a href="#" aria-label="Facebook" className={styles.socialIcon}><FaFacebook /></a>
                        <a href="#" aria-label="Twitter" className={styles.socialIcon}><FaTwitter /></a>
                        <a href="#" aria-label="Instagram" className={styles.socialIcon}><FaInstagram /></a>
                        <a href="#" aria-label="LinkedIn" className={styles.socialIcon}><FaLinkedin /></a>
                    </div>
                </div>

                <div>
                    <h3 className={styles.footerTitle}>Quick Links</h3>
                    <ul className={styles.footerLinks}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/our-work">Our Work</Link></li>
                        <li><Link to="/get-involved">Get Involved</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className={styles.footerTitle}>Contact Us</h3>
                    <ul className={styles.footerLinks}>
                        <li>Email: renrachamcharity@gmail.com</li>
                        <li>Phone: 07072547821</li>
                        <li>Address: 123 Hope Street, Unity City</li>
                    </ul>
                </div>
            </div>

            <div className={`container ${styles.footerBottom}`}>
                <p>&copy; {currentYear} Ren Racham Charity Foundation. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
