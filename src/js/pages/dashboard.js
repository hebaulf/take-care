

export default class DashboardPage {
  constructor() {
    this.template();
  }

  template() {
    document.pageTitle = 'Home';
    const user = 'Vala';
    document.querySelector('#content').innerHTML += /*html*/ `
   
      <section id="dashboard" class="page page-home">
        <div class='main-head'>
          <h1 hidden>${document.pageTitle}</h1>
          <h1>Hi, ${user}</h1>
          <button class='btn-home'><i class='tc-icons-home-filled'></i></button>
        </div>
          <div class="">
            <div class='content-top'>
              <button class='btn btn-primary-add'>new</button>
            </div>
            <div class="todo__list cards">
            </div>
          </div>
      </section>
    `;  
  }
}