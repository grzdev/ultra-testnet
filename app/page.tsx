'use client'

import Navbar from '@/components/Navbar'
import React from 'react'
import { SetStateAction, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { PieArcLabel, PieArcSeries, PieChart } from 'reaviz'

export default function Home() {
  const [searchValue, setSearchValue] = useState('')

  //search input function
  const handleInputChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchValue(e.target.value)
  }

  const clearInput = () => {
    setSearchValue('')
  }

  // pie chart data
  const data = [
    { key: 'STAKED FOR POWER', data: 20 },
    { key: 'PENDING REFUND', data: 10 },
    { key: 'AVAILABLE FUNDS', data: 70 },
  ]

  return (
    <div className="relative">
      <Navbar />

      {/* search bar */}
      <div className="flex justify-center items-center h-[6rem] md:h-[0] mt-[-1rem] bg-[#7650C7] ">
        <div className="flex md:hidden text-center relative  ">
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
      <div className="w-full h-[6rem] md:h-[8rem] bg-black px-[1rem] md:px-[2rem] flex justify-between items-center text-white">
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

      {/* total balance */}
      <div className="px-[1rem] md:px-[2rem] mt-[1.5rem] md:mt-[2rem]">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-[1.1rem] md:text-[2rem] font-semibold md:font-bold">TOTAL BALANCE</h1>
          <h1 className="text-[1.1rem] md:text-[2rem] font-semibold md:font-bold">20.00000 UOS</h1>
        </div>

        <div className="w-full h-[0.1rem] bg-gray-300" />

        <div className="hidden md:flex flex-row justify-between items-center ">
          <PieChart
            id="simple"
            width={600}
            height={350}
            data={data}
            series={
              <PieArcSeries
                doughnut={true}
                colorScheme={['#322E37', '#AE62D4', '#E50FB6']}
                label={<PieArcLabel fontFamily="sans-serif" fontSize={15} />}
              />
            }
          />

          <div className="flex flex-col justify-center items-end gap-[0.5rem]">
            <h1 className="text-[1.3rem] font-normal">
              Staked for Power - <span className="font-semibold">10.00000000 UOS</span>
            </h1>
            <h1 className="text-[1.3rem] font-normal">
              Pending Refund - <span className="font-semibold">5.00000000 UOS</span>
            </h1>
            <h1 className="text-[1.3rem] font-normal">
              Available Funds - <span className="font-semibold">20.00000000 UOS</span>
            </h1>
          </div>
        </div>

        <div className="flex md:hidden flex-col justify-center items-center">
          <PieChart
            id="simple"
            width={350}
            height={200}
            data={data}
            series={
              <PieArcSeries
                doughnut={true}
                colorScheme={['#322E37', '#AE62D4', '#E50FB6']}
                label={<PieArcLabel fontFamily="sans-serif" fontSize={8} />}
              />
            }
          />

          <div className="flex flex-col justify-center items-center gap-[0.2rem]">
            <h1 className="text-[1rem] font-normal">
              Staked for Power - <span className="font-semibold">10.00000000 UOS</span>
            </h1>
            <h1 className="text-[1rem] font-normal">
              Pending Refund - <span className="font-semibold">5.00000000 UOS</span>
            </h1>
            <h1 className="text-[1rem] font-normal">
              Available Funds - <span className="font-semibold">20.00000000 UOS</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
