import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  VictoryLine, VictoryChart, VictoryAxis, VictoryLabel, VictoryVoronoiContainer
} from 'victory';
import _ from 'lodash';
import moment from 'moment';

import { fetchLineChartData } from '../../actions/'

export default function LineChart({ startDate, endDate }) {
  const { data, isLoading } = useSelector(state => state.lineChartData)
  const dispatch = useDispatch();
  const [handleData, setHandleData] = useState([])

  useEffect(() => {
    dispatch(fetchLineChartData(startDate, endDate))
  }, [startDate, endDate])

  useEffect(() => {
    if (data !== []) {
      let flattenDeep = _.flattenDeep(
        _.map(data, month => _.map(month.data, day => {
          const x = moment(`${day.x}-${month.month}-2020`, 'DD-MM-YYYY').format('DD-MM-YYYY')
          return { ...day, x }
        }))
      )
      setHandleData(
        _.filter(flattenDeep, o => {
          let a = new Date(moment(startDate, 'DD-MM-YYYY'))
          let b = new Date(moment(o.x, 'DD-MM-YYYY'))
          let c = new Date(moment(endDate, 'DD-MM-YYYY'))
          return a <= b && b <= c
        })
      )
    }
  }, [data])

  const tickCheck = tick => moment(tick, 'DD-MM-YYYY').isoWeekday() === 5 ? true : false //Friday

  console.log(data)

  return (
    <div>
      {!isLoading &&
        <VictoryChart viewBox="0 0 1000 400" height={300} width={1000}
          containerComponent={
            <VictoryVoronoiContainer
              labels={({ datum }) => "(x=" + datum.x + ";y=" + datum.y + ")"}
            />
          }
        >
          <VictoryAxis dependentAxis
            style={{
              axis: { stroke: "none" },
              grid: { stroke: "#aaa" }
            }}
          />
          <VictoryAxis
            style={{
              axis: { stroke: "#aaa" },
              ticks: {
                stroke: ({ tick }) => {
                  if (handleData[tick-1] !== undefined) {
                    const date = handleData[tick-1].x
                    return tickCheck(date) ? '#aaa' : 'none'
                  }
                }
                , size: 5
              },
            }}
            fixLabelOverlap={true}
            tickFormat={tick => tickCheck(tick) ? tick : ''}
          />
          <VictoryLine
            data={handleData}
            style={{
              data: {
                stroke: "#17B890",
                strokeWidth: 5
              }
            }}
          />
        </VictoryChart>
      }
    </div >
  );

}
