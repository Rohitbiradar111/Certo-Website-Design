"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-blue-50 px-4 sm:px-8 py-2 flex items-center justify-between">
      <Link href="/">
        <img
          src="images/Logo.png"
          alt="Certo logo"
          className="ml-2 sm:ml-4 h-8 sm:h-10"
        />
      </Link>
      <div className="hidden md:flex items-center space-x-6 text-black font-bold mr-4 sm:mr-8">
        <Link href="/" className="text-sm sm:text-base hover:text-blue-700">
          iPhone
        </Link>
        <Link href="/" className="text-sm sm:text-base hover:text-blue-700">
          Android
        </Link>
        <Link href="/" className="text-sm sm:text-base hover:text-blue-700">
          Help
        </Link>
        <Link
          href="/"
          className="flex items-center gap-1 text-sm sm:text-base hover:text-blue-700"
        >
          Company
          <ChevronDown size={14} className="sm:h-4 sm:w-4" />
        </Link>
        <button className="bg-blue-700 px-4 py-2 text-xs sm:text-sm rounded-full cursor-pointer text-white hover:bg-blue-800">
          Sign in
        </button>
      </div>
      <button className="md:hidden text-black mr-2" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isMenuOpen && (
        <div className="absolute top-12 left-0 w-full bg-blue-50 flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <Link
            href="/"
            className="text-sm font-bold text-black hover:text-blue-700"
            onClick={toggleMenu}
          >
            iPhone
          </Link>
          <Link
            href="/"
            className="text-sm font-bold text-black hover:text-blue-700"
            onClick={toggleMenu}
          >
            Android
          </Link>
          <Link
            href="/"
            className="text-sm font-bold text-black hover:text-blue-700"
            onClick={toggleMenu}
          >
            Help
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1 text-sm font-bold text-black hover:text-blue-700"
            onClick={toggleMenu}
          >
            Company
            <ChevronDown size={14} />
          </Link>
          <button
            className="bg-blue-700 px-4 py-2 text-xs rounded-full cursor-pointer text-white hover:bg-blue-800"
            onClick={toggleMenu}
          >
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
}
