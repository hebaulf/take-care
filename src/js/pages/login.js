// loginPage
export default class loginPage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
     <section id='login' class="page">
      <header class='topbar'>
        <h2>Login</h2>
      </header>
      <!-- firebase auth container comes here in a section element-->
     </section>
    `
  }
}