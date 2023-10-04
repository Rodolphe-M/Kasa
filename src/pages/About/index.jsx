import React from 'react'
import Collapse from '../../components/Collapse'
import dataAbout from '../../utils/data/dataAbout.json'

const titreAbout = () => {
    return (
        <div className="about">
            <div className="about__img"></div>
            <div className="about__collapse">
                {dataAbout.map((item, index) => (
                    <Collapse
                        key={index}
                        title={item.title}
                        text={item.text}
                        width="100%"
                    />
                ))}
            </div>
        </div>
    )
}

export default titreAbout
