import React from 'react'
import { Link } from 'react-router-dom'

// Définition du composant "Card" qui prend un prop "data"
const Card = ({ data }) => {
    return (
        <div className="cards-container">
            {/* On parcours data pour en extraire les logements */}
            {data.map((logement) => (
                // Création d'une clé unique (ici, l'ID du logement)
                <div key={logement.id} className="cards-wrapper">
                    {/* Lien vers la page détaillée du logement */}
                    <Link to={`/logement/${logement.id}`}>
                        <div className="cards">
                            <img
                                className="cards__img"
                                src={logement.cover}
                                alt={logement.title}
                            />
                            <h4 className="cards__title">{logement.title}</h4>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Card
