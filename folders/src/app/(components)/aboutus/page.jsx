"use client";

import React from "react";

function page() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About The College</h1>
        <p className="text-gray-600 mb-3 leading-relaxed text-justify">
        The Mahamaya College of Agricultural Engineering & Technology, a constituent of Narendra Deva University of Agriculture and Technology, was established in the academic session 2003–04 with the introduction of the B.Tech in Agricultural Engineering program at the main campus in Kumarganj, Ayodhya. In 2005, the college was relocated to Ambedkar Nagar and renamed to its current title. Over the years, the institution expanded its academic offerings by introducing B.Tech programs in Computer Science & Engineering and Mechanical Engineering during the 2008–09 session.
        </p>
        <p className="text-gray-600 mb-3 leading-relaxed text-justify">
        Postgraduate education began with the launch of M.Tech in Agricultural Engineering in 2011–12, starting with two departments: Soil and Water Conservation Engineering (SWCE) and Irrigation and Drainage Engineering (IDE). Later, programs in Farm Machinery and Power Engineering (FMPE) and Process and Food Engineering (PFE) were added in 2021–22, followed by Renewable Energy Engineering (REE) in 2023–24. The college further advanced its academic scope by initiating Ph.D. programs in 2023–24 in four key departments: FMPE, SWCE, IDE, and PFE.
        </p>
        <p className="text-gray-600 mb-3 leading-relaxed text-justify">
        The college plays a vital role in teaching, research, and extension in the field of Agricultural Engineering. Its vision is to produce skilled and ethically driven professionals who contribute to global food security and sustainable agricultural growth. The institution emphasizes hands-on learning in areas such as farm machinery, water management, process and food engineering, and computer science, ensuring students are well-equipped to address the challenges of modern agriculture.
        </p>
        <p className="text-gray-600 mb-3 leading-relaxed text-justify">
        It also focuses on research and technology development, aiming to create region-specific innovations that benefit farmers and agro-based industries. The college trains students to become effective extension personnel, capable of transferring practical knowledge and technologies to the farming community. Additionally, the college actively collaborates with national and international organizations involved in agricultural engineering to stay at the forefront of advancements in the discipline.
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
            href="/contactus"
            className="bg-green-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
