import React from "react";
import "./Footer.css";
import "../Header/Navbar.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="pre-footer text-white">
          <ul>
            <li>
              <Link href="/signup" className="Navbar-Link cursor-pointer">
                Administration Corner
              </Link>
            </li>
            <hr />
            <li>
              <Link href="#">Student Corner</Link>
            </li>
            <hr />
            <li>
              <Link href="#">Employee Corner</Link>
            </li>
            <hr />
            <li>
              <Link href="#">ANDUAT</Link>
            </li>
            <hr />
            <li>
              <Link href="#">Councils</Link>
            </li>
          </ul>
        </div>
        <div className="footer-objects w-full bg-black">
          <div className="footer-rightSide">
            <span>GET IN TOUCH</span>
            <p>
              Mahamaya College Of Agricultural Engineering & Technology,
              Akbarpur, Ambedkar Nagar, 224122 (U.P.)
            </p>
            <p>Phone : +91 90766 11211</p>
            <p>Email : manishfmpe1612@gmail.com </p>
          </div>
          <hr style={{ order: 2 }} />
          <div className="footer-lists">
            <ul>
              <li className="hover:underline">
                <Link href="/administration">Administration</Link>
              </li>
              <li className="hover:underline">
                <Link href="/departments/fmpe/aboutDpt">Departments</Link>
              </li>
              <li className="hover:underline">
                <Link href="/media">In Media</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Research Journals</Link>
              </li>
            </ul>
          </div>
          <div className="footer-lists">
            <ul>
              <li className="hover:underline">
                <Link href="https://www.nduat.org/" target="_blank">AMS ANDUAT</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Internal Complaints</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Recruitment</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Academic Links</Link>
              </li>
            </ul>
          </div>
          <div className="footer-lists">
            <ul>
              <li className="hover:underline">
                <Link href="/hostels">Hostels</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Anti Ragging</Link>
              </li>
              <li className="hover:underline">
                <Link href="https://nduat.org/pdf/Academic%20Calendar%202024-25%20II%20Sem.pdf" target="_blank">Academic Calendar</Link>
              </li>
              <li className="hover:underline">
                <Link href="/sitemap.xml">Sitemap</Link>
              </li>
            </ul>
          </div>
          <div className="footer-lists">
            <ul>
              <li className="hover:underline">
                <Link href="#">Privacy - Policy</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li className="hover:underline">
                <Link href="/aboutus">About Us</Link>
              </li>
              <li className="hover:underline">
                <Link href="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            Copyrights &copy; 2024 MCAET. All rights reserved. | Designed and
            developed by
            <span style={{ fontWeight: "bold" }} className="hover:underline hover:text-blue-300">
              <Link href="https://www.linkedin.com/in/nikhil-kumar-sharma-6611031a9/" className="text-white hover:underline hover:text-blue-300" target="blank">
                Nikhil Kumar Sharma
              </Link>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
