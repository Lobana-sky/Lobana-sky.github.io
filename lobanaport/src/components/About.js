import React from 'react';
import Container from '@material-ui/core/Container';
import aboutme from "../aboutme.png"

const About = () => {
  return (
    <Container maxWidth="sm">
    <div >
      <img src={aboutme} alt="" height="50%" width="100%" style={{margin:'0 auto'}}/>
      <p>Hello, my name is Lobana Alarabi. I'm a Web Designer Jonior.
        If you have a project or creative need that I can help with,
        please get in touch.</p>
    </div>
    </Container>
  );
};

export default About;