export const fixDecimalPlaces = (num: number, maxDecimals: number) => {
  return Number(num.toFixed(maxDecimals));
};
