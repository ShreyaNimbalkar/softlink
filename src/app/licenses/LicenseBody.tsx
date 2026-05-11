"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faWindows,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";

import {
  faShieldHalved,
  faFileInvoiceDollar,
  faCheck,
  faXmark,
  faEnvelope,
  faPhone,
  faBuilding,
  faFileArrowDown,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

const licenses = [
  {
    icon: faMicrosoft,
    title: "Microsoft Licenses",
    desc: "Windows OS, Microsoft Office, Microsoft 365, Outlook, Teams, and enterprise productivity solutions.",
    quotation: "/quotations/Microsoft-Licenses.pdf",
  },

  {
    icon: faFileInvoiceDollar,
    title: "Tally Solutions",
    desc: "Tally Prime, accounting software, GST billing, inventory management, and business accounting licenses.",
    quotation: "/quotations/Tally-Solutions.pdf",
  },

  {
    icon: faShieldHalved,
    title: "Quick Heal Security",
    desc: "Antivirus, endpoint protection, internet security, and enterprise cybersecurity software solutions.",
    quotation: "/quotations/Quick-Heal-Security.pdf",
  },

  {
    icon: faWindows,
    title: "Business Software",
    desc: "Licensed software solutions for SMEs, offices, clinics, institutes, and enterprise organizations.",
    quotation: "/quotations/Business-Software.pdf",
  },
];

export default function LicenseBody() {
  const [openModal, setOpenModal] = useState(false);

  const [selectedLicense, setSelectedLicense] = useState("");

  const openLicenseModal = (license: string) => {
    setSelectedLicense(license);

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
          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-300 backdrop-blur-xl">
              Licensed Software Solutions
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
              Genuine Software
              <span className="bg-[#33CCCC] bg-clip-text text-transparent">
                {" "}
                Licensing Services
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Get authentic software licenses and subscriptions with proper
              activation, installation support, and affordable pricing for
              businesses and professionals.
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {licenses.map((license, index) => (
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
                {/* HOVER EFFECT */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10" />
                </div>

                {/* TOP LIGHT */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex flex-1 flex-col">
                  {/* ICON */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition duration-500 group-hover:scale-110 group-hover:bg-cyan-400/20">
                    <FontAwesomeIcon
                      icon={license.icon}
                      className="text-2xl"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-8 text-2xl font-black text-white">
                    {license.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-5 flex-1 leading-relaxed text-slate-400">
                    {license.desc}
                  </p>

                  {/* SUPPORT */}
                  <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-cyan-300">
                    <FontAwesomeIcon icon={faCheck} />
                    Genuine & Verified License
                  </div>

                  {/* BUTTONS */}
                  <div className="mt-auto flex flex-col gap-4 pt-10">
                    {/* REQUEST LICENSE */}
                    <button
                      onClick={() => openLicenseModal(license.title)}
                      className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#33CCCC] px-6 font-semibold text-slate-950 shadow-2xl shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]"
                    >
                      Request License

                      <FontAwesomeIcon
                        icon={faFileArrowDown}
                        className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                    {/* DOWNLOAD QUOTATION */}
                    <a
                      href={license.quotation}
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

      {/* MODAL */}
      <AnimatePresence>
        {openModal && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
            />

            {/* MODAL */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed left-1/2 top-1/2 z-50 w-[92%] max-w-2xl -translate-x-1/2 -translate-y-1/2"
            >
              <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[#07111f]/95 shadow-[0_0_80px_rgba(34,211,238,0.15)] backdrop-blur-2xl">
                {/* HEADER */}
                <div className="relative overflow-hidden border-b border-white/10 px-8 py-7">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent" />

                  <div className="relative flex items-start justify-between gap-6">
                    <div>
                      <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-cyan-300">
                        License Request
                      </div>

                      <h3 className="mt-5 text-3xl font-black text-white">
                        {selectedLicense}
                      </h3>

                      <p className="mt-3 text-slate-400">
                        Fill out the form and our licensing team will contact
                        you shortly.
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
                <form className="grid gap-5 p-8">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-3 block text-sm font-semibold text-slate-300">
                        Full Name
                      </label>

                      <div className="relative">
                        <FontAwesomeIcon
                          icon={faBuilding}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                          type="text"
                          placeholder="Enter full name"
                          className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] pl-12 pr-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
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
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                          type="tel"
                          placeholder="Enter phone number"
                          className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] pl-12 pr-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold text-slate-300">
                      Email Address
                    </label>

                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                      />

                      <input
                        type="email"
                        placeholder="Enter email address"
                        className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] pl-12 pr-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold text-slate-300">
                      Requirement Details
                    </label>

                    <textarea
                      rows={5}
                      placeholder="Tell us your software license requirement..."
                      className="w-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-sm font-semibold text-slate-950 shadow-2xl shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.01]"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}