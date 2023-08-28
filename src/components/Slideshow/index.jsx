import React from 'react'
import data from '../../utils/data/data.json'

const Slideshow = () => {
  return (
    <div className="slideshow">
      <div className="carousel">
        {data.map((logements) => (
          <div className="carousel__img" key={logements.id}>
            <img src={logements.pictures} alt={logements.title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slideshow
