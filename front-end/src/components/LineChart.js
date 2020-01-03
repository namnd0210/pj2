import React, { Component } from 'react'
import { VictoryLine, VictoryAxis, VictoryGroup, VictoryChart, VictoryLegend } from 'victory'

import { LineChartItem } from './LineChartItem'

const data = [
  {
    "iOS": [
      { x: 1, y: 1 },
      { x: 2, y: 3 },
      { x: 3, y: 6 },
      { x: 4, y: 4 },
      { x: 5, y: 7 }
    ]
  },
  {
    "Android": [
      { x: 1, y: 1 },
      { x: 2, y: 3 },
      { x: 3, y: 4 },
      { x: 4, y: 4 },
      { x: 5, y: 8 }
    ]
  }
]

// console.log(data)

const yOffsets = [50, 150, 250]

const colors = ["#79c1b6", "#a285de"]

export default class LineChart extends Component {

  render() {
    return (
      <svg viewBox="0 0 600 600">
        <VictoryChart width={600} height={300}
          standalone={false}
        >
          <VictoryAxis dependentAxis
            style={{
              axis: { stroke: "white" },
              grid: { stroke: ({ tick }) => tick % 2 === 0 ? "grey" : "white" },
              tickLabels: { opacity: 0.5 }
            }}
            tickFormat={t => t % 2 === 0 ? t : ""}
          />
          <VictoryAxis
            style={{
              ticks: { stroke: "grey", size: 5 }
            }}
          />
          <VictoryGroup
            standalone={false}
          >
            {
              data.map((d, i) => {
                let o = Object.values(d)[0]
                return <VictoryLine
                  key={i}
                  data={o}
                  style={{
                    data: {
                      stroke: colors[i],
                      strokeWidth: ({ data }) => data.length
                    }
                  }}
                />
              })
            }
          </VictoryGroup>
        </VictoryChart>
        <VictoryLegend x={50} y={300}
    orientation="horizontal"
          gutter={200}
          data={data}
          standalone={false}
          dataComponent={<LineChartItem />}
          colorScale={colors}
        />
      </svg>
    )
  }
}
