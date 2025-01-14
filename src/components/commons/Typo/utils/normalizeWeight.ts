import { FontWeights, weights } from '../utils/default'

export function normalizeWeight(
  value: keyof FontWeights | (keyof FontWeights)[]
) {
  if (Array.isArray(value)) return value.map(item => weights[item])
  else return [value].map(item => weights[item])
}
