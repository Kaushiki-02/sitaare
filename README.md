# Sitaare – A MERN-Stack Project

**Project Sitaare** is a full-stack web application developed for [House of Humanity](https://sitaare.org), focused on supporting orphan girls aged 6 to 18. It enables donors to discover beneficiary profiles, contribute securely, and interact with a chatbot for guidance. The platform is designed to be responsive, accessible, and production-ready.

---

## Live Demo

Visit the live site: [https://sitaare.vercel.app/](https://sitaare.vercel.app/)

---

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, Framer Motion, Lottie
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Payments:** Razorpay Integration
- **Chatbot:** Dialogflow
- **Authentication:** JWT-based login system
- **Deployment:** Vercel (frontend), Render (backend)

---

## Features

### Beneficiary Profiles
- Display profiles with photos, bios, and adoption status
- Dynamically loaded from MongoDB

### Donation System
- One-time and recurring donation support
- Monthly child sponsorship (₹11,551)
- Secure payment integration with Razorpay

### Chatbot Integration
- Embedded conversational assistant using Dialogflow
- Provides help on donations, volunteering, and general FAQs

### Responsive Design and Animations
- Mobile-first layout using Tailwind CSS
- Smooth transitions and animations via Framer Motion and Lottie

---

## Security and Code Quality

- Frontend and backend input validation
- JWT authentication for admin actions
- Organized, modular codebase with meaningful comments

---

## Setup and Installation

### Prerequisites

- Node.js (v16 or above)
- MongoDB instance or MongoDB Atlas
- Razorpay developer account
- Dialogflow chatbot credentials

### Clone the Repository

```bash
git clone https://github.com/Kaushiki-02/sitaare.git
cd sitaare
