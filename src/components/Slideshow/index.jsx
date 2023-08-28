import React from 'react'
import data from '../../utils/data/data.json'

const Slideshow = () => {
    return (
        <div className="slideshow">
            <div className="carousel">
                {data.map((logement) => (
                    <div className="carousel__img" key={logement.id}>
                        <img src={logement.pictures} alt={logement.title} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slideshow
