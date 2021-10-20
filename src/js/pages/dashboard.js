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
      <div id="dashboard" class="page">
        <header id='head' class='head' title='title'>
          <h1 id='page-title'>Dashboard</h1>
        </header>
        <main class='main'>
          hello

        </main>
      </div>
    `;  
  }
}