import './Home.css'
import Carousel from '../../components/Carousel/Carousel'

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
    </div>
  )
}

export default Home