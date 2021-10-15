export default class TodosPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="todos" class="page">
        <header class="topbar">
          <h2>Todo</h2>
          <p>
        </header>
        <h3>Todo</h3>
        <p>list of TODO entries</p>
      </section>
    `;
  }
}