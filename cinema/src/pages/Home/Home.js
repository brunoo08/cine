import './Home.css'
import Carousel from '../../components/Carousel/Carousel'

import { Col, Row, Card, Button, Space } from 'antd';

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
            <Col span={12}>
              <Row justify="center">
                <Card hoverable style={{ width: '80%' }}
                cover={<img alt="example" src="./Cartaz/buzzCartaz.jpg" height="700px"/>}>
                  <Row>
                  <Col span={24}>
                    <Space direction="vertical" style={{ width: '100%', margin: '0px', padding:'0px'  }}>
                      <Button style={{width: '100%', backgroundColor: 'red', color: 'white', height: '70px'  }}>
                        BUY TICKETS
                      </Button>
                    </Space>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                  <Space direction="vertical" style={{ width: '100%', margin: '0px', padding:'0px'  }}>
                      <Button style={{width: '100%', backgroundColor: 'white', color: 'black',  height: '70px'  }}>
                        WATCH TRAILER
                      </Button>
                    </Space>
                  </Col>
                </Row>
                </Card>
              </Row>
            </Col>
            <Col span={12}>
            <Row justify="center">
                <Card hoverable style={{ width: '80%', margin: '0px', padding:'0px' }}
                cover={<img alt="example" src="./Cartaz/flashCartaz.jpg" height="700px" />}>
                <Row>
                  <Col span={24}>
                    <Space direction="vertical" style={{ width: '100%', margin: '0px', padding:'0px'  }}>
                      <Button style={{width: '100%', backgroundColor: 'red', color: 'white', height: '70px'  }}>
                        BUY TICKETS
                      </Button>
                    </Space>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                  <Space direction="vertical" style={{ width: '100%', margin: '0px', padding:'0px'  }}>
                      <Button style={{width: '100%', backgroundColor: 'white', color: 'black',  height: '70px'  }}>
                        WATCH TRAILER
                      </Button>
                    </Space>
                  </Col>
                </Row>
                
                </Card>
              </Row>
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default Home