import React from 'react'
import AboutSection from '../../components/Pages/home/AboutSection/AboutSection';
import ContactSection from '../../components/Pages/home/ContactSection/ContactSection';
import EmailSection from '../../components/Pages/home/EmailSection/EmailSection';
import FeaturesSection from '../../components/Pages/home/FeaturesSection/FeaturesSection';
import Header from '../../components/Pages/home/Header/Header';
import Professionals from '../../components/Pages/home/Professionals/Professionals';

const Home = () => {
  return (
    <div>
      <Header/> 
      <FeaturesSection />
      <AboutSection/>
      <ContactSection />
      <Professionals />
      <EmailSection />
    </div>
  )
}

export default Home
