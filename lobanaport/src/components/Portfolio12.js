import React from 'react';
import Container from '@material-ui/core/Container';
import portfolio from "../portfolio.png"

import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { Slide as Slider } from 'material-auto-rotating-carousel';

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
    <div className={classes.wrapper}>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Paper elevation={1} className={classes.paper}>
        <img src={portfolio} alt="" height="50%" width="100%"/>
<div>
<AutoRotatingCarousel
 
  
  open={true}
>
  <Slider
    media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
    mediaBackgroundStyle={{backgroundColor: "white"}}
    contentStyle={{backgroundColor: "red"}}
    title='https://www.google.com.tr/?gws_rd=ssl'
    subtitle='Just using this will blow your mind.'
   
  />
  <Slider
    media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
    mediaBackgroundStyle={{backgroundColor: "white"}}
    contentStyle={{backgroundColor: "blue"}}
    title='Ever wanted to be popular?'
    subtitle='Well just mix two colors and your are good to go!'
  />
  <Slider
    media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
    mediaBackgroundStyle={{backgroundColor: "white"}}
    contentStyle={{backgroundColor: "green"}}
    title='May the force be with you'
    subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
  />
</AutoRotatingCarousel>
</div>
</Paper>
      </Slide>
    </div>
  
        </Container>
    )
}
