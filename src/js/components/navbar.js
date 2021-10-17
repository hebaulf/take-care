export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#navbar").innerHTML += /*html*/ `
      <nav class="nav-links">
        <a href="#events">E</a>
        <a href="#journal">JL</a>
        <a href="#journal">TD</a>
        <a href="#todos">P</a>
      </nav>
    `;
  }
}