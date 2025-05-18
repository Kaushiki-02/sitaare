import React from 'react';

const Partners = () => {
  return (
    <div className="min-h-screen bg-yellow-50 py-16 px-6 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-yellow-800 mb-10">
        Partner with Us
      </h1>

      <p className="text-lg max-w-3xl mx-auto text-center mb-8">
        We invite corporations and philanthropists to support Project Sitaare through initiatives that empower underprivileged girls with a brighter future.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Sponsor Infrastructure</h2>
          <p>Help us build dorms, classrooms, and libraries.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Fund Skill Programs</h2>
          <p>Support education, coding, arts, and life skill workshops.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Offer Mentorships</h2>
          <p>Volunteer or host mentorship sessions to guide our girls.</p>
        </div>
      </div>

      <blockquote className="italic text-xl text-yellow-800 text-center font-medium border-l-4 border-yellow-500 pl-4 mx-auto max-w-2xl">
        “The stars are waiting to shine — will you help them find their sky?”
      </blockquote>
    </div>
  );
};

export default Partners;
