"use client";
import Link from "next/link";
import React, { useState } from "react";

import { ArrowRight, Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

const navLinks = [
  { name: "About", href: "/" },
  { name: "Our Team", href: "/" },
  { name: "Services", href: "/services" },
  { name: "News", href: "/" },
  { name: "Events", href: "/" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <>
      <nav
        className={`md:flex justify-between items-center p-4 fixed top-0 w-full z-50 ${
          isHome ? "bg-transparent" : "bg-white shadow"
        }`}
      >
        {/* logo */}
        <div className="p-5 md:flex hidden">
          <Link
            href="/"
            className={`hover:underline text-xl tracking-widest font-bold flex flex-row duration-500 ${
              isHome ? "text-gray-100" : "text-black"
            }`}
          >
            Cargo
          </Link>
        </div>

        {/* links */}
        <div className=" space-x-6 hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative overflow-hidden text-sm p-2 font-thin tracking-wide rounded-2xl transition-all duration-200 group ${
                isHome
                  ? "text-gray-200 hover:text-black"
                  : "text-black hover:text-lime-600"
              }`}
            >
              <span
                className={`absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-200 ease-out rounded-2xl z-0 origin-center ${
                  isHome ? "bg-gray-300" : ""
                }`}
              ></span>
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* buttons */}
        <div className="md:flex hidden items-center justify-center gap-3">
          <button
            className={`rounded-full p-2 duration-300 hover:cursor-pointer group ${
              isHome
                ? "bg-gray-900 hover:bg-gray-800"
                : "bg-black hover:bg-gray-700"
            }`}
          >
            <Search
              className={`h-5 w-5 group-hover:-rotate-12 duration-200 ${
                isHome ? "text-white" : "text-white"
              }`}
            />
          </button>
          <button className="bg-lime-500 hover:bg-lime-600 duration-300 text-white font-medium py-2 px-4 rounded-3xl flex items-center justify-center group">
            Contact Us
            <ArrowRight className="w-5 h-5 ml-5 group-hover:translate-x-1.5 duration-200" />
          </button>
        </div>

        {/* mobile menu */}
        <div className="md:hidden flex justify-between items-center gap-3">
          <div>
            <Link
              href={"/"}
              className={`text-xl ${isHome ? "text-white" : "text-black"}`}
            >
              Cargo
            </Link>
          </div>
          <div>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X
                  className={`h-6 w-6 ${isHome ? "text-white" : "text-black"}`}
                />
              ) : (
                <Menu
                  className={`h-6 w-6 ${isHome ? "text-white" : "text-black"}`}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* mobile menu interface (opened)*/}
      {isMobileMenuOpen && (
        <div
          className={`fixed top-16 left-0 right-0 h-[56vh] z-50 md:hidden ${
            isHome ? "bg-gray-900" : "bg-white"
          } shadow-lg transition-all duration-300`}
        >
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`py-2 px-4 rounded-lg ${
                  isHome
                    ? "text-gray-200 hover:bg-gray-800"
                    : "text-black hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-gray-700">
              <button
                className={`rounded-full p-2 duration-300 hover:cursor-pointer group ${
                  isHome
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <Search
                  className={`h-5 w-5 group-hover:-rotate-12 duration-200 ${
                    isHome ? "text-white" : "text-black"
                  }`}
                />
              </button>
              <button
                className={`${
                  isHome
                    ? "bg-lime-500 hover:bg-lime-600"
                    : "bg-lime-500 hover:bg-lime-600"
                } duration-300 text-white font-medium py-2 px-4 rounded-3xl flex items-center justify-center group`}
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 duration-200" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
