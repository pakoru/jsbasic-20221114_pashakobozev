/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */


function isValid(name) {
  let result = (name != "null" && typeof name === "string" && (name.length > 3) && (name.indexOf(' ') === -1)) ? true : false;
  return result;
  // ваш код...
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
