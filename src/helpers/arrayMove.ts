export function arrayMoveMutable<ValueType>(array: ValueType[], fromIndex: number, toIndex: number): ValueType[] {
  const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;

  if (startIndex >= 0 && startIndex < array.length) {
    const endIndex = toIndex < 0 ? array.length + toIndex : toIndex;

    const [item] = array.splice(fromIndex, 1);
    array.splice(endIndex, 0, item);
  }

  return array;
}

export function arrayMoveImmutable(array: unknown[], fromIndex: number, toIndex: number): void {
  array = [...array];
  arrayMoveMutable(array, fromIndex, toIndex);
}
