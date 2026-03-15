import express from 'express'
import cors from 'cors'


const app = express()
const port = 3000


const colors_list = [
    {
        name: 'green',
        sign: 'happyness',
        id: 1
    },

    {
        name: 'white',
        sign: 'pease',
        id: 2
    },
    {
        name: 'ornage',
        sign: 'courage',
        id: 3
     },

       {
        name:'black',
        sign:'power and elegance',
        id:4
       },
    {
         name:'brown',
         sign:'tourist attractions',
         id:5
    }

]
app.use(cors())
app.use(express.json())


app.get('/Colors', (req, res) => {
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

app.get('/black', (req, res) => {
    res.json({ text: 'black for power and elegances' })
})

app.get('/brown', (req, res) => {
    res.json({ text: 'brown for tourist attractions' })
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


//add color
app.post('/color', (req, res) =>{
    console.log(req.body)
    colors_list=[

        ...colors_list,
        {...req.body, id:colors_list.length + 1}
    ]

console.log(colors_list)




})