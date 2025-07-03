import React from 'react';
import { StudioClasses } from '../components/StudioClasses';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { AboutUs } from '../components/AboutUs';
import '../styles/HomePageStyles.css';

export const HomePage = () => {
  return (
    <>
      {/* אזור עם תמונה וכפתור */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>"Feel. Move. Grow."</h1>
          {/* <button className="hero-button" onClick={() => {
            document.getElementById('studio-classes')?.scrollIntoView({ behavior: 'smooth' }); */}
          {/* }}>
            OUR CLUBS
          </button> */}
        </div>
      </div>

      {/* תוכן רגיל מתחת */}
      <div className="content-section">
        <section id="studio-classes">
          <StudioClasses />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="aboutUs">
          <AboutUs />
        </section>
      </div>
    </>
  );
};

export default HomePage;
