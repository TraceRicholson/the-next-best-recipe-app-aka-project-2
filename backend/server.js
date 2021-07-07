const express = require('express')
const app = express()
const port = process.env.port || 5001
const knex = require('knex')(require('./knexfile.js')['development']);
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db.js')
// const queries = require('./queries')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/recipes', (req, res) =>
{
    knex
        .select('*')
        .from('recipes')
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500) && console.log(err))

})

app.get('/favorites', (req, res) =>
{
    knex
        .select('*')
        .from('favorites')
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500) && console.log(err))
        res.end

})


app.post('/favorites', async (req, res) => {

    knex('favorites')
        .insert(req.body)
        .then(data => res.status(201).json(data).send('Recipe has been added to favorites.'))
        .catch(err => res.status(500) && console.log(err))
        res.end
})

app.delete('/favorites', async (req, res) => {

    knex('favorites')
    .where('id', req.body.id)
        .del()
        .then(data => res.status(202).send('Recipe has been removed from favorites.'))
        .catch(err => res.status(500) && console.log(err))
        res.end
})



// app.post('/favorites', (req, res) =>
// {
//     knex
//         .insert
//         .from('favorites')
//         .then(data => res.status(200).json(data))
//         .catch(err => res.status(500) && console.log(err))

// })






app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))