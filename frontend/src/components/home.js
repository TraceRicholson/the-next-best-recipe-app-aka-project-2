import React from 'react';
import './home.css'
import { makeStyles } from '@material-ui/core/styles';
import { Link, NavLink } from 'react-router-dom'

const useStyles = makeStyles({
  row: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
  },
  title: {
    fontFamily: "'Bebas Neue', 'cursive'",
    fontSize: "6vw"
  }
});

export default function Home () {
  const classes = useStyles();
  return (
    <div className={classes.row}>
    <h1 className={classes.title}>Robot Kitchen</h1>
    <Link to="/recipes"><img class='center' src='./pizza.png' alt='A cartoon robot waiter'></img></Link>
    </div>
  )
}