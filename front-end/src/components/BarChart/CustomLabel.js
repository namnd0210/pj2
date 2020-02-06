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
        isLeft && <text x={x + 12} y={y - 15} style={{ fontSize: "25" }}>
          {xValue}
        </text>
      }
      {
        !isLeft && <text x={x + 610} y={y - 15} style={{ direction: "rtl", fontSize: "25" }}>
          {yValue}
        </text>
      }
    </svg>
  )
}
