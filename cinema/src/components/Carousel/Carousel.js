import {useState} from 'react'
import './Carousel.css'

const Carousel = ({images}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const goToPrevious = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const goToNext = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    return (
        <div className="carousel">
            <button className="carousel-button" onClick={goToPrevious}>
                &lt;
            </button>
            <img
                className="carousel-image"
                src={images[currentImageIndex]}
                alt="Carousel"
            />
            <button className="carousel-button" onClick={goToNext}>
                &gt;
            </button>
        </div>
    )
}

export default Carousel