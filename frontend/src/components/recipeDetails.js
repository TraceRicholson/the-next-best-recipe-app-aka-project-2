import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: "'Bebas Neue', 'cursive'",
    fontSize: "6vw",
    marginTop: "3%",
    marginBottom: "0%",
    color: "#373940"
  },
  desc: {
    marginTop: '0%',
    marginBottom: "1%",
    fontFamily: "'Playfair Display', 'serif'",
    fontSize: "1.4vw"
  },
  layout: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    padding: "15px"
  },
  image: {
    width: "19%",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "5px",
    marginBottom: "10px"
  },
  cardTitle: {
    fontSize: "1.2vw",
    fontWeight: "bold"
  },
  instructionsCard: {
    width: '50%',
    fontSize: "1.1vw"
  },
  ingredientsCard: {
    width: '25%',
    fontSize: "1.1vw"
  },
  text: {
    overflowX: "auto",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
  },
  button: {
    marginTop: "10px",
    backgroundColor: '#373940',
    '&:hover': {
      backgroundColor: '#636360',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#BDBFBF',
    },
  },
});

function RecipeDetails ({ match }) {
  const [recipe, setRecipe] = useState([])
  const [open, setOpen] = useState(false)
  const classes = useStyles();

  useEffect(() => {
    let getRecipes = async () => {
      let response = await fetch('http://localhost:5001/recipes')
      let data = await response.json()
      setRecipe(data[match.params.id-1])
    }
    getRecipes()
  })

  return (
    <div className={classes.page}>
      <h1 className={classes.title}>{recipe.title}</h1>
      <Typography className={classes.desc}>{recipe.meal_type} • {recipe.difficulty_level} • {recipe.cooking_time_in_minutes} minutes</Typography>
      <img className={classes.image} src={recipe.image_url} alt="food"/>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton id="iconButton"
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {recipe.title} has been added to your favorites!
        </Alert>
      </Collapse>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<BookmarkIcon />}
        onClick={()=>{
          fetch('http://localhost:5001/favorites', {
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: JSON.stringify({id: recipe.id, title: recipe.title, meal_type: recipe.meal_type, serving_size: recipe.serving_size, difficulty_level: recipe.difficulty_level, cooking_time_in_minutes: recipe.cooking_time_in_minutes, ingredients: recipe.ingredients, instructions: recipe.instructions, image_url: recipe.image_url})
            })
            .then(setOpen(true))
          }}
      >
        Add to Favorites
      </Button>
      <div className={classes.layout}>
      <Card className={classes.ingredientsCard}>
        <CardContent>
          <Typography className={classes.cardTitle}>
            <pre className={classes.text}>Ingredients</pre>
          </Typography>
          <pre>Servings: {recipe.serving_size}</pre>
          <pre className={classes.text}>{recipe.ingredients}</pre>
        </CardContent>
      </Card>
      <Card className={classes.instructionsCard}>
        <CardContent>
          <Typography className={classes.cardTitle}>
            <pre className={classes.text}>Instructions</pre>
          </Typography>
          <pre className={classes.text}>{recipe.instructions}</pre>
        </CardContent>
      </Card>
      </div>
  </div>
  )}

export default RecipeDetails;