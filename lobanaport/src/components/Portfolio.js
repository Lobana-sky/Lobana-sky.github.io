
import Container from '@material-ui/core/Container';
import portfolio from "../portfolio.png"

import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from 'react-bootstrap/Carousel';
import React, {useState} from 'react';

  import firstS from "../2.jpg";
  import secondS from "../4.jpg";
  import thirdS from "../6.jpg";
  import Divider from '@material-ui/core/Divider';

      

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
        <div style={{marginTop:"1em"}}>
        <ControlledCarousel />
        </div>
        


</Paper>
      </Slide>
    </div>
  
        </Container>
    )
}


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={firstS} height="100%" width="100%"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={secondS} height="100%" width="100%"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p><a href="https://www.google.com" >press here</a></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={thirdS} height="100%" width="100%"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
