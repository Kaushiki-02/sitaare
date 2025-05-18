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
    <div className="min-h-screen py-16 px-6 bg-white text-gray-800">
      <h1 className="text-4xl font-bold text-center text-yellow-800 mb-10">Become a Volunteer</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-yellow-50 p-8 rounded-lg shadow space-y-6"
      >
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Interest Area</label>
          <textarea
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-primaryLight text-white font-semibold px-6 py-2 rounded-md shadow-md transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Volunteer;
