import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  row: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: "'Bebas Neue', 'cursive'",
    fontSize: "10vw",
    color: "#373940",
    marginTop: "3%",
    marginBottom: "0%",
  },
  image: {
    width: "40%"
  }
});

export default function Home () {
  const classes = useStyles();
  return (
    <div className={classes.row}>
    <h1 className={classes.title}>Robot Kitchen</h1>
    <Link to="/recipes"><img className={classes.image} src='./pizza.png' alt='A cartoon robot waiter'></img></Link>
    </div>
  )
}