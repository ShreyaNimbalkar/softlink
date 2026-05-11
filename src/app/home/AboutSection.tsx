"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export default function AboutSection() {
  const features = [
    "Certified Engineers",
    "Enterprise Solutions",
    "24/7 Technical Support",
    "Fast & Secure Deployment",
  ];

  const stats = [
    {
      value: 12,
      suffix: "+",
      label: "Years Experience",
    },
    {
      value: 5000,
      suffix: "+",
      label: "Systems Supported",
    },
    {
      value: 24,
      suffix: "/7",
      label: "Technical Support",
    },
    {
      value: 100,
      suffix: "%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28 border-white/10 bg-slate-950 text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#33CCCC]/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-[#33CCCC]/5 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                alt="IT Infrastructure"
                className="w-full h-[350px] sm:h-[500px] lg:h-[620px] object-cover hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl max-w-[240px]">

              <h3 className="text-3xl font-black text-[#33CCCC]">
                <AnimatedCounter value={12} suffix="+" />
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Delivering enterprise-grade IT infrastructure solutions.
              </p>

            </div>

          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* SUBTITLE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#33CCCC]/20 bg-[#33CCCC]/10 px-5 py-2 text-sm font-semibold text-[#33CCCC] backdrop-blur-xl">
            About Company
          </div>

            {/* TITLE */}
            <h2 className="mt-6 text-4xl md:text-5xl font-black text-white leading-tight">
              Building Reliable
              <span className="block text-[#33CCCC]">
                IT Infrastructure
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-7 text-base sm:text-lg leading-relaxed text-slate-400">
              SoftLink IT Solutions provides enterprise-grade networking,
              cloud infrastructure, cybersecurity, hardware support,
              and technical consulting services designed to help
              businesses scale efficiently and securely.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 hover:border-[#33CCCC]/30 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-[#33CCCC]/10 transition-all duration-300"
                >

                  <div className="h-3.5 w-3.5 rounded-full bg-[#33CCCC] shrink-0" />

                  <p className="text-sm sm:text-base font-medium text-white">
                    {item}
                  </p>

                </motion.div>
              ))}

            </div>

            {/* CTA */}
            {/* <div className="mt-10">
              <button className="inline-flex items-center justify-center rounded-full bg-[#33CCCC] hover:bg-[#2EB8B8] px-8 py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 shadow-lg shadow-[#33CCCC]/20 hover:scale-105">
                Learn More
              </button>
            </div> */}

          </motion.div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-20">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 text-center hover:border-[#33CCCC]/30 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-[#33CCCC]/10 transition-all duration-300"
            >

              <h3 className="text-3xl sm:text-4xl font-black text-[#33CCCC]">
                <AnimatedCounter
                  value={item.value}
                  suffix={item.suffix}
                />
              </h3>

              <p className="mt-3 text-sm sm:text-base text-slate-400">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}