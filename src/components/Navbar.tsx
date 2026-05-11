"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faXmark,
  faChevronDown,
  faArrowRight,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { name: "About", href: "/about" },

  {
    name: "Services",
    href: "/services",

    submenu: [
      {
        name: "Repair & Rental Services",
        href: "/repair-rental",
      },
      {
        name: "Networking Solutions",
        href: "/networking",
      },
      {
        name: "Software Licenses",
        href: "/licenses",
      },
    ],
  },

  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(false);

  const [mobileDropdown, setMobileDropdown] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // LOCK BODY SCROLL
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* ================= LOGO ================= */}
            <Link href="/" className="relative z-50 flex items-center">
              <div className="relative h-[90px] w-[90px] sm:h-[120px] sm:w-[120px]">
                <Image src="/softlink_logowht.png" alt="SoftLink Logo" fill priority className="object-contain drop-shadow-lg" sizes="(max-width: 640px) 90px, 120px"/>
              </div>
            </Link>

            {/* ================= DESKTOP MENU ================= */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.submenu ? (
                    <div className="relative" onMouseEnter={() => setOpenDropdown(true)} onMouseLeave={() => setOpenDropdown(false)}>
                      <button className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium hover:text-[#33CCCC] transition-all duration-300">
                        {link.name}

                        <FontAwesomeIcon icon={faChevronDown} className={`text-xs transition-transform duration-300 ${ openDropdown ? "rotate-180" : ""}`}/>
                      </button>

                      <AnimatePresence>
                        {openDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.25 }}
                            className="absolute top-12 left-0 w-72 overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl shadow-2xl"
                          >
                            <div className="p-3">
                              {link.submenu.map((item) => (
                                <Link key={item.name} href={item.href} className="group flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-[#33CCCC] transition-all duration-300">
                                  {item.name}

                                  <FontAwesomeIcon icon={faArrowRight} className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"/>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={link.href} className="relative text-slate-700 dark:text-slate-200 font-medium hover:text-[#33CCCC] transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#33CCCC] hover:after:w-full after:transition-all after:duration-300">
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* ================= RIGHT SIDE ================= */}
            <div className="hidden lg:flex items-center gap-4">
              {/* <ThemeToggle /> */}

              <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-[#33CCCC] hover:bg-[#2EB8B8] px-6 py-3 text-white font-semibold transition-all duration-300 shadow-xl shadow-[#33CCCC]/20">
                Get Consultation

                <FontAwesomeIcon icon={faArrowRight} className="text-sm group-hover:translate-x-1 transition-transform duration-300"/>
              </Link>
            </div>

            {/* ================= MOBILE ACTIONS ================= */}
            <div className="flex lg:hidden items-center gap-3 relative z-50">
              <button onClick={() => setMobileMenu(!mobileMenu)} className="w-11 h-11 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl flex items-center justify-center shadow-lg">
                <FontAwesomeIcon icon={mobileMenu ? faXmark : faBars} className="text-slate-800 dark:text-white text-lg"/>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
            />

            {/* MOBILE PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 24, stiffness: 220, }}
              className="fixed top-0 right-0 z-50 h-screen w-[88%] max-w-[380px] overflow-hidden lg:hidden"
            >
              <div className="relative flex h-full flex-col bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-white/10 shadow-2xl">
                {/* TOP SECTION */}
                <div className="relative px-6 pt-7 pb-6 border-b border-slate-200 dark:border-white/10 bg-gradient-to-br from-[#33CCCC]/10 to-transparent">
                  <div className="flex items-center justify-between">
                    {/* MOBILE LOGO */}
                    <Link href="/" onClick={() => setMobileMenu(false)} className="relative flex items-center">
                      <div className="relative h-[70px] w-[70px]">
                        <Image src="/softlink_logowht.png" alt="SoftLink Logo" fill priority className="object-contain"/>
                      </div>
                    </Link>

                    {/* CLOSE BUTTON */}
                    <button onClick={() => setMobileMenu(false)} className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-md">
                      <FontAwesomeIcon icon={faXmark} className="text-slate-700 dark:text-white"/>
                    </button>
                  </div>

                  {/* SMALL TEXT */}
                  <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    Enterprise-grade IT infrastructure & support solutions.
                  </p>
                </div>

                {/* NAVIGATION */}
                <div className="flex-1 overflow-y-auto px-6 py-6">
                  <div className="flex flex-col gap-3">
                    {navLinks.map((link) => (
                      <div key={link.name}>
                        {!link.submenu ? (
                          <Link href={link.href} onClick={() => setMobileMenu(false)} className="group flex items-center justify-between rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] px-5 py-4 text-base font-semibold text-slate-800 dark:text-white hover:border-[#33CCCC]/40 hover:bg-[#33CCCC]/5 transition-all duration-300">
                            {link.name}

                            <FontAwesomeIcon icon={faArrowRight} className="text-sm opacity-60 group-hover:translate-x-1 transition-transform duration-300"/>
                          </Link>
                        ) : (
                          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] overflow-hidden">
                            <button onClick={() => setMobileDropdown(!mobileDropdown)} className="flex w-full items-center justify-between px-5 py-4 text-base font-semibold text-slate-800 dark:text-white">
                              {link.name}

                              <motion.div
                                animate={{ rotate: mobileDropdown ? 180 : 0,}}
                                transition={{ duration: 0.3 }}
                              >
                                <FontAwesomeIcon icon={faChevronDown} className="text-sm"/>
                              </motion.div>
                            </button>

                            <AnimatePresence>
                              {mobileDropdown && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0,}}
                                  animate={{ opacity: 1, height: "auto",}}
                                  exit={{ opacity: 0, height: 0,}}
                                  transition={{ duration: 0.25 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-3 pb-4 flex flex-col gap-2">
                                    {link.submenu.map((item) => (
                                      <Link key={item.name} href={item.href} onClick={() => setMobileMenu(false)} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-slate-600 dark:text-slate-300 hover:bg-[#33CCCC]/10 hover:text-[#33CCCC] transition-all duration-300">
                                        {item.name}

                                        <FontAwesomeIcon icon={faArrowRight} className="text-xs"/>
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* CTA CARD */}
                  <div className="mt-8 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#33CCCC] to-[#29B3B3] p-6 text-white shadow-2xl shadow-[#33CCCC]/20">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5 backdrop-blur-md">
                      <FontAwesomeIcon icon={faPhone} className="text-xl"/>
                    </div>

                    <h3 className="text-2xl font-black leading-tight">
                      Need IT Support?
                    </h3>

                    <p className="mt-3 text-white/80 leading-relaxed text-sm">
                      Get reliable technology consultation and enterprise-grade
                      support solutions for your business.
                    </p>

                    <Link href="/contact" onClick={() => setMobileMenu(false)} className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-[#33CCCC] shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      Contact Us

                      <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}