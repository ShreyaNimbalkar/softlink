"use client";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faNetworkWired,
  faShieldHalved,
  faHeadset,
  faMicrochip,
  faCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faNetworkWired,
    title: "Advanced Networking",
    desc: "Enterprise-grade wired and wireless networking infrastructure solutions.",
  },

  {
    icon: faShieldHalved,
    title: "Security Systems",
    desc: "CCTV surveillance, biometric systems, and secure enterprise protection.",
  },

  {
    icon: faMicrochip,
    title: "IT Infrastructure",
    desc: "Servers, NAS systems, desktops, laptops, and hardware deployment services.",
  },

  {
    icon: faHeadset,
    title: "Technical Support",
    desc: "Reliable maintenance, troubleshooting, and long-term support services.",
  },
];

export default function AboutBody() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* GLOW */}
        <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-[#33CCCC]/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-[#33CCCC]/10 blur-3xl" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* TAG */}
            <div className="inline-flex items-center rounded-full border border-[#33CCCC]/20 bg-[#33CCCC]/10 px-5 py-2 text-sm font-semibold text-[#33CCCC] backdrop-blur-xl">
              Who We Are
            </div>

            {/* TITLE */}
            <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
              Delivering Smart
              <span className="text-[#33CCCC]">
                {" "}
                Technology Solutions
              </span>
            </h2>

            {/* DESC */}
            <p className="mt-8 text-lg leading-relaxed text-slate-300">
              We specialize in providing complete IT and networking
              infrastructure solutions tailored for modern businesses and
              organizations. From networking systems and surveillance solutions
              to software licensing and enterprise support, we help businesses
              operate efficiently with reliable technology.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-5">
              {[
                "Professional IT Infrastructure Services",
                "Enterprise Networking & Surveillance",
                "Licensed Software Solutions",
                "Reliable Maintenance & Technical Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-[#33CCCC]/30 hover:bg-[#33CCCC]/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#33CCCC]/10 text-[#33CCCC]">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>

                  <p className="text-base font-medium text-slate-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button className="group inline-flex items-center gap-3 rounded-2xl bg-[#33CCCC] px-7 py-4 font-semibold text-white shadow-xl shadow-[#33CCCC]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#29B3B3]">
                Explore Solutions

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-[#33CCCC]/30 hover:shadow-2xl hover:shadow-[#33CCCC]/10"
              >
                {/* HOVER EFFECT */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#33CCCC]/10 via-transparent to-transparent" />
                </div>

                <div className="relative">
                  {/* ICON */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#33CCCC]/10 text-[#33CCCC]">
                    <FontAwesomeIcon
                      icon={feature.icon}
                      className="text-2xl"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-8 text-2xl font-black text-white">
                    {feature.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-5 leading-relaxed text-slate-400">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mt-28 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 shadow-2xl backdrop-blur-2xl lg:p-14"
        >
          {/* GLOW */}
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#33CCCC]/10 blur-3xl" />

          {/* HOVER GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#33CCCC]/10 via-transparent to-transparent" />

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT */}
            <div className="max-w-4xl">
              <div className="inline-flex items-center rounded-full border border-[#33CCCC]/20 bg-[#33CCCC]/10 px-5 py-2 text-sm font-semibold text-[#33CCCC]">
                Long-Term Technology Partnership
              </div>

              <h3 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
                Building Future-Ready
                <span className="block text-[#33CCCC]">
                  Business Infrastructure
                </span>
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Our goal is to provide dependable technology services that help
                organizations improve productivity, security, communication, and
                operational efficiency through modern IT infrastructure and
                enterprise-grade support.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-5 lg:min-w-[320px]">
              <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#33CCCC] text-white shadow-lg shadow-[#33CCCC]/20">
                    <FontAwesomeIcon
                      icon={faShieldHalved}
                      className="text-2xl"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[2px] text-[#33CCCC]">
                      Trusted Solutions
                    </p>

                    <h4 className="mt-1 text-2xl font-black text-white">
                      Enterprise Support
                    </h4>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-400">
                  Networking, surveillance, hardware, software licensing, and
                  infrastructure management solutions for growing businesses.
                </p>
              </div>

              <button className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#33CCCC] px-7 py-4 font-semibold text-white shadow-xl shadow-[#33CCCC]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#29B3B3]">
                Get Started

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}