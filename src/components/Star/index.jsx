import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Star = ({ rating }) => {
    const parsedRating = parseInt(rating)

    return Array.from({ length: 5 }, (_, index) => (
        <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={index < parsedRating ? 'star-active' : 'star-inactive'}
        />
    ))
}

export default Star
