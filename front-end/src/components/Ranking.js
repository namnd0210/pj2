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
    const { startDate, endDate } = this.props.datePickerData;
    this.props.fetchBarChartData(startDate, endDate);
  }

  render() {
    const { data, isLoading } = this.props.barChartData;
    const handledData = _.sortBy(data, ['y'], ['desc']);
    return (
      <svg viewBox="0 -50 600 600">
        {isLoading && <Loading color="#eb09eb" />}
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
      </svg>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    barChartData: state.barChartData,
    datePickerData: state.datePickerData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBarChartData: (startDate, endDate) => dispatch(fetchBarChartData(startDate, endDate))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)