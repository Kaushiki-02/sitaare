import React from 'react';

const Provide = () => {
  const items = [
    " Residential Facilities: Safe and comfortable living quarters.",
    " Educational Support: Schooling, scholarships, and skill-building workshops.",
    " Psychosocial Support: Counseling, mentorship, and emotional well-being programs.",
    " Health & Nutrition: Balanced meals, medical care, and fitness programs.",
    " Extracurricular Development: Art, music, sports, and cultural activities.",
    " Career & Vocational Training: Internship opportunities and skill enhancement programs."
  ];

  return (
    <div className="min-h-screen bg-softBg text-darkText px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">What We Provide</h1>
        <p className="text-lg text-grayText mb-10">
          Project Sitaare offers a nurturing environment for every girl to grow, dream, and succeed.
        </p>

        <ul className="space-y-4 text-left">
          {items.map((item, idx) => (
            <li key={idx} className="bg-light p-5 rounded-lg shadow-sm border border-primaryLight">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Provide;
