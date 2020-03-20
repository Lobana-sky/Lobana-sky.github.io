import React from 'react';
import Container from '@material-ui/core/Container';
import aboutme from "../aboutme.png"

const About = () => {
  return (
    <Container maxWidth="sm">
    <div className="App-header">
      <img src={aboutme} alt="" height="50%" width="100%" style={{margin:'0 auto'}}/>
      
    </div>
    </Container>
  );
};

export default About;