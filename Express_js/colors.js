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
        name: 'ornage',
        type: 'courage',
        id: 3
    }
]
app.use(cors())
app.use(express.json())


app.get('/colors', (req, res) => {
    res.json({ colors_list })
})

app.get('/green', (req, res) => {
    res.json({ text: 'Green for happyness' })
})

app.get('/white', (req, res) => {
    res.json({ text: 'White for peace' })
})
app.get('/orange', (req, res) => {
    res.json({ text: 'Orange for courage' })
})

app.post('/submit', (req, res) => {
    console.log(req.body) //req.body.mail
    res.json({
        message: `You are successfully subscribed ${req.body.name}!`
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

