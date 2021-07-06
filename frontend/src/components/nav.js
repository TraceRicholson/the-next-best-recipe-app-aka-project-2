import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: "bold"
  }
}))


function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/recipes" className={classes.link}>
          <Button color="inherit">Recipes</Button>
        </Link>
        <Link to="/favorites" className={classes.link}>
          <Button color="inherit">Favorites</Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar;