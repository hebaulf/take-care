// eventsPage
// import eventsService 
export default class eventsPage {
  constructor() {
    this.template();
    //this.appendEvents();
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
     <section id='events' class="page">
      <header class='topbar'>
        <h2>Events</h2>
      </header>
      <!-- Categories: appointments/meetups -->
      <div id='grid-events' class="grid-container"></div>
      
     </section>
    `
  }

  async appendEvents() {
    let events = await eventsService.loadEvents();
    // need to filter by category
    for (let event of events) {
      document.querySelector('#grid-events').innerHTML += /*html*/ `
        <article class='event-card'>
          <h4>event name</h4>
          <p>category</p>
          <p>details</p>
          <p>assigned to</p>
        </article>
      `
    }
  }
}
