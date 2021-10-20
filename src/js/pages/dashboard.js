

export default class DashboardPage {
  constructor() {
    this.template();

  }

  template() {
    document.querySelector('#content').innerHTML += /*html*/ `
   
      <div id="dashboard" class="page">
        <div>
          <h1>Dashboard</h1>
        </div>  
      <section>
          hello
      </section>
      
      </div>
    `;  
  }
}