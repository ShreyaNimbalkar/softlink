"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Acceptance of Terms",
    desc: "By accessing and using our website or services, you agree to comply with these terms and conditions.",
  },

  {
    title: "Services & Solutions",
    desc: "We provide IT infrastructure, networking, software licensing, CCTV, and related technology services based on client requirements.",
  },

  {
    title: "User Responsibilities",
    desc: "Users are responsible for providing accurate information and using our services in compliance with applicable laws and regulations.",
  },

  {
    title: "Payments & Billing",
    desc: "All payments for products and services must be completed as agreed in quotations, invoices, or service agreements.",
  },

  {
    title: "Intellectual Property",
    desc: "All website content, branding, graphics, and service materials are protected and may not be copied without permission.",
  },

  {
    title: "Limitation of Liability",
    desc: "We are not liable for indirect damages, business interruptions, or losses arising from service misuse or external factors.",
  },

  {
    title: "Termination of Services",
    desc: "We reserve the right to suspend or terminate services in cases of policy violations or misuse of our services.",
  },

  {
    title: "Policy Updates",
    desc: "These terms and conditions may be updated periodically. Continued use of our services indicates acceptance of updated policies.",
  },
];

export default function TermsConditionsBody() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#33CCCC]/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#33CCCC]/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center rounded-full border border-[#33CCCC]/20 bg-[#33CCCC]/10 px-5 py-2 text-sm font-semibold text-[#33CCCC] backdrop-blur-xl">
            Terms & Conditions
          </div>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
            Professional &
            <span className="text-[#33CCCC]">
              {" "}
              Transparent Policies
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            These terms define the rules, responsibilities, and service
            conditions related to our technology products and business
            solutions.
          </p>
        </motion.div>

        {/* POLICY CARDS */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-[#33CCCC]/30 hover:shadow-2xl hover:shadow-[#33CCCC]/10"
            >
              {/* HOVER EFFECT */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-[#33CCCC]/10 via-transparent to-transparent" />
              </div>

              <div className="relative">
                <div className="inline-flex rounded-2xl border border-[#33CCCC]/20 bg-[#33CCCC]/10 px-4 py-2 text-sm font-semibold text-[#33CCCC]">
                  Policy Section
                </div>

                <h3 className="mt-6 text-2xl font-black text-white">
                  {section.title}
                </h3>

                <p className="mt-5 leading-relaxed text-slate-400">
                  {section.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-[40px] border border-[#33CCCC]/20 bg-gradient-to-br from-[#33CCCC] to-[#29B3B3] p-10 lg:p-14 shadow-2xl shadow-[#33CCCC]/20"
        >
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 max-w-4xl">
            <h3 className="text-4xl font-black leading-tight text-white md:text-5xl">
              Reliable Business & Technology Standards
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Our terms and conditions are designed to ensure transparent,
              secure, and professional relationships with every client
              and organization we serve.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}