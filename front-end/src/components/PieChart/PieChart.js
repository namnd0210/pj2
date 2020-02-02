import React, { useEffect, useState } from 'react';
import {
  VictoryPie, VictoryLegend
} from 'victory';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import PieChartItem from './PieChartItem';
import { fetchPieChartData } from '../../actions';
import Loading from '../Loading';
import Modal from './Modal';

const colorScale = ['#a65b5b', '#f2865e', '#f2bea0', '#fad56a', '#f8e4a9', '#788abf'];

export default function PieChart({ startDate, endDate }) {
  const { isLoading, data } = useSelector(state => state.pieChartData)
  const dispatch = useDispatch()
  const [handleData, setHandleData] = useState(data)

  useEffect(() => {
    dispatch(fetchPieChartData(startDate, endDate));
  }, [startDate, endDate])

  useEffect(() => {
    if (data !== []) {
      setHandleData(_.filter(data, o => o.isActive))
    }
  }, [data])

  return (
    <svg viewBox="0 0 700 700">
      <foreignObject x="0" y="0" width="100%" height="50px">
        <div className="row">
          <h2 className="col-7">Summary Device</h2>
          {!isLoading && <Modal className="col-5" startDate={startDate} endDate={endDate} />}
        </div>
      </foreignObject>
      {isLoading && <Loading color="#15e62a" />}
      {!isLoading &&
        <g>
          <VictoryPie
            standalone={false}
            data={handleData}
            colorScale={colorScale}
            innerRadius={100}
            style={{
              labels: { display: "none" }
            }}
          />
          <VictoryLegend x={420} y={50}
            gutter={20}
            rowGutter={{ top: 0, bottom: 60 }}
            data={handleData}
            standalone={false}
            dataComponent={<PieChartItem />}
            colorScale={colorScale}
          />
        </g>}
    </svg>
  );
}