/* let username = 'Arna Vala'
let matches = username.match(/\b(\w)/g);
let acronym = matches.join('');
console.log(acronym); */

export default class SettingsPage {
  constructor() {
    this.template();
  }

  template() {
    document.pageTitle = 'Settings'
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="settings" class="page">
       <div class='topbar'>
          <h1>${document.pageTitle}</h1>
          <a href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a>
        </div>
        <div class="main-content">
          <div class='content-top'>
            <a href='#' class='btn btn-primary-add'>new</a>
          </div>
          <div class="form-user-profile">
            <form>
            <label for='username'>Username</label>
            <input id='username' type='text'>
            </form>
          </div>
          <button class="btn btn-primary-add">New user</button>
        </div>
      </section>
  
    `;  
  }
}