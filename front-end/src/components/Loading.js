import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class Loading extends Component {
  render() {
    const { color } = this.props;
    return (
      <foreignObject width="100%" height="100%">  
        <div className="d-flex justify-content-center align-items-center w-100 h-100">
          <Loader type="TailSpin" color={color} height={100} width={100}/>
        </div>
      </foreignObject>
    )
  }
}

