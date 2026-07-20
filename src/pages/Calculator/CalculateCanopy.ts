import { calculatorConfig } from "./CalculatorConfig";

import type {
  CalculatorFormData,
  CalculationResult,
} from "./CalculatorTypes";

function roundToThousands(value: number): number {
  return Math.round(value / 1000) * 1000;
}

export function calculateCanopy(
  formData: CalculatorFormData,
): CalculationResult {
  const {
    canopyWidth,
    canopyLength,
    foundationType,
    hasFrieze,
  } = formData;

  /*
   * Площадь основания навеса.
   */
  const canopyArea = canopyWidth * canopyLength;

  /*
   * Площадь кровли немного больше площади основания.
   * Коэффициент учитывает выступы, уклон и запас материала.
   */
  const roofArea =
    canopyArea * calculatorConfig.roofAreaFactor;

  /*
   * Считаем количество пар опор по длине.
   * У навеса две стороны, поэтому результат умножается на 2.
   */
  const supportRows =
    Math.ceil(canopyLength / calculatorConfig.supportSpacing) + 1;

  const supportCount = supportRows * 2;

  /*
   * Примерная стоимость базовой конструкции:
   * каркас, фермы, кровля, покраска и монтаж.
   */
  const canopyCost =
    canopyArea * calculatorConfig.basePricePerSquareMeter;

  /*
   * Стоимость выбранного основания.
   */
  const foundationUnitPrice =
    foundationType === "piles"
      ? calculatorConfig.pilePrice
      : calculatorConfig.concreteSupportPrice;

  const foundationCost =
    supportCount * foundationUnitPrice;

  /*
   * Фриз устанавливается по периметру навеса.
   */
  const canopyPerimeter =
    (canopyWidth + canopyLength) * 2;

  const friezeCost = hasFrieze
    ? canopyPerimeter * calculatorConfig.friezePricePerMeter
    : 0;

  const deliveryCost = calculatorConfig.deliveryPrice;

  /*
   * Общая приблизительная стоимость.
   */
  const totalPrice = roundToThousands(
    canopyCost +
      foundationCost +
      friezeCost +
      deliveryCost,
  );

  return {
    canopyArea,
    roofArea,
    supportCount,

    canopyCost: roundToThousands(canopyCost),
    foundationCost: roundToThousands(foundationCost),
    friezeCost: roundToThousands(friezeCost),
    deliveryCost,

    totalPrice,
  };
}