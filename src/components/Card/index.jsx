import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../utils/data/data.json'

const Card = () => {
    return (
        <div className="cards-container">
            {data.map((logement) => (
                <div className="cards-wrapper">
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
