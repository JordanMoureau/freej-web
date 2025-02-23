"use client";

import Image from "next/image";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";

export default function AboutMe() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-end bg-gradient-to-b from-[#cee6c5] via-[#CFEAC5] to-[#acd09c] p-2 md:p-8">
      {/* Absolute Positioned Image Behind Text */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/me.jpg" // Ensure this image is in the /public folder
          alt="Jordan Moureau"
          fill
          className="object-cover mask-gradient object-right opacity-90"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-xl mt-20 mb-10 rounded-xl  flex flex-col items-end justify-end md:text-left text-center p-2 md:p-12">
        {/* Text Content */}
        <div className="text-white ">
          <h1 className="text-5xl md:text-6xl font-bold">I'm Jordan</h1>
          <h2 className="text-3xl md:text-4xl mt-2">
            I build things for the web.
          </h2>
          <p className="mt-4 leading-relaxed text-black text-lg">
            I have a passion for sleek, <em>high-performance</em> web
            experiences. My speciality is growing businesses with the internet.
            I build sites focused on
            <em> connecting</em>, that drive real traffic. I love using the best
            technology available to solve problems for businesses.
          </p>
          <p className="mt-5 text-lg  text-black">
            <em> I also love data.</em> Which is why I can prove that having
            your website built or re-built by me will grow your business.
          </p>
          <p className="mt-5 text-lg  text-black">
            Other than being a <em>total art & technology nerd</em>, my hobbies
            are horseback riding, hiking, reading, and game nights with my
            family. My favorite color is <em>green</em>, and a fun fact about me
            is that I grew up on a small farm in northern Georgia.
          </p>

          {/* Social Links */}
          <div className="font-bold raleway text-xl mt-10 mb-5">
            Get to Know Me on Social:
          </div>
          <div className="bg-white inline-flex p-2 items-center flex-row gap-4 text-[#b3d7a4] opacity-80 rounded-full">
            <a
              href="https://www.instagram.com/freelancejordan/"
              target="_blank"
              className="hover:text-[#cee6c5] transition-all"
            >
              <TiSocialInstagramCircular size={32} />
            </a>
            <a
              href="https://www.instagram.com/freelancejordan/"
              target="_blank"
              className="hover:text-[#cee6c5] transition-all"
            >
              <FaPinterest size={29} />
            </a>
            <a
              href="https://www.instagram.com/freelancejordan/"
              target="_blank"
              className="hover:text-[#cee6c5] transition-all"
            >
              <RiFacebookCircleFill size={31} />
            </a>
            <a
              href="https://www.instagram.com/freelancejordan/"
              target="_blank"
              className="hover:text-[#cee6c5] transition-all"
            >
              <TiSocialLinkedinCircular size={34} />
            </a>
          </div>
        </div>
      </div>

      <TestimonialsMarquee />
    </div>
  );
}
