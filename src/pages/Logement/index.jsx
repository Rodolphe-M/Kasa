import React from 'react'
import { useParams } from 'react-router-dom'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import data from '../../utils/data/data.json'
import Slideshow from '../../components/Slideshow'

const Logement = () => {
    const { id } = useParams()
    const logement = data.find((logement) => logement.id === id)

    const rating = parseInt(logement.rating) // Convertir la note en nombre

    const starArray = Array.from({ length: 5 }, (_, index) => (
        <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={index < rating ? 'star-active' : 'star-inactive'}
        />
    ))

    return (
        <div className="container-logement">
            <div className="slideshow">{/*<Slideshow />*/}</div>
            <div className="logement">
                <div className="logement__title">
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                    <div className="logement-list">
                        <ul>
                            {logement.tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="logement__owner">
                    <div className="owner">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="owner" />
                    </div>
                    <div className="rating">{starArray}</div>
                </div>
            </div>
        </div>
    )
}

export default Logement
