/* let username = 'Arna Vala'
let matches = username.match(/\b(\w)/g);
let acronym = matches.join('');
console.log(acronym); */



export default class DashboardPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="dashboard" class="page">
        <div id='events' className="event__list">
          Events
        </div>
        <div id='todos' className="todo__list">
          Todos
        </div>
        <div id='todos' className="todo__list">
          Journal
        </div>
      </section>
  
    `;  
  }
}