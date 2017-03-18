import React from 'react';
import { Container } from 'semantic-ui-react';
import { About, Footer } from '../components';

const AboutPage = () => (
    <Container id="about-page">
        <div id="main-wrapper">
         <div id="main" className="container">
            <About />
            </div>
        </div>
            <Footer />
    </Container>
);

export default AboutPage;