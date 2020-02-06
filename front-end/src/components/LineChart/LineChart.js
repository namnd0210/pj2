import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  VictoryLine, VictoryChart, VictoryAxis, VictoryLabel, VictoryVoronoiContainer, VictoryLegend
} from 'victory';
import _ from 'lodash';
import moment from 'moment';

import { fetchLineChartData } from '../../actions/'
import Loading from '../Loading';

export default function LineChart({ startDate, endDate }) {
  const { data, isLoading } = useSelector(state => state.lineChartData)
  const dispatch = useDispatch();
  const [legendData, setLegendData] = useState([])
  const [handleData, setHandleData] = useState([])
  const [toggle, setToggle] = useState(
    [
      { type: "Day", isActive: true },
      { type: "Week", isActive: false },
      { type: "Month", isActive: false }
    ]
  )

  useEffect(() => {
    dispatch(fetchLineChartData(startDate, endDate))
  }, [startDate, endDate])

  useEffect(() => {
    if (data !== []) {
      setLegendData(
        _.map(data, o => ({ name: o.device }))
      )
      const dayData = _.map(data, device => device.data)

      const weekData = _.map(data, o => {
        const arr = [...o.data]
        const newArr = []
        while (arr.length !== 0) {
          var date1 = moment(arr[0].x, 'DD-MM-YYYY');
          var date2 = moment(arr[0].x, 'DD-MM-YYYY').endOf('week');
          var diff = date2.diff(date1, 'day');
          newArr.push({
            x: arr[0].x,
            y: _.reduce(arr.splice(0, diff + 1), (a, b) => a + b.y, 0)
          })
        }
        return newArr
      })

      const monthData = _.map(data, o => {
        const arr = [...o.data]
        const newArr = []
        while (arr.length !== 0) {
          var date1 = moment(arr[0].x, 'DD-MM-YYYY');
          var date2 = moment(arr[0].x, 'DD-MM-YYYY').endOf('month');
          var diff = date2.diff(date1, 'day');
          newArr.push({
            x: arr[0].x,
            y: _.reduce(arr.splice(0, diff + 1), (a, b) => a + b.y, 0)
          })
        }
        return newArr
      })

      setHandleData([dayData, weekData, monthData])
    }
  }, [data])

  const colors = ["#17B890", '#DA394E']

  const onClick = (item, index) => {
    const arr = [
      { type: "Day", isActive: false },
      { type: "Week", isActive: false },
      { type: "Month", isActive: false }
    ]
    setToggle([
      ..._.slice(arr, 0, index),
      { ...item, isActive: true },
      ..._.slice(arr, index + 1)
    ])
  }

  return (
    <div>
      <div className="d-flex justify-content-between">
        <div><h2>Device</h2></div>
        <div>
          {
            _.map(toggle,
              (item, index) =>
                <div
                  style={{ padding: "0 10px", cursor: "pointer", display: "inline" }}
                  onClick={() => onClick(item, index)}
                >
                  {item.type}
                </div>
            )
          }
        </div>
      </div>
      {isLoading && <Loading colors="#EDF060" />}
      {!isLoading &&
        <svg viewBox="0 0 1000 700" >
          <g transform={'translate(0,50)'}>
            <VictoryChart height={400} width={1000}
              standalone={false}>
              <VictoryAxis dependentAxis
                standalone={false}
                style={{
                  axis: { stroke: "none" },
                  grid: { stroke: "#aaa" },
                  tickLabels: { fontSize: 20, padding: 10 }
                }}
                minDomain={{ y: 10 }}
              />

              <VictoryAxis
                standalone={false}
                style={{
                  axis: { stroke: "#aaa" },
                  ticks: { stroke: '#aaa', size: 5 },
                  tickLabels: { fontSize: 20, padding: 20 }
                }}
                tickCount={3}
                fixLabelOverlap={true}
              />

              {_.map(toggle, (t, i) =>
                t.isActive ?
                  _.map(handleData[i], (d, j) =>
                    <VictoryLine
                      standalone={false}
                      key={j}
                      data={d}
                      style={{
                        data: {
                          stroke: colors[j],
                          strokeWidth: 5
                        }
                      }}
                    />
                  )
                  : null
              )}

              <VictoryLegend x={30} y={420}
                gutter={120}
                standalone={false}
                data={legendData}
                orientation="horizontal"
                colorScale={colors}
                style={{
                  labels: { fontSize: 25 }
                }}
              />
            </VictoryChart>
          </g>
        </svg>
      }
    </div >
  );

}
