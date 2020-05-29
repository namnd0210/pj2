import React, { useState, useEffect } from 'react';
import { getReport } from '../../actions/report'
import Report from './staff'
import _ from 'lodash'

export default function (props) {
  const [data, setData] = useState({})

  useEffect(() => {
    getReport(setData)
  }, [])

  return (
    <>
      {
        !_.isEqual({}, data) && <Report
          data={data}
          setData={setData}
        />}
    </>
  )
}
