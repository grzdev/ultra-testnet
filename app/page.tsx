'use client'

import Navbar from '@/components/Navbar'
import React from 'react'
import { SetStateAction, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'

export default function Home() {
  const [searchValue, setSearchValue] = useState('')

  //search input function
  const handleInputChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchValue(e.target.value)
  }

  const clearInput = () => {
    setSearchValue('')
  }
  return (
    <div className="relative">
      <Navbar />

      {/* search bar */}
      <div className="flex justify-center items-center bg-[#7650C7] ">
        <div className="flex md:hidden text-center relative mb-[1rem] ">
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Search for accounts, blocks, etc..."
            className="p-4 w-[22rem] h-auto cursor-pointer bg-[#976AF7] text-[1rem] text-white font-semibold rounded placeholder-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white pr-16"
          />
          <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-4">
            {searchValue && (
              <MdClose onClick={clearInput} className="text-white cursor-pointer text-[1.5rem]" />
            )}
            <FaSearch className="text-white cursor-pointer text-[1.2rem]" />
          </div>
        </div>
      </div>

      {/* profile card */}
      <div className="w-full h-[6rem] md:h-[7rem] bg-black px-[1rem] md:px-[2rem] flex justify-between items-center text-white">
        <div className="flex flex-col font-semibold text-[0.7rem] md:text-[1rem]">
          <h1>Creation Date: Apr 29, 2025</h1>
          <h1>
            Created by: <span className="text-blue-400">ultra.eosio</span>
          </h1>
          <h1>
            Created in: <span className="text-blue-400">tx b81780823465…</span>
          </h1>
        </div>

        <div className="flex flex-row gap-[0.5rem] md:gap-[1rem] justify-center items-center">
          <h1 className="text-[1.2rem] md:text-[2rem]">
            <CgProfile />
          </h1>
          <h1 className="text-[1rem] md:text-[1.5rem] font-bold">1aa2aa3aa4rw</h1>
        </div>
      </div>
    </div>
  )
}
