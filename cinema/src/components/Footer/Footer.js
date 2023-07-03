import React from 'react'
import { Row, Col } from 'antd'
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
    </div>
  )
}

export default Footer