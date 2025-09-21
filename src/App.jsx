
import './App.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import FirstVideo from './sections/FirstVideo'
import Jason from './sections/Jason'
import SecondVideo from './sections/SecondVideo'
import Lucia from './sections/Lucia'
import Postcard from './sections/Postcard'


gsap.registerPlugin(ScrollTrigger)
function App() {


  return (
 <main>
  <Navbar/>
   <Hero/>
   <FirstVideo/>
   <Jason/>
   <SecondVideo/>
   <Lucia/>
   <Postcard/>
 </main>
  )
}

export default App
