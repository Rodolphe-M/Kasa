import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import Star from '../../components/Star'
import data from '../../utils/data/data.json'
import Collapse from '../../components/Collapse'

// Définition du composant fonctionnel Logement
const Logement = () => {
    // Récupération des paramètres de l'URL (l'ID du logement)
    const { id } = useParams()
    // Recherche du logement correspondant à l'ID dans les données
    const logement = data.find((logement) => logement.id === id)

    // Si aucun logement n'est trouvé avec l'ID redirection vers la page d'erreur
    if (!logement) {
        return <Navigate to="/Error" />
    }

    // Rendu JSX du composant Logement
    return (
        <div className="container-logement">
            {/* Affichage du composant Slideshow avec le logement sélectionné */}
            <Slideshow selectedLogement={logement} />

            {/* Informations sur le logement */}
            <div className="logement">
                <div className="logement__title">
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>

                    {/* Liste des étiquettes (tags) du logement */}
                    <div className="logement-list">
                        <ul>
                            {logement.tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Informations sur le propriétaire */}
                <div className="logement__owner">
                    <div className="owner">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="owner" />
                    </div>

                    {/* Affichage du composant Star avec la notation du logement */}
                    <div className="rating">
                        {' '}
                        <Star rating={logement.rating} />
                    </div>
                </div>
            </div>

            {/* Section avec des informations détaillées sous forme de Collapse */}
            <div className="container-wrapper">
                <Collapse title="Description" text={logement.description} />
                <Collapse
                    title="Équipement"
                    text={
                        <ul>
                            {logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </div>
    )
}

export default Logement
