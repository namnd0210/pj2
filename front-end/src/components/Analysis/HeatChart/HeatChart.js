import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import { fetchHeatChartData } from '../../../actions';
import Loading from '../../Loading';
import './HeatChart.css';

export default function HeatChart({ startDate, endDate }) {
  const { isLoading, data } = useSelector(state => state.heatChartData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHeatChartData(startDate, endDate));
  }, [startDate, endDate])

  const series = Object.assign([], data)
  let summarySeries = [{
    data: _.map(series,
      (day) => {
        return _.reduce(day.data, (a, b) => a + b.y, 0)
      }
    )
  }]

  const options = {
    chart: {
      width: 500,
      height: 350,
      type: 'heatmap',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      heatmap: {
        radius: 4
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#8b63db"],
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        minHeight: 30,
        formatter: (val, index) => {
          const hour = Number(val.toString().slice(-5, -3))
          return hour % 2 === 0 ? (hour > 12 ? hour - 12 : hour) : ''
        }
      }
    },
    yaxis: {
      show: false
    }
  }

  const maxVal = _.ceil(_.max(summarySeries[0].data))
  const summaryOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '95%',
        colors: {
          ranges: [{
            from: 0,
            to: maxVal,
            color: '#6abdb1'
          }],
          backgroundBarColors: ['#d9dedd'],
        },
        dataLabels: {
          position: 'top'
        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: -5
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      min: 0,
      max: maxVal,
      categories: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
      labels: {
        offsetY: 2,
        minHeight: 30,
        formatter: (val, index) => {
          return val === 0 || val === maxVal ? val : ''
        },
      },
    },
    yaxis: {
      labels: {
        offsetY: 1,
        formatter: (val, index) => {
          const upperCase = _.upperCase(val.toString().substring(0, 1))
          const lowerCase = _.lowerCase(val.toString().substring(1, 3))
          return `${upperCase}${lowerCase}`
        }
      }
    },
    grid: {
      show: false
    },
  }
  return (
    <div>
      <foreignObject x="0" y="0" width="100%" height="50px">
        <div><h2>Device By Hour</h2></div>
      </foreignObject>
      {isLoading && <Loading color="#15e6d4" />}
      {!isLoading && <div className="container">
        <div className="row">
          <div className="col-sm-9 pr-0">
            <Chart
              options={options}
              series={series}
              type="heatmap"
              height={300}
            />
            <div className="gradientLine" />
            <div className="row">
              <div className="col-3 pr-0">
                {0}
              </div>
              <div className="col-3 px-0" style={{ textIndent: "-5px" }}>
                {5}
              </div>
              <div className="col-3 px-0" style={{ textIndent: "-13px" }}>
                {10}
              </div>
              <div className="col-3 pl-0 mb-4 d-flex justify-content-between">
                <div style={{ textIndent: "-20px" }}>
                  {15}
                </div>
                <div>
                  {20}
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 px-0" >
            <Chart
              options={summaryOptions}
              series={summarySeries}
              type="bar"
              height={300}
            />
          </div>
        </div>
      </div>}
    </div>
  )
}
