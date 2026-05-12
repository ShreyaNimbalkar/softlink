"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
  faNetworkWired,
  faLaptop,
  faVideo,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

export default function LicenseHero() {
  return (
    // <section className="relative overflow-hidden bg-slate-950 pt-36 pb-20">
    <section className="relative overflow-hidden bg-slate-950 mt-0 py-10">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#33CCCC]/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#33CCCC]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* TAG */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#33CCCC]/30 bg-[#33CCCC]/10 px-5 py-2 text-sm font-semibold text-[#33CCCC]">
              Software Licensing Solutions
            </div>

            {/* TITLE */}
            <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight text-white">
              Genuine Software
              <span className="block text-[#33CCCC]">
                Licenses & Subscriptions
              </span>
            </h1>

            {/* DESC */}
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
              We provide genuine Microsoft, Tally, Quick Heal, antivirus,
              productivity, and enterprise software licenses at competitive
              pricing for businesses, offices, institutes, and organizations.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            {/* <div className="hidden lg:block relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"> */}
            {/* TOP CARD */}
            {/* SERVICE 1 */}
            {/* <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8"> */}
            {/* SERVICE 1 */}
            {/* <div className="flex items-start gap-5">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#33CCCC]/20 text-[#33CCCC]">
      <FontAwesomeIcon
        icon={faNetworkWired}
        className="text-2xl"
      />
    </div>

    <div>
      <h4 className="text-[18px] font-semibold text-white">
        Network Setup
      </h4>

      <p className="mt-1 text-sm leading-relaxed text-slate-400">
        Wired, wireless & NAS solutions for offices and businesses
      </p>
    </div>
  </div> */}

            {/* SERVICE 2 */}
            {/* <div className="flex items-start gap-5 mt-5">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#33CCCC]/20 text-[#33CCCC]">
      <FontAwesomeIcon
        icon={faLaptop}
        className="text-2xl"
      />
    </div>

    <div>
      <h4 className="text-[18px] font-semibold text-white">
        Laptop & Desktop Sales
      </h4>

      <p className="mt-1 text-sm leading-relaxed text-slate-400">
        Old/new laptops, desktops & IT accessories available
      </p>
    </div>
  </div> */}

            {/* SERVICE 3 */}
            {/* <div className="flex items-start gap-5 mt-5">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#33CCCC]/20 text-[#33CCCC]">
      <FontAwesomeIcon
        icon={faVideo}
        className="text-2xl"
      />
    </div>

    <div>
      <h4 className="text-[18px] font-semibold text-white">
        CCTV & Security Systems
      </h4>

      <p className="mt-1 text-sm leading-relaxed text-slate-400">
        CCTV, attendance machines & IP PBX security solutions
      </p>
    </div>
  </div> */}

            {/* SERVICE 4 */}
            {/* <div className="flex items-start gap-5 mt-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#33CCCC]/20 text-[#33CCCC]">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-2xl"/>
                  </div>

                  <div>
                    <h4 className="text-[18px] font-semibold text-white">
                      Software Licenses
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      Microsoft, Tally, Quick-Heal & other software licenses at
                      affordable prices
                    </p>
                  </div>
                </div>
              </div> */}

            {/* SMALL CARDS */}
            {/* <div className="mt-6 grid grid-cols-2 gap-5">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#33CCCC]/10 text-[#33CCCC]">
                    <FontAwesomeIcon icon={faComputer} className="text-2xl"/>
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-white">
                    Rental Systems
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    Computers, laptops & accessories
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#33CCCC]/10 text-[#33CCCC]">
                    <FontAwesomeIcon
                      icon={faCamera}
                      className="text-2xl"
                    />
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-white">
                    CCTV Solutions
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    Security cameras & surveillance systems
                  </p>
                </div>
              </div> */}
            {/* </div> */}
            <div className="mt-10 flex flex-col gap-4">
              {[
                "Rental Systems : Computers, laptops & accessories",

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

        {/* ================= BREADCRUMB ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl">
            <Link href="/" className="text-sm font-medium text-slate-400 transition hover:text-[#33CCCC]">
              Home
            </Link>

            <FontAwesomeIcon icon={faChevronRight} className="text-[10px] text-slate-500" />

            <Link href="/services" className="text-sm font-medium text-slate-400 transition hover:text-[#33CCCC]">
              Services
            </Link>

            <FontAwesomeIcon icon={faChevronRight} className="text-[10px] text-slate-500" />

            <span className="text-sm font-semibold text-[#33CCCC]">
              Software Licenses
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function LicenseHero() {
//   return (
//     <section className="relative overflow-hidden bg-slate-950 pt-40 pb-24">
//       {/* BACKGROUND GLOW */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#33CCCC]/20 blur-3xl" />

//         <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
//       </div>

//       {/* GRID */}
//       <div className="absolute inset-0 opacity-[0.04]">
//         <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="max-w-4xl"
//         >
//           {/* LABEL */}
//           <div className="inline-flex items-center rounded-full border border-[#33CCCC]/20 bg-[#33CCCC]/10 px-5 py-2 text-sm font-semibold text-[#33CCCC] backdrop-blur-xl">
//             Software Licensing Solutions
//           </div>

//           {/* TITLE */}
//           <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white">
//             Genuine Software
//             <span className="block text-[#33CCCC]">
//               Licenses & Subscriptions
//             </span>
//           </h1>

//           {/* DESCRIPTION */}
//           <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
//             We provide genuine Microsoft, Tally, Quick Heal, antivirus,
//             productivity, and enterprise software licenses at competitive
//             pricing for businesses, offices, institutes, and organizations.
//           </p>
//         </motion.div>

//         {/* BREADCRUMB */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="mt-20 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-slate-400"
//         >
//           <Link
//             href="/"
//             className="transition hover:text-[#33CCCC]"
//           >
//             Home
//           </Link>

//           <span>/</span>

//           <Link
//             href="/services"
//             className="transition hover:text-[#33CCCC]"
//           >
//             Services
//           </Link>

//           <span>/</span>

//           <span className="text-white">
//             Licenses
//           </span>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
