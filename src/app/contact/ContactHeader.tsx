"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
  faPhone,
  faEnvelope,
  faLocationDot,
  faHeadset,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactHeader() {
  return (
    <section className="relative overflow-hidden bg-slate-950 mt-0 py-10">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#33CCCC]/20 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#33CCCC]/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* TAG */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#33CCCC]/20 bg-[#33CCCC]/10 px-5 py-2 text-sm font-semibold text-[#33CCCC] backdrop-blur-xl">
              Contact Our IT Experts
            </div>

            {/* TITLE */}
            <h1 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
              Let's Build Your
              <span className="block text-[#33CCCC]">
                Technology Infrastructure
              </span>
            </h1>

            {/* DESC */}
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
              Connect with our team for networking solutions, software
              licenses, CCTV systems, IT infrastructure, technical support,
              and enterprise technology consultation services.
            </p>

            
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            {/* <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-[#33CCCC]/10 backdrop-blur-2xl"> */}
              {/* HOVER EFFECT */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-[#33CCCC]/10 via-transparent to-transparent" />

              <div className="relative space-y-6"> */}
                {/* CARD 1 */}
                {/* <div className="rounded-[28px] border border-white/10 bg-slate-900/60 p-6">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#33CCCC]/10 text-[#33CCCC]">
                      <FontAwesomeIcon
                        icon={faHeadset}
                        className="text-2xl"
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-black text-white">
                        Dedicated Support
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        Our experts are available to assist with networking,
                        security systems, and enterprise IT solutions.
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* CONTACT CARDS */}
                {/* <div className="grid grid-cols-2 gap-5">
                  <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#33CCCC]/10 text-[#33CCCC]">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-2xl"
                      />
                    </div>

                    <h4 className="mt-5 text-lg font-black text-white">
                      Call Us
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      Speak directly with our technical team.
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#33CCCC]/10 text-[#33CCCC]">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-2xl"
                      />
                    </div>

                    <h4 className="mt-5 text-lg font-black text-white">
                      Email Support
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      Send your requirements and queries anytime.
                    </p>
                  </div>
                </div> */}

                {/* BOTTOM BAR */}
                {/* <div className="rounded-[28px] border border-[#33CCCC]/20 bg-[#33CCCC]/5 px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[2px] text-[#33CCCC]">
                        Office Location
                      </p>

                      <h4 className="mt-2 text-2xl font-black text-white">
                        Visit Our Office
                      </h4>
                    </div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#33CCCC] text-white shadow-xl shadow-[#33CCCC]/20">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* FEATURES */}
            <div className="mt-10 flex flex-col gap-4">
  {[
    "Professional IT Consultation",
    "Fast Technical Support",
    "Enterprise Solutions",
    "Reliable Service Assistance",
  ].map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#33CCCC]/10 text-[#33CCCC]">
        <FontAwesomeIcon icon={faCheck} />
      </div>

      <p className="text-sm font-semibold text-slate-200">
        {item}
      </p>
    </div>
  ))}
</div>
          </motion.div>
        </div>

        {/* BREADCRUMB */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-xl">
            <Link
              href="/"
              className="text-sm font-medium text-slate-400 transition hover:text-[#33CCCC]"
            >
              Home
            </Link>

            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-[10px] text-slate-500"
            />

            <span className="text-sm font-semibold text-[#33CCCC]">
              Contact Us
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}