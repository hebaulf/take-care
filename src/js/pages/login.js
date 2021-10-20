
export default class LoginPage {
  constructor() {
    this.template();
  
  }

  template() {
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="login" class="page">
        <div class="logo">
          <img src="../assets/img/take-care-logo.svg" alt="Take care logo"/>
        </div>
        <div class="login__form">
          <header class="topbar">
            <h2>Login</h2>
          </header>
          <form class="form" autocomplete="off">
            <fieldset>
              <label class="visuallyhidden" for="firstName">First Name</label>
              <input type="text" name="firstName" placeholder="First Name">
            </fieldset>

            <fieldset>
              <label class="visuallyhidden" for="lastName">Last Name</label>
              <input type="text" name="lastName" placeholder="Last Name">
            </fieldset>

            <fieldset>
              <label class="visuallyhidden" for="email">Email</label>
              <input type="email" name="email" placeholder="Email">
            </fieldset>

            <fieldset>
              <label class="visuallyhidden" for="password">password</label>
              <input type="password" name="password" placeholder="password" >
            </fieldset>

            <a href="/#dashboard" class="form-button">Submit</button>
          </form>
        </div>
      </section>
    `;  
  }
}