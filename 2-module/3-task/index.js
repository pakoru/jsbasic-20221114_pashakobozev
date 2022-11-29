let calculator = {

  firstValue: 0,
  secondValue: 0,

  read(a, b) {
    calculator.firstValue = a;
    calculator.secondValue = b;
  },
  sum() {
    return this.firstValue + this.secondValue;
  },
  mul() {
    return this.firstValue * this.secondValue;
  }
  // ваш код
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
