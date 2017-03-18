import React from 'react';
import { Button, Container, Header } from 'semantic-ui-react';

const Footer = () => (
  <footer id="footer">
    <Container>
      <Header as="h2" textAlign="center">Get in touch</Header>
      <div>
        <a target="_blank" href="https://www.linkedin.com/in/tony-yep-721b2337/">
        <Button circular color="linkedin" icon="linkedin" />
        </a>
        <a className="icon fa-youtube" target="_blank" href="http://www.youtube.com/channel/UCS-pKWWh_L7wYn8U6nz-zhA">
        <Button circular color="youtube" icon="youtube" />         
        </a>      
      </div>
    </Container>
    <Container>
      <ul id="copyright">
        <li>&copy; Drygon Consulting Inc. All rights reserved</li>
        <li>Design & Program By: <a href="https://hjzi.github.io/">
        <span>Hui Jie Zi Consult Corp.</span>
        </a></li>
      </ul>
    </Container>
  </footer >
)

export default Footer;
