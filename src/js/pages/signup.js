// signupPage
export default class signupPage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
     <section id='signup' class="page">
      <header class='topbar'>
        <h2>Signup</h2>
      </header>
      <!-- firebase auth container comes here in a section element-->
     </section>
    `
  }
}