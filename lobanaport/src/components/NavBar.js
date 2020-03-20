import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import InfoIcon from '@material-ui/icons/Info';
import RecentActorsSharpIcon from '@material-ui/icons/RecentActorsSharp';
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp';
import AndroidSharpIcon from '@material-ui/icons/AndroidSharp';
const link = {
  // width: '100px',
  padding: '12px',
  // margin: '0 6px 6px',
 
  textDecoration: 'none',
  color: 'grey',
  background:'#e3f2fd'
}

const useStyles = makeStyles({
  root: {
    width: 500,
    background:'#fce4ec'
  },
});

function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // exact style={link} activeStyle={{background: 'red'}}
    return (
      <div style={link}>
      <Container maxWidth="sm" >
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <NavLink
          to="/" exact  activeStyle={{background: '#f8bbd0'}}
        > <BottomNavigationAction  label="About" value="about" icon={<InfoIcon />} /></NavLink>
        <NavLink
          to="/CV" exact  activeStyle={{background: '#f8bbd0'}}
        > <BottomNavigationAction label="CV" value="CV" icon={<AndroidSharpIcon />} /> </NavLink>
        <NavLink
          to="/Portfolio" exact  activeStyle={{background: '#f8bbd0'}}
        > <BottomNavigationAction label="Portfolio" value="portfolio" icon={<AssignmentTurnedInSharpIcon />} /></NavLink>
        <NavLink
          to="/Contact" exact  activeStyle={{background: '#f8bbd0'}}
        > <BottomNavigationAction label="Contact" value="contact" icon={<RecentActorsSharpIcon />} /></NavLink>
    </BottomNavigation>
    </Container>
    </div>
    )
  
}
 
export default NavBar;
