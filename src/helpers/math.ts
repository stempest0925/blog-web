/**
 * 钳制，限制数值范围。
 * @param value
 * @param max
 * @param min
 * @returns
 */
export function clamp(value: number, max: number, min: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * 标准化、归一化，转换数值为某个范围的数值。
 * @param value
 * @param options
 * @returns
 */
export function normalize(
  value: number,
  options: Partial<{ max: number; min: number; decimal: number }> = {}
): number {
  const { max = 1, min = -1, decimal = 2 } = options;
  const resolved = min + value * (max * 2);
  return Number(resolved.toFixed(decimal));
}
