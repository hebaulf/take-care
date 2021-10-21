/* let username = 'Arna Vala'
let matches = username.match(/\b(\w)/g);
let acronym = matches.join('');
console.log(acronym); */


export default class DashboardPage {
  constructor() {
    this.template();
   
  }

  template() {
    const userName = 'Smári';
    document.querySelector('#content').innerHTML += /*html*/ `
      <div id="dashboard" class="page">
        <header id='head' class='head'>
          <div class='head__title'>
            <h1 id='page-title' class='page-title'>Hi, ${userName}</h1>
            <a role='navigation' href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a>
          </div>
          <div class='page__tabs event-tabs'>
            <button class='btn  btn-add add-event btn-primary-add'>New</button> 
            <div class='tabs'>
              <button class='tabs__link'>Appointments</button>
              <button class='tabs__link'>Meetups</button>
              <button class='tabs__link'>All</button>
            </div>
          </div>
        </header>
        <main class="main">
          
        </main>
      </div>
    `;  
  }
}