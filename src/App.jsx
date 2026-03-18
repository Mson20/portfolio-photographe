import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Pricing from './components/Pricing'
import Contact from './components/Contact'


function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Gallery />
      <About/>
      <Pricing/>
      <Contact/>
    </div>
  )
}

export default App