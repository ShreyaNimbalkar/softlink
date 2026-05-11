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
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faWifi,
    title: "Wired & Wireless Networking",
    desc: "Professional LAN, WiFi, structured cabling, and enterprise networking setup.",
    quotation: "/quotations/Wiered-networking.pdf",
  },

  {
    icon: faServer,
    title: "NAS & Server Setup",
    desc: "Secure NAS storage systems and centralized server infrastructure solutions.",
    quotation: "/quotations/NAS/Server.pdf",
  },

  {
    icon: faDesktop,
    title: "Hardware & Accessories",
    desc: "Old and new laptops, desktops, routers, projectors, and accessories.",
    quotation: "/quotations/Hardware & Accessories.pdf",
  },

  {
    icon: faPhoneVolume,
    title: "IP PBX Systems",
    desc: "Business communication systems with IP telephony and call management.",
    quotation: "/quotations/IP PBX Systems.pdf",
  },

  {
    icon: faVideo,
    title: "CCTV & Surveillance",
    desc: "Advanced security camera installation and monitoring infrastructure.",
    quotation: "/quotations/CCTV & Surveillance.pdf",
  },

  {
    icon: faFingerprint,
    title: "Attendance Systems",
    desc: "Biometric and smart attendance management systems for organizations.",
    quotation: "/quotations/Attendance Systems.pdf",
  },
];

export default function NetworkingBody() {
  const [openModal, setOpenModal] = useState(false);

  const [selectedService, setSelectedService] = useState("");

  const openServiceModal = (service: string) => {
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
      <section className="relative overflow-hidden bg-[#030712] py-28">
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ================= TOP ================= */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-300 backdrop-blur-xl">
              Networking Solutions
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
              Complete Business
              <span className="bg-[#33CCCC] bg-clip-text text-transparent">
                {" "}
                Networking Infrastructure
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              We design, install, configure, and maintain scalable
              networking infrastructure and enterprise communication
              systems for modern organizations.
            </p>
          </motion.div>

          {/* ================= SERVICES ================= */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_60px_rgba(34,211,238,0.12)]"
              >
                {/* HOVER BG */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10" />
                </div>

                {/* TOP LIGHT */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  {/* ICON */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition duration-500 group-hover:scale-110 group-hover:bg-cyan-400/20">
                    <FontAwesomeIcon
                      icon={service.icon}
                      className="text-2xl"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-8 text-2xl font-black text-white">
                    {service.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-5 leading-relaxed text-slate-400">
                    {service.desc}
                  </p>

                  {/* SUPPORT */}
                  <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-cyan-300">
                    <FontAwesomeIcon icon={faCheck} />

                    Enterprise Support
                  </div>

                  {/* BUTTONS */}
                  <div className="mt-auto flex flex-col gap-4 pt-10">
                    {/* REQUEST SERVICE */}
                    <button
                      onClick={() => openServiceModal(service.title)}
                      className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#33CCCC] px-6 font-semibold text-slate-950 shadow-2xl shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]"
                    >
                      Request Service

                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                    {/* DOWNLOAD QUOTATION */}
                    <a
                      href={service.quotation}
                      download
                      className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-6 font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#33CCCC] hover:text-slate-950"
                    >
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        className="text-sm"
                      />

                      Download Quotation
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            >
              <div className="relative w-full max-w-2xl overflow-hidden rounded-[36px] border border-white/10 bg-[#07111f]/95 shadow-[0_0_80px_rgba(34,211,238,0.15)] backdrop-blur-2xl">
                {/* TOP */}
                <div className="relative overflow-hidden border-b border-white/10 px-8 py-7">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent" />

                  <div className="relative flex items-start justify-between gap-6">
                    <div>
                      <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-cyan-300">
                        Service Inquiry
                      </div>

                      <h3 className="mt-5 text-3xl font-black text-white">
                        {selectedService}
                      </h3>

                      <p className="mt-3 text-slate-400">
                        Fill out the form and our team will contact you shortly.
                      </p>
                    </div>

                    <button
                      onClick={closeModal}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>
                </div>

                {/* FORM */}
                <div className="p-8">
                  <form className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-3 block text-sm font-semibold text-slate-300">
                        Full Name
                      </label>

                      <div className="relative">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] pl-14 pr-5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-semibold text-slate-300">
                        Email Address
                      </label>

                      <div className="relative">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] pl-14 pr-5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-semibold text-slate-300">
                        Phone Number
                      </label>

                      <div className="relative">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                          type="tel"
                          placeholder="Phone number"
                          className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] pl-14 pr-5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-semibold text-slate-300">
                        Company Name
                      </label>

                      <div className="relative">
                        <FontAwesomeIcon
                          icon={faBuilding}
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                          type="text"
                          placeholder="Company name"
                          className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] pl-14 pr-5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="mb-3 block text-sm font-semibold text-slate-300">
                        Requirement Details
                      </label>

                      <div className="relative">
                        <FontAwesomeIcon
                          icon={faCommentDots}
                          className="absolute left-5 top-6 text-slate-500"
                        />

                        <textarea
                          rows={5}
                          placeholder="Describe your networking requirement..."
                          className="w-full rounded-3xl border border-white/10 bg-white/[0.04] pl-14 pr-5 pt-5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-slate-950 shadow-2xl shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.01]"
                      >
                        Submit Inquiry

                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-sm"
                        />
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