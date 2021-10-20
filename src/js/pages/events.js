export default class EventsPage {
  constructor() {
    this.template();
  }

  template() {
    document.pageTitle = 'Events';
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="events" class="page page-event">
        <div class='topbar'>
          <h1>${document.pageTitle}</h1>
          <a href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a>
        </div>
        <div class="main-content">
          <div class='content-top'>
            <a href='#' class='btn btn-primary-add'>new</a>
          </div>
          <div class="event__list table-users">
          </div>
          <button class="btn btn-add add-event">Add Event</button>
        </div>
      
      <!-- Add Modal -->
        <div class="add-modal add-event-modal modal-wrapper event-modal-wrapper">
          <div class="modal">
            <div class="modal-header">
              <h2>Create Event</h2>
              <button class="btn btn-close add-event-close">Close</button>
            </div>
            <div class="modal-body">
              <form class="form" autocomplete="off">
                <fieldset class="radio-btns">
                  <legend><h4 class="font-light">Event Type</h4></legend>
                  <input id="eventAddAppointment" type="radio" name="label" value="appointment">
                  <label class="first-btn" for="eventAddAppointment">Appointment</label>
                  <input id="eventAddMeetup" type="radio" name="label" value="meetup">
                  <label class="last-btn" for="eventAddMeetup">Meetup</label>
                </fieldset>

                <fieldset class="text-input">
                  <label class="button-text" for="title">Title</label>
                  <input type="text" name="title">
                </fieldset>

                <fieldset class="text-input">
                  <label class="button-text" for="description">Description</label>
                  <textarea type="text" name="description"></textarea>
                </fieldset>

                <fieldset class="text-input">
                  <label class="button-text" for="location">Location</label>
                  <input type="text" name="location">
                </fieldset>

                <fieldset class="date">
                  <label for="date">Date</label>
                  <input type="date" name="date">
                </fieldset>

                <fieldset class="dropdown">
                  <label for="eventAddAssign">Assign to</label>
                  <select name="assign" id="eventAddAssign">
                    <option value="">Assignee</option>
                    <option value="HU">Heba</option>
                    <option value="AS">Vala</option>
                    <option value="KU">Kristrun</option>
                    <option value="BS">Bryndís</option>
                    <option value="TH">Tinna</option>
                  </select>
                </fieldset>

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
                <fieldset class="radio-btns">
                  <legend><h4 class="font-light">Event Type</h4></legend>
                  <input id="appointment" type="radio" name="label" value="appointment">
                  <label class="first-btn" for="appointment">Appointment</label>
                  <input id="meetup" type="radio" name="label" value="meetup">
                  <label class="last-btn" for="meetup">Meetup</label>
                </fieldset>

                <fieldset class="text-input">
                  <label class="button-text" for="title">Title</label>
                  <input type="text" name="title">
                </fieldset>

                <fieldset class="text-input">
                  <label class="button-text" for="description">Description</label>
                  <textarea type="text" name="description"></textarea>
                </fieldset>

                <fieldset class="text-input">
                  <label class="button-text" for="location">Location</label>
                  <input type="text" name="location">
                </fieldset>

                <fieldset class="date">
                  <label for="date">Date</label>
                  <input type="date" name="date">
                </fieldset>

                <fieldset class="dropdown">
                  <label for="eventEditAssign">Assign to</label>
                  <select name="assign" id="eventEditAssign">
                    <option value="">Assignee</option>
                    <option value="HU">Heba</option>
                    <option value="AS">Vala</option>
                    <option value="KU">Kristrun</option>
                    <option value="BS">Bryndís</option>
                    <option value="TH">Tinna</option>
                  </select>
                </fieldset>

                <button class="btn btn-modal">Update</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}