function factorial(n) {
  if (n == 0) return 1;
  let a = n;
  for (let i = 1; i < n; i++) {
    a = a * i;
  }
  return a;
}
