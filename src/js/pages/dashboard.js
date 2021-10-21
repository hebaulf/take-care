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
            <!-- <a role='navigation' href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a> -->
          </div> 
          <div class='page__tabs event-tabs'>
            <button class='btn  btn-add add-event btn-primary-add'>New</button> 
          </div>
        </header>
        <main class="main">
          <div class="dashboard__wrap">
            <div class="dashboard__lists">
              <div class="dashboard__lists__itemwrap"> 
                <div class="dashboard__eventlist dashboard__list  card__list">
                  <p>Events</p>  
                </div>
                <a href="#events" class="btn">See All</a>
              </div>
              <div class="dashboard__lists__itemwrap">
                <div class="dashboard__todolist dashboard__list  card__list">
                  <p>Todos</p>
                </div>
                <a href="#todos" class="btn">See All</a>
              </div>
              <div class="dashboard__lists__itemwrap">
                <div class="dashboard__journallist dashboard__list  card__list">
                  <p>Journal</p>
                </div>
                <a href="#journal" class="btn">See All</a>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    `;  
  }
}
