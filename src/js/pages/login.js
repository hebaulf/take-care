
export default class LoginPage {
  constructor() {
    this.template();
  
  }

  template() {
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="login" class="page">
        <header class="topbar">
          <h2>Login</h2>
        </header>
          <form class="form" autocomplete="off">
             <input type="text" name="firstName" placeholder="First Name">
             <input type="text" name="lastName" placeholder="Last Name">
             <input type="password" name="password" placeholder="password">
             <input type="email" name="email" placeholder="Email">
             <button class="btn btn-modal">Submit</button>
          </form>
      </section>
    `;  
  }
}