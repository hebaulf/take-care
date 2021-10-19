
export default class TopBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#topbar").innerHTML += /*html*/ `
        <h1 class='heading-1'> TakeCare </h1>
        <button class='btn-home'><i class='tc-icons-home-filled'></i></button>
    
    `;
  }
}