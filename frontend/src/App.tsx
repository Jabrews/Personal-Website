import { useRef } from "react"

// components
import Hero from "./components/Hero/Hero"
import Divider from "./components/Divider/Divider"
import Projects from "./components/Projects/Projects"
import Articles from "./components/Articles/Articles"
import Contact from "./components/Contact/Contact"

function App() {

  const appDivref = useRef<HTMLDivElement | null>(null)


  return (
    <div className='app-container' ref={appDivref}>
      <Hero appDivRef={appDivref}/>
      <Divider />
      <Projects />
      <Divider />
      <Articles />
      <Divider />
      <Contact />
    </div>
  )
}

export default App
