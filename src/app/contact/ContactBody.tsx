"use client";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faPaperPlane,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const contactInfo = [
  {
    icon: faPhone,
    title: "Phone Number",
    value: "+91 98765 43210",
  },

  {
    icon: faEnvelope,
    title: "Email Address",
    value: "info@yourcompany.com",
  },

  {
    icon: faLocationDot,
    title: "Office Address",
    value: "Your Office Address Here",
  },

  {
    icon: faClock,
    title: "Working Hours",
    value: "Mon - Sat : 9:00 AM - 7:00 PM",
  },
];

export default function ContactBody() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* GLOW */}
        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-[#33CCCC]/20 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-[#33CCCC]/10 blur-3xl" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* TAG */}
            <div className="inline-flex items-center rounded-full border border-[#33CCCC]/20 bg-[#33CCCC]/10 px-5 py-2 text-sm font-semibold text-[#33CCCC] backdrop-blur-xl">
              Get In Touch
            </div>

            {/* TITLE */}
            <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
              Contact Our
              <span className="text-[#33CCCC]">
                {" "}
                Expert Team
              </span>
            </h2>

            {/* DESC */}
            <p className="mt-8 text-lg leading-relaxed text-slate-300">
              Have questions about networking solutions, CCTV systems,
              software licenses, or IT infrastructure? Reach out to our
              team and we’ll help you find the right technology solution
              for your business.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-10 grid gap-5">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#33CCCC]/30 hover:shadow-2xl hover:shadow-[#33CCCC]/10"
                >
                  {/* HOVER EFFECT */}
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#33CCCC]/10 via-transparent to-transparent" />
                  </div>

                  <div className="relative flex items-start gap-5">
                    {/* ICON */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#33CCCC]/10 text-[#33CCCC]">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-xl"
                      />
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h4 className="text-lg font-black text-white">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-2xl shadow-[#33CCCC]/10 backdrop-blur-2xl">
              {/* HOVER EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#33CCCC]/10 via-transparent to-transparent" />

              {/* HEADER */}
              <div className="relative border-b border-white/10 px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#33CCCC]/10 text-[#33CCCC]">
                    <FontAwesomeIcon
                      icon={faHeadset}
                      className="text-2xl"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#33CCCC]">
                      Send Message
                    </p>

                    <h3 className="mt-1 text-3xl font-black text-white">
                      Request Consultation
                    </h3>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <form className="relative grid gap-5 p-8">
                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-[#33CCCC]"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-[#33CCCC]"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-[#33CCCC]"
                  />

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-[#33CCCC]"
                  />
                </div>

                <textarea
                  rows={6}
                  placeholder="Tell us about your requirement..."
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-[#33CCCC]"
                />

                <button
                  type="submit"
                  className="group inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-[#33CCCC] px-6 font-semibold text-white shadow-xl shadow-[#33CCCC]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#2EB8B8]"
                >
                  Send Message

                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}