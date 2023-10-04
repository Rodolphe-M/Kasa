import React, { useState } from 'react'
import Chevron from '../../assets/chevron.svg'

function Collapse({ title, text }) {
    const [isActive, setIsActive] = useState(false)

    const toggle = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="wrapper" id="wrapper">
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
