import React, { Component } from 'react';
import {
  VictoryChart, VictoryBar, VictoryAxis, VictoryLabel
} from 'victory';
import _ from 'lodash';
import { connect } from 'react-redux';

import { fetchBarChartData } from '../actions';
import CustomLabel from './CustomLabel';
import Loading from './Loading';

class Ranking extends Component {
  componentDidMount() {
    this.props.fetchBarChartData();
  }

  render() {
    const { data, isLoading } = this.props.barChartData;
    const type = "grow";
    data.sort((o1, o2) => o1.y - o2.y);
    return (
      <svg viewBox="0 -50 500 600">
        {isLoading && <Loading type={type} />}
        {!isLoading && <VictoryChart
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
            data={data}
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
                data={data}
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
                data={data}
                isLeft={false}
              />}
          />
        </VictoryChart>}
      </svg>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    barChartData: state.barChartData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBarChartData: () => dispatch(fetchBarChartData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)