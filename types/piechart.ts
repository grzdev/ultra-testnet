declare module 'react-js-pie-chart' {
  import React from 'react'

  interface PieChartProps {
    data: { value: number; name: string }[]
    width?: number
    height?: number
    thickness?: number
    colors?: string[]
    legendPosition?: 'left' | 'right' | 'top' | 'bottom'
    animation?: boolean
  }

  const PieChart: React.FC<PieChartProps>
  export default PieChart
}
