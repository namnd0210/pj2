import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'reactstrap';
import _ from 'lodash';

import { fetchDeviceListData } from '../../actions/';
import Loading from '../Loading';

export default () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(state => state.deviceList)

  useEffect(() => {
    dispatch(fetchDeviceListData())
  }, [])

  return (
    <div>
      {isLoading && <Loading color="#F0803C" />}
      {!isLoading &&
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Operating System</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {
              _.map(data, (item, index) =>
                <tr>
                  <th scope="row">{index}</th>
                  <td>{item.x}</td>
                  <td>{item.y}</td>
                </tr>
              )
            }
          </tbody>
        </Table>
      }
    </div>
  )
}
