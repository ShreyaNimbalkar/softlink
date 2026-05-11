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
} from "@fortawesome/free-solid-svg-icons";

const licenses = [
  {
    icon: faMicrosoft,
    title: "Microsoft Licenses",
    desc: "Windows OS, Microsoft Office, Microsoft 365, Outlook, Teams, and enterprise productivity solutions.",
  },

  {
    icon: faFileInvoiceDollar,
    title: "Tally Solutions",
    desc: "Tally Prime, accounting software, GST billing, inventory management, and business accounting licenses.",
  },

  {
    icon: faShieldHalved,
    title: "Quick Heal Security",
    desc: "Antivirus, endpoint protection, internet security, and enterprise cybersecurity software solutions.",
  },

  {
    icon: faWindows,
    title: "Business Software",
    desc: "Licensed software solutions for SMEs, offices, clinics, institutes, and enterprise organizations.",
  },
];

export default function LicenseBody() {
  const [openModal, setOpenModal] = useState(false);

  const [selectedLicense, setSelectedLicense] = useState("");

  const openLicenseModal = (license :string) => {
    setSelectedLicense(license);

    setOpenModal(true);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-white py-28 dark:bg-slate-950">
        {/* GLOW */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#33CCCC]/10 blur-3xl" />
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
            <div className="inline-flex items-center rounded-full border border-[#33CCCC]/20 bg-[#33CCCC]/10 px-5 py-2 text-sm font-semibold text-[#33CCCC]">
              Licensed Software Solutions
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-black leading-tight text-slate-900 dark:text-white">
              Genuine Software
              <span className="text-[#33CCCC]">
                {" "}
                Licensing Services
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Get authentic software licenses and subscriptions with proper
              activation, installation support, and affordable pricing for
              businesses and professionals.
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {licenses.map((license, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{duration: 0.5, delay: index * 0.1,}}
                viewport={{ once: true }}
                whileHover={{ y: -8,}}
                className="group relative flex min-h-[380px] flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:border-[#33CCCC]/30 hover:shadow-2xl hover:shadow-[#33CCCC]/10 dark:border-white/10 dark:bg-white/[0.03]">
                {/* HOVER EFFECT */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#33CCCC]/10 via-transparent to-transparent" />
                </div>

                <div className="relative flex flex-1 flex-col">
                  {/* ICON */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#33CCCC]/10 text-[#33CCCC]">
                    <FontAwesomeIcon
                      icon={license.icon}
                      className="text-2xl"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-8 text-2xl font-black text-slate-900 dark:text-white">
                    {license.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-5 flex-1 leading-relaxed text-slate-600 dark:text-slate-400">
                    {license.desc}
                  </p>

                  {/* SUPPORT */}
                  <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-[#33CCCC]">
                    <FontAwesomeIcon icon={faCheck} />

                    Genuine & Verified License
                  </div>

                  {/* BUTTON */}
                  <button onClick={() => openLicenseModal(license.title)} className="mt-8 rounded-2xl bg-[#33CCCC] px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#2EB8B8]">
                    Request License
                  </button>
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
              onClick={() => setOpenModal(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
            />

            {/* MODAL */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.3 }}
              className="fixed left-1/2 top-1/2 z-50 w-[92%] max-w-2xl -translate-x-1/2 -translate-y-1/2"
            >
              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-950">
                {/* HEADER */}
                <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6 dark:border-white/10">
                  <div>
                    <p className="text-sm font-semibold text-[#33CCCC]">
                      License Request
                    </p>

                    <h3 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
                      {selectedLicense}
                    </h3>
                  </div>

                  <button onClick={() => setOpenModal(false)} className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 transition hover:bg-slate-200 dark:bg-white/10">
                    <FontAwesomeIcon icon={faXmark} className="text-slate-700 dark:text-white"/>
                  </button>
                </div>

                {/* FORM */}
                <form className="grid gap-5 p-8">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Full Name
                      </label>

                      <div className="relative">
                        <FontAwesomeIcon icon={faBuilding} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>

                        <input type="text" placeholder="Enter full name" className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 outline-none transition focus:border-[#33CCCC] dark:border-white/10 dark:bg-white/[0.03]"/>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Phone Number
                      </label>

                      <div className="relative">
                        <FontAwesomeIcon icon={faPhone} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>

                        <input type="tel" placeholder="Enter phone number" className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 outline-none transition focus:border-[#33CCCC] dark:border-white/10 dark:bg-white/[0.03]"/>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Email Address
                    </label>

                    <div className="relative">
                      <FontAwesomeIcon icon={faEnvelope} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>

                      <input type="email" placeholder="Enter email address" className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 outline-none transition focus:border-[#33CCCC] dark:border-white/10 dark:bg-white/[0.03]"/>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Requirement Details
                    </label>

                    <textarea rows={5} placeholder="Tell us your software license requirement..." className="w-full rounded-2xl border border-slate-200 bg-white p-4 outline-none transition focus:border-[#33CCCC] dark:border-white/10 dark:bg-white/[0.03]"/>
                  </div>

                  <button type="submit" className="mt-2 h-14 rounded-2xl bg-[#33CCCC] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2EB8B8]">
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