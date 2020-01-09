import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

export default class Loading extends Component {
  render() {
    const { type } = this.props;
    const y = type === "grow" ? "50" : "130"
    return (
      <foreignObject x="200" y={y} width="64" height="64">
        <Spinner style={{ width: "2.5rem", height: "2.5rem" }}
          type={type}
          color="primary" />
      </foreignObject>
    )
  }
}

