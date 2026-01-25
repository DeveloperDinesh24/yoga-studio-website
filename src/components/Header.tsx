export default function Header() {
  return (
    <header className="w-full h-14 bg-[#403F2B] fixed top-0 flex items-center justify-between px-4 text-[#F3F1C4]">
      <span className="text-2xl">
        Yoga Studio
      </span>
      <nav>
        <ul className="flex gap-4 text-xl">
          <a href="#hero"><li className="hover:text-white cursor-pointer">Home</li></a>
          <a href="#about"><li className="hover:text-white cursor-pointer">Classes</li></a>
          <a href="#about"><li className="hover:text-white cursor-pointer">About</li></a>
          <a href="#contact"><li className="hover:text-white cursor-pointer">Contact</li></a>
        </ul>
      </nav>
    </header>
  )
}
