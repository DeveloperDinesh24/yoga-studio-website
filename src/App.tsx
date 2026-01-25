import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <div className='w-full bg-[#4D4B36]'>
      <div className='w-full max-w-600 mx-auto bg-transparent'>
        <Header />
        <HeroSection />
      </div>
    </div>
  )
}

export default App
