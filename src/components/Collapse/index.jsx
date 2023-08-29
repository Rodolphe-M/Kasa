import { useState, React } from 'react'
import data from '../../utils/data/dataAbout.json'
import Chevron from '../../assets/chevron.svg'

function Collapse() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className="wrapper" id="wrapper">
            {data.map((item, i) => (
                <div className="wrapper__collapse" key={i}>
                    <div className="wrapper__collapse__title">
                        <h5>{item.title}</h5>
                        <img
                            onClick={() => toggle(i)}
                            className={`chevron-icon ${
                                selected === i ? 'active' : ''
                            }`}
                            src={Chevron}
                            alt="chevron-logo"
                        />
                    </div>
                    <div
                        className={`wrapper__collapse__text ${
                            selected === i ? 'active' : ''
                        }`}
                    >
                        {item.text}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Collapse
