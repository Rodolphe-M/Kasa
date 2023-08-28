import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      <h3>404</h3>
      <p>Oups ! La page que vous demandez n'existe pas !</p>
      <Link className="lien" to="/">
        Retourner sur la page d'acceuil.
      </Link>
    </div>
  )
}

export default Error
