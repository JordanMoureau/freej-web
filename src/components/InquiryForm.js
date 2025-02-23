"use client";
import { useForm, ValidationError } from "@formspree/react";
import { IoClose } from "react-icons/io5";

export default function InquiryForm({ onClose }) {
  const [state, handleSubmit] = useForm("mdkaybpq");

  return (
    <div className="p-6 py-20 flex justify-center flex-col ">
      {/* Form Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-[#b3d7a4] ml-2">
          Quick Inquiry
        </h1>
        <button
          onClick={onClose}
          className="text-[#b3d7a4] hover:text-[#a1c692]"
        >
          <IoClose size={28} />
        </button>
      </div>

      {/* Success Message */}
      {state.succeeded ? (
        <p className="text-lg text-center text-black mt-4">
          ✨ Inquiry sent! I’ll be in touch soon. ✨
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 raleway">
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-[#e2fada] bg-opacity-40 text-black placeholder-gray-800 px-5 py-3 rounded-full shadow-md outline-none focus:ring-2 focus:ring-[#3a5735]"
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-[#e2fada] bg-opacity-40 text-black placeholder-gray-800 px-5 py-3 rounded-full shadow-md outline-none focus:ring-2 focus:ring-[#3a5735]"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/* Message Input */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="3"
            required
            className="w-full bg-[#e2fada] bg-opacity-40 text-black placeholder-gray-800 px-5 py-3 rounded-2xl shadow-md outline-none focus:ring-2 focus:ring-[#3a5735]"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className=" px-5 py-2 bg-[#b3d7a4] text-white text-lg font-bold italic rounded-full shadow-md hover:bg-[#cee6c5] transition-all"
          >
            {state.submitting ? "Sending..." : "Send to FreeJ"}
          </button>
        </form>
      )}
    </div>
  );
}
