import React, { useState, useEffect } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import { Col, Row, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ClassicEditor from './build/ckeditor'
import _ from 'lodash';
import { getReportInAdmin } from '../../actions/report';
import Images from './ZoomImage';

import image from '../../images/image.jpeg';
import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.png'
import image4 from '../../images/image4.jpeg'

const images = [image, image1, image2, image3, image4]
// const inputData = '<p>Hello 500 anh em</p><ul class="todo-list"><li><label class="todo-list__label"><input type="checkbox" disabled="disabled"><span class="todo-list__label__description">ádsadsad</span></label></li><li><label class="todo-list__label"><input type="checkbox" disabled="disabled"><span class="todo-list__label__description">adasdasdasd</span></label></li></ul><ol><li>ádsadsadsad</li><li>ádsadasdsad</li></ol><ul><li>sadasdasdasdas</li><li>sadsadas</li></ul><ol><li>ádsadsa</li><li>ádasdasdá</li><li>sadsadsad</li></ol><p>sadasdasd</p><p>sadasdsad</p><p>ádsadasdsa</p>'
// const arr_send_to = [
//   {
//     "id": "#channel_name_1",
//     "channel_id": "<@W123>",
//     "channel_name": "staff"
//   },
//   {
//     "id": "#channel_name_2",
//     "channel_id": "<@W456>",
//     "channel_name": "demo"
//   }
// ]

// const send_from = "@Nguyen Duc Nam"
// const send_to = _.map(arr_send_to, o => o.channel_name).join(" ")

const editorConfiguration = {
  toolbar: {
    items: []
  }
}

const styles = {
  container: {
    color: "#333",
  },
  mention: {
    color: "#990030",
    backgroundColor: "#f6e7ea"
  },
  header: {
    textAlign: "center"
  },
  label: {
    display: "flex",
    flexDirection: "column"
  },
  titleLabel: {
    fontWeight: "500",
    display: "inline-block",
    width: "100px"
  }
}

const filterMention = (report_message, users) => {
  _.map(users,
    user =>
      report_message = _.replace(report_message, new RegExp(user.user_id, "g"), user.user_name)
  )
  return report_message
}

export default function (props) {
  // report_id
  const { date, report_id } = props
  const [modal, setModal] = useState(true);
  const [data, setData] = useState({})

  useEffect(() => {
    getReportInAdmin(report_id, setData)
  }, [])

  const toggle = () => setModal(!modal);
  return (
    !_.isEqual(data, {}) &&
    <Modal size="lg" isOpen={modal} toggle={toggle} style={styles.container}>
      <ModalHeader toggle={toggle}>Daily Report</ModalHeader>
      <ModalBody>
        <div style={styles.label}>
          <Label>
            <div style={styles.titleLabel}>Date:</div>
            <span>{date}</span>
          </Label>
          <Label>
            <div style={styles.titleLabel}>Send from:</div>
            <span style={styles.mention}>{data.send_from}</span>
          </Label>
          <Label>
            <div style={styles.titleLabel}>Send to:</div>
            {_.map(data.send_to, o => <>
              <span style={styles.mention}>{o.channel_name}</span>{' '}
            </>
            )}
          </Label>
        </div>
        <Label style={styles.titleLabel}>Content:</Label>
        <CKEditor
          disabled={true}
          editor={ClassicEditor}
          data={filterMention(data.report_message, data.users)}
          config={editorConfiguration}
        />
        <Label style={styles.titleLabel}>Image:</Label>
        <Images images={images} />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}
