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
      <div id='settings' class='page'>
        <header id='head' class='head'>
          <div class='head__title'>
            <h1 id='page-title' class='page-title'>${document.pageTitle}</h1>
            <a role='navigation' href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a>
          </div>
        </header>
        <main class='main'>
          <div class="form-user-profile">
            <form>
            <label for='username'>Username</label>
            <input id='username' type='text'>
            </form>
          </div>
          <button class="btn btn-primary-add">New user</button>
        </main>
      </div>
    `;  
  }
}