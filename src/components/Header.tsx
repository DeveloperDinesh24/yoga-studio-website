import '../styles/Header.css'

export default function Header() {
  return (
    <header className='max-w-600 mx-auto w-full h-14 bg-[#403F2B88] fixed z-50 top-0 flex items-center justify-between px-8 text-[#F3F1C4]'>
      <span className='text-2xl'>Yoga Studio</span>
      <nav className='hidden md:block'>
        <ul className='flex gap-6 text-xl'>
          <a href='#hero'>
            <li className='cursor-pointer section-links'>Home</li>
          </a>
          <a href='#about'>
            <li className='section-links'>About</li>
          </a>
          <a href='#programs'>
            <li className='section-links'>Programs</li>
          </a>
          <a href='#contact'>
            <li className='section-links'>Contact</li>
          </a>
        </ul>
      </nav>
      <div className='text-2xl block md:hidden cursor-pointer'>☰</div>
    </header>
  )
}
