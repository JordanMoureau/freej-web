"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";

export default function ContactMe() {
  const [state, handleSubmit] = useForm("mdkaybpq");

  return (
    <div className="min-h-screen flex flex-col items-start justify-center bg-gradient-to-b from-[#cee6c5] via-[#CFEAC5] to-[#b3d7a4] px-6">
      <div className="max-w-4xl w-full p-10">
        <h1 className="text-6xl font-bold text-white text-left">
          Get in Touch
        </h1>
        <h2 className="text-white text-3xl text-left mt-2">
          Have a project or just want to say hi? Let’s chat!
        </h2>

        {/* Success Message */}
        {state.succeeded ? (
          <p className="text-lg text-center mt-4">
            ✨ Your message has been sent! I'll get back to you soon. ✨
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Name Input */}
            <div>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-[#e2fada] raleway bg-opacity-40 text-black placeholder-gray-800 px-5 py-3 rounded-full shadow-md outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-[#e2fada] raleway bg-opacity-40 text-black placeholder-gray-800 px-5 py-3 rounded-full shadow-md outline-none focus:ring-2 focus:ring-white"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            {/* Message Input */}
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full bg-[#e2fada] raleway bg-opacity-40 text-black placeholder-gray-800 px-5 py-3 rounded-2xl shadow-md outline-none focus:ring-2 focus:ring-white"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="px-5 py-2 bg-[#b3d7a4] text-white text-lg font-bold italic rounded-full shadow-lg hover:bg-[#cee6c5] transition-all"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
      <TestimonialsMarquee />
    </div>
  );
}
