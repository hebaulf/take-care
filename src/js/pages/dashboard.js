export default class DashboardPage {
  constructor() {
    this.template();
  }

  template() {
    document.pageTitle = 'Hi, Guðrún';
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
          <div class="dashboard__wrap">
            <div class="dashboard__lists">
              <div class="dashboard__eventlist">
              </div>
              <div class="dashboard__todolist">
              </div>
              <div class="dashboard__journallist">
              </div>
            </div>
          </div>
        </div>
      
      </div>
    `;  
  }
}