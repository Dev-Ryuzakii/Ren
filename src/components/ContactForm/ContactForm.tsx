import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './ContactForm.module.css';

const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required')
}).required();

type FormData = yup.InferType<typeof schema>;

const ContactForm: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: FormData) => {
        // Simulate form submission
        console.log('Form submission:', data);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitted(true);
    };

    return (
        <section className={styles.formContainer}>
            <h2 className={styles.title}>Send Us a Message</h2>

            {isSubmitted ? (
                <div className={styles.successMessage}>
                    Thank you for reaching out! We will get back to you shortly.
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="name">Full Name</label>
                        <input
                            {...register('name')}
                            id="name"
                            className={styles.input}
                            placeholder="John Doe"
                            aria-invalid={errors.name ? 'true' : 'false'}
                        />
                        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">Email Address</label>
                        <input
                            {...register('email')}
                            id="email"
                            type="email"
                            className={styles.input}
                            placeholder="john@example.com"
                            aria-invalid={errors.email ? 'true' : 'false'}
                        />
                        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="subject">Subject</label>
                        <input
                            {...register('subject')}
                            id="subject"
                            className={styles.input}
                            placeholder="How can we help?"
                            aria-invalid={errors.subject ? 'true' : 'false'}
                        />
                        {errors.subject && <p className={styles.error}>{errors.subject.message}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="message">Message</label>
                        <textarea
                            {...register('message')}
                            id="message"
                            className={styles.textarea}
                            rows={5}
                            placeholder="Your message here..."
                            aria-invalid={errors.message ? 'true' : 'false'}
                        />
                        {errors.message && <p className={styles.error}>{errors.message.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className={`btn btn-primary ${styles.submitBtn}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            )}
        </section>
    );
};

export default ContactForm;
