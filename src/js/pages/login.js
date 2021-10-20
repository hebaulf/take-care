
export default class LoginPage {
  constructor() {
    this.template();
  
  }

  template() {
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="login" class="page">
        <div class="login__logo">
          <img src="assets/img/take-care-logo.svg" alt="Take care logo"/>
        </div>
        <div class="login__form">
          <header class="topbar">
            <h1 class="h2">Login</h1>
          </header>
          <form class="form" autocomplete="off">
            <h4>If you are new / <strong>Sign Up</strong></h4>

            <fieldset>
              <label for="email">Email</label>
              <input type="email" name="email">
            </fieldset>

            <fieldset>
              <label for="password">Password</label>
              <input type="password" name="password" >
            </fieldset>

            <h4>Forgot password? / <strong>Reset</strong></h4>

            <div class="form__button">
              <a href="#dashboard" class="button">Log In</a>
            </div>
          </form>
        </div>
      </section>
    `;  
  }
}