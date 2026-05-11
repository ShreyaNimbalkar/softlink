"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowRight,
  faCircleCheck,
  faShieldHalved,
  faServer,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 min-h-screen flex items-center transition-colors duration-300">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#33CCCC]/20 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#33CCCC]/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* BADGE */}
            <div className="inline-flex items-center gap-3 rounded-full border border-[#33CCCC]/20 bg-[#33CCCC]/10 px-5 py-2.5 mb-8 backdrop-blur-xl">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-[#33CCCC]"
              />

              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Trusted IT Infrastructure Partner
              </span>
            </div>

            {/* HEADING */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] text-slate-900 dark:text-white">
              Online Solutions
              <span className="block text-[#33CCCC]">
                To Boost Your Business
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 text-base sm:text-lg lg:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl">
              We help businesses scale with enterprise networking,
              cloud infrastructure, security systems, hardware support,
              and managed IT services designed for reliability and growth.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#33CCCC] hover:bg-[#2EB8B8] px-8 py-4 text-white font-semibold transition-all duration-300 shadow-xl shadow-[#33CCCC]/20"
              >
                Get Consultation

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-white/10 px-8 py-4 font-semibold text-slate-700 dark:text-slate-200 hover:border-[#33CCCC] hover:text-[#33CCCC] transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 sm:gap-8 mt-14">
              {[
                ["12+", "Years Experience"],
                ["5000+", "Systems Supported"],
                ["24/7", "Technical Support"],
              ].map(([number, label], index) => (
                <div key={index}>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
                    {number}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* MAIN CARD */}
            <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-[0_20px_80px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              {/* IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                alt="IT Infrastructure"
                className="w-full h-[400px] sm:h-[550px] lg:h-[700px] object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* FLOATING INFO CARD */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-5 sm:p-6 shadow-2xl max-w-sm">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#33CCCC]/10 flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faServer}
                      className="text-[#33CCCC] text-xl"
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      Enterprise IT Solutions
                    </h4>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Secure and scalable infrastructure for businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING MINI CARDS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden md:flex absolute -left-10 top-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-5 shadow-2xl items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#33CCCC]/10 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="text-[#33CCCC]"
                />
              </div>

              <div>
                <h5 className="font-bold text-slate-900 dark:text-white">
                  Secure Systems
                </h5>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Advanced protection
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden md:flex absolute -right-8 bottom-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-5 shadow-2xl items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#33CCCC]/10 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faHeadset}
                  className="text-[#33CCCC]"
                />
              </div>

              <div>
                <h5 className="font-bold text-slate-900 dark:text-white">
                  24/7 Support
                </h5>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Dedicated assistance
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}