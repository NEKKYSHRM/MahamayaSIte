"use client"

import React, { useEffect } from "react";
import { useState } from "react";

export default function Header() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const currentDate = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };
      const formattedDateTime = currentDate.toLocaleString("en-US", options);
      setCurrentDateTime(formattedDateTime);
    };
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <header className="w-full relative">
        <section
          className="flex justify-between text-white p-1 text-base"
          style={{ backgroundColor: "#808080aa" }}
        >
          <span id="dateSpan">{currentDateTime}</span>
          <span>Temperature</span>
        </section>
        <section
          style={{ backgroundColor: "green", color: "white" }}
          className="w-full flex justify-between px-6 items-center p-3"
        >
          {/* style={{backgroundImage: `url(${collegePic})`, backgroundSize: 'cover'}} */}
          <div className="flex justify-evenly items-center">
            <img className="w-36" src='/logo.png' alt="" />
            <div className="flex flex-col text-white font-extrabold items-center font-serif">
              <p className="text-lg">
                महामाया कृषि अभियांत्रिकी एवं प्रौद्योगिकी महाविद्यालय, अकबरपुर,
                आंबेडकर नगर
              </p>
              <p className="text-lg">
                Mahamaya College of Agricultural Engineering & Technology,
                Akabarpur, Ambedkar Nagar
              </p>
              <p className="">
                आचार्य नरेंद्र देव कृषि एवं प्रौद्योगिकी विश्वविद्यालय,
                कुमारगंज, अयोध्या
              </p>
              <p className="">
                Acharya Narendra Deva University of Agriculture & Technology,
                kumarganj, Ayodhya
              </p>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <img className="w-36 bg-white rounded-2xl" src='/naacLogo.png' alt="" />
            <div className="w-28 h-28 bg-white flex justify-center items-center rounded-full">
              <img className="w-16" src='/icar.png' />
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}
