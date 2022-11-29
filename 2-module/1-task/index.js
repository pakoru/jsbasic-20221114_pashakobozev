function sumSalary(salaries) {
  return Object
  .values(salaries)
  .filter(Number.isInteger)
  .reduce((a, b) => a + b, 0);

}

