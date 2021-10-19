export default class EventsPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="events" class="page">
        <header>
          <h3>Events</h3>
        </header>
        <div class="event__wrapper table-wrapper">
          <div class="event__list table-users">
          </div>
          <button class="btn btn-add add-event">Add Event</button>
        </div>
      
      <!-- Add Modal -->
        <div class="add-modal add-event-modal modal-wrapper event-modal-wrapper">
          <div class="modal">
            <div class="modal-header"><h3>New Event</h3></div>
            <div class="modal-body">
              <form class="form" autocomplete="off">
                <label class="visuallyhidden" for="title">Title</label>
                <input type="text" name="title" placeholder="Title">

                <label class="visuallyhidden" for="description">Description</label>
                <textarea type="text" name="description" placeholder="Description"></textarea>

                <label class="visuallyhidden" for="location">Location</label>
                <input type="text" name="location" placeholder="Location">

                <label for="date">Date</label>
                <input type="date" name="date">

                <label for="eventAddAssign">Assign to</label>
                <select name="assign" id="eventAddAssign">
                  <option value="heba">Heba</option>
                  <option value="vala">Vala</option>
                  <option value="kristrun">Kristrun</option>
                  <option value="Bryndis">Bryndís</option>
                  <option value="Tinna">Tinna</option>
                </select>

                <label for="eventAddLabel">Label</label>
                <select name="label" id="eventAddLabel">
                  <option value="appointment">Appointment</option>
                  <option value="meetup">Meetup</option>
                </select>
                <button class="btn btn-modal">Add</button>
              </form>
            </div>
          </div>
        </div>
   
      <!-- Edit Modal -->
        <div class="edit-modal edit-event-modal modal-wrapper event-modal-wrapper">
          <div class="modal">
            <div class="modal-header"><h3>New Event</h3></div>
            <div class="modal-body">
              <form class="form" autocomplete="off">
                <label for="title">Title</label>
                <input type="text" name="title" placeholder="Title">

                <label for="description">Description</label>
                <textarea type="text" name="description" placeholder="Description"></textarea>

                <label for="location">Location</label>
                <input type="text" name="location" placeholder="Location">

                <label for="date">Date</label>
                <input type="date" name="date" placeholder="Date">

                <label for="eventEditAssign">Assign to</label>
                <select name="assign" id="eventEditAssign" placeholder="Assign to">
                  <option value="Heba">Heba</option>
                  <option value="Vala">Vala</option>
                  <option value="Kristrun">Kristrun</option>
                  <option value="Bryndis">Bryndís</option>
                  <option value="Tinna">Tinna</option>
                </select>

                <label for="eventEditLabel">Label</label>
                <select name="label" id="eventEditLabel">
                  <option value="appointment">Appointment</option>
                  <option value="meetup">Meetup</option>
                </select>
                <button class="btn btn-modal">Update</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}