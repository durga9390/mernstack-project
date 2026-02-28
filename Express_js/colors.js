import express from 'express'
import cors from 'cors'


const app = express()
const port = 3000


const colors_list = [
    {
        name: 'green',
        type: 'happyness',
        id: 1
    },

    {
        name: 'white',
        type: 'pease',
        id: 2
    },
    {
        brand: 'ornage',
        model: 'courage',
        id: 3
    }
]
app.use(cors())
app.use(express.json())


app.get('/products', (req, res) => {
    res.json({ products_list })
})

app.post('/submit', (req, res) => {
    console.log(req.body) //req.body.mail
    res.json({
        message: `You are successfully subscribed ${req.body.mail}!`
    })
})

app.get('/videos', (req, res) => {
    res.json({ text: 'This is videos page' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

