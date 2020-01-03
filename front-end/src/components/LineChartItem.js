import React, { Component } from 'react'

export function LineChartItem(data) {
  const { style, x, y } = data
  const index = data.index
  const arr = Object.values(data.data[index])
  const title = Object.keys(data.data[index])
  
  const sum = arr[0].reduce((a,b)=>a+b.y, 0)
  console.log(arr)
  return (
    <svg>
      <g>
        <circle cx={x} cy={y-1} r="7" fill={style.fill} />
      </g>
      <text x={x+14} y={y+5}>
        {title}
      </text>
      <text x={x + 120} y={y+5}>
        {sum}
      </text>
      <text x={x} y={y + 30} fontSize={25}>
        {/* {data.datum.y / sum * 100}% */}
        </text>
    </svg >
  )
}
