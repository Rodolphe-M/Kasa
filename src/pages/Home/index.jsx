import React from 'react'
import Card from '../../components/Card'
import data from '../../utils/data/data.json'

const Home = () => {
    return (
        <div className="home">
            <div className="home-title">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <Card data={data} />
        </div>
    )
}

export default Home
