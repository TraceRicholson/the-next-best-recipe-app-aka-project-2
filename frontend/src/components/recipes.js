import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from 'react';

const useStyles = makeStyles({
  root: {
    maxWidth: "22%",
    width: "22%",
    flexGrow: '4',
    margin: 25
  },
  media: {
    height: 140,
  },
  row: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
  }
});

export default function Recipes() {
  const classes = useStyles();
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    let getRecipes = async () => {
      let response = await fetch('http://localhost:5001/recipes')
      let data = await response.json()
      console.log('test', data)
      setRecipes(data)
    }
    getRecipes()
  }, [])

  function displayRecipe(title) {
    console.log(title)
  }

  return (

    <>
    <h1>Recipes!</h1>
    <div className={classes.row}>
      {recipes && recipes.map(r => {
        return (
          <Card id={r.id} className={classes.root}>
          <CardActionArea onClick={() => displayRecipe(r.title)}>
            <CardMedia
              className={classes.media}
              image={r.image_url}
              title={r.title}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {r.title}
            </Typography>
            </CardContent>
          </CardActionArea>
            <CardActions>
              <Button linksize="small" color="primary">
                Add to Favorites
               </Button>
            </CardActions>
          </Card>)
    })}
    </div>
    </>
  )
}