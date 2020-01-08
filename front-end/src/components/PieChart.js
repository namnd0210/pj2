import React, { Component } from 'react';
import {
  VictoryPie, VictoryLegend
} from 'victory';
import { connect } from 'react-redux';

import PieChartItem from './PieChartItem';
import { fetchPieChartData } from '../actions';
import Loading from './Loading';

const colorScale = ["#79c1b6", "#a285de"];


class PieChart extends Component {
  componentDidMount() {
    this.props.fetchPieChartData();
  }

  render() {
    const { data, isLoading } = this.props.pieChartData;
    const type = "border";
    return (
      <svg viewBox="0 0 600 600">
        {isLoading && <Loading type={type} />}
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
    pieChartData: state.pieChartData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPieChartData: () => dispatch(fetchPieChartData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PieChart)
