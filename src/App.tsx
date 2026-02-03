import './App.css'
import AboutSection from './components/AboutSection'
import Contact from './components/Contact'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProgramsSection from './components/ProgramsSection'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  return (
    <div className='w-full bg-[#4D4B36] text-[#F3F1C4]'>
      <div className='w-full max-w-600 mx-auto min-h-[450dvh] bg-transparent'>
        <Header />
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <WhyChooseUs />
        <Contact />
      </div>
    </div>
  )
}

export default App
