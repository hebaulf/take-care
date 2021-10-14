// dashboardPage
export default class dashboardPage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
     <section id='dashboard' class="page">
      <header class='topbar'>
        <h2>Dashboard</h2>
      </header>
      <h3>Modules / Views</h3>
      <p>Dashboard view</p>
      <!-- events --->
      <!-- todos --->
      <!-- journal --->
      <!-- create --->
     </section>
    `
  }
}