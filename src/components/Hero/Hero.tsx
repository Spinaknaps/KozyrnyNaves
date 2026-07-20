import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">

        <div className="container hero-content">

          {/* Левая часть */}
          <div className="hero-left">

            <h1>
              Навесы для автомобилей под ключ
            </h1>

            <p className="hero-subtitle">
              Производство и монтаж в Ижевске и пригороде
            </p>

            <div className="hero-benefits">

              <div className="benefit">
                <div className="check">✓</div>
                <p>Усиленная конструкция из металлического профиля</p>
              </div>

              <div className="benefit">
                <div className="check">✓</div>
                <p>Монтаж за 6–10 дней</p>
              </div>

              <div className="benefit">
                <div className="check">✓</div>
                <p>Оплата по факту выполнения работ</p>
              </div>

            </div>
          </div>

          {/* Правая часть */}

          <div className="hero-right">

            <h2>Сколько стоит ваш идеальный навес?</h2>

            <p className="hero-form-text">
              Узнайте точную стоимость вашего навеса за 30 секунд. 
              Без звонков, без менеджеров, без скрытых платежей. 
              Просто выберите параметры — и получите цену прямо сейчас.
            </p>

            

            <button>
              <Link to="/calculator" className="hero-button">
                Попробовать калькулятор
              </Link> 
            </button>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero