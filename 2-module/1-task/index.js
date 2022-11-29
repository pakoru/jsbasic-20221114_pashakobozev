function sumSalary(salaries) {
<<<<<<< HEAD
  const sum = Object.values(salaries).filter(Number.isInteger).reduce((a, b) => a + b, 0);
  return sum;
  // let sum = 0;
  // for (key in salaries) {
  //   if (Number.isInteger(salaries[key])) {
  //     sum += salaries[key];
  //   }
  // }
  // return sum;
=======
  return Object.values(salaries).filter(Number.isInteger).reduce((a, b) => a + b, 0);
>>>>>>> 9c685f37133f577868b0d9ff896482c14915495e
}

