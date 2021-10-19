export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#navbar").innerHTML += /*html*/ `
      <nav class="navbar-links">
        <a href="#events"><i class='tc-icons-calendar'></i><span class='navbar-links__text'>Events</span></a>
        <a href="#journal"><i class='tc-icons-journal'></i><span class='navbar-links__text'>Journal</span></a>
        <a href="#todos"><i class='tc-icons-task-list'></i><span class='navbar-links__text'>Todos</span></a>
        <a href="#settings"><i class='tc-icons-profile'></i><span class='navbar-links__text'>Settings</span></a>
      </nav>
    `;
  }
}