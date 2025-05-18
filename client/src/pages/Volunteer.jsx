import React, { useState } from 'react';

const Volunteer = () => {
  const [form, setForm] = useState({ name: '', email: '', interest: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest in volunteering!');
    setForm({ name: '', email: '', interest: '' });
  };

  return (
    <div className="min-h-screen py-16 px-6 bg-bgLight text-bodyText font-sans">
      <h1 className="text-4xl font-bold text-center text-heading mb-10">
        Become a Volunteer
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-bgCard p-8 rounded-lg shadow space-y-6"
      >
        <div>
          <label className="block font-semibold text-heading mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-borderCard rounded text-bodyText"
          />
        </div>

        <div>
          <label className="block font-semibold text-heading mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-borderCard rounded text-bodyText"
          />
        </div>

        <div>
          <label className="block font-semibold text-heading mb-1">Interest Area</label>
          <textarea
            name="interest"
            value={form.interest}
            onChange={handleChange}
            required
            rows="4"
            className="w-full mt-1 p-2 border border-borderCard rounded text-bodyText resize-y"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-primaryLight text-white font-semibold px-6 py-2 rounded-md shadow-md transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Volunteer;
