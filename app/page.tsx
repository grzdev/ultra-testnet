'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import { CgProfile } from 'react-icons/cg'
import MobileNavbar from '@/components/MobileNavbar'
import TotalBalanceDiv from '@/components/TotalBalanceDiv'
import Permissions from '@/components/Permissions'
import { FaLock } from 'react-icons/fa'
import { TransactionCard, TransactionData } from '@/components/TransationCard'
import Footer from '@/components/Footer'

const transactions: TransactionData[] = [
  {
    contract: 'eosio.nft.ft',
    action: 'purchase.a',
    general: {
      receiver: 'eosio.nft.ft',
      contract: 'eosio.nft.ft',
      actionName: 'purchase.a',
      authorization: '[1aa2aa3aa4rw] active',
    },
    jsonData: {
      purchase: {
        buyer: '1aa2aa3aa4rw',
        index: 0,
        max_price: '2.00000000 UOS',
        memo: 'Purchasing uniq',
        promoter_id: null,
        receiver: '1aa2aa3aa4rw',
        token_factory_id: 4243,
        user_uniqs: null,
      },
    },
  },
  {
    contract: '1aa2aa3aa4rw',
    action: 'purchase.a',
    general: {
      receiver: 'eosio.token',
      contract: 'eosio.token',
      actionName: 'transfer',
      authorization: '[account2] active',
    },
    jsonData: {
      transfer: {
        from: 'account1',
        to: 'account2',
        quantity: '10.0000 UOS',
        memo: 'Payment',
      },
    },
  },
  {
    contract: 'eosio.nft.ft',
    action: 'issue.b',
    general: {
      receiver: 'eosio.nft.ft',
      contract: 'eosio.nft.ft',
      actionName: 'purchase.a',
      authorization: '[1aa2aa3aa4rw] active',
    },
    jsonData: {
      purchase: {
        buyer: '1aa2aa3aa4rw',
        index: 0,
        max_price: '2.00000000 UOS',
        memo: 'Purchasing uniq',
        promoter_id: null,
        receiver: '1aa2aa3aa4rw',
        token_factory_id: 4243,
        user_uniqs: null,
      },
    },
  },
  {
    contract: '1aa2aa3aa4rw',
    action: 'issue.b',
    general: {
      receiver: 'eosio.token',
      contract: 'eosio.token',
      actionName: 'transfer',
      authorization: '[account2] active',
    },
    jsonData: {
      transfer: {
        from: 'account1',
        to: 'account2',
        quantity: '10.0000 UOS',
        memo: 'Payment',
      },
    },
  },
]

export default function Home() {
  return (
    <div className="relative">
      <Navbar />

      <MobileNavbar />

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

      <TotalBalanceDiv />

      <Permissions />

      {/* transactions */}
      <div className="px-[1rem] md:px-[2rem]">
        <div className="w-full p-[2rem] maxH-[42rem] md:maxH-[35rem] border-2 border-gray-300 rounded-xl">
          <h1 className="text-[1.1rem] text-purple-500 cursor-pointer md:text-[1.5rem] flex flex-row items-center gap-[0.5rem] font-semibold md:font-bold">
            Transactions
          </h1>

          <div className="mt-[2rem] flex flex-col md:flex-row gap-[3rem] md:gap-[10rem]">
            <div>
              <h1 className="text-[1.2rem]">Transaction / Block</h1>
              <h1 className="flex flex-row items-center font-semibold gap-[0.5rem] mt-[0.8rem]">
                <span className="text-blue-400">2c233951f60e…</span> in{' '}
                <span className="text-blue-400">247,518,066</span>{' '}
                <span className="text-gray-400">
                  <FaLock />
                </span>
              </h1>
            </div>

            <div>
              <h1 className="text-[1.2rem]">Action</h1>
              <div className="space-y-4 mt-[1rem]">
                {transactions.map((tx, index) => (
                  <TransactionCard key={`tx-${index}`} data={tx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
