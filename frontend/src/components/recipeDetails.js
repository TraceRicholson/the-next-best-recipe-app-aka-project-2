import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: "'Bebas Neue', 'cursive'",
    fontSize: "6vw"
  },
  layout: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
  },
  card: {
    width: '65%',
  },
  ingredients: {
    width: '30%'
  },
  text: {
    overflowX: "auto",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
  }
});


function RecipeDetails ({ match }) {
  const [recipe, setRecipe] = useState([])
  const classes = useStyles();

  useEffect(() => {
    let getRecipes = async () => {
      let response = await fetch('http://localhost:5001/recipes')
      let data = await response.json()
      setRecipe(data[match.params.id-1])
    }
    getRecipes()
  }, [])

  return (
    <div className={classes.page}>
      <h1 className={classes.title}>{recipe.title}</h1>
      <div>
        <img src={recipe.image_url} alt="recipe image"/>
      </div>
      <div className={classes.layout}>
      <Card className={classes.ingredients}>
        <CardContent className={classes.content}>
          <Typography>Ingredients</Typography>
          <pre className={classes.text}>{recipe.ingredients}</pre>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography>Instructions</Typography>
          <pre className={classes.text}>{recipe.instructions}</pre>
        </CardContent>
      </Card>
      </div>
  </div>
  )}

export default RecipeDetails;