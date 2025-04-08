"use client";

import React from "react";

function page() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Welcome to <span className="font-semibold">Our Company</span>! We are
          dedicated to providing the best services and solutions tailored to
          your needs. Our journey began with a simple mission: to make life
          easier and better for our customers.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          At our core, we aim to deliver excellence in every project we
          undertake. We believe in fostering a community of innovation,
          creativity, and collaboration. Our mission is to inspire and empower
          individuals and businesses alike through our cutting-edge solutions.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          What We Do
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We specialize in a wide range of services, including:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-600">
          <li>Custom software development</li>
          <li>Web and mobile application design</li>
          <li>Digital marketing and branding</li>
          <li>IT consulting and support</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Our team is passionate, experienced, and driven to exceed your
          expectations. We value transparency, integrity, and customer
          satisfaction above all else. Choosing us means partnering with a
          company that truly cares about your success.
        </p>

        <div className="mt-8 w-full flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973.7932121768564!2d82.49303210412259!3d26.459274824971523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399093cbf6ffffff%3A0xe886e928b8f0a1e7!2sMahamaya%20College%20of%20Agricultural%20Engineering%20And%20Technology!5e0!3m2!1sen!2sin!4v1744024465195!5m2!1sen!2sin"
            className="w-full h-72"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
