export function nonNullable<T>(arg: T | undefined | null): arg is T {
  return typeof arg !== 'undefined' && arg !== null;
}