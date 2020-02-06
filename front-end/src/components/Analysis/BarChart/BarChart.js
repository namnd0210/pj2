import React, { useEffect } from 'react';
import {
  VictoryChart, VictoryBar, VictoryAxis, VictoryLabel
} from 'victory';
import _ from 'lodash';
import { useDispatch, useSelector } from "react-redux";

import { fetchBarChartData } from '../../../actions';
import CustomLabel from './CustomLabel';
import Loading from '../../Loading';

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
        <svg viewBox="0 0 700 500">
          <text x={51} y={25} style={{ fontSize: "25" }}>Day</text>
          <text x={560} y={25} style={{ fontSize: "25" }}>Number</text>
          <g transform={'translate(0, 50)'}>
            <VictoryChart width={700} height={450}
              standalone={false}
            >

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
            </VictoryChart>
          </g>
        </svg>}
    </div>
  )
}