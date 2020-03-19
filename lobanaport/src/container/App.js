import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import CV from '../components/CV';
import About from '../components/About';

const App = (props) => {
  return (
    <Router>
    <div className="navbar">
      <NavBar />
      <Route exact path="/" component={About} />
      <Route exact path="/CV" component={CV} />
      <Route exact path="/Portfolio" component={Portfolio} />
      <Route exact path="/Contact" component={Contact} />
    </div>
    </Router>
  );
};

export default App