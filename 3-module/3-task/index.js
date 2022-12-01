function camelize(str) {
  return str
    .split('-')
    .map((value, index) => {
      if (index == 0) {
        return value;
      }
      return value[0].toUpperCase() + value.slice(1)
    })
    .join('');

}