import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import Star from '../../components/Star'
import data from '../../utils/data/data.json'
import Collapse from '../../components/Collapse'

const Logement = () => {
    const { id } = useParams()
    const logement = data.find((logement) => logement.id === id)

    if (!logement) {
        return <Navigate to="/Error" />
    }

    return (
        <div className="container-logement">
            <Slideshow selectedLogement={logement} />
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
                    <div className="rating">
                        {' '}
                        <Star rating={logement.rating} />
                    </div>
                </div>
            </div>

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
