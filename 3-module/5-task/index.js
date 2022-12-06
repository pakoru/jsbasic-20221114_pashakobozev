function getMinMax(str) {
  const arrayOfNumbers = str.split(' ').filter((value) => Number(value)).map((value) => Number(value));

  return result = {
    min: Math.min.apply(null, arrayOfNumbers),
    max: Math.max.apply(null, arrayOfNumbers)
  };
}
