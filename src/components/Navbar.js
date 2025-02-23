"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { HiMenu, HiX } from "react-icons/hi"; // Using React Icons
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" absolute  z-10 top-0 left-0 w-full p-3 flex justify-between items-center">
      <ul className="hidden md:flex  py-3 px-5 space-x-3 text-black raleway text-md">
        {[
          { name: "home", path: "/" },
          { name: "services", path: "/services" },
          { name: "about freej", path: "/about" },
          { name: "contact me", path: "/contact" },
        ].map((link) => (
          <div key={link.path}>
            <Link
              href={link.path}
              className={`font-bold ${
                pathname === link.path ? "raleway-light" : ""
              } transition-all duration-500 hover:font-normal `}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </ul>
      <button
        className="md:hidden p-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <HiX size={38} /> : <HiMenu size={38} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden  rounded-b-3xl absolute top-16 left-0 w-3/4 h-screen bg-white bg-opacity-90 p-5 text-left space-y-4 text-[#cee6c5] raleway text-lg shadow-sm flex flex-col justify-center rounded-r-3xl"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "About FreeJ", path: "/about" },
              { name: "Contact Me", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="block font-bold transition-all duration-300 hover:font-normal"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <Link href="/">
        <Logo />
      </Link>
    </nav>
  );
}
