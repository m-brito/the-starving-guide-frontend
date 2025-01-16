export function normalizeEntry<T>(value: T | T[]) {
  if (typeof value === 'string') return [value]
  else return value
}
