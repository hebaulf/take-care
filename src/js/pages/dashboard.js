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
        <div>journal</div>
        <div>events</div>
        <div>todos</div>
        <div>profile</div>
      </section>
    `;
  }
}