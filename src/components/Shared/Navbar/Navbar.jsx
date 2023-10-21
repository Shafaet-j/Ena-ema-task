import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="w-full mx-auto py-7 px-10 hover:bg-white z-10 sticky group duration-500">
      <nav className=" flex justify-between items-center ">
        <div className=" flex items-center gap-6 text-white group-hover:text-black duration-200">
          <p className=" flex items-center gap-3">
            <AiOutlineMenu size={20} />
            <span>Menu</span>
          </p>
          <p className=" flex items-center gap-3">
            <AiOutlineSearch size={20} />
            <span>Search</span>
          </p>
        </div>
        <div>
          <h1 className="text-white group-hover:text-black duration-200 text-3xl">
            LOUIS VUITTON
          </h1>
        </div>
        <div className=" flex items-center gap-8 text-white group-hover:text-black duration-200">
          <a href="">Call Us</a>
          <p>Wishlist</p>
          <p>MyLV</p>
          <HiOutlineShoppingBag size={20} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
