import { useState } from 'react'
import './CalculatorSection.css'

function CalculatorSection() {
  const [length, setLength] = useState(5)
  const [width, setWidth] = useState(5)
  const [height, setHeight] = useState(2.5)

  const area = length * width

  const perimeter = 2 * (length + width)
  const postsCount = Math.ceil(perimeter / 2.5)

  const areaPrice = area * 7200
  const heightPrice = postsCount * height * 500

  const totalPrice = areaPrice + heightPrice

  return (
    <section className="calculator">
      <div className="calculator-box">
        <h1>Калькулятор стоимости</h1>

        <p className="calculator-text">
          Калькулятор предоставляет ориентировочный расчет. <br />
          Окончательная цена устанавливается после консультации <br />
          и замеров.
        </p>

        <div className="range-block">
          <label>Длина: {length} м</label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.5"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))} />
        </div>

        <div className="range-block">
          <label>Ширина: {width} м</label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.5"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))} />
        </div>

        <div className="range-block">
          <label>Высота: {height} м</label>
          <input
            type="range"
            min="2"
            max="5"
            step="0.1"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))} />
        </div>

        <div className="result-box">

            <div className="result-info">
                <p>Площадь: {area.toFixed(1)} м²</p>

                <p className="total">
                Стоимость: {totalPrice.toLocaleString('ru-RU')} ₽
                </p>
            </div>

        <button className="calculate-btn">
            Получить точный расчёт
        </button>

        </div>
      </div>
    </section>
  )
}

export default CalculatorSection