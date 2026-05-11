"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
  faShieldHalved,
  faLock,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

export default function PrivacyPolicyHeader() {
  return (
    <section className="relative overflow-hidden bg-slate-950 mt-0 py-10">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#33CCCC]/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#33CCCC]/10 blur-3xl" />

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
              Privacy & Data Protection
            </div>

            {/* TITLE */}
            <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight text-white">
              Your Privacy
              <span className="block text-[#33CCCC]">
                Matters To Us
              </span>
            </h1>

            {/* DESC */}
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
              We are committed to protecting your personal information and
              ensuring transparency in how your data is collected, used,
              and secured while using our services and website.
            </p>

            
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            {/* <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#33CCCC]/10 via-transparent to-transparent" />

              <div className="relative space-y-6"> */}
                {/* CARD 1 */}
                {/* <div className="rounded-[28px] border border-white/10 bg-slate-900/60 p-6">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#33CCCC]/10 text-[#33CCCC]">
                      <FontAwesomeIcon
                        icon={faLock}
                        className="text-2xl"
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-black text-white">
                        Secure Information
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        We use secure systems and responsible practices
                        to safeguard user data.
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* CARD 2 */}
                {/* <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#33CCCC]/10 text-[#33CCCC]">
                      <FontAwesomeIcon
                        icon={faUserShield}
                        className="text-2xl"
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-black text-white">
                        User Privacy
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        Your information is handled responsibly and
                        never shared without consent.
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* BOTTOM BAR */}
                {/* <div className="rounded-[28px] border border-[#33CCCC]/20 bg-[#33CCCC]/5 px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[2px] text-[#33CCCC]">
                        Privacy Commitment
                      </p>

                      <h4 className="mt-2 text-2xl font-black text-white">
                        Safe & Transparent Policies
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
                            "Secure Data Handling",
                "Protected User Information",
                "Transparent Privacy Practices",
                "Trusted Business Policies",
            
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
              Privacy Policy
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}