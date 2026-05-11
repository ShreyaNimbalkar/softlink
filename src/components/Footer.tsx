"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const quickLinks = [
  "Home",
  "About",
  "Contact",
];

const services = [
  "Repair & Rental Services",
  "Networking Solutions",
  "Software License",
];

const socials = [
  {
    icon: faFacebookF,
    href: "#",
  },

  {
    icon: faInstagram,
    href: "#",
  },

  {
    icon: faLinkedinIn,
    href: "#",
  },

  {
    icon: faTwitter,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#33CCCC]/20 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#33CCCC]/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10">
        {/* TOP CTA STRIP */}
        {/* <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div
              className="
                rounded-[36px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                px-6
                py-8
                lg:px-10
                flex
                flex-col
                lg:flex-row
                items-center
                justify-between
                gap-8
              "
            >
              <div>
                <p className="text-[#33CCCC] font-semibold uppercase tracking-[3px] text-sm">
                  IT Infrastructure Solutions
                </p>

                <h2 className="mt-3 text-3xl md:text-4xl font-black text-white leading-tight">
                  Let’s Build Smarter
                  <span className="text-[#33CCCC]"> Technology</span>
                </h2>
              </div>

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#33CCCC]
                  px-7
                  py-4
                  text-slate-950
                  font-bold
                  transition-all
                  duration-300
                  hover:bg-[#2EB8B8]
                  shadow-xl
                  shadow-[#33CCCC]/20
                "
              >
                Get Consultation

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div> */}

        {/* MAIN FOOTER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
          <div className="grid gap-14 lg:grid-cols-4 md:grid-cols-2 border-b border-white/10 pb-16">
            {/* COMPANY */}
            <div>
              {/* LOGO */}
              <Link href="/" className="inline-block">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="relative h-24 w-24 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <Image src="/softlink_logowht.png" alt="SoftLink Logo" fill priority className="object-contain p-2" />
                </motion.div>
              </Link>

              {/* <h2 className="mt-6 text-2xl font-black">
                SoftLink IT Solutions
              </h2> */}

              <p className="mt-5 text-sm leading-relaxed text-slate-400 text-justify">
                Delivering enterprise-grade IT infrastructure,
                networking, CCTV surveillance, maintenance, cloud,
                security, and technology solutions for modern businesses.
              </p>

              {/* SOCIALS */}
              <div className="mt-8 flex items-center gap-4">
                {socials.map((social, index) => (
                  <motion.a key={index} href={social.href} whileHover={{y: -4, scale: 1.05,}}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:border-[#33CCCC]/30 hover:bg-[#33CCCC] hover:text-slate-950">
                    <FontAwesomeIcon icon={social.icon} className="text-sm"/>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-xl font-bold text-white mb-7">
                Quick Links
              </h3>

              <div className="flex flex-col gap-4">
                {quickLinks.map((item, index) => (
                  <Link key={index} href="/" className="group flex items-center gap-3 text-slate-400 transition-all duration-300 hover:text-[#33CCCC]">
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs transition-transform duration-300 group-hover:translate-x-1"/>
                    <span>{item}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-xl font-bold text-white mb-7">
                Services
              </h3>

              <div className="flex flex-col gap-4">
                {services.map((item, index) => (
                  <Link key={index} href="/" className="group flex items-center gap-3 text-slate-400 transition-all duration-300 hover:text-[#33CCCC]">
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs transition-transform duration-300 group-hover:translate-x-1"/>
                    <span>{item}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-xl font-bold text-white mb-7">
                Contact Us
              </h3>

              <div className="flex flex-col gap-6">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 text-[#33CCCC]">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>

                  <p className="text-sm leading-relaxed text-slate-400">
                    Your Office Address Here,
                    <br />
                    Maharashtra, India
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4"
                >
                  <div className="text-[#33CCCC]">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>

                  <p className="text-sm text-slate-400">
                    +91 98765 43210
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4"
                >
                  <div className="text-[#33CCCC]">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>

                  <p className="text-sm text-slate-400">
                    info@softlink.com
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-sm text-slate-500 text-center md:text-left">
              © 2026 SoftLink IT Solutions. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-slate-500">
              <Link href="/" className="hover:text-[#33CCCC] transition" >
                Privacy Policy
              </Link>

              <Link href="/" className="hover:text-[#33CCCC] transition" >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}