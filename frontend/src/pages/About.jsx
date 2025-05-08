import React from "react";
import { assets } from "../assets/assets";

export const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        ></img>
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to CureConnect — Your Trusted Partner in Healthcare. At
            CureConnect, we believe that access to quality healthcare should be
            simple, fast, and stress-free. Our mission is to bridge the gap
            between patients and healthcare providers by offering a seamless
            online platform where you can easily find, book, and manage doctor
            appointments anytime, anywhere.
          </p>
          <p>
            Founded with a passion for healthcare innovation, CureConnect
            empowers individuals to take charge of their health by connecting
            them with trusted doctors across a wide range of specialties.
            Whether you're seeking routine check-ups, expert consultations, or
            specialist care, we make the process effortless.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            To create a healthier world by making healthcare more accessible,
            transparent, and patient-centered.
          </p>
          <b className="text-gray-800">Our Promise</b>
          <p>
            At CureConnect, your health and convenience come first. We are
            committed to helping you find the right doctor, at the right time,
            with complete confidence.
          </p>
          <b className="text-gray-800">
            Thank you for choosing CureConnect — where care meets connection.
          </b>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-sky-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-sky-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-sky-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};
