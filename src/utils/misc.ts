// Generic helper to convert array of keys to object type
export type ObjectFromKeys<TKeys extends readonly string[], TValue> = {
  [TKey in TKeys[number]]: TValue
}
