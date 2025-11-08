import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Feature from "./Components/Feature"
import Pricing from "./Components/Pricing"
import Testimonials from "./Components/Testimonials"
import Footer from "./Components/Footer"

function App() {

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar/>
      <Hero/>
      <Feature/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
