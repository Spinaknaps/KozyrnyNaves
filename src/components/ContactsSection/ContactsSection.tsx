import './ContactsSection.css'

function ContactsSection() {
  return (
    <section className="contacts">

      <h1>Контакты</h1>

      <div className="contacts-card">

        <div className="contacts-info">

          <p>+7 (912) 123-12-34</p>

          <p>pochta@mail.ru</p>

          <p>Адрес: г. Ижевск</p>

          <p>График работы: 8:00–18:00</p>

        </div>

        <button className="contacts-btn">
          Заказать звонок
        </button>

      </div>

    </section>
  )
}

export default ContactsSection