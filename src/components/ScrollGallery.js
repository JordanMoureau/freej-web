"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = ["/one.png", "/two.png", "/three.png", "/four.png"];
const imagesmobile = [
  "/mobileone.png",
  "/mobiletwo.png",
  "/mobilethree.png",
  "/mobilefour.png",
];

export default function SnapScrollGallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSet = isMobile ? imagesmobile : images;

  return (
    <div className="h-screen w-full">
      {imageSet.map((src, index) => (
        <div
          key={index}
          className="h-screen w-full flex items-center justify-center snap-start"
        >
          <Image
            src={src}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            alt="designer developer portfolio piece"
            priority
          />
        </div>
      ))}
    </div>
  );
}
