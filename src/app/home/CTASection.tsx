"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowRight,
  faPhoneVolume,
  faShieldHalved,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-28 bg-slate-950">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-80px] h-80 w-80 rounded-full bg-[#33CCCC]/20 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-80px] h-80 w-80 rounded-full bg-[#33CCCC]/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(51,204,204,0.12),transparent_45%)]" />
      </div>

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
            px-8
            py-16
            md:px-16
            md:py-20
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          "
        >
          {/* INNER GLOW */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#33CCCC]/10 via-transparent to-transparent pointer-events-none" />

          {/* TOP BADGE */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#33CCCC]/20 bg-[#33CCCC]/10 px-5 py-2 text-sm font-semibold text-[#33CCCC]">
              <FontAwesomeIcon icon={faShieldHalved} />
              Enterprise IT Solutions
            </div>
          </div>

          {/* HEADING */}
          <div className="mx-auto mt-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">
              Ready To Upgrade Your
              <span className="block text-[#33CCCC]">
                IT Infrastructure?
              </span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-slate-300 max-w-3xl mx-auto">
              Build secure, scalable, and future-ready technology systems
              with professional IT support, networking, surveillance,
              server management, and infrastructure solutions tailored
              for your business.
            </p>
          </div>

          {/* FEATURE POINTS */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {[
              "24/7 Technical Support",
              "Enterprise Security",
              "Scalable Infrastructure",
              "Professional Consultation",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.05]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-slate-200
                  backdrop-blur-xl
                "
              >
                {item}
              </div>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#33CCCC]
                  px-8
                  py-4
                  font-bold
                  text-slate-950
                  transition-all
                  duration-300
                  hover:bg-[#2EB8B8]
                  shadow-2xl
                  shadow-[#33CCCC]/20
                "
              >
                Get Free Consultation

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/services"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.05]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#33CCCC]/40
                  hover:bg-[#33CCCC]/10
                "
              >
                <FontAwesomeIcon icon={faServer} />
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* SUPPORT CARD */}
          <div className="mt-16 flex justify-center">
            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                gap-5
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                px-6
                py-5
                backdrop-blur-xl
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#33CCCC]/15 text-[#33CCCC] text-xl">
                <FontAwesomeIcon icon={faPhoneVolume} />
              </div>

              <div className="text-center sm:text-left">
                <p className="text-sm text-slate-400">
                  Need immediate assistance?
                </p>

                <h4 className="mt-1 text-lg font-bold text-white">
                  Talk To Our IT Experts Today
                </h4>
              </div>

              <Link
                href="/contact"
                className="
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-slate-950
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Contact Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}