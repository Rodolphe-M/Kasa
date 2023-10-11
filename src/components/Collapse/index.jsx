import React, { useState } from 'react'
import Chevron from '../../assets/chevron.svg'

// Définition du composant "Collapse" qui prend les props "title", "text" et "width"
function Collapse({ title, text, width }) {
    // Déclaration d'un état local "isActive" avec la valeur initiale "false"
    const [isActive, setIsActive] = useState(false)
    // Définition d'une fonction "toggle" qui modifie l'état "isActive" lorsqu'elle est appelée
    const toggle = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="wrapper" id="wrapper" style={{ width: width }}>
            <div className="wrapper__collapse">
                <div className="wrapper__collapse__title">
                    <h5>{title}</h5>
                    <img
                        onClick={toggle}
                        className={`chevron-icon ${isActive ? 'active' : ''}`}
                        src={Chevron}
                        alt="chevron-logo"
                    />
                </div>
                <div
                    className={`wrapper__collapse__text ${
                        isActive ? 'active' : ''
                    }`}
                >
                    {text}
                </div>
            </div>
        </div>
    )
}

export default Collapse
