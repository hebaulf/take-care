export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#navbar").innerHTML += /*html*/ `
      <nav class="nav-links">
        <a href="#events"><i class='tc-icons-calendar'></i><span class='nav-links__text'>Events</span></a>
        <a href="#journal"><i class='tc-icons-journal'></i><span class='nav-links__text'>profile</span></a>
        <a href="#todos"><i class='tc-icons-task-list'></i><span class='nav-links__text'>profile</span></a>
        <a href="#profile"><i class='tc-icons-profile'></i><span class='nav-links__text'>profile</span></a>
      </nav>
    `;
  }
}