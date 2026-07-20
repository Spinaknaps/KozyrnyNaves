export type FoundationType = "piles" | "concrete";

export interface CalculatorFormData {
  canopyWidth: number;
  canopyLength: number;
  foundationType: FoundationType;
  hasFrieze: boolean;
}

export interface CalculationResult {
  canopyArea: number;
  roofArea: number;
  supportCount: number;

  canopyCost: number;
  foundationCost: number;
  friezeCost: number;
  deliveryCost: number;

  totalPrice: number;
}