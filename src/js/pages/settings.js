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
        <header id='head' class='head'>
          <div class='head__title'>
            <h1 id='page-title' class='page-title'>${document.pageTitle}</h1>
            <a role='navigation' href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a>
          </div>
        </header>
        <main class='main'>
          <div class="settings__content-wrap">
          <div>
            <div class="user-icon h1">GT</div>
          </div>
          <div>
            <h3>Profile Info</h3>
            <div class="settings__infobox">
              <div>
                <div>First Name</div>
                <div><p>Guðrún</p></div>
                <div><i class="arrow-right"></i></div>
              </div>
              <div>
                <div>Last Name</div>
                <div><p>Tryggvadóttir</p></div>
                <div><i class=""></i></div>
              </div>
              <div>
                <div>Email</div>
                <div><p>gudruntryggva@gmail.com</p></div>
                <div><i class=""></i></div>
              </div>
            </div>
          </div>
          <div class="settings__infobox">
            <h3>Account</h3>
            <div>
              <div>
                <div><p>Change Password</p></div>
                <div><i class=""></i></div>
              </div>
              <div>
                <div><p>Notifications</p></div>
                <div><i class=""></i></div>
              </div>
              <div>
                <div><p>My Team</p></div>
                <div><i class=""></i></div>
              </div>
            </div>
          </div>
          <div class="form__button">
            <a href="#dashboard" class="button">Log Out</a>
          </div>
          </div>
        </main>
      </section>
    `;  
  }
}