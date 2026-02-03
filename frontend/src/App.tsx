import { useRef, useEffect, useState} from "react"

// components
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import Articles from "./components/Articles/Articles"
import Contact from "./components/Contact/Contact"
import Socials from "./components/Socials/Socials"
// wave components
import RadioWave from "./components/Dividers/RadioWave/RadioWave"
import SquareWave from "./components/Dividers/SquareWave/SquareWave"
import SinWave from "./components/Dividers/SinWave/SinWave"

export type WaveProps = {
  height: number,
  width: number,
}



function App() {

  const appDivref = useRef<HTMLDivElement | null>(null)
  const contactFormBtnRef = useRef<HTMLButtonElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  // wave / divider
  const [height, setHeight] = useState(200)
  const [width, setWidth] = useState(200)

  useEffect(() => {
    if (!wrapperRef.current) return

    const updateSize = () => {
      const rect = wrapperRef.current!.getBoundingClientRect()
      setWidth(rect.width)
      setHeight(rect.height)
    }

    updateSize()
    window.addEventListener("resize", updateSize)

    return () => window.removeEventListener("resize", updateSize)
  }, [])





  return (
    <div className='app-container' ref={appDivref}>
      <div className="top-bit">
       <span></span>
      </div>
      <Hero appDivRef={appDivref} contactFormBtnRef={contactFormBtnRef}/>

      <div className='divider' ref={wrapperRef}>
        <RadioWave height={height} width={width}/>
      </div>

      <Projects />

      <div className='divider' ref={wrapperRef}>
        <SquareWave height={height} width={width}/>
      </div>

      <Articles />

      <div className="divider" ref={wrapperRef}>
        <SinWave height={height} width={width}/>
      </div>


      <Contact contactFormBtnRef={contactFormBtnRef}/>
      <Socials />
      <div className="bottom-bit">
       <span></span>
      </div>
    </div>
  )
}

export default App
