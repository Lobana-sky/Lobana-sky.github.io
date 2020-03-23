import React from 'react'
import Container from '@material-ui/core/Container';
import portfolio from "../portfolio.png"

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
    // background: 'linear-gradient(90deg, rgba(247,230,238,1) 0%, rgba(206,226,250,1) 100%)',
    background: 'rgba(206,226,250,0.30)'
  },
  
}));

export default function Portfolio() {
    const classes = useStyles();
    return (
        <Container maxWidth="sm">
        <div>
    <div className={classes.wrapper}>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Paper elevation={1} className={classes.paper}>
        <img src={portfolio} alt="" height="50%" width="100%"/>
        </Paper>
      </Slide>
    </div>
  </div>
        </Container>
    )
}

