import { useState, React } from 'react'
import { useParams } from 'react-router-dom'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Chevron from '../../assets/chevron.svg'
import Slideshow from '../../components/Slideshow'
import data from '../../utils/data/data.json'

const Logement = () => {
    const { id } = useParams()
    const logement = data.find((logement) => logement.id === id)

    const rating = parseInt(logement.rating)

    const starArray = Array.from({ length: 5 }, (_, index) => (
        <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={index < rating ? 'star-active' : 'star-inactive'}
        />
    ))

    const [selectedDescription, setSelectedDescription] = useState(false)
    const [selectedEquipment, setSelectedEquipment] = useState(false)

    const toggleDescription = () => {
        setSelectedDescription(!selectedDescription)
    }

    const toggleEquipment = () => {
        setSelectedEquipment(!selectedEquipment)
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
                    <div className="rating">{starArray}</div>
                </div>
            </div>

            <div className="container-wrapper">
                {/* Collapse DESCRIPTION */}
                <div className="wrapper">
                    <div className="wrapper__collapse">
                        <div className="wrapper__collapse__title">
                            <h5>Description</h5>
                            <img
                                onClick={toggleDescription}
                                className={`chevron-icon ${
                                    selectedDescription ? 'active' : ''
                                }`}
                                src={Chevron}
                                alt="chevron-logo"
                            />
                        </div>
                        <div
                            className={`wrapper__collapse__text ${
                                selectedDescription ? 'active' : ''
                            }`}
                        >
                            {logement.description}
                        </div>
                    </div>
                </div>

                {/* Collapse EQUIPMENT */}
                <div className="wrapper">
                    <div className="wrapper__collapse">
                        <div className="wrapper__collapse__title">
                            <h5>Équipement</h5>
                            <img
                                onClick={toggleEquipment}
                                className={`chevron-icon ${
                                    selectedEquipment ? 'active' : ''
                                }`}
                                src={Chevron}
                                alt="chevron-logo"
                            />
                        </div>
                        <div
                            className={`wrapper__collapse__text ${
                                selectedEquipment ? 'active' : ''
                            }`}
                        >
                            <ul>
                                {logement.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logement
