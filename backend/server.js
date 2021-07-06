const express = require('express')
const app = express()
const port = 5001
const knex = require('knex')(require('./knexfile.js')['development']);
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/recipes', (req, res) =>
{
    knex
        .select('*')
        .from('recipes')
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500) && console.log(err))

})

// app.get('/recipes/:id', (req, res) => {

//     res.send(recipes[req.params.id])

//   })

// app.post('/recipes', async (req, res) =>
// {
//     const newData = req.body;
//     try {
//         const post = await db('recipes').insert(newData)
//         res.status(201.json(post)
//     } catch (err) {
//         res.status(500).json({message: "Error creating new recipe.", error: err})
//     })
//     })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))