'use client'

import Navbar from '@/components/Navbar'
import React from 'react'
import { SetStateAction, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'

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

      <div className="flex justify-center items-center mt-[1rem]">
        <div className="flex md:hidden text-center relative">
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
    </div>
  )
}
