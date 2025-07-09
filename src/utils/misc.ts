// Generic helper to convert array of keys to object type
export type ObjectFromKeys<TKeys extends readonly string[], TValue> = {
  [TKey in TKeys[number]]: TValue
}

// Make a type more readable in the overlay
export type PrettifyObject<TObject extends Record<PropertyKey, any>> = {
  [TKey in keyof TObject]: TObject[TKey]
} & {}
