const event = {
  date: '5 Nov 13:30 PM',
  category: 'appointment',
  location: 'Skuggafall Klippistofa',
  title: 'Haircut',
  description: 'lorem ipsum this is a description text.'
}

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
        <div class='cards-list'>
          <article class='card event-card'>
            <div class='card-top'>
              <p class='card-top__category'>${event.category}</p>
              <p class='card-top__date'>${event.date}</p>
            </div>
            <h4 class='card__title'>${event.title}</h4>
            <div>
            <div>
              <p className="card__location">${event.location}</p>
            </div>
          </article>
          <button>see all</button>
        </div>
      </section>
    `;
  }
}