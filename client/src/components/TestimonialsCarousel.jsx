import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonials = [
  {
    text: 'Sitaare gave me a new family and the courage to dream big. I am forever grateful!',
    name: 'Priya',
    role: 'Beneficiary',
  },
  {
    text: 'Volunteering here changed my life. The girls inspire me every day.',
    name: 'Amit',
    role: 'Volunteer',
  },
  {
    text: 'Supporting Sitaare is the best decision I made. The impact is real and visible.',
    name: 'Neha',
    role: 'Donor',
  },
];

const TestimonialsCarousel = () => (
  <div className="max-w-xl mx-auto py-8">
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={6000}
      className="rounded-xl shadow-lg bg-white"
    >
      {testimonials.map((t, idx) => (
        <div key={idx} className="p-8 flex flex-col items-center">
          <p className="italic text-lg text-[#BC1782] mb-4">"{t.text}"</p>
          <span className="font-semibold text-gray-700">{t.name}</span>
          <span className="text-sm text-gray-400">{t.role}</span>
        </div>
      ))}
    </Carousel>
  </div>
);

export default TestimonialsCarousel; 