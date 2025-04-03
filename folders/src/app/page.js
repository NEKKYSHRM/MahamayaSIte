"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import hero1 from "../../public/hero/hero1.jpeg";
import hero2 from "../../public/hero/hero2.jpeg";
import vcPic from "../../public/FacultyPic/VC_PIC.jpg";
import chancellor from "../../public/FacultyPic/chancellor.jpg";
// import dean from "../../public/FacultyPic/dean.JPG";
import "./Home.css";

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slideImages = [hero1, hero2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slideImages.length]);

  return (
    <>
      <main className="w-full flex flex-col">
        <div className="navSide">
          <ul>
            <li>
              <a href="sideNav-HTML-Pages/administration.html">
                Administration
              </a>
            </li>
            <li>
              <a href="sideNav-HTML-Pages/departments.html">Departments</a>
            </li>
            <li>
              <a href="sideNav-HTML-Pages/faculty.html">Faculty</a>
            </li>
            <li>
              <a href="sideNav-HTML-Pages/placement.html">Placement</a>
            </li>
            <li>
              <a href="sideNav-HTML-Pages/courseCatalouge.html">
                Course Catalouge
              </a>
            </li>
            <li>
              <a href="sideNav-HTML-Pages/examinationCell.html">
                Examination Cell
              </a>
            </li>
            <li>
              <a href="sideNav-HTML-Pages/resources.html">Resources</a>
            </li>
          </ul>
        </div>
        <section className="hero">
          <div className="hero-link">
            <ul>
              <button>
                <a href="/administration">Administration</a>
              </button>
              <button>
                <a href="/departments">Departments</a>
              </button>
              <button>
                <a href="/faculty">Faculty</a>
              </button>
              <button>
                <a href="/placement">Placement</a>
              </button>
              <button>
                <a href="sideNav-HTML-Pages/courseCatalouge.html">
                  Course Catalouge
                </a>
              </button>
              <button>
                <a href="sideNav-HTML-Pages/examinationCell.html">
                  Examination Cell
                </a>
              </button>
              <button>
                <a href="mtechphd-students">M.Tech/Ph.D. Students</a>
              </button>
            </ul>
          </div>
          <div className="hero-slider">
            <div className="slides">
              <Image
                id="slideImg"
                src={slideImages[currentSlideIndex]}
                alt={`Slide ${currentSlideIndex + 1}`}
              />
            </div>
          </div>

          <div className="hero-right">
            <table className="events">
              <thead>
                <tr>
                  <th className="table-head">Events</th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr>
                  <td>
                    <a href="#">MPL 2025</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th className="table-footer">View More</th>
                </tr>
              </tfoot>
            </table>

            <table className="events">
              <thead>
                <tr>
                  <th className="table-head">News</th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr>
                  <td>
                    <a href="#">
                      Lorem ipsum dolor sit amet consectetur adipi sicing elit.
                      Quibusdam, quod.
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">Admissions</a>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th className="table-footer">View More</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="separation"></div>
        </section>
        {/* <div className="h-96">
          <video
            src="/videos/collegeDroneShoot.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div> */}

        <div className="w-full flex flex-col">
          <div className="w-full grid grid-cols-[1fr_2fr] bg-gray-100 place-items-center p-6">
            {/* Left Section (Vice Chancellor Info) */}
            <div className="w-64 flex flex-col items-center justify-center">
              <Image src={vcPic} alt="vc pic" />
              <div className="flex flex-col justify-center items-center text-center font-bold mt-3">
                <p>Dr. Bijendra Singh</p>
                <p>Hon'able Vice Chancellor</p>
                <p>ANDUAT, Ayodhya</p>
              </div>
            </div>

            {/* Right Section (About the College) */}
            <div className="max-w-3xl flex flex-col justify-center items-center text-center">
              <div className="w-full bg-white py-0.5 rounded-xl"></div>
              <h1 className="font-bold text-4xl text-blue-800 m-3">
                About The College
              </h1>
              <div className="w-full bg-white py-0.5 rounded-xl"></div>
              <p className="mt-4 text-lg text-justify text-gray-700 leading-relaxed">
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
        </div>

        <div className="w-full py-8 px-16 flex justify-around bg-gray-50">
          <div className="flex flex-col gap-1 bg-white shadow-slate-400 shadow-lg border-black border-2 text-center justify-center items-center p-2">
            <Image
              src={chancellor}
              alt=""
              className="w-32 h-32 rounded-full border-pink border-2"
            ></Image>
            <h3 className="font-bold text-blue-950">Smt. Anandiben Patel</h3>
            <p className="text-sm">Hon'ble Governor of Uttar Pradesh</p>
            <div className="w-full gap-1 flex flex-row mt-2">
              <a
                href="https://upgovernor.gov.in/en/page/profile"
                target="_blank"
              >
                <button className="bg-pink-700 text-white font-bold py-1 px-10">
                  Profile
                </button>
              </a>
              <a
                href="https://upgovernor.gov.in/en/page/profile"
                target="_blank"
              >
                <button className="bg-pink-700 text-white font-bold py-1 px-10">
                  Message
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-white shadow-slate-400 shadow-lg border-black border-2 text-center justify-center items-center p-2">
            <Image
              src={vcPic}
              alt=""
              className="w-32 h-32 rounded-full border-pink border-2"
            ></Image>
            <h3 className="font-bold text-blue-950">Dr. Bijendra Singh</h3>
            <p className="text-sm">Vice-Chancellor
            University of ANDUAT</p>
            <div className="w-full gap-1 flex flex-row mt-2">
              <a
                href="https://www.nduat.org/about-the-university.php?lid=NQ==&mid=Mg==&nid=VmljZS1DaGFuY2VsbG9y"
                target="_blank"
              >
                <button className="bg-pink-700 text-white font-bold py-1 px-10">
                  Profile
                </button>
              </a>
              <a
                href="https://www.nduat.org/about-the-university.php?lid=NQ==&mid=Mg==&nid=VmljZS1DaGFuY2VsbG9y"
                target="_blank"
              >
                <button className="bg-pink-700 text-white font-bold py-1 px-10">
                  Message
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-white shadow-slate-400 shadow-lg border-black border-2 text-center justify-center items-center p-2">
            <Image
              src="/FacultyPic/dean.JPG" width={500} height={300}
              alt=""
              className="w-32 h-32 rounded-full border-pink border-2"
            ></Image>
            <h3 className="font-bold text-blue-950">Dr. N.C. Shahi</h3>
            <p className="text-sm">Dean, MCAET</p>
            <div className="w-full gap-1 flex flex-row mt-2">
              <a
                href="/faculty"
                target="_blank"
              >
                <button className="bg-pink-700 text-white font-bold py-1 px-10">
                  Profile
                </button>
              </a>
              <a
                href="/faculty"
                target="_blank"
              >
                <button className="bg-pink-700 text-white font-bold py-1 px-10">
                  Message
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-white shadow-slate-400 shadow-lg border-black border-2 text-center justify-center items-center p-2">
            <Image
              src="/FacultyPic/vks.JPG" width={500} height={300}
              alt=""
              className="w-32 h-32 rounded-full border-pink border-2"
            ></Image>
            <h3 className="font-bold text-blue-950">Dr. V.K. Singh</h3>
            <p className="text-sm">ADSW, MCAET</p>
            <div className="w-full gap-1 flex flex-row mt-2">
              <a
                href="/faculty"
                target="_blank"
              >
                <button className="bg-pink-700 text-white font-bold py-1 px-10">
                  Profile
                </button>
              </a>
              <a
                href="/faculty"
                target="_blank"
              >
                <button className="bg-pink-700 text-white font-bold py-1 px-10">
                  Message
                </button>
              </a>
            </div>
          </div>
        </div>

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
