import React, { Component } from 'react';
import {
  VictoryChart, VictoryBar, VictoryAxis, VictoryLabel
} from 'victory';
import _ from 'lodash';
import { connect } from 'react-redux';

import { fetchBarChartData } from '../actions';
import CustomLabel from './CustomLabel';

class Ranking extends Component {
  componentDidMount() {
    console.log("componentDidMount")
    this.props.fetchBarChartData();
  }
  
  render() {
    const { data } = this.props;
    console.log("this.props", this.props)
    _.reverse(data);
    return (
      <svg viewBox="-30 -100 800 800">
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
        </VictoryChart>
      </svg>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBarChartData: () => dispatch(fetchBarChartData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)