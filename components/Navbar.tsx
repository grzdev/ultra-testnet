import React from 'react'
import { SetStateAction, useState } from 'react'
import Image from 'next/image'
import Logo from '../assets/ultra-logo2.png'
import { MdClose } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { FaCheck } from 'react-icons/fa6'

function Navbar() {
  const [searchValue, setSearchValue] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<string>('')

  //search input function
  const handleInputChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchValue(e.target.value)
  }

  const clearInput = () => {
    setSearchValue('')
  }
  return (
    <div>
      <nav className="flex justify-between items-center py-2 md:py-[1.5rem] px-4 md:px-[2rem] bg-[#7650C7] z-10 relative">
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
              <MdClose onClick={clearInput} className="text-white cursor-pointer text-[1.5rem]" />
            )}
            <FaSearch className="text-white cursor-pointer text-[1.2rem]" />
          </div>
        </div>

        <div
          className="flex flex-row gap-[0.5rem] justify-center items-center cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          <h1 className="hidden md:flex text-white text-[1rem] md:text-[1.2rem]">MENU</h1>
          <h1 className="text-white text-[2rem]">
            <FiMenu />
          </h1>
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
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-end py-8 md:py-10 px-4 md:px-10">
          <MdClose
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-3xl cursor-pointer"
          />
        </div>

        <div className="px-[2rem] md:px-[10rem] py-2 md:py-8 text-white hidden md:flex flex-col md:flex-row w-full items-start justify-between">
          <Image src={Logo} alt="Ultra Logo" className="w-auto md:w-[12rem]" />
          <div>
            <h1 className="text-[1.1rem] md:text-[2rem] font-bold">Navigation</h1>
            <ul className="mt-4 space-y-4 text-[1rem] md:text-[1.2rem] cursor-pointer font-semibold">
              <li>Transactions</li>
              <li>Blocks</li>
              <li>Producers</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[1.1rem] md:text-[2rem] font-bold">Networks</h1>
            <ul className="mt-4 space-y-4 text-[1rem] md:text-[1.2rem] cursor-pointer font-semibold">
              <li>Ultra DEV Testnet</li>
              <li>Ultra QA Testnet</li>
              <li>Ultra PREPOD Testnet</li>
              <li>Ultra PROD Mainnet</li>
              <li>Ultra PROD Testnet</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[1.1rem] md:text-[2rem] font-bold">Language</h1>
            <ul className="mt-4 space-y-4 text-[1rem] md:text-[1.2rem] cursor-pointer font-semibold">
              {['EN', '中国人'].map((language) => (
                <li
                  key={language}
                  onClick={() => setSelectedLanguage(language)}
                  className="flex items-center gap-[rem] md:gap-[2rem]"
                >
                  <span className="w-4 flex justify-center">
                    {selectedLanguage === language && <FaCheck className="text-white" />}
                  </span>
                  <span className={selectedLanguage === language ? 'font-bold' : ''}>
                    {language}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-[2rem] md:px-[10rem] py-2 md:py-8 text-white flex md:hidden flex-col md:flex-row w-full items-start justify-between">
          <Image src={Logo} alt="Ultra Logo" className="w-[10rem] ml-[-1rem]" />
          <div className="flex flex-row w-full items-start justify-between mt-[1rem]">
            <div>
              <h1 className="text-[1.2rem] md:text-[2rem] font-bold">Navigation</h1>
              <ul className="mt-4 space-y-4 text-[1rem] md:text-[1.2rem] cursor-pointer font-semibold">
                <li>Transactions</li>
                <li>Blocks</li>
                <li>Producers</li>
              </ul>
            </div>
            <div>
              <h1 className="text-[1.2rem] md:text-[2rem] font-bold">Networks</h1>
              <ul className="mt-4 space-y-4 text-[1rem] md:text-[1.2rem] cursor-pointer font-semibold">
                <li>Ultra DEV Testnet</li>
                <li>Ultra QA Testnet</li>
                <li>Ultra PREPOD Testnet</li>
                <li>Ultra PROD Mainnet</li>
                <li>Ultra PROD Testnet</li>
              </ul>
            </div>
          </div>
          <div className="mt-[-3rem]">
            <h1 className="text-[1.2rem] md:text-[2rem] font-bold">Language</h1>
            <ul className="mt-4 space-y-4 text-[1rem] md:text-[1.2rem] cursor-pointer font-semibold">
              {['EN', '中国人'].map((language) => (
                <li
                  key={language}
                  onClick={() => setSelectedLanguage(language)}
                  className="flex items-center gap-[rem] md:gap-[2rem]"
                >
                  <span className="w-4 flex justify-center">
                    {selectedLanguage === language && <FaCheck className="text-white" />}
                  </span>
                  <span className={selectedLanguage === language ? 'font-bold' : ''}>
                    {language}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
