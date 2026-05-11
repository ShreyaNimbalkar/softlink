export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-blue-400 uppercase tracking-[3px] font-semibold">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-5 leading-tight">
              Trusted Technology Partner For Modern Enterprises
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              ["12+", "Years Experience"],
              ["5000+", "Projects Completed"],
              ["24/7", "Technical Support"],
              ["100%", "Client Satisfaction"],
            ].map(([num, text], index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <h3 className="text-4xl font-black text-blue-400">
                  {num}
                </h3>

                <p className="text-gray-300 mt-3">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}