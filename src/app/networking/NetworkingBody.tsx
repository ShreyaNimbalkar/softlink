"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faWifi,
  faServer,
  faDesktop,
  faVideo,
  faPhoneVolume,
  faFingerprint,
  faCheck,
  faArrowRight,
  faXmark,
  faUser,
  faEnvelope,
  faPhone,
  faBuilding,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faWifi,
    title: "Wired & Wireless Networking",
    desc: "Professional LAN, WiFi, structured cabling, and enterprise networking setup.",
  },

  {
    icon: faServer,
    title: "NAS & Server Setup",
    desc: "Secure NAS storage systems and centralized server infrastructure solutions.",
  },

  {
    icon: faDesktop,
    title: "Hardware & Accessories",
    desc: "Old and new laptops, desktops, routers, projectors, and accessories.",
  },

  {
    icon: faPhoneVolume,
    title: "IP PBX Systems",
    desc: "Business communication systems with IP telephony and call management.",
  },

  {
    icon: faVideo,
    title: "CCTV & Surveillance",
    desc: "Advanced security camera installation and monitoring infrastructure.",
  },

  {
    icon: faFingerprint,
    title: "Attendance Systems",
    desc: "Biometric and smart attendance management systems for organizations.",
  },
];

export default function NetworkingBody() {
  const [openModal, setOpenModal] = useState(false);

  const [selectedService, setSelectedService] = useState("");

  const openServiceModal = (service :string) => {
    setSelectedService(service);

    setOpenModal(true);

    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setOpenModal(false);

    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section className="relative overflow-hidden bg-white py-28 dark:bg-slate-950">
        {/* GLOW */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-[#33CCCC]/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TOP */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center rounded-full border border-[#33CCCC]/20 bg-[#33CCCC]/10 px-5 py-2 text-sm font-semibold text-[#33CCCC]">
              Networking Solutions
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 dark:text-white md:text-5xl">
              Complete Business
              <span className="text-[#33CCCC]">
                {" "}
                Networking Infrastructure
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              We design, install, configure, and maintain scalable networking
              infrastructure and enterprise communication systems for modern
              organizations.
            </p>
          </motion.div>

          {/* SERVICES */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{duration: 0.5, delay: index * 0.1,}}
                viewport={{ once: true }}
                whileHover={{ y: -8,}}
                className="group relative flex min-h-[380px] flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:border-[#33CCCC]/30 hover:shadow-2xl hover:shadow-[#33CCCC]/10 dark:border-white/10 dark:bg-white/[0.03]">
                {/* HOVER BG */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#33CCCC]/10 via-transparent to-transparent" />
                </div>

                <div className="relative flex h-full flex-col">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#33CCCC]/10 text-[#33CCCC]">
                    <FontAwesomeIcon icon={service.icon} className="text-2xl"/>
                  </div>

                  <h3 className="mt-8 text-2xl font-black text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-400">
                    {service.desc}
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#33CCCC]">
                    <FontAwesomeIcon icon={faCheck} />

                    Enterprise Support
                  </div>

                  {/* BUTTON */}
                  <div className="mt-auto pt-10">
                    <button onClick={() => openServiceModal(service.title)} className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#33CCCC] px-6 py-4 font-semibold text-white shadow-xl shadow-[#33CCCC]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#29B3B3]">
                      Request Service

                      <FontAwesomeIcon icon={faArrowRight} className="text-sm transition-transform duration-300 group-hover:translate-x-1"/>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {openModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            >
              <div className="relative w-full max-w-2xl overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-950">
                {/* TOP */}
                <div className="relative overflow-hidden border-b border-slate-200 px-8 py-7 dark:border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#33CCCC]/10 to-transparent" />

                  <div className="relative flex items-start justify-between gap-6">
                    <div>
                      <div className="inline-flex items-center rounded-full border border-[#33CCCC]/20 bg-[#33CCCC]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#33CCCC]">
                        Service Inquiry
                      </div>

                      <h3 className="mt-5 text-3xl font-black text-slate-900 dark:text-white">
                        {selectedService}
                      </h3>
                    </div>

                    <button onClick={closeModal} className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-[#33CCCC] hover:text-[#33CCCC] dark:border-white/10 dark:bg-slate-900 dark:text-white">
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>
                </div>

                {/* FORM */}
                <div className="p-8">
                  <form className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Full Name
                      </label>

                      <div className="relative">
                        <FontAwesomeIcon icon={faUser} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"/>

                        <input type="text" placeholder="Enter your name" className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-14 pr-5 outline-none transition focus:border-[#33CCCC] dark:border-white/10 dark:bg-slate-900 dark:text-white"/>
                      </div>
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Email Address
                      </label>

                      <div className="relative">
                        <FontAwesomeIcon icon={faEnvelope} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"/>

                        <input type="email" placeholder="Enter your email" className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-14 pr-5 outline-none transition focus:border-[#33CCCC] dark:border-white/10 dark:bg-slate-900 dark:text-white"/>
                      </div>
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Phone Number
                      </label>

                      <div className="relative">
                        <FontAwesomeIcon icon={faPhone} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"/>

                        <input type="tel" placeholder="Phone number" className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-14 pr-5 outline-none transition focus:border-[#33CCCC] dark:border-white/10 dark:bg-slate-900 dark:text-white"/>
                      </div>
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Company Name
                      </label>

                      <div className="relative">
                        <FontAwesomeIcon icon={faBuilding} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"/>

                        <input type="text" placeholder="Company name" className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-14 pr-5 outline-none transition focus:border-[#33CCCC] dark:border-white/10 dark:bg-slate-900 dark:text-white"/>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Requirement Details
                      </label>

                      <div className="relative">
                        <FontAwesomeIcon icon={faCommentDots} className="absolute left-5 top-6 text-slate-400"/>

                        <textarea rows={5} placeholder="Describe your networking requirement..." className="w-full rounded-3xl border border-slate-200 bg-white pl-14 pr-5 pt-5 outline-none transition focus:border-[#33CCCC] dark:border-white/10 dark:bg-slate-900 dark:text-white"/>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <button type="submit" className="inline-flex items-center gap-3 rounded-2xl bg-[#33CCCC] px-8 py-4 font-semibold text-white shadow-xl shadow-[#33CCCC]/20 transition-all duration-300 hover:scale-[1.01] hover:bg-[#29B3B3]">
                        Submit Inquiry

                        <FontAwesomeIcon icon={faArrowRight} className="text-sm"/>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}