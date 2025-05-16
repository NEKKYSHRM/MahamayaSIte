"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

export default function page() {
  const [currentSlideIndexGuest, setCurrentSlideIndexGuest] = useState(0);
  const slideImagesGuest = [
    "/events/2025/guests/guest2.jpeg",
    "/events/2025/guests/mpl1.JPG",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndexGuest(
        (prevIndex) => (prevIndex + 1) % slideImagesGuest.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slideImagesGuest.length]);

  return (
    <div className="w-full bg-white flex flex-col justify-center items-center p-10">
      <div className="w-full bg-green-600 mx-20 rounded-md text-center">
        <h3 className="text-white text-4xl my-4 font-bold">
          2025's Gallery
        </h3>
      </div>
      <div className="w-full flex flex-col justify-center text-center items-center mb-10">
        <h3 className="text-gray-500 text-3xl my-4 font-bold underline">
          Our Guests
        </h3>
        <div className="w-full hero-slider md:px-10 md:py-3">
          <div className="w-full h-[300px] md:h-[600px] flex justify-center items-center mx-auto relative rounded-lg overflow-hidden border-2">
            <Image
              src={slideImagesGuest[currentSlideIndexGuest]}
              alt={`Slide ${currentSlideIndexGuest + 1}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center text-center items-center">
        <h3 className="text-gray-500 text-3xl my-4 font-bold underline">
          Republic Day
        </h3>
        <div className="w-full hero-slider md:px-10 md:py-3">
          <div className="w-full h-[300px] md:h-[600px] flex justify-center items-center mx-auto relative rounded-lg overflow-hidden border-2">
            <Image
              src={"/events/2025/republicDay/rpd1.jpeg"}
              alt={`Slide ${currentSlideIndexGuest + 1}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center text-center items-center">
        <h3 className="text-gray-500 text-3xl my-4 font-bold underline">
          Mahamaya Premiure League (MPL)
        </h3>
        <div className="w-full hero-slider md:px-10 md:py-3">
          <div className="w-full h-[300px] md:h-[600px] flex justify-center items-center mx-auto relative rounded-lg overflow-hidden border-2">
            <Image
              src={"/events/2025/mpl/mpl2.jpeg"}
              alt={`Slide ${currentSlideIndexGuest + 1}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
