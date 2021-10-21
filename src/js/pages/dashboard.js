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
            <!-- <a role='navigation' href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a> -->
          </div> 
          <div class='page__tabs event-tabs'>
            <div class="tabs"></div>
            <!-- <button class='btn btn-add add-event btn-primary-add'>New</button> --> 
          </div>
        </header>
        <main class="main">
          <div class="dashboard__wrap">
            <div class="dashboard__lists">
              <div class="dashboard__lists__itemwrap"> 
                <div class="dashboard__eventlist dashboard__list  card__list">
                  <div class="dashboard__list__top">
                    <p>Events</p>
                    <a href="#events" class="btn btn-primary-dashboard">See All</a>
                  </div>
                </div>
              </div>
              <div class="dashboard__lists__itemwrap">
                <div class="dashboard__todolist dashboard__list  card__list">
                  <div class="dashboard__list__top">
                    <p>Todos</p>
                    <a href="#todos" class="btn btn-primary-dashboard">See All</a>
                  </div>
                </div>
              </div>
              <div class="dashboard__lists__itemwrap">
                <div class="dashboard__journallist dashboard__list  card__list">
                  <div class="dashboard__list__top">
                    <p>Journal</p>
                    <a href="#journal" class="btn btn-primary-dashboard">See All</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;  
  }
}
