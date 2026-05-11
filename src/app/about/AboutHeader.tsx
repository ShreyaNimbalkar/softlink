"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
  faShieldHalved,
  faCheck,
  faFileShield,
  faLaptopCode,
  faCircleNodes,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutHeader() {
  return (
    <section className="relative overflow-hidden bg-slate-950 mt-0 py-10">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* GLOW */}
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#33CCCC]/15 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#33CCCC]/10 blur-3xl" />

        {/* GRID */}
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
              Trusted IT Infrastructure & Software Solutions
            </div>

            {/* TITLE */}
            <h1 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
              Smart Technology
              <span className="block text-[#33CCCC]">
                For Modern Businesses
              </span>
            </h1>

            {/* DESC */}
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
              We deliver professional networking infrastructure, software
              licensing, CCTV surveillance, server setup, and enterprise IT
              solutions tailored for offices, institutes, SMEs, clinics, and
              organizations.
            </p>

            {/* FEATURES */}
            {/* <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Enterprise IT Solutions",
                "Networking Infrastructure",
                "Licensed Software Support",
                "Professional Technical Team",
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
            </div> */}

            {/* CTA */}
            {/* <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 rounded-2xl bg-[#33CCCC] px-7 py-4 font-semibold text-white shadow-xl shadow-[#33CCCC]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#29B3B3]"
              >
                Explore Services

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-[#33CCCC]/40 hover:bg-[#33CCCC]/10"
              >
                Contact Us
              </Link>
            </div> */}
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            {/* <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"> */}
              {/* HOVER EFFECT */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-[#33CCCC]/10 via-transparent to-transparent" />

              <div className="relative space-y-6"> */}
                {/* CARD 1 */}
                {/* <div className="rounded-[28px] border border-white/10 bg-slate-900/60 p-6">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#33CCCC]/10 text-[#33CCCC]">
                      <FontAwesomeIcon
                        icon={faCircleNodes}
                        className="text-2xl"
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-black text-white">
                        Networking Infrastructure
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        Wired, wireless, NAS, server setup, and enterprise
                        communication systems for organizations.
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* CARD 2 */}
                {/* <div className="grid grid-cols-2 gap-5">
                  <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#33CCCC]/10 text-[#33CCCC]">
                      <FontAwesomeIcon
                        icon={faFileShield}
                        className="text-2xl"
                      />
                    </div>

                    <h4 className="mt-5 text-lg font-black text-white">
                      Security Systems
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      CCTV surveillance, attendance systems, and enterprise
                      security infrastructure.
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#33CCCC]/10 text-[#33CCCC]">
                      <FontAwesomeIcon
                        icon={faLaptopCode}
                        className="text-2xl"
                      />
                    </div>

                    <h4 className="mt-5 text-lg font-black text-white">
                      Software Licensing
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      Genuine Microsoft, Tally, Quick Heal & business software
                      licenses.
                    </p>
                  </div>
                </div> */}

                {/* BOTTOM BAR */}
                {/* <div className="rounded-[28px] border border-[#33CCCC]/20 bg-[#33CCCC]/5 px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[2px] text-[#33CCCC]">
                        Business Technology
                      </p>

                      <h4 className="mt-2 text-2xl font-black text-white">
                        Complete IT Solutions
                      </h4>
                    </div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#33CCCC] text-white shadow-xl shadow-[#33CCCC]/20">
                      <FontAwesomeIcon
                        icon={faShieldHalved}
                        className="text-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="mt-10 flex flex-col gap-4">
  {[
    "Enterprise IT Solutions",
                "Networking Infrastructure",
                "Licensed Software Support",
                "Professional Technical Team",
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
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl">
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
              About Us
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}