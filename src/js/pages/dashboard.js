export default class DashboardPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="dashboard" class="page">
        <header class="topbar">
          <h2>Dashboard</h2>
        </header>
        <h3>SPA Template</h3>
        <p>Dashboard view</p>
      </section>
    `;
  }
}