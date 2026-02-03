export default function HeroSection() {
  return (
    <section
      id='hero'
      className='w-full h-[96dvh] bg-[url(../assets/hero-section-background.jpg)] bg-cover bg-center bg-no-repeat relative'
    >
      <div className='w-full h-full bg-[#00000055] flex flex-col items-center justify-center'>
        <h1 className='text-4xl sm:text-6xl xl:text-8xl font-semibold text-center mb-2'>
          Embrase the Flow
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl mb-12'>
          Explore Yoga in a Unique Space
        </p>
        <button className='w-fit h-12 text-lg px-12 rounded-4xl outline outline-[#F3F1C4] cursor-pointer hover:bg-[#F3F1C444] '>
          Join Us
        </button>
        <a href='#about' className='absolute bottom-4 text-2xl text-black'>
          <i className='fa-regular fa-circle-down'></i>
        </a>
      </div>
    </section>
  )
}
