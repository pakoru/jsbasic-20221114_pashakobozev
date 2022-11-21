function factorial(n) {
  if (n == 0) return 1;
  let answer = n;
  for (let i = 1; i < n; i++) {
    answer = answer * i;
  }
  return answer;
}
