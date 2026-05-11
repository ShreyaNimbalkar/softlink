"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button onClick={() =>setTheme(theme === "dark" ? "light" : "dark")} className="w-11 h-11 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 flex items-center justify-center transition-all duration-300 hover:scale-105">
      <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} className="text-slate-800 dark:text-white"/>
    </button>
  );
}