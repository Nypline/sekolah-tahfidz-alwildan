"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { menuItem } from "@/data/constant";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed inset-x-0 z-20">
      <div className="container mx-auto px-4 flex justify-between items-center py-5">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image src="./next.svg" alt="logo-nav" height={70} width={70} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 ">
          {menuItem.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:text-[#287C74] text-black transition duration-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <Button variant="cta" className="hidden md:flex">
          PPDB
        </Button>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="block md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`h-1 w-6 bg-gray-700 mb-1 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-6 bg-gray-700 mb-1 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-6 bg-gray-700 transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="space-y-4 text-gray-700 p-4">
            {menuItem.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block hover:text-orange-500"
                  onClick={handleMenuClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <Button variant="cta">PPDB</Button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
