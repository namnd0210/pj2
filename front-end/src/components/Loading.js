import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'reactstrap'

import { fetchPieChartData } from '../actions'


class Loading extends Component {
  render() {
    const { complete } = this.props.complete
    return (
      <div className="d-flex justify-content-center">
        {!complete && <div>
          <Spinner type="grow" color="primary" />
          <Spinner type="grow" color="secondary" />
          <Spinner type="grow" color="success" />
          <Spinner type="grow" color="danger" />
          <Spinner type="grow" color="warning" />
          <Spinner type="grow" color="info" />
          <Spinner type="grow" color="light" />
          <Spinner type="grow" color="dark" />
        </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    complete: state.loadingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPieChartData: () => dispatch(fetchPieChartData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading)