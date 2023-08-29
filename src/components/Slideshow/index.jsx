import React, { useState } from 'react'
import Chevron from '../../assets/chevron.svg'

const Slideshow = ({ selectedLogement }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToNextSlide = () => {
        setCurrentIndex((currentIndex + 1) % selectedLogement.pictures.length)
    }

    const goToPreviousSlide = () => {
        setCurrentIndex(
            (currentIndex - 1 + selectedLogement.pictures.length) %
                selectedLogement.pictures.length,
        )
    }

    return (
        <div className="slideshow">
            <div className="carousel">
                <div className="carousel__img">
                    <img
                        src={selectedLogement.pictures[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                    />
                </div>
                <div className="carousel__btn">
                    <img
                        onClick={goToPreviousSlide}
                        className="chevron-icon previous"
                        src={Chevron}
                        alt="chevron-logo"
                    />
                    <img
                        onClick={goToNextSlide}
                        className="chevron-icon next"
                        src={Chevron}
                        alt="chevron-logo"
                    />
                </div>
                <div className="carousel__counter">
                    <p>{`${currentIndex + 1}/${
                        selectedLogement.pictures.length
                    }`}</p>
                </div>
            </div>
        </div>
    )
}

export default Slideshow
