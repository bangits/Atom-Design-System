export const trim = <T>(value: T): T | string => (typeof value === 'string' ? value.trim() : value);
