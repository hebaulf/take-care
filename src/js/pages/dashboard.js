export default class DashboardPage {
  constructor() {
    this.template();
  }

  template() {
    document.pageTitle = 'Hi, Guðrún';
    document.querySelector('#content').innerHTML += /*html*/ `

      <section id="dashboard" class="page">
        <div>
          <h1>${document.pageTitle}</h1>
        </div> 
        <div class="main-content">
          <!-- <div class='content-top'>
            <a href='#dashboard' class='btn btn-primary-add'>new</a>
          </div> -->
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
      
      </section>
    `;  
  }
}