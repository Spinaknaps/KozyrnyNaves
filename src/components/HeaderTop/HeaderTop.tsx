import './HeaderTop.css'

function HeaderTop() {
  return (
    <header className="header-top">
      <div className="container header-content">

        <div className="logo">
          <img src="assets/logo/logotype.svg" alt="logo" />
        </div>

        <div className="header-email">
          Maxjkee18@mail.ru
        </div>

        <div className="header-socials">

          <a href="#">
            <img src="assets/icons/vkv.svg" alt="VK" />
          </a>

          <a href="#">
            <img src="assets/icons/max.svg" alt="VK" />
          </a>

          <a href="#">
            <img src="assets/icons/tg.svg" alt="VK" />
          </a>

        </div>

        <div className="header-phone">
          +7(912)025-42-62
        </div>

        <button className="call-btn">
          Заказать звонок
        </button>

      </div>
    </header>
  )
}

export default HeaderTop