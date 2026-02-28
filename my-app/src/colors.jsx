import { useState } from 'react'

function Colors() {

    const [green, setGreen] = useState('')
    const [white, setWhite] = useState('')
    const [orange, setOrange] = useState('')
    const [colors_list, setColors_list] = useState([])
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const getGreen = () => {
        fetch('http://localhost:3000/green')
            .then((response) => response.json())
            .then((jsondata) => setGreen(jsondata.text)) 
    }
const getWhite = () => {
        fetch('http://localhost:3000/white')
            .then((response) => response.json())
            .then((jsondata) => setWhite(jsondata.text)) 
    }
const getOrange = () => {
        fetch('http://localhost:3000/orange')
            .then((response) => response.json())
            .then((jsondata) => setOrange(jsondata.text)) 
    }

    const getColors_list = () => {
        fetch('http://localhost:3000/colors')
            .then((response) => response.json())
            .then((jsondata) => setColors_list(jsondata.colors_list)) 
    }

    const postSubscribe = (e) => {
        e.preventDefault()
        console.log(name)


        fetch('http://localhost:3000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        })
            .then((response) => response.json())
            .then((data) => setMessage(data.message))

        setName('')
    }

    return (
        <div>
            <button onClick={getGreen}>Green</button>
            {green}
            <hr/>
            <button onClick={getWhite}>White</button>
            {white}
            <hr/>
            <button onClick={getOrange}>Orange</button>
            {orange}
            <hr/>
            <button onClick={getColors_list}>colors</button>
            <hr />


            <ol>
                {colors_list.map(colors_list=> (
                    <li key={colors_list.id}>{colors_list.type}</li>
                ))}
            </ol>

            <form onSubmit={postSubscribe}>
                <h1>Subscribe to colors option</h1>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type='submit'>Subscribe</button>
            </form>

            {message}
        </div>
    )
}

export default Colors;