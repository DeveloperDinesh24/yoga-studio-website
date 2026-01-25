export default function HeroSection() {
  return (
    <section
      id='hero'
      className='w-full h-[85dvh] bg-[url(../assets/hero-section-background.jpg)] bg-contain bg-no-repeat text-[#F3F1C4] relative'
    >
      <div className='w-full h-full bg-[#00000055] flex flex-col items-center justify-center'>
        <h1 className='text-8xl font-semibold text-center mb-2'>
          Embrase the Flow
        </h1>
        <p className='text-2xl mb-12'>Explore Yoga in a Unique Space</p>
        <button className='w-fit h-12 text-lg px-12 rounded-4xl outline outline-[#F3F1C4] cursor-pointer hover:bg-[#F3F1C444] '>
          Join Us
        </button>
        <div className="w-5 rounded-6xl outline">
          <i class="fa-solid fa-arrow-down"></i>
        </div>
      </div>
    </section>
  )
}
