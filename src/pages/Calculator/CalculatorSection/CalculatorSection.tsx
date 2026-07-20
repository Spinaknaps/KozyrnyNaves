import { useMemo, useState } from "react";

import { calculateCanopy } from "../../Calculator/CalculateCanopy";

import type {
  CalculatorFormData,
  FoundationType,
} from "../../Calculator/CalculatorTypes";

import "./CalculatorSection.css";

function formatPrice(price: number): string {
  return new Intl.NumberFormat("ru-RU").format(price);
}

function CalculatorSection() {
  const [formData, setFormData] = useState<CalculatorFormData>({
    canopyWidth: 6,
    canopyLength: 8,
    foundationType: "piles",
    hasFrieze: false,
  });

  const calculationResult = useMemo(() => {
    return calculateCanopy(formData);
  }, [formData]);

  const updateNumberField = (
    field: "canopyWidth" | "canopyLength",
    value: string,
  ) => {
    const numberValue = Number(value);

    setFormData((previousData) => ({
      ...previousData,
      [field]: numberValue,
    }));
  };

  const updateFoundationType = (
    foundationType: FoundationType,
  ) => {
    setFormData((previousData) => ({
      ...previousData,
      foundationType,
    }));
  };

  return (
    <section className="calculator-section">
      <div className="calculator-container">
        <div className="calculator-heading">
          <span className="calculator-label">
            Калькулятор стоимости
          </span>

          <h1>Рассчитайте примерную стоимость навеса</h1>

          <p>
            Укажите размеры навеса и выберите основание.
            Расчёт является предварительным.
          </p>
        </div>

        <div className="calculator-content">
          <div className="calculator-form">
            <div className="calculator-field">
              <label htmlFor="canopy-width">
                Ширина навеса, м
              </label>

              <input
                id="canopy-width"
                type="number"
                min="3"
                max="15"
                step="0.5"
                value={formData.canopyWidth}
                onChange={(event) =>
                  updateNumberField(
                    "canopyWidth",
                    event.target.value,
                  )
                }
              />
            </div>

            <div className="calculator-field">
              <label htmlFor="canopy-length">
                Длина навеса, м
              </label>

              <input
                id="canopy-length"
                type="number"
                min="3"
                max="30"
                step="0.5"
                value={formData.canopyLength}
                onChange={(event) =>
                  updateNumberField(
                    "canopyLength",
                    event.target.value,
                  )
                }
              />
            </div>

            <div className="calculator-field">
              <label htmlFor="foundation-type">
                Тип основания
              </label>

              <select
                id="foundation-type"
                value={formData.foundationType}
                onChange={(event) =>
                  updateFoundationType(
                    event.target.value as FoundationType,
                  )
                }
              >
                <option value="piles">
                  Винтовые сваи
                </option>

                <option value="concrete">
                  Бетонные опоры
                </option>
              </select>
            </div>

            <label className="calculator-checkbox">
              <input
                type="checkbox"
                checked={formData.hasFrieze}
                onChange={(event) =>
                  setFormData((previousData) => ({
                    ...previousData,
                    hasFrieze: event.target.checked,
                  }))
                }
              />

              <span>Добавить декоративный фриз</span>
            </label>

            <div className="calculator-note">
              В расчёте используется базовая комплектация
              навеса высотой 2,5 м.
            </div>
          </div>

          <div className="calculator-result">
            <span className="calculator-result-label">
              Примерная стоимость
            </span>

            <div className="calculator-total">
              {formatPrice(calculationResult.totalPrice)} ₽
            </div>

            <p className="calculator-result-description">
              Точная стоимость определяется после замера
              и согласования материалов.
            </p>

            <div className="calculator-result-list">
              <div className="calculator-result-row">
                <span>Площадь навеса</span>

                <strong>
                  {calculationResult.canopyArea.toFixed(1)} м²
                </strong>
              </div>

              <div className="calculator-result-row">
                <span>Каркас и кровля</span>

                <strong>
                  {formatPrice(
                    calculationResult.canopyCost,
                  )}{" "}
                  ₽
                </strong>
              </div>

              <div className="calculator-result-row">
                <span>Основание</span>

                <strong>
                  {formatPrice(
                    calculationResult.foundationCost,
                  )}{" "}
                  ₽
                </strong>
              </div>

              {formData.hasFrieze && (
                <div className="calculator-result-row">
                  <span>Декоративный фриз</span>

                  <strong>
                    {formatPrice(
                      calculationResult.friezeCost,
                    )}{" "}
                    ₽
                  </strong>
                </div>
              )}

              <div className="calculator-result-row">
                <span>Доставка</span>

                <strong>
                  {formatPrice(
                    calculationResult.deliveryCost,
                  )}{" "}
                  ₽
                </strong>
              </div>
            </div>

            <button
              className="calculator-button"
              type="button"
            >
              Получить точный расчёт
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalculatorSection;