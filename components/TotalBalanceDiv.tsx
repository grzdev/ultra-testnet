import React from 'react'
import { PieArcLabel, PieArcSeries, PieChart } from 'reaviz'

function TotalBalanceDiv() {
  // pie chart data
  const data = [
    { key: 'STAKED FOR POWER', data: 20 },
    { key: 'PENDING REFUND', data: 10 },
    { key: 'AVAILABLE FUNDS', data: 70 },
  ]
  return (
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
    </div>
  )
}

export default TotalBalanceDiv
