/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  elem = null;
  #rows = [];

  constructor(rows) {
    this.#rows = rows;

    this.#render();

    this.elem.addEventListener('click', this.#onTableClick);
  }

  #render() {
    const container = document.createElement('table');
    container.innerHTML = `
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${this.#rows.map(data => `
          <tr>
            <td>${data.name}</td>
            <td>${data.age}</td>
            <td>${data.salary}</td>
            <td>${data.city}</td>
            <td><button data-action="remove">X</button></td>
          </tr>
          `)
        .join('')}
        </tbody>
    `
    this.elem = container;
  }

  #onTableClick = (event) => {
    if (event.target.dataset.action != 'remove') {
      return;
    }
    event.target.closest('tr').remove();
  }
}