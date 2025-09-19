
import './App.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
function App() {


  return (
 <main>
  <div>
    <h1 className='text-3xl text-pink'>Welcome to the world of GTA and GSAP!</h1>
  </div>
 </main>
  )
}

export default App
