"use client";

export default function TestimonialsMarquee() {
  const testimonials = [
    { name: "Misty", feedback: "SHUT UP NO WAY! Jordan, you are my hero." },
    { name: "Mathew G.", feedback: "I can’t recommend Jordan enough." },
    {
      name: "Joe W.",
      feedback:
        "She wasn’t afraid to be blunt with me about what would and wouldn’t best fit my business...",
    },
    {
      name: "JC",
      feedback: "We absolutely love Jordan! Her work speaks for itself...",
    },
    {
      name: "Jena",
      feedback: "I do not think I could have done this without you!",
    },
    { name: "Misty", feedback: "SHUT UP NO WAY! Jordan, you are my hero." },
    { name: "Mathew G.", feedback: "I can’t recommend Jordan enough." },
    {
      name: "Joe W.",
      feedback:
        "She wasn’t afraid to be blunt with me about what would and wouldn’t best fit my business...",
    },
    {
      name: "JC",
      feedback: "We absolutely love Jordan! Her work speaks for itself...",
    },
    {
      name: "Jena",
      feedback: "I do not think I could have done this without you!",
    },
  ];

  return (
    <div className="fixed z-10 bottom-0 left-0 w-full bg-white py-3 overflow-hidden">
      <div className="flex space-x-12 animate-marquee">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="text-black text-lg italic whitespace-nowrap"
          >
            "{testimonial.feedback}"
            <span className="font-bold">-{testimonial.name} </span>
          </div>
        ))}
      </div>
    </div>
  );
}
