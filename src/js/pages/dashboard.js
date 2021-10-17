const username = 'vala'

export default class DashboardPage {
  constructor() {
    this.template();
  
  }

  template() {
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="dashboard" class="page">
        <header class="topbar">
          <h2 hidden>Dashboard</h2>
          <h2>Hi, ${username}</h2>
          <button>home icon</button>
        </header>
        <div>
          unassigned event items template
        </div>
        <div>
        last visit hardcode.
        </div>
      </section>
    `;  
  }
}