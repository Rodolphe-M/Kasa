// Importation du composant Link de react-router-dom
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

// Définition du composant "Header"
function Header() {
    return (
        <nav className="navbar">
            <img src={Logo} alt="Logo Kasa" className="navbar-logo" />
            {/* Liens de navigation */}
            <div className="navbar__link">
                <Link className="link" to="/">
                    Accueil
                </Link>
                <Link className="link" to="/About/">
                    A Propos
                </Link>
            </div>
        </nav>
    )
}

export default Header
