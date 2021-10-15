export default class EventsPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="events" class="page">
        <header class="topbar">
          <h2>Events</h2>
        </header>
        <h3>Display events</h3>
        <p>categories: appointments and meetups</p>
      </section>
    `;
  }
}