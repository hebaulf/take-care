export default class EventsPage {
  constructor() {
    this.template();
  }

  template() {
    document.pageTitle = 'Events'
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="events" class="page page-event">
        <div class='topbar'>
          <h1>${document.pageTitle}</h1>
          <a href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a>
        </div>
        <div class="main-content">
          <div class='content-top'>
            <a href='#' class='btn btn-add add-event btn-primary-add'>new</a>
          </div>
          <div class="event__list cards">
          </div>
          <button class="btn btn-add add-event">Add Event</button>
        </div>
      
      <!-- Add Modal -->
        <div class="add-modal add-event-modal modal-wrapper event-modal-wrapper">
          <div class="modal">
            <div class="modal-header">
              <h3>Create Event</h3>
              <button class="btn add-event-close">Close</button>
            </div>
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
                  <option value="Heba">Heba</option>
                  <option value="Vala">Vala</option>
                  <option value="Kristrun">Kristrun</option>
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
            <div class="modal-header">
              <h3>Edit Event</h3>
              <button class="btn edit-event-close">Close</button>
            </div>
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