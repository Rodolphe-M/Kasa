import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../utils/data/data.json'

const Logement = () => {

  const { id } = useParams() // Récupérer l'ID du logement à partir de l'URL
  const logement = data.find((logement) => logement.id === id) // Trouver le logement correspondant à l'ID dans les données

  return <div>{logement.title}</div>
  
}



export default Logement
