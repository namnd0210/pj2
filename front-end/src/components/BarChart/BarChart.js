import React, { useEffect } from 'react';
import {
  VictoryChart, VictoryBar, VictoryAxis, VictoryLabel
} from 'victory';
import _ from 'lodash';
import { useDispatch, useSelector } from "react-redux";

import { fetchBarChartData } from '../../actions';
import CustomLabel from './CustomLabel';
import Loading from '../Loading';

export default function Ranking({ startDate, endDate }) {
  const { data, isLoading } = useSelector(state => state.barChartData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBarChartData(startDate, endDate));
  }, [startDate, endDate])

  const handledData = _.sortBy(data, ['y'], ['desc']);

  return (
    <div>
      <h2>Ranking</h2>
      {isLoading && <Loading color="#eb09eb" />}
      {!isLoading &&
        <svg viewBox="0 -30 500 500">
          <VictoryChart
            standalone={false}
          >
            <VictoryLabel x={51} y={0}
              standalone={false}
              text="Day"
            />
            <VictoryLabel x={340} y={0}
              standalone={false}
              text="Number"
            />
            <VictoryBar horizontal
              alignment="start"
              style={{ data: { fill: '#ededed' } }}
              standalone={false}
              data={handledData}
              barRatio={1.5}
            />
            <VictoryAxis dependentAxis
              standalone={false}
              style={{
                axis: { stroke: "#fff" },
                tickLabels: { fill: "none" },
              }}
            />
            <VictoryAxis
              standalone={false}
              style={{
                axis: { stroke: "#fff" },
                grid: { stroke: "#c9cdd4" },
                tickLabels: { fill: "none" }
              }}
              tickLabelComponent={
                <CustomLabel
                  data={handledData}
                  isLeft={true}
                />}
            />
            <VictoryAxis
              standalone={false}
              style={{
                axis: { stroke: "#fff" }
              }}
              tickLabelComponent={
                <CustomLabel
                  data={handledData}
                  isLeft={false}
                />}
            />
          </VictoryChart>}
      </svg>}
    </div>
  )
}