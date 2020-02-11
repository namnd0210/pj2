import React, { useEffect, useState } from 'react';
import {
  VictoryPie, VictoryLegend
} from 'victory';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import PieChartItem from './PieChartItem';
import { fetchPieChartData } from '../../../actions';
import Loading from '../../Loading';
import Modal from './Modal';

const colorScale = ['#A4036F', '#17B890', '#DA394E', '#FFC253', '#A54657', '#EDF060', '#F0803C'];

function shuffle(a) { // shuffle colors
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
export default function PieChart({ startDate, endDate }) {
  const { isLoading, data } = useSelector(state => state.pieChartData)
  const dispatch = useDispatch()
  const [handleData, setHandleData] = useState([])

  useEffect(() => {
    dispatch(fetchPieChartData(startDate, endDate));
  }, [startDate, endDate])

  useEffect(() => {
    if (data !== []) {
      setHandleData(_.filter(data, o => o.isActive))
    }
  }, [data])

  return (
    <div>
      <div className="row">
        <h2 className="col-7">Summary Device</h2>
        {!isLoading && <Modal className="col-5" startDate={startDate} endDate={endDate} />}
      </div>
      {isLoading && <Loading color="#15e62a" />}
      {!isLoading &&
        <svg viewBox="0 0 700 700">
          <VictoryPie
            standalone={false}
            data={handleData}
            colorScale={colorScale}
            innerRadius={100}
            style={{
              labels: { display: "none" }
            }}
          />
          <VictoryLegend x={400} y={50}
            gutter={20}
            rowGutter={{ top: 0, bottom: 60 }}
            data={handleData}
            standalone={false}
            dataComponent={<PieChartItem />}
            colorScale={shuffle(colorScale)}
          />
        </svg>}
    </div>
  );
}