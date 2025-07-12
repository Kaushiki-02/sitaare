import React from "react";

const testimonials = [
  {
    name: "Rani, 13",
    role: "Beneficiary",
    quote:
      "Before Sitaare, I didn’t even know what a classroom looked like. Now I not only go to school but I also want to become a teacher one day to help others like me."
  },
  {
    name: "Meena, 15",
    role: "Beneficiary",
    quote:
      "Sitaare gave me more than just a home. They gave me dreams, and now, I believe I can achieve them."
  },
  {
    name: "Ananya Patel",
    role: "Volunteer Career Mentor",
    quote:
      "Volunteering at Sitaare has been life-changing. These girls are so full of potential, and all they need is someone to believe in them."
  },
  {
    name: "Raghav Sharma",
    role: "Volunteer Trainer",
    quote:
      "Mentoring the girls in digital skills and self-defense taught me how resilient and curious they are. I’m proud to be a small part of their big journey."
  },
  {
    name: "Kavita Desai",
    role: "Philanthropist",
    quote:
      "As a donor, I’ve never felt more connected to a cause. The transparency, the commitment, and the outcomes at Sitaare are deeply inspiring."
  },
  {
    name: "CSR Head, TechNova Solutions Pvt. Ltd.",
    role: "Corporate Donor",
    quote:
      "Supporting Sitaare through our CSR has not only impacted the lives of these girls but also uplifted the morale of our employees who actively volunteer."
  }
];

export default function Testimonials() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Testimonials</h1>
      <div className="grid gap-6 md:grid-cols-2 items-stretch">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between h-full"
          >
            <div className="mb-4">
              <p className="text-lg italic text-gray-700 mb-4">“{t.quote}”</p>
            </div>
            <div className="text-right mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-pink-600">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 