export default function WhyChooseUs() {
  const features = [
    {
      title: 'Nature-Immersed',
      desc: 'Our sessions are held in a studio designed with natural cedar wood and floor-to-ceiling forest views.',
      icon: '🌲',
    },
    {
      title: 'Expert Guidance',
      desc: 'Our instructors have over 10+ years of experience in Hatha and Vinyasa yoga traditions.',
      icon: '🧘',
    },
    {
      title: 'Holistic Healing',
      desc: "We don't just focus on the body. Our programs incorporate meditation and forest bathing (Shinrin-yoku).",
      icon: '✨',
    },
  ]

  return (
    <section id='why-choose-us' className='w-full bg-stone-50 py-24 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row items-end justify-between mb-16 gap-4'>
          <div className='max-w-xl'>
            <h2 className='text-emerald-900 text-sm font-bold uppercase tracking-[0.2em] mb-4'>
              The Sanctuary Difference
            </h2>
            <p className='text-4xl md:text-5xl font-serif text-stone-800 leading-tight'>
              Why our students choose the{' '}
              <span className='italic text-emerald-700'>Woodland Path</span>.
            </p>
          </div>
          <div className='hidden md:block h-px grow mx-8 bg-stone-300 mb-4'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {features.map((item, index) => (
            <div
              key={index}
              className='group cursor-default outline-black outline py-4 px-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-slate-200'
            >
              <div className='text-4xl mb-6 inline-block p-4 bg-white rounded-2xl shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300'>
                {item.icon}
              </div>
              <h3 className='text-2xl font-serif text-stone-800 mb-4'>
                {item.title}
              </h3>
              <p className='text-stone-600 leading-relaxed'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
