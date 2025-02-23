import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import ScrollGallery from "@/components/ScrollGallery";
import InquiryForm from "@/components/InquiryForm";

export default function Home() {
  return (
    <>
      <div className="">
        <div className=" snap-start bg-gradient-to-b from-[#cee6c5] via-[#CFEAC5] to-[#b3d7a4] min-h-screen flex-col  flex items-center justify-center p-6 md:p-12">
          <div className="flex-col h-screen text-left flex items-start justify-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">
              Hi, I'm Jordan
            </h1>
            <h2 className="text-white">I design & build websites</h2>
          </div>

          <TestimonialsMarquee />
        </div>
        <ScrollGallery />
      </div>
    </>
  );
}
