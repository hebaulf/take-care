export default class NavBar {
  constructor() {
    this.component();
  }

  component() {
    document.querySelector("#navbar").innerHTML += /*html*/ `
      <div class="navbar__links">
        <a href="#events"><i class='tc-icons-calendar'></i><span class='navbar__links--text'>Events</span></a>
        <a href="#journal"><i class='tc-icons-journal'></i><span class='navbar__links--text'>Journal</span></a>
        <a href="#todos"><i class='tc-icons-task-list'></i><span class='navbar__links--text'>Todos</span></a>
        <a href="#settings"><i class='tc-icons-settings'></i><span class='navbar__links--text'>Settings</span></a>
      </div>
    `;
  }
}