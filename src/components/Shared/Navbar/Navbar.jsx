"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  // Add a scroll event listener and update the scrolling state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust the threshold as needed
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full mx-auto py-7 px-10 ${
        scrolling ? "bg-white" : "hover:bg-white"
      } z-10 sticky top-0 group duration-500`}
    >
      <nav className=" flex justify-between items-center ">
        <div
          className={`flex items-center gap-4  ${
            scrolling ? "text-black" : "text-white"
          } group-hover:text-black duration-200 font-light text-sm cursor-pointer`}
        >
          <p className=" flex items-center gap-3">
            <AiOutlineMenu size={20} />
            <span className=" hidden lg:block">Menu</span>
          </p>
          <p className=" flex items-center gap-3">
            <AiOutlineSearch size={20} />
            <span className=" hidden lg:block">Search</span>
          </p>
        </div>
        <div>
          <Link
            href="/"
            className={`${
              scrolling ? " text-black" : "text-white"
            } group-hover:text-black duration-200 lg:text-3xl cursor-pointer`}
          >
            LOUIS VUITTON
          </Link>
        </div>
        <div
          className={`flex items-center gap-8 ${
            scrolling ? "text-black" : "text-white"
          }  group-hover:text-black duration-200 font-light text-sm cursor-pointer`}
        >
          <a className=" hidden lg:block" href="">
            Call Us
          </a>
          <p className=" hidden lg:block">Wishlist</p>
          <p className=" hidden lg:block">MyLV</p>
          <HiOutlineShoppingBag size={20} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
