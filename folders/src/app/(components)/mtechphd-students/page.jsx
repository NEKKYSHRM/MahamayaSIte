"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import vcPic from "../../../../public/researchStudents/st1.png";

function page() {
  return (
    <div className="flex flex-col w-full items-center justify-center text-center">
      <div className="w-full bg-slate-800 text-white font-bold text-3xl p-5">
        <p>Ph.D. Students</p>
      </div>

      <div className="w-full grid grid-cols-4 grid-rows-2 gap-8 py-10 px-20 place-items-center bg-slate-100">
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/roshan.png"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            Vipin Kumar Roshan
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
            (Soil and Water Conservation Engineering)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">
              Water quality modeling
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src={vcPic}
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            Shashank Verma
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
            (Process and Food Engineering)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">
              Extraction of essential oil
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/snt.jpeg"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            Sarvda Nand Tiwari
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
            (Soil and Water Conservation Engineering)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">
              Climate Change
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/ankit.jpeg"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">Ankit</h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
            (Irrigation and Drainage Engineering)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">
              Flood modeling
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 h-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/mukul.jpeg"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-0 text-xl font-semibold text-gray-800">
            Mukul Dev Soorya
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
            (Farm Machinery and Power Engineering)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">
              Solar Energy Application in Farm Power
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/rahul.jpeg"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            Rahul Saxena
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
            (Farm Machinery and Power Engineering)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">.....</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 h-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/reetesh.jpeg"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            Reetesh Singh
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
            (Farm Machinery and Power Engineering)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">....</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-800 text-white font-bold text-3xl p-5">
        <p>M.Tech Students</p>
      </div>
      <div className="w-full grid grid-cols-4 grid-rows-4 gap-8 py-10 px-20 place-items-center bg-slate-100">
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/subham.jpg"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
          Shubham Yadav
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
          (FMPE)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">
              .....
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/satyamsingh.jpeg"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
          Satyam Singh
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
          (FMPE)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">
              .....
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/maru.jpeg"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
          Marutesh Yadav 
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
          (FMPE)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">
              .....
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/sakshi.jpg"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">Sakshi Dixit</h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
          (SWCE)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">
              .....
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 h-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/nt.jpeg"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-0 text-xl font-semibold text-gray-800">
          Narayan Tiwari
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
          (PFE)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">
              .....
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/styam.jpg"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
          Satyam Kumar
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
          (PFE)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">.....</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 h-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/ibrar.jpeg"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
          Md. Ibrar
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
          (REE)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">....</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 h-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/aman.jpeg"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
          Aman Kumar
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
          (REE)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">....</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 h-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/ashu.png"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
          Ashu Singh
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
          (FMPE)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">Power Operated Mechanization</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 h-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/amar.png"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
          Amar Tiwari
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
          (FMPE)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">Farm Mechaniztion</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 h-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/devraj.png"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
          Devraj Rastogi
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
          (FMPE)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">Automation in Farm Machinery</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 h-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/amir.png"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
          Amir Ansari
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
          (FMPE)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">Automation in Farm Machinery </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 h-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/akanksha.png"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
          Akanksha Mathur
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
          (SWCE)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">Remote Sensing and GIS</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 h-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/akram.png"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
          Mo Akram
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
          (SWCE)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">Water Quality Modeling</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 w-80 h-80 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* Profile Image */}
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="/researchStudents/khwaiz.png"
              alt={`student's profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
          Khwaiz Ali
          </h2>

          {/* Department  */}
          <p className="text-sm text-gray-700 mt-1">
          (IDE)
          </p>

          {/* Research Field */}
          <div>
            <span className="text-sm text-gray-950 font-bold">Topic: </span>
            <span className="text-sm text-gray-600 mt-1 font-bold">Machine Learning</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="# "
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
