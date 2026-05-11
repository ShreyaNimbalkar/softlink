"use client";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faComments,
  faClipboardList,
  faLaptopCode,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const process = [
  {
    step: "01",
    title: "Consultation",
    icon: faComments,
    desc: "Understanding your business requirements, infrastructure, and technical challenges.",
  },

  {
    step: "02",
    title: "Planning",
    icon: faClipboardList,
    desc: "Designing scalable IT strategies and implementation roadmaps tailored to your goals.",
  },

  {
    step: "03",
    title: "Implementation",
    icon: faLaptopCode,
    desc: "Deploying secure, high-performance systems with precision and industry best practices.",
  },

  {
    step: "04",
    title: "Support",
    icon: faHeadset,
    desc: "Providing continuous maintenance, monitoring, and technical support for long-term success.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden py-28 bg-slate-950 text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#33CCCC]/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#33CCCC]/5 blur-3xl" />

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
            Our Process
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white leading-tight">
            Simple & Efficient
            <span className="text-[#33CCCC]"> Workflow</span>
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            We follow a structured and streamlined process to deliver reliable,
            scalable, and business-focused technology solutions.
          </p>
        </motion.div>

        {/* PROCESS GRID */}
        <div className="relative mt-24">
          {/* CONNECTING LINE */}
          <div className="hidden lg:block absolute top-14 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#33CCCC]/20 to-transparent" />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative text-center h-full"
              >
                {/* CARD */}
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:border-[#33CCCC]/40 hover:bg-white/[0.05] hover:shadow-[0_20px_60px_rgba(51,204,204,0.12)] transition-all duration-500 h-[380px] flex flex-col">
                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#33CCCC]/10 via-transparent to-transparent" />
                  </div>

                  {/* STEP NUMBER */}
                  <div className="absolute top-5 right-5 text-5xl font-black text-white/5">
                    {item.step}
                  </div>

                  {/* ICON */}
                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#33CCCC]/20 bg-[#33CCCC]/10 text-[#33CCCC] text-3xl group-hover:scale-110 group-hover:bg-[#33CCCC] group-hover:text-white transition-all duration-500">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>

                  {/* CONTENT */}
                  <div className="relative flex flex-col flex-1">
                    <h3 className="mt-8 text-2xl font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-slate-400 leading-relaxed flex-1">
                      {item.desc}
                    </p>
                  </div>

                  {/* TOP BORDER LIGHT */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#33CCCC]/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
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
            Focused on delivering seamless IT experiences from consultation to
            continuous support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}