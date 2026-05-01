import ThemeProvider from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Domain from './components/Domain'
import Technologies from './components/Technologies'
import Milestones from './components/Milestones'
import Documents from './components/Documents'
import Achievements from './components/Achievements'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-surface">
        <Navbar />
        <Hero />
        <Domain />
        <Technologies />
        <Milestones />
        <Documents />
        <Achievements />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
