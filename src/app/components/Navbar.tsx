"use client";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { href: "#top", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      // className="w-full fixed flex justify-between items-center px-4 md:px-5 py-5 z-50"
      className="w-full fixed left-0 top-0 flex justify-between items-center px-4 md:px-5 py-5 z-50"
      initial={{ y: -50, opacity: 0 }} // start above and invisible
      animate={{ y: 0, opacity: 1 }} // slide to 0 and fully visible
      transition={{ duration: 0.8, ease: "easeOut" }} // smooth animation
    >
      {/* Logo */}
      <Link href="#top" className="md:ml-9">
        <Image
          src={theme === "light" ? "/HeaderIcon.png" : "/IconLight.png"}
          alt="Logo"
          width={112}
          height={112}
          // className="w-16 h-16 md:w-18 "
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 md:space-x-12 border px-4 lg:px-16 py-3 rounded-4xl backdrop-blur-xs border-[#FFFFFF80] shadow-2xl">
        {navLinks.map((link) => (
          <li
            key={link.href}
            className="md:text-sm lg:text-base font-black hover:text-blue-500"
          >
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      {/* Right Controls */}
      <div className="flex items-center gap-x-4 md:mr-5">
        {/* Theme Toggle */}
        <button
          type="button"
          aria-label="Toggle dark mode"
          className="md:border md:p-2 rounded-full border-gray-300"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle mobile menu"
          className="md:hidden"
          onClick={() => setOpenMenu(true)}
        >
          <Menu className="w-9 h-9" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[75%] max-w-[300px] overflow-x-hidden bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close mobile menu"
          className="absolute top-4 right-4"
          onClick={() => setOpenMenu(false)}
        >
          <X className="w-7 h-7" />
        </button>

        {/* Links */}
        <ul className="flex flex-col gap-6 mt-20 px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-lg font-medium hover:text-blue-500"
                onClick={() => setOpenMenu(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
