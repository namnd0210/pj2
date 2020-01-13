import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class Loading extends Component {
  render() {
    const { color } = this.props;
    const y = color === "#eb09eb" ? -50 : 0;
    return (
      <foreignObject y={y} width="100%" height="100%">
        <div className="d-flex justify-content-center ">
          <Loader type="TailSpin" color={color} height={100} width={100} />
        </div>
      </foreignObject>
    )
  }
}

