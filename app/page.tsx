'use client'

import Navbar from '@/components/Navbar'
import React from 'react'
import { SetStateAction, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { PieArcLabel, PieArcSeries, PieChart } from 'reaviz'
import { IoMdArrowDropright } from 'react-icons/io'
import { IoMdArrowDropdown } from 'react-icons/io'
import { HiArrowTurnLeftUp } from 'react-icons/hi2'

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

  //toggle permissions
  const [isPermissionsOpen, setIsPermissionsOpen] = useState(false)

  const togglePermissions = () => {
    setIsPermissionsOpen(!isPermissionsOpen)
  }

  return (
    <div className="relative">
      <Navbar />

      {/* mobile search bar */}
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

        {/* desktop pie chart */}
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

        {/* mobile pie chart */}
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
                label={<PieArcLabel fontFamily="sans-serif" fontSize={10} />}
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

        <div className="w-full h-[0.1rem] bg-gray-300 mt-[1rem] md:mt-[0]" />

        {/* stats div */}
        <div className=" mt-[1rem] gap-[2rem] md:gap-[0] flex flex-col md:flex-row w-full justify-between items-center">
          {/* RAM div`` */}
          <div className="flex flex-col gap-[0.7rem] md:gap-[1rem]">
            <div className="flex flex-row w-full md:w-[25rem] justify-between items-start ">
              <div className="flex flex-col">
                <h1 className="text-[1.2rem] md:text-[1.4rem] font-semibold"> RAM </h1>
                <h1 className="text-[1rem] text-gray-500"> available </h1>
              </div>

              <h1 className="text-[1.4rem] md:text-[1.6rem] font-normal">855.4 KB</h1>
            </div>

            <div className="flex flex-row w-full md:w-[25rem] gap-[4rem] md:gap-[0] justify-between items-center ">
              <h1 className="text-[1.1rem] md:text-[1.2rem]">
                {' '}
                612 B <span className="text-gray-500">used / </span>856 KB{' '}
              </h1>
              <div className="w-[7rem] md:w-[10rem] bg-gray-300 h-4 md:h-5 rounded">
                <div className="bg-[#4F4FA6] h-4 md:h-5 rounded" style={{ width: '5%' }}></div>
              </div>
            </div>
          </div>

          <div className="w-full h-[0.1rem] bg-gray-300 flex md:hidden" />

          {/* Power@CPU div`` */}
          <div className="flex flex-col gap-[0.7rem] md:gap-[1rem]">
            <div className="flex flex-row w-full md:w-[25rem] justify-between items-start ">
              <div className="flex flex-col">
                <h1 className="text-[1.2rem] md:text-[1.4rem] font-semibold"> POWER@CPU </h1>
                <h1 className="text-[1rem] text-gray-500"> available </h1>
              </div>

              <h1 className="text-[1.4rem] md:text-[1.6rem] font-normal">0.0us</h1>
            </div>

            <div className="flex flex-row w-full md:w-[25rem] gap-[4rem] md:gap-[0] justify-between items-center ">
              <h1 className="text-[1.1rem] md:text-[1.2rem]">
                {' '}
                397.0us <span className="text-gray-500">used / </span>0.0us{' '}
              </h1>
              <div className="w-[7rem] md:w-[10rem] bg-gray-300 h-4 md:h-5 rounded">
                <div className="bg-[#4F4FA6] h-4 md:h-5 rounded" style={{ width: '97%' }}></div>
              </div>
            </div>
          </div>

          <div className="w-full h-[0.1rem] bg-gray-300 flex md:hidden" />

          {/* Power@Network div */}
          <div className="flex flex-col gap-[0.7rem] md:gap-[1rem]">
            <div className="flex flex-row w-full md:w-[25rem] justify-between items-start ">
              <div className="flex flex-col">
                <h1 className="text-[1.2rem] md:text-[1.4rem] font-semibold"> POWER@NETWORK </h1>
                <h1 className="text-[1rem] text-gray-500"> available </h1>
              </div>

              <h1 className="text-[1.4rem] md:text-[1.6rem] font-normal">88 B</h1>
            </div>

            <div className="flex flex-row w-full md:w-[25rem] gap-[6.5rem] md:gap-[0] justify-between items-center ">
              <h1 className="text-[1.1rem] md:text-[1.2rem]">
                {' '}
                1 KB <span className="text-gray-500">used / </span> 0 B{' '}
              </h1>
              <div className="w-[7rem] md:w-[10rem] bg-gray-300 h-4 md:h-5 rounded">
                <div className="bg-[#4F4FA6] h-4 md:h-5 rounded" style={{ width: '97%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[0.1rem] bg-gray-300 mt-[1rem] md:mt-[2rem]" />

        {/* permissions */}
        <div className="mb-[5rem] mt-[1rem]">
          <div
            className="text-[1.1rem] text-purple-500 cursor-pointer md:text-[2rem] flex flex-row items-center gap-[0.5rem] font-semibold md:font-bold"
            onClick={togglePermissions}
          >
            Permissions{' '}
            <span className="text-[2.5rem]">
              {isPermissionsOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
            </span>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isPermissionsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-2 md:p-4 bg-gray-100 rounded-lg">
              <div className="w-[20rem] md:w-[50rem] h-[6rem] md:h-[4rem] text-[0.8rem] md:text-[1.1rem] font-semibold flex flex-col md:flex-row gap-[0.5rem] md:gap-[1rem] px-[0.5rem] md:px-[2rem] bg-white rounded-lg shadow-md flex justify-center md:justify-start items-start md:items-center">
                <h1 className="mr-[0] md:mr-[2rem]">owner</h1>
                <h1>+1/1</h1>
                <h1>EOS7PN5NHRkcoh1QJbeXtt2UKYENKEmNpjBVD</h1>
              </div>
              <div className="flex flex-row ml-[0.2rem] md:ml-[1rem]">
                <h1 className="text-[2rem] md:text-[3rem] font-semibold">
                  <HiArrowTurnLeftUp />
                </h1>

                <div className="w-[20rem] mt-[1rem] md:w-[50rem] h-[6rem] md:h-[4rem] text-[0.8rem] md:text-[1.1rem] font-semibold flex flex-col md:flex-row gap-[0.5rem] md:gap-[1rem] px-[0.5rem] md:px-[2rem] bg-white rounded-lg shadow-md flex justify-center md:justify-start items-start md:items-center">
                  <h1 className="mr-[0] md:mr-[2rem]">active</h1>
                  <h1>+1/1</h1>
                  <h1>EOS7PN5NHRkcoh1QJbeXtt2UKYENKEmNpjBVD</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
