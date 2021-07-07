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
import { Link } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

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
  },
  title: {
    fontFamily: "'Bebas Neue', 'cursive'",
    fontSize: "6vw"
  }
});

export default function Recipes() {
  const classes = useStyles();
  const [recipes, setRecipes] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let getRecipes = async () => {
      let response = await fetch('http://localhost:5001/recipes')
      let data = await response.json()
      console.log('test', data)
      setRecipes(data)
    }
    getRecipes()
  }, [])

  return (
    <>
    <h1 className={classes.title}>Robo Recipes</h1>
    <Collapse in={open}>
        <Alert
          action={
            <IconButton
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
          This recipe has been added to your favorites!
        </Alert>
      </Collapse>
    <div className={classes.row}>
      {recipes && recipes.map(r => {
        return (
          <Card id={r.id} className={classes.root}>
          <Link to={`/recipes/${r.id}`}>
            <CardActionArea>
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
          </Link>
            <CardActions>
              <Button linksize="small" color="primary"
                onClick={()=>{
                  fetch('http://localhost:5001/favorites', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json; charset=utf-8'},
                    body: JSON.stringify({id: r.id, title: r.title, meal_type: r.meal_type, serving_size: r.serving_size, difficulty_level: r.difficulty_level, cooking_time_in_minutes: r.cooking_time_in_minutes, ingredients: r.ingredients, instructions: r.instructions, image_url: r.image_url})
                    })
                    .then(setOpen(true))
                  }}>
                Add to Favorites
               </Button>
            </CardActions>
          </Card>)
    })}
    </div>
    </>
  )
}