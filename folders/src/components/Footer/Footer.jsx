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
            <p>Phone :</p>
            <p>Email : </p>
          </div>
          <hr style={{ order: 2 }} />
          <div className="footer-lists">
            <ul>
              <li>
                <Link href="/administration">Administration</Link>
              </li>
              <li>
                <Link href="/departments">Departments</Link>
              </li>
              <li>
                <Link href="#">In Media</Link>
              </li>
              <li>
                <Link href="#">Research Journals</Link>
              </li>
            </ul>
          </div>
          <div className="footer-lists">
            <ul>
              <li>
                <Link href="https://www.nduat.org/" target="_blank">AMS ANDUAT</Link>
              </li>
              <li>
                <Link href="#">Internal Complaints</Link>
              </li>
              <li>
                <Link href="#">Recruitment</Link>
              </li>
              <li>
                <Link href="#">Academic Links</Link>
              </li>
            </ul>
          </div>
          <div className="footer-lists">
            <ul>
              <li>
                <Link href="#">Hostels</Link>
              </li>
              <li>
                <Link href="#">Anti Ragging</Link>
              </li>
              <li>
                <Link href="https://nduat.org/pdf/Academic%20Calendar%202024-25%20II%20Sem.pdf" target="_blank">Academic Calendar</Link>
              </li>
              <li>
                <Link href="#">Sitemap</Link>
              </li>
            </ul>
          </div>
          <div className="footer-lists">
            <ul>
              <li>
                <Link href="#">Privacy - Policy</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/aboutus">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            Copyrights &copy; 2024 MCAET. All rights reserved. | Designed and
            developed by
            <span style={{ fontWeight: "bold" }}>
              <Link href="#" style={{ textDecoration: "none", color: "white" }}>
                {/* SoftSculpt Innovations */}
                Nikhil Kumar Sharma
              </Link>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
