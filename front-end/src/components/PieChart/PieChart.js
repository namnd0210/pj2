import React, { Component } from 'react';
import {
  VictoryPie, VictoryLegend
} from 'victory';
import { connect } from 'react-redux';

import PieChartItem from './PieChartItem';
import { fetchPieChartData } from '../../actions';
import Loading from '../Loading';

const colorScale = ["#79c1b6", "#a285de"];


class PieChart extends Component {
  componentDidMount() {
    const { startDate, endDate } = this.props.datePickerData;
    this.props.fetchPieChartData(startDate, endDate);
  }

  render() {
    const { data, isLoading } = this.props.pieChartData;
    return (
      <svg viewBox="0 0 700 700">
        {isLoading && <Loading color="#15e62a" />}
        {!isLoading && <g>
          <VictoryPie
            standalone={false}
            data={data}
            colorScale={colorScale}
            innerRadius={100}
            style={{
              labels: { display: "none" }
            }}
          />
          <VictoryLegend x={420} y={130}
            gutter={20}
            rowGutter={{ top: 0, bottom: 60 }}
            data={data}
            standalone={false}
            dataComponent={<PieChartItem />}
            colorScale={colorScale}
          />
        </g>}
      </svg>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pieChartData: state.pieChartData,
    datePickerData: state.datePickerData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPieChartData: (startDate, endDate) => dispatch(fetchPieChartData(startDate, endDate))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PieChart)