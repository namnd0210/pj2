import React, { useState, useEffect } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import { Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import ClassicEditor from './build/ckeditor'
import { getReport, postReport, updateReport } from '../../actions/report'
import _ from 'lodash'

const styles = {
  label: {
    fontWeight: "600",
    paddingTop: "0.5rem"
  }
}

const filterData = (data, field) => _.map(data, o => ({ id: o[`${field}`] }))

const filterMention = (report_message, users, isDiplay) => {
  isDiplay
    ? _.map(users,
      user => {
        report_message = _.replace(report_message, new RegExp(user.user_id, "g"), user.user_name)
      }
    )
    : _.map(users,
      user => {
        report_message = _.replace(report_message, new RegExp(user.user_name, "g"), user.user_id)
      }
    )
  return report_message
}

export default function (props) {
  const [data, setData] = useState({})
  const [mention, setMention] = useState("")
  const [modal, setModal] = useState(false)

  useEffect(() => {
    getReport(setData)
  }, [])

  const toggle = () => setModal(!modal)

  const mentionConfig = {
    toolbar: {
      items: []
    },
    mention: {
      feeds: [
        {
          marker: '#',
          feed: filterData(data.channels, "channel_name"),
          minimumCharacters: 0
        }
      ]
    }
  }

  const editorConfig = {
    mention: {
      feeds: [
        {
          marker: '@',
          feed: filterData(data.users, "user_name"),
          minimumCharacters: 0
        },
      ]
    }
  };

  const stripHtml = html => {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  const handleSubmit = () => {
    // call put API ()
    // if (report_id !== null)
    const normal = stripHtml(mention).replace(/\s\s+/g, ' ').trim().split(' ') // tach file rieng
    // const users = _.filter(normal, o => o.startsWith('@'))
    // const channels = _.filter(normal, o => o.startsWith('#')) // filerChannel
    const channels = _.map(normal,
      o => _.find(data.channels, channel => o === channel.channel_name)
    )

    //filter mention user to submit
    const report_message = filterMention(data.report_message, data.users, false)

    const values = {
      report_message,
      send_to: channels,
      attachments: data.attachments
    }

    console.log(values)
    toggle()
  }

  return (
    !_.isEqual({}, data) && <div>
      <Button color="success" onClick={toggle}>Report</Button>
      <Modal size="lg" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Write your complaints daily!</ModalHeader>
        <ModalBody>
          <div>
            <Label style={styles.label}>Mention</Label>
            <CKEditor
              editor={ClassicEditor}
              config={mentionConfig}
              onChange={(event, editor) => {
                setMention(editor.getData())
              }}
            />
            <Label style={styles.label}>Report</Label>
            <CKEditor
              editor={ClassicEditor}
              config={editorConfig}
              data={filterMention(data.report_message, data.users, true)}
              onChange={(event, editor) => {
                setData({ ...data, report_message: editor.getData() })
              }}
            />
            <div style={{ marginTop: "10px" }}>
              <Input
                type="file"
                multiple
                onChange={e => {
                  setData({ ...data, attachments: e.target.files })
                }}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div >
  );
}