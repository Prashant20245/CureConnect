import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);

  const [showMenu, setShowMenu] = useState(false);
  //if token is true create account button will not show else show

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  const goToAdminPanel = () => {
  window.open("https://cure-connect-a471.vercel.app", "_blank");
};


  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      ></img>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1 ">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-sky-400 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1 ">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-sky-400 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 ">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-sky-400 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1 ">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-sky-400 w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <button
        onClick={goToAdminPanel}
        className="px-2 py-2 bg-gray-50 border border-neutral-200 text-xs  text-gray-700 rounded-full font-semi-bold"
      >
        Admin Panel
      </button>
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 h-8 rounded-full object-cover "
              src={userData.image}
              alt=""
            ></img>
            <img className="w-2.5 " src={assets.dropdown_icon} alt=""></img>
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p onClick={logout} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-sky-400 text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}
        {/* responsiveness   */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />
        {/* Mobile Menu */}

        <div
          className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out ${
            showMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Logo at top center */}
          <div className="flex justify-center py-4 border-b border-gray-300">
            <img
              src={assets.logo}
              alt="Logo"
              className="w-36 object-contain max-w-[70%]"
            />
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center pt-8 px-6">
            <ul className="flex flex-col items-center gap-6 text-xl font-semibold text-gray-800">
              <NavLink to="/" onClick={() => setShowMenu(false)}>
                Home
              </NavLink>
              <NavLink to="/doctors" onClick={() => setShowMenu(false)}>
                All Doctors
              </NavLink>
              <NavLink to="/about" onClick={() => setShowMenu(false)}>
                About
              </NavLink>
              <NavLink to="/contact" onClick={() => setShowMenu(false)}>
                Contact
              </NavLink>
            </ul>

            {/* Centered Cross Icon */}
            <div className="mt-10 flex justify-center">
              <img
                onClick={() => setShowMenu(false)}
                src={assets.cross_icon}
                alt="Close"
                className="w-8 h-8 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
