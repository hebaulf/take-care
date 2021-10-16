export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav class="nav-links">
        <a href='#login'>Login</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#events">Events</a>
        <a href="#journal">Journal</a>
        <a href="#todos">Todos</a>
      </nav>
    `;
  }
}