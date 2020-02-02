import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { fetchPieChartData } from '../../actions';

export default ({ startDate, endDate }) => {
  const { data } = useSelector(state => state.pieChartData)
  const [handleData, setHandleData] = useState(data);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal)
    if(modal) dispatch(fetchPieChartData(startDate, endDate, handleData))
  };

  const onClick = (item, index) => {
    setHandleData([
      ..._.slice(handleData, 0, index),
      { ...item, isActive: !item.isActive },
      ..._.slice(handleData, index + 1)
    ])
  }

  return (
    <div>
      <Button color="success" onClick={toggle} style={{ padding: "10px 20px" }}>+</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} charCode={<FontAwesomeIcon icon={faAngleDown} />}></ModalHeader>
        <ModalBody>
          <div>
            {
              _.map(handleData, (item, index) =>
                <div
                  className="row"
                  onClick={() => onClick(item, index)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="col-10">{item.x}</div>
                  {item.isActive &&
                    <div className="col-2">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  }
                </div>
              )
            }
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>OK</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
