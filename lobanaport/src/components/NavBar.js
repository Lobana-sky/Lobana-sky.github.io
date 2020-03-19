import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <NavLink
          to="/" exact style={link} activeStyle={{background: 'red'}}
        >About</NavLink>
        <NavLink
          to="/CV" exact style={link} activeStyle={{background: 'darkblue'}}
        >CV</NavLink>
        <NavLink
          to="/Portfolio" exact style={link} activeStyle={{background: 'darkblue'}}
        >Portfolio</NavLink>
        <NavLink
          to="/Contact" exact style={link} activeStyle={{background: 'darkblue'}}
        >Contact</NavLink>
      </div>
    )
  }
}
 
export default NavBar;