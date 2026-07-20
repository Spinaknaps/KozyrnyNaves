import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import './HeaderTop.css'

function HeaderTop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const burgerRef = useRef(null)

  // Переключение меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Закрытие меню
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  

  return (
    <>
      <header className="header-top">
        <div className="container header-content">

          {/* Логотип */}
          <div className="logo">
            <img src="assets/logo/logotype.svg" alt="logo" />
          </div>

          {/* Email (десктоп) */}
          <div className="header-email">
            manky_seven@mail.ru
          </div>

          {/* Соцсети (десктоп) */}
          <div className="header-socials">
            <a href="https://vk.com/navesiartem">
              <img src="assets/icons/vkv.svg" alt="VK" />
            </a>
            <a href="https://max.ru/u/f9LHodD0cOK2_Pz73E3Bcn2SjnHsBUE-visFwuH4xgxAtp_ud3QcE_zwEtM">
              <img src="assets/icons/max.svg" alt="MAX" />
            </a>
            <a href="https://t.me/artemmcarrow">
              <img src="assets/icons/tg.svg" alt="Telegram" />
            </a>
          </div>

          {/* Телефон (десктоп) */}
          <div className="header-phone">
            +7(952)408-98-77
          </div>

          {/* Кнопка звонка */}
          <button className="call-btn">
            Заказать звонок
          </button>

          {/* ===== БУРГЕР-МЕНЮ (только на мобилках) ===== */}
          <button 
            ref={burgerRef}
            className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Открыть меню"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>

      {/* ===== МОБИЛЬНОЕ МЕНЮ (выпадающее) ===== */}
      <div 
        ref={menuRef}
        className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
        role="navigation"
        aria-hidden={!isMenuOpen}
      >
        {/* Контактная информация */}
        <a href="tel:+79120254262" className="mobile-phone" onClick={closeMenu}>
          📞 +7(952)408-98-77
        </a>
        
        <a href="mailto:manky_seven@mail.ru" className="mobile-email" onClick={closeMenu}>
          ✉️ manky_seven@mail.ru
        </a>


{/* Дополнительные ссылки (опционально) */}
        <div className="mobile-links">
          <Link to="/">Главная</Link>

          <Link to="/calculator">
          Рассчитать стоимость
          </Link>
          <Link to="/contacts">Контакты</Link>
        </div>

        {/* Разделитель */}
        <div className="mobile-divider"></div>


        {/* Соцсети в мобильной версии */}
        <div className="mobile-socials">
          <a href="https://vk.com/navesiartem" onClick={closeMenu}>
            <img src="assets/icons/vkv.svg" alt="VK" />
          </a>
          <a href="https://max.ru/u/f9LHodD0cOK2_Pz73E3Bcn2SjnHsBUE-visFwuH4xgxAtp_ud3QcE_zwEtM" onClick={closeMenu}>
            <img src="assets/icons/max.svg" alt="MAX" />
          </a>
          <a href="https://t.me/artemmcarrow" onClick={closeMenu}>
            <img src="assets/icons/tg.svg" alt="Telegram" />

          </a>
        </div>

        

        
      </div>
    </>
  )
}

export default HeaderTop