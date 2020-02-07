import React from 'react'

export default function PieChartItem(data) {
  const { style, x, y } = data
  const sum = data.data.reduce((a, b) => a + b.y, 0)
  return (
    <svg>
      <g>
        <circle cx={x} cy={y - 6} r="10" fill={style.fill} />
      </g>
      <text x={x + 25} y={y} style={{ fontSize: "20" }}>
        {data.datum.x}
      </text>
      <text x={x + 250} y={y} style={{ fontSize: "20" }}>
        {data.datum.y}
      </text>
      <text x={x + 25} y={y + 35} style={{ fontSize: "30" }}>
        {Math.round(data.datum.y / sum * 100)}%
      </text>
    </svg >
  )
}
