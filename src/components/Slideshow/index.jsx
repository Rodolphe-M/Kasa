// Importation de useState depuis la bibliothèque React
import React, { useState } from 'react'
import Chevron from '../../assets/chevron.svg'

// Définition du composant fonctionnel Slideshow avec une prop selectedLogement
const Slideshow = ({ selectedLogement }) => {
    // Déclaration d'un état local "currentIndex" et de sa fonction de mise à jour "setCurrentIndex"
    const [currentIndex, setCurrentIndex] = useState(0)

    // Fonction pour passer à la diapositive suivante
    const goToNextSlide = () => {
        setCurrentIndex((currentIndex + 1) % selectedLogement.pictures.length)
    }

    // Fonction pour revenir à la diapositive précédente
    const goToPreviousSlide = () => {
        setCurrentIndex(
            (currentIndex - 1 + selectedLogement.pictures.length) %
                selectedLogement.pictures.length,
        )
    }

    // Rendu JSX du composant Slideshow
    return (
        <div className="slideshow">
            <div className="carousel">
                {/* Image du carrousel */}
                <div className="carousel__img">
                    <img
                        src={selectedLogement.pictures[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                    />
                </div>

                {/* Boutons de navigation du carrousel */}
                <div className="carousel__btn">
                    {/* Vérification s'il y a plus d'une image */}
                    {selectedLogement.pictures.length > 1 && (
                        <>
                            {' '}
                            {/* Bouton de diapositive précédente */}
                            <img
                                onClick={goToPreviousSlide}
                                className="chevron-icon previous"
                                src={Chevron}
                                alt="chevron-logo"
                            />
                            {/* Bouton de diapositive suivante */}
                            <img
                                onClick={goToNextSlide}
                                className="chevron-icon next"
                                src={Chevron}
                                alt="chevron-logo"
                            />
                        </>
                    )}
                </div>

                {/* Compteur de diapositives */}
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
