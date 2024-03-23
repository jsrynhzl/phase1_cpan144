import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slideshow.css';

const Slideshow = ({ images }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='slider-container'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {images.map((imageObj, idx) => (
                    <Carousel.Item key={idx}>
                        <img
                            className="d-block w-100"
                            src={imageObj.url}
                            alt={`Slide ${idx + 1}`}
                        />
                        <Carousel.Caption>
                            <h3>{imageObj.label}</h3>
                            <p>{imageObj.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Slideshow;