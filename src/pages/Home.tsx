import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import MissionSection from '../components/MissionSection/MissionSection';
import SDGsDashboard from '../components/SDGsDashboard/SDGsDashboard';
import ProgramsShowcase from '../components/ProgramsShowcase/ProgramsShowcase';
import ContactForm from '../components/ContactForm/ContactForm';

const Home: React.FC = () => {
    return (
        <>
            <HeroSection
                title="REN RACHAM Charity Foundation"
                vision="To ensure the creation of inclusive, peaceful and sustainable communities where every person, including those with disabilities and other vulnerable groups, has equal opportunity, access to essential services, and an ability to live with dignity."
                ctaPrimaryText="Get Involved"
                ctaPrimaryLink="/get-involved"
                ctaSecondaryText="Our Work"
                ctaSecondaryLink="/our-work"
                backgroundImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200"
            />

            <MissionSection />

            <div style={{ backgroundColor: 'var(--neutral-light)' }}>
                <div className="container">
                    <SDGsDashboard />
                </div>
            </div>

            <ProgramsShowcase />

            <section style={{ padding: 'var(--spacer-xl) 0', backgroundColor: 'var(--neutral-light)' }}>
                <div className="container">
                    <ContactForm />
                </div>
            </section>
        </>
    );
};

export default Home;
