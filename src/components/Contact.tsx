export default function Contact() {
  return (
    <section
      id='contact'
      className='w-full bg-[#1a2e1a] max-w-full mx-auto py-20 px-8 min-h-dvh text-stone-100 font-sans'
    >
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-5xl md:text-7xl font-serif tracking-tight mb-4'>
            Find Your Zen
          </h2>
          <p className='text-stone-400 text-lg italic'>
            Visit our woodland sanctuary or reach out below.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-12 items-center'>
          <div className='w-full lg:w-1/2 bg-stone-50 p-8 md:p-12 rounded-2xl shadow-2xl'>
            <h3 className='text-2xl text-stone-800 font-semibold mb-8'>
              Send a Message
            </h3>

            <form className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <label className='text-sm font-bold text-stone-600 uppercase tracking-widest'>
                  Full Name
                </label>
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='w-full px-4 py-3 rounded-lg bg-stone-100 border-none text-stone-900 focus:ring-2 focus:ring-emerald-600 outline-none transition-all'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-sm font-bold text-stone-600 uppercase tracking-widest'>
                  Email Address
                </label>
                <input
                  type='email'
                  placeholder='name@email.com'
                  className='w-full px-4 py-3 rounded-lg bg-stone-100 border-none text-stone-900 focus:ring-2 focus:ring-emerald-600 outline-none transition-all'
                />
              </div>

              <button
                type='submit'
                className='mt-4 bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg uppercase tracking-tighter cursor-pointer'
              >
                Begin Your Journey
              </button>
            </form>
          </div>
          <div className='w-full lg:w-1/2 max-h-100 h-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-stone-800/20 lg:scale-109'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4627.000231484026!2d74.6311183879907!3d26.4752837192307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be7aa46a24ee1%3A0xd6ba63c3af8fdcad!2s123%2C%20Ana%20Sagar%20Link%20Rd%2C%20Mali%20Mohalla%2C%20Ajmer%2C%20Rajasthan%20305001!5e1!3m2!1sen!2sin!4v1771743068529!5m2!1sen!2sin'
              className='w-full h-full grayscale-20 contrast-[1.1]'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
