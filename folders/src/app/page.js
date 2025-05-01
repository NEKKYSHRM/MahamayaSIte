"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import vcPic from "../../public/FacultyPic/VC_PIC.jpg";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import "./Home.css";

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slideImages = [
    "/hero/hero1.jpeg",
    "/hero/hero2.jpeg",
    "/hero/hero3.jpeg",
    "/hero/hero4.jpg",
    "/hero/hero5.jpg",
    "/hero/hero7.jpg",
    "/hero/hero8.jpg",
    "/hero/hero9.jpg",
    "/hero/hero10.jpg",
    "/hero/hero11.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slideImages.length]);

  const tableBodyRef = useRef(null);
  const newsItemTitle = "Admissions Open for Academic Year 2025-26";
  const [newsItems, setNewsItems] = useState([
    "MPL 2025 Inter-Department Sports League Announced",
    "Admissions Open for Academic Year 2025-26",
    "Campus Placement Drive by TCS and Infosys – April 12",
    "TechFest 2025 – Innovation and Coding Challenge Starts May 2",
    "Annual Cultural Fest 'Sanskriti 2025' – Registrations Open",
    "Mid-Semester Exams to Begin from April 22",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const tbody = tableBodyRef.current;
      if (tbody && !tbody.matches(":hover")) {
        setNewsItems((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first]; // Move first to end
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Student counter
  const [studentCount, setStudentCount] = useState(0);
  const totalStudents = 543;
  const duration = 2000; // 5 seconds
  const frameRate = 30; // 60 frames per second

  useEffect(() => {
    const increment = Math.ceil(totalStudents / (duration / frameRate));
    const interval = setInterval(() => {
      setStudentCount((prev) => {
        if (prev + increment >= totalStudents) {
          clearInterval(interval);
          return totalStudents;
        }
        return prev + increment;
      });
    }, frameRate);

    return () => clearInterval(interval);
  }, []);

  // faculty counter
  const [facultyCount, setFacultyCount] = useState(0);
  const totalFaculty = 20;
  const facultyDuration = 2000; // 5 seconds
  const facultyFrameRate = 30; // 60 frames per second
  useEffect(() => {
    const increment = Math.ceil(
      totalFaculty / (facultyDuration / facultyFrameRate)
    );
    const interval = setInterval(() => {
      setFacultyCount((prev) => {
        if (prev + increment >= totalFaculty) {
          clearInterval(interval);
          return totalFaculty;
        }
        return prev + increment;
      });
    }, facultyFrameRate);

    return () => clearInterval(interval);
  }, []);

  // M.Tech counter
  const [mtechCount, setMtechCount] = useState(0);
  const totalMtech = 24;
  const mtechDuration = 2000; // 5 seconds
  const mtechFrameRate = 30; // 60 frames per second
  useEffect(() => {
    const increment = Math.ceil(totalMtech / (mtechDuration / mtechFrameRate));
    const interval = setInterval(() => {
      setMtechCount((prev) => {
        if (prev + increment >= totalMtech) {
          clearInterval(interval);
          return totalMtech;
        }
        return prev + increment;
      });
    }, mtechFrameRate);

    return () => clearInterval(interval);
  }, []);
  // Ph.D counter
  const [phdCount, setPhdCount] = useState(0);
  const totalPhd = 10;
  const phdDuration = 2000; // 5 seconds
  const phdFrameRate = 30; // 60 frames per second
  useEffect(() => {
    const increment = Math.ceil(totalPhd / (phdDuration / phdFrameRate));
    const interval = setInterval(() => {
      setPhdCount((prev) => {
        if (prev + increment >= totalPhd) {
          clearInterval(interval);
          return totalPhd;
        }
        return prev + increment;
      });
    }, phdFrameRate);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="xl-w-full flex flex-col">
        {/* Hero Section */}
        <section className="w-full box-border">
          <div className="hero-slider md:px-10 md:py-3">
            <div className="w-full h-[300px] md:h-[700px] flex justify-center items-center mx-auto relative rounded-lg overflow-hidden border-2">
              <Image
                src={slideImages[currentSlideIndex]}
                alt={`Slide ${currentSlideIndex + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* About College */}
        <section className="w-full flex flex-col">
          <div className="w-full grid grid-cols-[1fr_2fr] md:gap-0 gap-3 bg-gray-100 place-items-center p-6">
            {/* Left Section (Vice Chancellor Info) */}
            <div className="w-28 md:w-64 flex flex-col items-center justify-center">
              <Image src={vcPic} alt="vc pic" />
              <div className="flex flex-col justify-center items-center text-center font-bold mt-3 text-[10px] md:text-base">
                <p>Dr. Bijendra Singh</p>
                <p>Hon'able Vice Chancellor</p>
                <p>ANDUAT, Ayodhya</p>
              </div>
            </div>

            {/* Right Section (About the College) */}
            <div className="md:max-w-3xl flex flex-col justify-center items-center text-center">
              <div className="w-full bg-white py-0.5 rounded-xl"></div>
              <h1 className="font-bold md:text-4xl text-blue-800 md:m-3">
                About The College
              </h1>
              <div className="w-full bg-white py-0.5 rounded-xl"></div>
              <p className="mt-4 text-[7px] md:text-lg text-justify text-gray-700 leading-relaxed">
                Mahamaya College of Agricultural Engineering and Technology
                (MCAET), Ambedkar Nagar Uttar Pradesh, India-224122 is a
                Government Engineering College under the administration of
                Acharya Narendra Deva University of Agriculture & Technology,
                Kumarganj, Ayodhya. College was established in 2002. College is
                actively involved in teaching, research, and extension in
                Agricultural Engineering, Computer Science and Engineering, and
                Mechanical Engineering. Since 2002, more than 600 students have
                received degrees in various UG and PG courses. This college
                offers undergraduate teaching programs that include B.Tech. in
                Agricultural Engineering, Mechanical Engineering, and Computer
                Science & Engineering. The postgraduate degree and PhD degree is
                also offered by the college in Soil and Water Conservation
                Engineering, Farm Machinery and Power Engineering, Processing
                and Food Engineering, Renewable Energy Engineering, and
                Irrigation and Drainage Engineering.
              </p>
            </div>
          </div>
        </section>

        {/* College pic */}
        <section className="w-full">
          <div className="w-full h-36 md:h-72 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden">
            <Image
              src="/gallery/mcaet.jpg"
              alt={`College Pic`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        {/* Dean Message */}
        <section className="w-full py-8 flex flex-col md:grid md:grid-cols-2 px-4 md:px-16 gap-4 xl:gap-8 justify-around bg-gray-50">
          <div className="flex flex-col gap-1 bg-white shadow-slate-400 shadow-lg border-black border-2 text-center justify-between items-center md:px-2 md:py-3">
            <div className="flex flex-col md:gap-1 text-center justify-center items-center p-2 md:p-4 w-full">
              <Image
                src="/FacultyPic/dean.JPG"
                width={500}
                height={300}
                alt=""
                className="w-20 h-20 md:w-18 md:h-18 md:w-36 md:h-36 rounded-full border-pink border-2"
              ></Image>
              <h3 className="font-bold text-blue-950 text-[8px] md:text-lg">
                Dr. N.C. Shahi
              </h3>
              <p className="md:text-sm text-[7px] font-semibold">Dean, MCAET</p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-600 px-4 md:px-12 text-[7px] md:text-base">
                <i>
                  "It gives me immense pride and joy to welcome you to our
                  esteemed institution. At our college, we are committed to
                  nurturing innovation, integrity, and excellence in every
                  student. With a strong emphasis on academic rigor, practical
                  exposure, and holistic development, we aim to shape future
                  leaders and responsible citizens. Our dedicated faculty,
                  modern infrastructure, and vibrant campus life provide an
                  ideal environment for learning and growth. We believe in
                  empowering our students to not only excel in their careers but
                  also contribute meaningfully to society. I invite you to be a
                  part of this enriching journey and make the most of the
                  opportunities that await you here."
                </i>
              </p>
            </div>
          </div>
          <div className="flex w-full px-5 mt-3 md:mt-0">
            <table className="w-full border-2 border-slate-400">
              <thead>
                <tr>
                  <th className="text-white table-head text-center text-base xl:text-base xl:p-2">
                    News & Events
                  </th>
                </tr>
              </thead>
              <tbody
                ref={tableBodyRef}
                className="w-full text-left divide-y divide-gray-300"
              >
                {newsItems.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-yellow-100 w-full transition"
                  >
                    <td className="px-2 py-0 md:py-2 md:px-4 w-full  text-blue-600 hover:underline flex font-semibold items-center gap-2">
                      <a href="#" className="block w-full">
                        {item}
                      </a>
                      {item === newsItemTitle && (
                        <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full uppercase animate-pulse">
                          New
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th className="text-center bg-slate-300 text-black p-2 cursor-pointer hover:text-blue-600">
                    View More
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* Facts counts */}
        <section className="w-full bg-gray-100 py-5 px-4 md:px-44 mb-10 flex justify-around">
          <div className="flex flex-col text-center items-center">
            <PiStudentBold className="text-3xl md:text-6xl mb-1 md:mb-3" />
            <p className="font-bold text-sm md:text-lg">{studentCount + "+"}</p>
            <p className="font-bold text-xs md:text-lg">Undergraduates</p>
          </div>
          <div className="flex flex-col text-center items-center">
            <PiStudentBold className="text-3xl md:text-6xl mb-1 md:mb-3" />
            <p className="font-bold text-sm md:text-lg">{mtechCount + "+"}</p>
            <p className="font-bold text-xs md:text-lg">M.Tech Students</p>
          </div>
          <div className="flex flex-col text-center items-center">
            <PiStudentBold className="text-3xl md:text-6xl mb-1 md:mb-3" />
            <p className="font-bold text-sm md:text-lg">{phdCount + "+"}</p>
            <p className="font-bold text-xs md:text-lg">Ph.D. Students</p>
          </div>
          <div className="flex flex-col text-center items-center">
            <GiTeacher className="text-3xl md:text-6xl mb-1 md:mb-3" />
            <p className="font-bold text-sm md:text-lg">{facultyCount + "+"}</p>
            <p className="font-bold text-xs md:text-lg">Faculty</p>
          </div>
        </section>

        {/* Gov carousels */}
        <section className="govCarousel">
          <div className="govSlider">
            <div className="gov-slide-track">
              <div className="gov-slide">
                <img
                  src="/govSites/govSite_1.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_2.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_3.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_4.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_5.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_6.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="gov-slide">
                <img
                  src="/govSites/govSite_1.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_2.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_3.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_4.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_5.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="/govSites/govSite_6.png"
                  height="100"
                  width="250"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
