import React from 'react';

const WhyJoin = () => {
  return (
    <div className="min-h-screen bg-light text-darkText px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-primaryDark mb-6 text-center"> Why Join Us?</h1>
        <p className="text-lg text-center text-grayText mb-10">
          Project Sitaare is more than an orphanage—it's a transformative space empowering young girls to rise.
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-3">As a Corporate Partner</h2>
            <ul className="list-disc list-inside space-y-2">
              <li> Transform Lives — Enable access to education, healthcare, and life skills.</li>
              <li> Create Sustainable Impact — Contribute to long-term holistic development.</li>
              <li> Enhance Brand Reputation — Align with a cause reflecting corporate responsibility.</li>
              <li> Engage Employees — Offer meaningful volunteer and mentorship experiences.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-3">As a Philanthropist</h2>
            <ul className="list-disc list-inside space-y-2">
              <li> Give a Girl a Future — Directly impact her education, health, and dreams.</li>
              <li> Build a Legacy — Support generations through enduring impact.</li>
              <li> Champion Women’s Empowerment — Break cycles of poverty through opportunity.</li>
            </ul>
          </div>

          <blockquote className="mt-8 p-6 italic bg-softBg border-l-4 border-primary text-primaryDark">
            “The stars are waiting to shine — will you help them find their sky?”
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
