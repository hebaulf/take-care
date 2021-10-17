

export default class eventCard {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <article class="card event-card">

       
      </article>
    `;
  }
} 