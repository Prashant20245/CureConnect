import React from "react";
import { assets } from "../assets/assets";

export const Contact = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div>
          CONTACT <span>US</span>
        </div>
        <div className="my-10 flex flex-col justify-center  md:flex-row gap-10 mb-28 text-sm">
          <img
            className="w-full max-w-[360px] "
            src={assets.contact_image}
            alt=""
          />

          <div className="flex flex-col justify-center items-start gap-6">
            <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
            <p className="text-gray-500">
              12845 Kingston Avenue <br /> Suite 210, Boston, USA
            </p>
            <p className="text-gray-500">
              Tel: (415) 555‑0132 <br />
              Email:- xyx@gmail.com
            </p>
            <p className="font-semibold text-lg text-gray-600">
              CAREERS AT CureConnect
            </p>
            <p className="text-gray-500">
              Learn more about our teams and job openings.
            </p>
            <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
