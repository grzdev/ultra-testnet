import React, { useState } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { IoMdArrowDropdown } from 'react-icons/io'
import { HiArrowTurnLeftUp } from 'react-icons/hi2'

function Permissions() {
  //toggle permissions
  const [isPermissionsOpen, setIsPermissionsOpen] = useState(false)

  const togglePermissions = () => {
    setIsPermissionsOpen(!isPermissionsOpen)
  }
  return (
    <div className="mb-[3rem] mt-[1rem] px-[1rem] md:px-[2rem]">
      <div
        className="text-[1.1rem] text-purple-500 cursor-pointer md:text-[2rem] flex flex-row items-center gap-[0.5rem] font-semibold md:font-bold"
        onClick={togglePermissions}
      >
        Permissions{' '}
        <span className="text-[1.5rem] md:text-[2.5rem]">
          {isPermissionsOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isPermissionsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 md:px-6 py-6 md:py-8 bg-gray-100 rounded-lg mt-[0.6rem] md:mt-[1rem]">
          <div className="w-[20rem] md:w-[50rem] h-[6rem] md:h-[4rem] text-[0.8rem] md:text-[1.1rem] font-semibold flex flex-col md:flex-row gap-[0.5rem] md:gap-[1rem] px-[0.5rem] md:px-[2rem] bg-white rounded-lg shadow-md flex justify-center md:justify-start items-start md:items-center">
            <h1 className="mr-[0] md:mr-[2rem]">owner</h1>
            <h1>+1/1</h1>
            <h1>EOS7PN5NHRkcoh1QJbeXtt2UKYENKEmNpjBVD</h1>
          </div>
          <div className="flex flex-row ml-[0] md:ml-[1rem]">
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
  )
}

export default Permissions
