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
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={6000}
      transitionTime={800}
      swipeable
      emulateTouch
      showArrows
      renderArrowPrev={(clickHandler, hasPrev) =>
        hasPrev && (
          <button
            onClick={clickHandler}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-md hover:bg-pink-100 text-pink-600 rounded-full p-3 sm:p-4 text-2xl sm:text-3xl transition"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
        )
      }
      renderArrowNext={(clickHandler, hasNext) =>
        hasNext && (
          <button
            onClick={clickHandler}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-md hover:bg-pink-100 text-pink-600 rounded-full p-3 sm:p-4 text-2xl sm:text-3xl transition"
            aria-label="Next testimonial"
          >
            ›
          </button>
        )
      }
      className="relative rounded-2xl overflow-hidden shadow-xl bg-white"
    >
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className="px-10 py-14 sm:px-16 flex flex-col items-center text-center"
        >
          <p className="text-2xl sm:text-3xl text-pink-600 font-medium italic leading-relaxed max-w-3xl">
            “{t.text}”
          </p>
          <div className="mt-6">
            <p className="text-lg font-semibold text-gray-800">{t.name}</p>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default TestimonialsCarousel;
