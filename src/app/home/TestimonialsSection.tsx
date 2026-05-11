"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faQuoteLeft,
  faStar,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Rajesh Sharma",
    company: "ABC Enterprises",
    text: "SoftLink transformed our office IT infrastructure with outstanding support and professionalism.",
  },

  {
    name: "Priya Mehta",
    company: "TechNova",
    text: "Reliable networking and security solutions. Highly recommended for business IT support.",
  },

  {
    name: "Amit Verma",
    company: "Retail Hub",
    text: "Excellent service quality and very responsive technical team.",
  },

  {
    name: "Neha Kapoor",
    company: "Skyline Group",
    text: "Their networking and server solutions improved our operational efficiency significantly.",
  },

  {
    name: "Karan Patel",
    company: "FutureTech",
    text: "Professional team with excellent response time and reliable IT maintenance support.",
  },

  {
    name: "Sneha Joshi",
    company: "Nova Retail",
    text: "SoftLink delivered secure CCTV and surveillance systems exactly as promised.",
  },
];

export default function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCards = 3;

  const nextSlide = () => {
    if (startIndex + visibleCards < testimonials.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + visibleCards
  );

  return (
    <section className="relative overflow-hidden py-28 bg-white dark:bg-slate-950">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#33CCCC]/20 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#33CCCC]/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
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
          <div className="inline-flex items-center gap-2 rounded-full border border-[#33CCCC]/20 bg-[#33CCCC]/10 px-5 py-2 text-sm font-semibold text-[#33CCCC]">
            Client Testimonials
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            What Our Clients
            <span className="text-[#33CCCC]"> Say About Us</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Trusted by businesses for delivering reliable IT infrastructure,
            networking, security, and enterprise technology solutions.
          </p>
        </motion.div>

        {/* CONTROLS */}
        <div className="mt-14 flex items-center justify-end gap-4">
          <button
            onClick={prevSlide}
            disabled={startIndex === 0}
            className="h-12 w-12 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-white transition hover:border-[#33CCCC]/30 hover:text-[#33CCCC] disabled:opacity-40 disabled:cursor-not-allowed">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <button onClick={nextSlide} disabled={startIndex + visibleCards >= testimonials.length} className="h-12 w-12 rounded-full bg-[#33CCCC] text-white transition hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        {/* TESTIMONIAL SLIDER */}
        <div className="relative mt-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="grid gap-8 lg:grid-cols-3"
            >
              {visibleTestimonials.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8,}}
                  className="group h-full"
                >
                  <div className="relative overflow-hidden rounded-[32px] border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl p-10 shadow-sm hover:border-[#33CCCC]/30 hover:shadow-2xl hover:shadow-[#33CCCC]/10 transition-all duration-500 h-[350px] flex flex-col">
                    {/* HOVER GLOW */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#33CCCC]/10 via-transparent to-transparent" />
                    </div>

                    {/* TOP */}
                    <div className="relative flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#33CCCC]/10 border border-[#33CCCC]/10 flex items-center justify-center text-[#33CCCC] text-xl">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                      </div>

                      <div className="flex items-center gap-1 text-[#33CCCC]">
                        {[...Array(5)].map((_, i) => (
                          <FontAwesomeIcon key={i} icon={faStar} className="text-sm"/>
                        ))}
                      </div>
                    </div>

                    {/* TEXT */}
                    <p className="relative mt-8 text-lg leading-relaxed text-slate-600 dark:text-slate-300 flex-1">
                      “{item.text}”
                    </p>

                    {/* USER */}
                    <div className="relative mt-10 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#33CCCC] text-lg font-black text-white shadow-lg shadow-[#33CCCC]/20">
                        {item.name.charAt(0)}
                      </div>

                      <div>
                        <h3 className="text-xl font-black text-slate-900 dark:text-white">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    {/* TOP LIGHT */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#33CCCC]/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* INDICATORS */}
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({
            length: testimonials.length - visibleCards + 1,
          }).map((_, index) => (
            <button key={index} onClick={() => setStartIndex(index)} className={`h-2 rounded-full transition-all duration-300 ${ startIndex === index ? "w-10 bg-[#33CCCC]" : "w-2 bg-slate-300 dark:bg-white/20"}`}/>))}
        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Delivering trusted technology solutions with long-term client
            relationships.
          </p>
        </motion.div>
      </div>
    </section>
  );
}