import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Col, Row } from 'reactstrap';
import _ from 'lodash';

const styles = {
  container: {
    border: "1px solid #c4c4c4"
  },
  wapper: {
    border: "1px dashed #999",
    margin: "5px"
  },
  alignCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  alignRow: {
    margin: "10px 0"
  }
}

const MyComponent = (props) => {
  const { images } = props
  return (
    <div style={styles.container}>
      <Row xs='3'>
        {
          _.map(images, image =>
            <div style={{ ...styles.alignCenter }} >
              <Col style={{ ...styles.alignCenter, ...styles.alignRow }}>
                <Zoom>
                  <img
                    alt="that wanaka tree"
                    src={image}
                    width="200"
                  />
                </Zoom>
              </Col>
            </div >
          )
        }
      </Row>
    </div>
  )
}

export default MyComponent