
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
          <label class="visuallyhidden" for="firstName">First Name</label>
          <input type="text" name="firstName" placeholder="First Name">

          <label class="visuallyhidden" for="lastName">Last Name</label>
          <input type="text" name="lastName" placeholder="Last Name">
          
          <label class="visuallyhidden" for="email">Email</label>
          <input type="email" name="email" placeholder="Email">

          <label class="visuallyhidden" for="password">password</label>
          <input type="password" name="password" placeholder="password" >

          <button class="btn btn-modal">Submit</button>
        </form>
      </section>
    `;  
  }
}