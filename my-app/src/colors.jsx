import Button from "./Button"
import {useState} from 'react'
function App() {
  const [image, setImage] = useState('')
    const [video, setVideo] = useState('')
    const [colors, setcolors] = useState([])
    const [name, setname] = useState('') // mail = cat@gmail.com
    const [message, setMessage] = useState('')

}
const getcolors = () => {
        fetch('http://localhost:3000/')
            .then((response) => response.json())
            .then((jsondata) => setProducts(jsondata.colors_list))
    }

    const postSubscribe = (e) => {
        e.preventDefault()
        console.log(mail)

        fetch('http://localhost:3000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mail }) // {userMail: 'mouse'}
        })
            .then((response) => response.json())
            .then((data) => setMessage(data.message))

        setMail('')
    }



  return (
    <div>
      <h1 onClick={()=>{console.log("This Page For React")}}>Hello React</h1>
    <button name="React">React</button>
    <hr/>
    <button onClick={images}>image</button>
    <hr/>
    <button onClick={videos}>videos</button>
    <hr/>
    <button onClick={getcolors}>colors</button>
    {Colors.map((flag)=>{
      return <li key={flag.type}>
      {flag.name}
      </li>
    })}
    <form onSubmit={postSubscribe}>
                <h1>Subscribe to colors option</h1>
                <input
                    type='text'
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                />
                <button type='submit'>Subscribe</button>
            </form>
            {message}
  
    </div> 
   
  )

export default App
