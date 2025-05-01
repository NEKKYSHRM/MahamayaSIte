"use client"; // Ensures the component is a client-side component in Next.js

import React from "react";
import Link from "next/link"; // Changed from react-router-dom to next/link
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="mainNavbar">
          <ul>
            <li>
              {/* Changed NavLink to Link and added inline logic for active class */}
              <Link href="/" className="Navbar-Link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className="Navbar-Link">
                About Us
              </Link>
            </li>
            <li>
              Admissions
              <img src="/down-arrow.png" alt="Arrow-Down" />
              <div className="sub-menu w-52">
                <ul>
                  <li>
                    <Link href="/admissions" className="Navbar-Link">
                      Admission Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://upcatet.org/site/pdf/upcatet_online_counselling_schedule.pdf"
                      target="_blank"
                      className="Navbar-Link"
                    >
                      Brouchre
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://drive.google.com/file/d/1JBr5sJSfA9A5mGsR3INPIo4d89ZO1_sC/view"
                      target="_blank"
                      className="Navbar-Link"
                    >
                      Fees
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://nduat.org/pdf/Academic%20Calendar%202024-25%20II%20Sem.pdf"
                      target="_blank"
                      className="Navbar-Link"
                    >
                      Academic Calender
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              Administrations
              <img src="/down-arrow.png" alt="Arrow-Down" />
              <div className="sub-menu w-48">
                <ul>
                  <li>
                    <Link href="/administration" className="Navbar-Link">
                      Administration
                    </Link>
                  </li>
                  <li>
                    <Link href="/faculty" className="Navbar-Link">
                      Faculty
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              Departments
              <img src="/down-arrow.png" alt="Arrow-Down" />
              <div className="sub-menu w-96">
                <ul>
                  <li>
                    <Link
                      href="/departments/fmpe/aboutDpt"
                      className="Navbar-Link"
                    >
                      Department of Farm Machinery & Power Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/departments/pfe/aboutDpt"
                      className="Navbar-Link"
                    >
                      Department of Processing & Food Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/departments/swce/aboutDpt"
                      className="Navbar-Link"
                    >
                      Department of Soil Water & Conservation Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/departments/ide/aboutDpt"
                      className="Navbar-Link"
                    >
                      Department of Irrigation & Drainage Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/departments/ree/aboutDpt"
                      className="Navbar-Link"
                    >
                      Department of Renewable Energy Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/departments/cse/aboutDpt"
                      className="Navbar-Link"
                    >
                      Department of Computer Science & Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/departments/me/aboutDpt"
                      className="Navbar-Link"
                    >
                      Department of Basic Engineering & Applied Sciences
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
                <Link href="#" className="Navbar-Link">
                  PG/Ph.D. Students
                </Link>
            </li>
            <li>
              <Link href="/placement" className="Navbar-Link">
                Placement
              </Link>
            </li>
            <li>
              <Link href="/media" className="Navbar-Link">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
