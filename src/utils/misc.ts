// Generic helper to convert array of keys to object type
export type ObjectFromKeys<TKeys extends readonly string[], TValue> = {
  [TKey in TKeys[number]]: TValue
}

// Make a type more readable in the overlay
export type PrettifyObject<TObject extends Record<PropertyKey, any>> = {
  [TKey in keyof TObject]: TObject[TKey]
} & {}

export function chunk<TItem>(items: TItem[], size: number): TItem[][] {
  const chunkedItems: TItem[][] = []
  for (let index = 0; index < items.length; index += size) {
     chunkedItems.push(items.slice(index, index + size))
  }
  return chunkedItems
}

export async function asyncRetry<TResult>(
  func: () => Promise<TResult>,
  retries = 3,
  delay = 100,
): Promise<TResult> {
  try {
     return await func()
  } catch (error) {
     if (retries > 0) {
        await new Promise(resolve => setTimeout(resolve, delay))
        return asyncRetry(func, retries - 1, delay * 2)
     }
     throw error
  }
}