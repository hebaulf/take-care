export default class JournalPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="journal" class="page">
        <header class="topbar">
          <h2>Journal</h2>
          <p>
        </header>
        <h3></h3>
        <p>list of journal entries</p>
      </section>
    `;
  }
}