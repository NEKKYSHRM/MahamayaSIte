"use client";

import React, { useState } from "react";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    const { name, email, subject, message } = formData;

    try {
      const res = await axios.post("/api/contactUs", {
        name,
        email,
        subject,
        message,
      });

      if (res.data.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        }); 
      } else {
        alert("Error sending message.");
        console.log("Error: ", res.data);
      }
    } catch (error) {
      console.error("Request failed:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-green-700">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-semibold">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2 text-green-600">
                Our Address
              </h2>
              <p>
                Mahamaya College of Agricultural Engineering & Technology,
                Akbarpur, Ambedkar Nagar, U.P. (224122)
              </p>
              <p>Near Shiv Baba, Faizabad Marg</p>
              <p className="mt-2">
                <b>Phone :</b>{" "}
                <a
                  href="tel:+919076611211"
                  className="text-blue-600 hover:underline"
                >
                  +91 90766 11211
                </a>
              </p>
              <p>
                <b>Email :</b>{" "}
                <a
                  href="mailto:manishfmpe1612@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  manishfmpe1612@gmail.com
                </a>
              </p>
            </div>

            <div className="bg-white py-4 px-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-green-700">
                Developer's Contact
              </h2>
              <p className="text-gray-500 font-semibold">Nikhil Kumar Sharma</p>
              <p className="mt-2">
                <b>Phone :</b>{" "}
                <a
                  href="tel:+919795930369"
                  className="text-blue-600 hover:underline"
                >
                  +91 97959 30369
                </a>
              </p>
              <p>
                <b>Email :</b>{" "}
                <a
                  href="mailto:nikhilkumarsharman815@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  nikhilkumarsharman815@gmail.com
                </a>
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973.7932121768564!2d82.49303210412259!3d26.459274824971523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399093cbf6ffffff%3A0xe886e928b8f0a1e7!2sMahamaya%20College%20of%20Agricultural%20Engineering%20And%20Technology!5e0!3m2!1sen!2sin!4v1744024465195!5m2!1sen!2sin"
                className="w-full h-72"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
