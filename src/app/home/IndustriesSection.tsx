"use client";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHospital,
  faGraduationCap,
  faBuilding,
  faStore,
  faIndustry,
  faHotel,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const industries = [
  {
    title: "Healthcare",
    icon: faHospital,
    desc: "Secure hospital infrastructure, surveillance systems, networking, and IT support solutions for healthcare environments.",
  },

  {
    title: "Education",
    icon: faGraduationCap,
    desc: "Smart classroom technology, campus networking, digital infrastructure, and institutional IT management.",
  },

  {
    title: "Corporate Offices",
    icon: faBuilding,
    desc: "Enterprise-grade networking, cybersecurity, server solutions, and scalable office IT infrastructure.",
  },

  {
    title: "Retail",
    icon: faStore,
    desc: "Reliable POS systems, CCTV surveillance, connectivity solutions, and retail technology integration.",
  },

  {
    title: "Manufacturing",
    icon: faIndustry,
    desc: "Industrial networking, automation infrastructure, monitoring systems, and secure operations support.",
  },

  {
    title: "Hospitality",
    icon: faHotel,
    desc: "Guest connectivity solutions, surveillance systems, smart access control, and hospitality IT services.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative overflow-hidden py-28 bg-slate-950 text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#33CCCC]/20 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#33CCCC]/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#33CCCC]/20 bg-[#33CCCC]/10 px-5 py-2 text-sm font-semibold text-[#33CCCC] backdrop-blur-xl">
            Industries We Serve
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white leading-tight">
            Technology Solutions Across
            <span className="text-[#33CCCC]"> Industries</span>
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Delivering enterprise-grade IT infrastructure, networking,
            surveillance, and technology solutions tailored for diverse
            business sectors.
          </p>
        </motion.div>

        {/* INDUSTRY GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:border-[#33CCCC]/40 hover:bg-white/[0.05] hover:shadow-[0_20px_60px_rgba(51,204,204,0.12)] transition-all duration-500"
            >
              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#33CCCC]/10 via-transparent to-transparent" />
              </div>

              {/* ICON */}
              <div className="relative w-16 h-16 rounded-2xl bg-[#33CCCC]/10 text-[#33CCCC] flex items-center justify-center text-2xl border border-[#33CCCC]/10 group-hover:scale-110 group-hover:bg-[#33CCCC] group-hover:text-white transition-all duration-500">
                <FontAwesomeIcon icon={item.icon} />
              </div>

              {/* CONTENT */}
              <div className="relative">
                <h3 className="mt-8 text-2xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-5 text-slate-400 leading-relaxed">
                  {item.desc}
                </p>

                {/* CTA */}
                {/* <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#33CCCC]">
                  Learn More

                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div> */}
              </div>

              {/* BORDER LIGHT */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#33CCCC]/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM TEXT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-slate-500">
            Empowering businesses with scalable and future-ready technology
            infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}