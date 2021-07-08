import React, { useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: "24vw",
    width: "24vw",
    flexGrow: '4',
    margin: "0.6vw"
  },
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  link:{
    textDecoration: 'none',
    color: "black"
  },
  media: {
    height: "400px",
  },
  content: {
    paddingBottom: "0px",
  },
  row: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
  },
  title: {
    fontFamily: "'Bebas Neue', 'cursive'",
    fontSize: "6vw",
    marginTop: "3%",
    marginBottom: "0%",
    color: "#373940"
  },
  button: {
    marginTop: "10px",
    color: "white",
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
  recipeTitle: {
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default function Favorites () {

  const classes = useStyles();
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    let getFavorites = async () => {
      let response = await fetch('http://localhost:5001/favorites')
      let data = await response.json()
      setFavorites(data)
    }
    getFavorites()
  }, [])

  return (
    <div className={classes.page}>
    <h1 className={classes.title}>Favorites</h1>
    <div className={classes.row}>
      {favorites && favorites.map(r => {
        return (
          <Card id={r.id} className={classes.root}>
          <Link to={`/recipes/${r.id}`} className={classes.link}>
            <CardActionArea>
            <CardMedia
              className={classes.media}
              image={r.image_url}
              title={r.title}
            />
            <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.recipeTitle}>
              {r.title}
            </Typography>
            </CardContent>
            </CardActionArea>
          </Link>
            <CardActions className={classes.page}>
              <Button className={classes.button} linksize="small" color="primary"
                onClick={()=>{
                  fetch('http://localhost:5001/favorites', {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json; charset=utf-8'},
                    body: JSON.stringify({id: r.id, title: r.title, meal_type: r.meal_type, serving_size: r.serving_size, difficulty_level: r.difficulty_level, cooking_time_in_minutes: r.cooking_time_in_minutes, ingredients: r.ingredients, instructions: r.instructions, image_url: r.image_url})
                  })
                  window.location.reload()

                }}>
                Remove from Favorites
               </Button>
            </CardActions>
          </Card>)
    })}
    </div>
    </div>
  )
}