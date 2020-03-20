import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import CV from '../components/CV';
import About from '../components/About';
import Divider from '@material-ui/core/Divider';

const App = (props) => {
  return (
    <div style={{background:'#fce4ec'}}>
    <Router >
      <NavBar />
      <Divider light />
      <Route exact path="/" component={About} />
      <Route exact path="/CV" component={CV} />
      <Route exact path="/Portfolio" component={Portfolio} />
      <Route exact path="/Contact" component={Contact} />
    </Router>
    </div>
  );
};

export default App