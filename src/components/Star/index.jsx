import React from 'react'
// Importation de l'icône de l'étoile pleine depuis Font Awesome
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Définition du composant Star avec une prop rating
const Star = ({ rating }) => {
    // Conversion de la notation en nombre entier
    const parsedRating = parseInt(rating)

    // Création du rendu sous forme d'un tableau contenant des étoiles
    return Array.from({ length: 5 }, (_, index) => (
        // Composant FontAwesomeIcon
        <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={index < parsedRating ? 'star-active' : 'star-inactive'}
        />
    ))
}

export default Star
