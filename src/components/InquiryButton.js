"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbMailSpark } from "react-icons/tb";
import InquiryForm from "@/components/InquiryForm";

export default function InquiryButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Inquiry Button */}
      <button
        className={`fixed bottom-2 right-2 z-30 flex items-center text-white shadow-lg 
        bg-[#b3d7a4] px-2 py-2 rounded-full font-bold italic 
        transition-all duration-300 ease-in-out hover:bg-[#cee6c5] 
        ${isHovered ? "pr-6" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(true)}
      >
        <TbMailSpark size={24} />
        <span
          className={`overflow-hidden transition-all duration-300 ${
            isHovered ? "pl-3 opacity-100 w-auto" : "opacity-0 w-0"
          }`}
        >
          {" "}
          Inquire
        </span>
      </button>

      {/* Inquiry Form - Sliding from Bottom */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sliding Form */}
            <motion.div
              className="fixed bottom-0 left-0 w-full bg-white shadow-xl rounded-t-2xl 
                overflow-hidden max-w-lg mx-auto z-40"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <InquiryForm onClose={() => setIsOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
