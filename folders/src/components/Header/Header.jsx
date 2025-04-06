"use client";

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
          className="flex justify-between text-white p-0.5 xl:p-1 text-[8px] xl:text-base"
          style={{ backgroundColor: "#808080aa" }}
        >
          <span id="dateSpan">{currentDateTime}</span>
          <span>Temperature</span>
        </section>

        <section
          style={{ backgroundColor: "green", color: "white" }}
          className="w-full flex justify-between px-2 xl:px-6 items-center xl:p-3 py-2"
        >
          {/* style={{backgroundImage: `url(${collegePic})`, backgroundSize: 'cover'}} */}
          <div className="flex justify-evenly items-center">
            <img className="w-10 xl:w-36" src="/logo.png" alt="" />
            <div className="flex flex-col text-white font-extrabold items-center font-serif">
              <p className="text-[5px] xl:text-lg">
                महामाया कृषि अभियांत्रिकी एवं प्रौद्योगिकी महाविद्यालय, अकबरपुर,
                आंबेडकर नगर
              </p>
              <p className="text-[5px] xl:text-lg">
                Mahamaya College of Agricultural Engineering & Technology,
                Akabarpur, Ambedkar Nagar
              </p>
              <p className="text-[5px] xl:text-lg">
                आचार्य नरेंद्र देव कृषि एवं प्रौद्योगिकी विश्वविद्यालय,
                कुमारगंज, अयोध्या
              </p>
              <p className="text-[5px] xl:text-lg">
                Acharya Narendra Deva University of Agriculture & Technology,
                kumarganj, Ayodhya
              </p>
            </div>
          </div>
          <div className="flex gap-2 xl:gap-8 items-center">
            <img
              className="w-12 xl:w-36 bg-white rounded-md xl:rounded-2xl"
              src="/naacLogo.png"
              alt=""
            />
            <div className="w-8 h-8 xl:w-28 xl:h-28 bg-white flex justify-center items-center rounded-full">
              <img className="w-4 xl:w-16" src="/icar.png" />
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}
