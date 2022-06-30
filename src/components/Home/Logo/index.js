import { Link } from 'react-router-dom'
import Perfil from '../../../assets/images/perfil.png'
import './index.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/about">
        <img src={Perfil} alt="Perfil" className="solid-logo" />
      </Link>
    </div>
  )
}

export default Logo
