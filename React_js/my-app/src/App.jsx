import Image from './image'
import Button from './Button'
const App=()=>{
return(
  <div>
<h1 onClick={()=>{console.log('this is a  click event from react')}}>Welcome to React</h1>
<h2 onClick={()=>{console.log('Hello react')}}> React </h2>
<p>Vite is a build tool that aims to provide a faster and leaner
   development experience for modern web projects.
</p>
<button name='html'onClick={()=>{console.log("Get more info")}}>Details</button>
<Image></Image>
  </div>
)
}
export default App
