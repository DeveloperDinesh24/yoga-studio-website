export default function Programs() {
  const classes = [
    {
      name: "Sunrise Vinyasa",
      duration: "60 Min",
      level: "All Levels",
      price: "₹800",
      desc: "Flow with the rising sun amidst the morning mist and birdsong."
    },
    {
      name: "Forest Meditation",
      duration: "45 Min",
      level: "Beginner",
      price: "₹600",
      desc: "A grounding practice focused on deep breathing and nature sounds."
    },
    {
      name: "Deep Tissue Yin",
      duration: "90 Min",
      level: "Intermediate",
      price: "₹1200",
      desc: "Long-held poses to release tension, surrounded by cedar aromas."
    }
  ];

  return (
    <section id="programs" className="w-full bg-[#1a2e1a] py-24 px-6 text-stone-100">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-2">Our Offerings</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Seasonal Programs</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((course, index) => (
            <div key={index} className="group relative bg-stone-900/40 border border-white/10 p-8 rounded-3xl hover:bg-stone-800/60 transition-all duration-500">
              
              {/* Price Tag Badge */}
              <div className="absolute -top-4 right-8 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-xl">
                {course.price}
              </div>

              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-emerald-400 text-xs uppercase font-bold tracking-tighter">{course.level}</span>
                  <h4 className="text-2xl font-serif mt-1">{course.name}</h4>
                </div>
                <span className="text-stone-500 text-sm italic">{course.duration}</span>
              </div>

              <p className="text-stone-400 mb-8 leading-relaxed">
                {course.desc}
              </p>

              <button className="w-full py-3 border border-emerald-500/30 rounded-xl text-emerald-400 font-semibold cursor-pointer group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                Book Session
              </button>
              
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-stone-500 text-sm">
          * Private one-on-one woodland sessions available upon request.
        </div>
      </div>
    </section>
  );
}