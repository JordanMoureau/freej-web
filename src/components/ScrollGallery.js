"use client";
import Image from "next/image";

const images = ["/one.png", "/two.png", "/three.png", "/four.png"];

export default function SnapScrollGallery() {
  return (
    <div className="h-screen w-full">
      {images.map((src, index) => (
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
