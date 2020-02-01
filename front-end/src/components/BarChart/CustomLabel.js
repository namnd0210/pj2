import React from 'react'

export default function CustomLabel(data) {
  const index = data.index;
  const xValue = data.data[index].x;
  const yValue = data.data[index].y;
  const x = data.x;
  const y = data.y;
  const isLeft = data.isLeft;
  return (
    <svg>
      {
        isLeft && <text x={x + 12} y={y - 10} style={{}}>
          {xValue}
        </text>
      }
      {
        !isLeft && <text x={x + 360} y={y - 10} style={{ direction: "rtl" }}>
          {yValue}
        </text>
      }
    </svg>
  )
}
