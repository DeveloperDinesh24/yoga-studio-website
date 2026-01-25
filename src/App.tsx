import './App.css'
import AboutSection from './components/AboutSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <div className='w-full bg-[#4D4B36] text-[#F3F1C4]'>
      <div className='w-full max-w-600 mx-auto min-h-[450dvh] bg-transparent'>
        <Header />
        <HeroSection />
        <AboutSection />
      </div>
    </div>
  )
}

export default App
