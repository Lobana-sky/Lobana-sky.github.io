import React from 'react';
import Container from '@material-ui/core/Container';
import aboutme from "../aboutme.png"

import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: 180,
  },
 
  paper: {
    zIndex: 1,
    position: "relative",
    margin: theme.spacing(2),
    background: 'linear-gradient(90deg, rgba(247,230,238,1) 0%, rgba(206,226,250,1) 100%)',
  },
  
}));
const About = () => {
  const classes = useStyles();
    return (
        <Container maxWidth="sm">
        <div>
    <div className={classes.wrapper}>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Paper elevation={100} className={classes.paper}>
        
    <img src={aboutme} alt="" height="50%" width="100%" style={{margin:'0 auto'}}/>
      <p>Hello, my name is Lobana Alarabi. I'm a Web Designer Junior.
        If you have a project or creative need that I can help with,
        please get in touch.</p>
        </Paper>
      </Slide>
    </div>
  </div>
        </Container>
    )
};

export default About;


