export default function About() {
  return (
    <section
      id='about'
      className='w-full bg-stone-50 py-24 px-6 overflow-hidden'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          <div className='max-[640px]:w-3/4 w-1/2 relative'>

            <div className='relative rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500'>
              <div className='bg-stone-300 aspect-4/5 flex items-center justify-center text-stone-500 italic'>
                <img src='../src/assets/about-us.png' alt='About Us' />
              </div>
            </div>
            <div className=' max-[840px]:scale-75 absolute -bottom-10 max-[840px]:-right-12 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-100'>
              <p className='text-emerald-800 font-serif text-3xl font-bold'>
                12+
              </p>
              <p className='text-stone-500 text-sm uppercase tracking-widest'>
                Years of Zen
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <h2 className='text-emerald-900 text-sm font-bold uppercase tracking-[0.3em] mb-4'>
              Our Story
            </h2>
            <h3 className='text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight'>
              A Sanctuary Built Between{' '}
              <span className='text-emerald-700 italic'>The Trees</span>.
            </h3>

            <div className='space-y-6 text-stone-600 text-lg leading-relaxed'>
              <p>
                Founded in 2012, our studio began as a small clearing in the
                woods. We believed that yoga wasn't meant to be practiced in
                loud, fluorescent-lit gyms, but in the quiet embrace of nature.
              </p>
              <p>
                Today, we provide a space where the rustle of leaves and the
                scent of pine replace artificial music and stress. Our mission
                is simple: to help you find the stillness that already exists
                within you.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-stone-200'>
              <div>
                <h4 className='text-stone-900 font-bold text-xl uppercase'>
                  Pure Air
                </h4>
                <p className='text-stone-500 text-sm italic'>
                  Located in the heart of the Cedar Reserve.
                </p>
              </div>
              <div>
                <h4 className='text-stone-900 font-bold text-xl uppercase'>
                  Open 24/7
                </h4>
                <p className='text-stone-500 text-sm italic'>
                  Access to outdoor meditation trails anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
