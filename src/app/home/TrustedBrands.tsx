"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  {
    name: "Acer",
    logo: "/acer-laptop-logo-8.07.39-PM.webp",
  },
  {
    name: "Asus",
    logo: "/asus-laptop-logo.webp",
  },
  {
    name: "HP",
    logo: "/hp.webp",
  },
  {
    name: "IBall",
    logo: "/iball-laptop-logo.webp",
  },
  {
    name: "Intel",
    logo: "/intel-laptop-logo.png",
  },
  {
    name: "Lenovo",
    logo: "/lenovo-laptop-logo.png",
  },
  {
    name: "Microsoft",
    logo: "/microsoft-laptop-logo.webp",
  },
  {
    name: "MSI",
    logo: "/msi-laptop-logo.webp",
  },
  {
    name: "Sony Vaio",
    logo: "/sony-vaio-laptop-logo.png",
  },
  {
    name: "Toshiba",
    logo: "/toshiba-laptop-logo.png",
  },
];

export default function TrustedBrands() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-slate-950 text-white py-20">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#33CCCC]/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-[#33CCCC]/5 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center px-4 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#33CCCC]/20 bg-[#33CCCC]/10 px-5 py-2 text-sm font-semibold text-[#33CCCC] backdrop-blur-xl">
            Trusted Partnerships
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl font-black text-white">
            Brands We Work With
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400 leading-relaxed">
            Delivering enterprise-grade IT infrastructure, networking,
            hardware support, and technology solutions with trusted
            global brands.
          </p>
        </motion.div>

        {/* AUTO SCROLL LOGOS */}
        <div className="relative mt-16 overflow-hidden">

          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-slate-950 to-transparent" />

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-slate-950 to-transparent" />

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="flex w-max gap-6"
          >
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                className="group relative flex h-[140px] w-[220px] flex-shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-6 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:border-[#33CCCC]/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-[#33CCCC]/10 transition-all duration-500"
              >
                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#33CCCC]/10 via-transparent to-transparent" />
                </div>

                <div className="relative flex h-16 items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={140}
                    height={60}
                    className="object-contain grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 px-4 text-center"
        >
          <p className="text-sm text-slate-500">
            Building long-term technology partnerships across industries
          </p>
        </motion.div>
      </div>
    </section>
  );
}