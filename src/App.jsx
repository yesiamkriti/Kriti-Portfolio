import { BrowserRouter } from "react-router-dom"
import {About,Contact, Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from '/src/components'
import { ComputersCanvas } from "./components/canvas"
const App=()=> {

  return (

    <BrowserRouter>
    <div className="relative z-0 bg-white">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>

      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}


export default App
