import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { NavLink } from 'react-router-dom';

const link = {
  // width: '100px',
  padding: '12px',
  // margin: '0 6px 6px',
  // background: 'blue',
  textDecoration: 'none',
  color: 'grey',
}

const useStyles = makeStyles({
  root: {
    width: 500,
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
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <NavLink
          to="/" exact style={link}
        > <BottomNavigationAction  label="About" value="about" icon={<RestoreIcon />} /></NavLink>
        <NavLink
          to="/CV" exact style={link}
        > <BottomNavigationAction label="CV" value="CV" icon={<FavoriteIcon />} /> </NavLink>
        <NavLink
          to="/Portfolio" exact style={link}
        > <BottomNavigationAction label="Portfolio" value="portfolio" icon={<LocationOnIcon />} /></NavLink>
        <NavLink
          to="/Contact" exact style={link}
        > <BottomNavigationAction label="Contact" value="contact" icon={<FolderIcon />} /></NavLink>
    </BottomNavigation>
    )
  
}
 
export default NavBar;
