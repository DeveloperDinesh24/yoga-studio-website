import { useState } from 'react'

export default function Header() {
  const [isHamburgerMenuActive, setIsHamburgerMenuActive] =
    useState<boolean>(false)

  const handleHamburgerClick = () => {
    setIsHamburgerMenuActive((prev) => !prev)
  }

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className='w-full h-20 bg-[#1a2e1a] fixed z-50 top-0 flex items-center justify-between px-6 md:px-12 text-[#F3F1C4] shadow-xl'>
      <span className='text-2xl font-semibold tracking-tight select-none'>
        YOGA STUDIO
      </span>
      <nav className='hidden md:block'>
        <ul className='flex items-center gap-8 text-lg font-medium'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className='hover:text-white transition-colors'
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        onClick={handleHamburgerClick}
        className='text-3xl block md:hidden cursor-pointer p-2'
      >
        {isHamburgerMenuActive ? '' : '☰'}
      </div>
      <nav
        className={`fixed z-60 right-0 top-0 bg-[#0a140a] text-white 
        ${isHamburgerMenuActive ? 'translate-x-0' : 'translate-x-full'} 
        transition-transform duration-300 ease-in-out flex md:hidden w-72 h-full shadow-[-10px_0_30px_rgba(0,0,0,0.5)]`}
      >
        <div
          onClick={handleHamburgerClick}
          className='absolute right-6 top-6 text-4xl cursor-pointer text-emerald-400 font-light'
        >
          ✕
        </div>

        <div className='flex flex-col w-full pt-28 px-10'>
          <ul className='flex flex-col gap-8'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleHamburgerClick}
                  className='text-2xl font-semibold hover:text-emerald-400 active:text-emerald-400 transition-colors block border-b border-white/10 pb-2'
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className='mt-auto mb-10 text-emerald-500/60 text-sm'>
            <p>Nature & Wellness Retreat</p>
          </div>
        </div>
      </nav>
    </header>
  )
}
