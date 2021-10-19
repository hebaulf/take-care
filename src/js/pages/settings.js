/* let username = 'Arna Vala'
let matches = username.match(/\b(\w)/g);
let acronym = matches.join('');
console.log(acronym); */

export default class SettingsPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="settings" class="page">
        <h1>settings page</h1>
        <a href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a>
      </section>
  
    `;  
  }
}