function getMinMax(str) {
  let result = {
    min: 0,
    max: 0,
  };
  let output = str
    .split(" ")
    .filter((item) => Number(item))
    .sort((a, b) => a - b);
  result.min = Math.min(...output);
  result.max = Math.max(...output);
  return result;
}
