import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="bg-blue-50 px-4 sm:px-8 py-1 flex items-center justify-between">
      <Link href="/">
        <img src="images/Logo.png" alt="Certo logo" className="ml-4 sm:ml-10" />
      </Link>
      <div className="flex items-center space-x-4 sm:space-x-8 text-black font-bold mr-4 sm:mr-20">
        <Link href="/" className="text-sm sm:text-base">
          iPhone
        </Link>
        <Link href="/" className="text-sm sm:text-base">
          Android
        </Link>
        <Link href="/" className="text-sm sm:text-base">
          Help
        </Link>
        <Link href="/" className="flex items-center gap-1 text-sm sm:text-base">
          Company
          <ChevronDown size={16} />
        </Link>
        <button className="bg-blue-700 p-2.5 text-xs sm:text-sm rounded-3xl cursor-pointer text-white">
          Sign in
        </button>
      </div>
    </nav>
  );
}
