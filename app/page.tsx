"use client";

import { SetStateAction, useState } from "react";
import Image from "next/image";
import Logo from "../assets/ultra-logo2.png";
import { MdClose } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //search input function
  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchValue(e.target.value);
  };

  const clearInput = () => {
    setSearchValue("");
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 md:py-[1.5rem] px-4 md:px-[2rem] bg-[#7650C7] z-10 relative">

        <div>
          <Image src={Logo} alt="Ultra Logo" className="w-auto md:w-[12rem]" />
        </div>

        <div className="hidden md:flex text-center relative">
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Search for accounts, blocks, transactions..."
            className="p-4 w-full md:w-[45rem] h-auto md:h-[4rem] cursor-pointer bg-[#976AF7] text-[1.2rem] text-white font-semibold rounded placeholder-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white pr-16"
          />
          <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-4">
            {searchValue && (
              <MdClose
                onClick={clearInput}
                className="text-white cursor-pointer text-[1.5rem]"
              />
            )}
            <FaSearch className="text-white cursor-pointer text-[1.2rem]" />
          </div>
        </div>

        <div
          className="flex flex-row gap-[0.5rem] justify-center items-center cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          <h1 className="hidden md:flex text-white text-[1rem] md:text-[1.2rem]">MENU</h1>
          <h1 className="text-white text-[2rem]"><FiMenu /></h1>
        </div>
      </nav>

      {/* Backdrop Blur */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Slide-down Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-[80vh] bg-[#7650C7] z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-end py-8 md:py-10 px-4 md:px-10">
          <MdClose
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-3xl cursor-pointer"
          />
        </div>
        <div className="p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          {/* Add menu items here */}
          <ul className="space-y-4">
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="cursor-pointer hover:underline">Explore</li>
            <li className="cursor-pointer hover:underline">Stats</li>
            <li className="cursor-pointer hover:underline">Settings</li>
          </ul>
        </div>
      </div>
    </div>

  );
}
