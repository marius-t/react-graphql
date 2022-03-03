/* eslint-disable @typescript-eslint/no-empty-function */
Object.defineProperty(window, 'matchMedia', {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    };
  },
});

Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      getPropertyValue: () => {},
    };
  },
});
