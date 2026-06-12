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
                <p>Монтаж за 3–5 дней</p>
              </div>

              <div className="benefit">
                <div className="check">✓</div>
                <p>Оплата по факту выполнения работ</p>
              </div>

            </div>
          </div>

          {/* Правая часть */}

          <div className="hero-right">

            <h2>Рассчитать стоимость</h2>

            <p className="hero-form-text">
              Оставьте контакты — подготовим расчет и подскажем
              оптимальную комплектацию навеса.
            </p>

            <label>Ваше имя</label>
            <input
              type="text"
              placeholder=""
            />

            <label>Ваш телефон</label>
            <input
              type="tel"
              placeholder=""
            />

            <button>
              Получить расчет
            </button>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero