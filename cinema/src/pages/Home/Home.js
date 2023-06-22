import './Home.css'
import Carousel from '../../components/Carousel/Carousel'

import { Col, Row, Card } from 'antd';

const Home = () => {
    const images = [
        './CarouselImages/buzz-poster.jpg',
        './CarouselImages/gotg-poster.jpg',
        './CarouselImages/fafx-poster.jpg',
        './CarouselImages/hp-poster.jpg',
    ]

  return (
    <div>
        <Carousel images={images} />
        <div className='main-container'>
          <h2 className='h2theaters'>IN THEATERS</h2>
          <Row>
            <Col span={12} >
              <Card hoverable style={{ width: '80%' }}></Card>
            </Col>
            <Col span={12}>
              <Card hoverable style={{ width: '80%' }}></Card>
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default Home