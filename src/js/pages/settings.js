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
      <div id="settings" class="page">
        <header id='head' class='head'>
          <div class='head__title'>
            <h1 id='page-title' class='page-title'>${document.pageTitle}</h1>
            <a role='navigation' href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a>
          </div>
          <div class="page__tabs settings-tabs">
          </div>
        </header>
        <main class='main'>
          <div class="settings__content-wrap card__list">
          <div class="user-icon__wrap">
            <div class="user-icon h1">GT</div>
          </div>
          <div>
            <h3>Profile Info</h3>
            <div class="settings__infobox">
              <div class="settings__infobox__line">
                <span class="text-xs font-light">First Name</span>
                <div><p>Guðrún</p></div>
                <div><i class="arrow-right"></i></div>
              </div>
              <div class="settings__infobox__line">
                <span class="text-xs font-light">Last Name</span>
                <div><p>Tryggvadóttir</p></div>
                <div><i class=""></i></div>
              </div>
              <div class="settings__infobox__line">
                <span class="text-xs font-light">Email</span>
                <div><p>gudruntryggva@gmail.com</p></div>
                <div><i class=""></i></div>
              </div>
            </div>
          </div>
          <div>
            <h3>Account</h3>
            <div class="settings__infobox">
              <div class="settings__infobox__line">
                <div><p>Change Password</p></div>
                <div><i class=""></i></div>
              </div>
              <div class="settings__infobox__line">
                <div><p>Notifications</p></div>
                <div><i class=""></i></div>
              </div>
              <div class="settings__infobox__line">
                <div><p>My Team</p></div>
                <div><i class=""></i></div>
              </div>
            </div>
          </div>
          <div class="form__button">
            <button class="btn btn-primary-logout"><i class="tc-icons-logout"></i>Log Out</button>
          </div>
          </div>
        </main>
      </div>
    `;  
  }
}