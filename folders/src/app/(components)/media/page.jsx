"use client";

import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full py-10">
      {/* Gallery */}
      <section className="w-full">
        <div className="grid w-full grid-cols-4">
          <div className="w-full">
            <div className="w-full h-72 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
              <Image
                src="/hostels/hostels.jpg"
                alt={`student's profile`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-72 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
              <Image
                src="/gallery/library.jpeg"
                alt={`student's profile`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-72 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
              <Image
                src="/gallery/fmpe.jpeg"
                alt={`student's profile`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-72 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
              <Image
                src="/gallery/civil.jpeg"
                alt={`student's profile`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-4">
          <div className="w-full">
            <div className="w-full h-72 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
              <Image
                src="/gallery/convocation.jpeg"
                alt={`student's profile`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-72 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
              <Image
                src="/gallery/library.jpeg"
                alt={`student's profile`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-72 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
              <Image
                src="/gallery/fmpe.jpeg"
                alt={`student's profile`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-72 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
              <Image
                src="/gallery/civil.jpeg"
                alt={`student's profile`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
