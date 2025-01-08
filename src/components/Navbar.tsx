"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full p-0 lg:px-10 lg:py-6 bg-dark text-light shadow-lg rounded-b-2xl">
      <nav className="flex justify-between items-center p-10 text-accent font-heading text-2xl 
      shadow-glow rounded-2xl font-bold">
        {/* Branding */}
        <div>
          <Link
            href="/"
            className="border relative px-6 py-3 border-light rounded-full hover:bg-accent hover:text-dark transition-all 
            duration-300 hover:border-0 text-xl sm:text-2xl md:text-3xl"
          >
            W.K
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-light focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-8 h-8 transform transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex lg:flex-row gap-10 transition-all duration-300 absolute md:static top-20 left-0 w-full md:w-auto
            bg-dark md:bg-transparent p-5 md:p-0 rounded-lg md:rounded-none shadow-lg md:shadow-none 
          ${isMenuOpen ? "block" : "hidden"} md:flex md:justify-center md:gap-10 mt-16 md:mt-0`}
        >
          {[
            { name: "Home"},
            { name: "About"},
            { name: "Services"},
            { name: "Contact"},
          ].map((link, index) => (
            <li key={index} className="text-center mb-4 md:mb-0">
              <Link
                href="#"
                className={`relative transition-all duration-300 
                  hover:text-accent hover:scale-105 ease-in-out 
                  ${link.name === "Home"
                    ? "text-accent font-bold underline underline-offset-4"
                    : "text-light"}`}
              >
                {link.name}
                <span
                  className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 hover:w-full"
                ></span>
              </Link>
            </li>
          ))}
        </ul>


        {/* CTA Button */}
        <div className="hidden lg:block">
          <button className="bg-gradient-to-r from-primary to-accent px-6 py-3 text-white font-semibold 
          rounded-full hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg flex items-center gap-2
          animate-pulse">
            <span>Hire Me</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
