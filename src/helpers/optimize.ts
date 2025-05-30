type AnyFunction = (...args: any[]) => any;

export function debounce<T extends AnyFunction>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const _this = this;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(_this, args);
      timer = null;
    }, delay);
  };
}

export function throttle<T extends AnyFunction>(func: T, delay: number): (...args: Parameters<T>) => void {
  let lastTime = 0;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const _this = this;
    const now = Date.now();

    if (now - lastTime >= delay) {
      func.apply(_this, args);
      lastTime = now;
    }
  };
}

export function throttleWithTimer<T extends AnyFunction>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const _this = this;

    if (timer) return;

    timer = setTimeout(() => {
      func.apply(_this, args);
      timer = null;
    }, delay);
  };
}
