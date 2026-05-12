"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLaptop,
  faNetworkWired,
  faShieldHalved,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faLaptop,
    title: "Repair & Rental Services",
    desc: "Professional repair and maintenance for laptops and desktops.",
    link: "/repair-rental",
  },

  {
    icon: faNetworkWired,
    title: "Networking Solutions",
    desc: "Secure and scalable networking solutions for businesses.",
    link: "/networking",
  },

  {
    icon: faShieldHalved,
    title: "Software Licenses",
    desc: "Advanced surveillance systems for complete protection.",
    link: "/licenses",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-28">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#33CCCC]/20 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#33CCCC]/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#33CCCC]/20 bg-[#33CCCC]/10 px-5 py-2 text-sm font-semibold text-[#33CCCC] backdrop-blur-xl">
            Our Services
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-black leading-tight text-white">
            Complete Technology &
            <span className="text-[#33CCCC]">
              {" "}
              IT Infrastructure
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            We deliver enterprise-grade technology services tailored
            to modern business requirements with secure, scalable,
            and performance-driven solutions.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link key={index} href={service.link}>
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group relative h-full cursor-pointer overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-[#33CCCC]/30 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-[#33CCCC]/10"
              >
                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#33CCCC]/10 via-transparent to-transparent" />
                </div>

                {/* ICON */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#33CCCC]/10 text-2xl text-[#33CCCC] transition duration-500 group-hover:scale-110 group-hover:bg-[#33CCCC] group-hover:text-white">
                  <FontAwesomeIcon icon={service.icon} />
                </div>

                {/* CONTENT */}
                <div className="relative">
                  <h3 className="mt-8 text-2xl font-black text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-400">
                    {service.desc}
                  </p>

                  {/* BUTTON */}
                  <div className="mt-8 inline-flex items-center gap-3 font-semibold text-[#33CCCC] transition-all duration-300 group-hover:gap-4">
                    Learn More

                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-sm"
                    />
                  </div>
                </div>

                {/* BORDER EFFECT */}
                <div className="absolute inset-0 rounded-[32px] border border-transparent transition-all duration-500 group-hover:border-[#33CCCC]/20" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}