import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">

        <Link to="/">Главная</Link>

        <Link to="/calculator">
          Рассчитать стоимость
        </Link>

        

        <Link to="/contacts">
          Контакты
        </Link>

      </div>
    </nav>
  )
}

export default Navbar