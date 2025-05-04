import { useState } from 'react'
import { FiPlus, FiMinus, FiCode, FiInfo } from 'react-icons/fi'

export interface TransactionData {
  contract: string
  action: string
  general: {
    receiver: string
    contract: string
    actionName: string
    authorization: string
  }
  jsonData: object
}

export function TransactionCard({ data }: { data: TransactionData }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeTab, setActiveTab] = useState<'general' | 'json'>('general')

  return (
    <div className="w-full max-w-[30rem] mb-4">
      {/* Clickable Header */}
      <div
        className="flex items-center justify-between w-full md:w-[20rem] h-[5rem] bg-gray-100 rounded-full px-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-semibold">{data.contract}</h2>
        <h3 className="text-md text-gray-600">{data.action}</h3>
        <span className="text-2xl">{isExpanded ? <FiMinus /> : <FiPlus />}</span>
      </div>

      {/* Collapsible Content */}
      {isExpanded && (
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mt-2">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-4">
            <button
              className={`flex items-center px-4 py-2 font-medium ${activeTab === 'general' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('general')}
            >
              <FiInfo className="mr-2" />
              General
            </button>
            <button
              className={`flex items-center px-4 py-2 font-medium ${activeTab === 'json' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('json')}
            >
              <FiCode className="mr-2" />
              JSON Data
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'general' ? (
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-semibold">Receiver</td>
                  <td className="py-2">{data.general.receiver}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-semibold">Contract</td>
                  <td className="py-2">{data.general.contract}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-semibold">Action name</td>
                  <td className="py-2">{data.general.actionName}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-semibold">Authorization</td>
                  <td className="py-2">{data.general.authorization}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div className="bg-gray-50 p-4 rounded-md">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                {JSON.stringify(data.jsonData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
