export const fixDecimalPlaces = (num: number, maxDecimals: number) => {
  return Number(num.toFixed(maxDecimals));
};

export const interpolatePosition = (
  start: number,
  end: number,
  alpha: number
) => {
  return start + (end - start) * alpha;
};
