export default class TopBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#topbar").innerHTML += /*html*/ `
      <div>
        <h2 class='heading-2'> TakeCare </h2>
      </div>
    `;
  }
}