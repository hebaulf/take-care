export default class EventsPage{constructor(){this.template()}template(){document.pageTitle="Events",document.querySelector("#content").innerHTML+=`\n      <section id="events" class="page page-event">\n        <div class='topbar'>\n          <h1>${document.pageTitle}</h1>\n          <a href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a>\n        </div>\n        <div class="main-content">\n          <div class='content-top'>\n            <button class="btn btn-primary-add btn-add add-event">Add Event</button>\n          </div>\n          <div class="event__list">\n          </div>\n        </div>\n      \n      \x3c!-- Add Modal --\x3e\n        <div class="add-modal add-event-modal modal-wrapper event-modal-wrapper">\n          <div class="modal">\n            <div class="modal-header">\n              <h2>Create Event</h2>\n              <button class="btn btn-close add-event-close">Close</button>\n            </div>\n            <div class="modal-body">\n              <form class="form" autocomplete="off">\n                <fieldset class="radio-btns">\n                  <legend><h4 class="font-light">Event Type</h4></legend>\n                  <input id="eventAddAppointment" type="radio" name="label" value="appointment" checked>\n                  <label class="first-btn" for="eventAddAppointment">Appointment</label>\n                  <input id="eventAddMeetup" type="radio" name="label" value="meetup">\n                  <label class="last-btn" for="eventAddMeetup">Meetup</label>\n                </fieldset>\n\n                <fieldset class="text-input">\n                  <label class="button-text" for="title">Title</label>\n                  <input type="text" name="title">\n                </fieldset>\n\n                <fieldset class="text-input">\n                  <label class="button-text" for="description">Description</label>\n                  <textarea type="text" name="description"></textarea>\n                </fieldset>\n\n                <fieldset class="text-input">\n                  <label class="button-text" for="location">Location</label>\n                  <input type="text" name="location">\n                </fieldset>\n\n                <fieldset class="date">\n                  <label for="date">Date</label>\n                  <input type="date" name="date">\n                </fieldset>\n\n                <fieldset class="dropdown">\n                  <label for="eventAddAssign">Assign to</label>\n                  <select name="assign" id="eventAddAssign">\n                    <option value="">Assignee</option>\n                    <option value="HU">Heba</option>\n                    <option value="AS">Vala</option>\n                    <option value="KU">Kristrun</option>\n                    <option value="BS">Bryndís</option>\n                    <option value="TH">Tinna</option>\n                  </select>\n                </fieldset>\n\n                <button class="btn btn-modal">Add</button>\n              </form>\n            </div>\n          </div>\n        </div>\n   \n      \x3c!-- Edit Modal --\x3e\n        <div class="edit-modal edit-event-modal modal-wrapper event-modal-wrapper">\n          <div class="modal">\n            <div class="modal-header">\n              <h3>Edit Event</h3>\n              <button class="btn edit-event-close">Close</button>\n            </div>\n            <div class="modal-body">\n              <form class="form" autocomplete="off">\n                <fieldset class="radio-btns">\n                  <legend><h4 class="font-light">Event Type</h4></legend>\n                  <input id="appointment" type="radio" name="label" value="appointment">\n                  <label class="first-btn" for="appointment">Appointment</label>\n                  <input id="meetup" type="radio" name="label" value="meetup">\n                  <label class="last-btn" for="meetup">Meetup</label>\n                </fieldset>\n\n                <fieldset class="text-input">\n                  <label class="button-text" for="title">Title</label>\n                  <input type="text" name="title">\n                </fieldset>\n\n                <fieldset class="text-input">\n                  <label class="button-text" for="description">Description</label>\n                  <textarea type="text" name="description"></textarea>\n                </fieldset>\n\n                <fieldset class="text-input">\n                  <label class="button-text" for="location">Location</label>\n                  <input type="text" name="location">\n                </fieldset>\n\n                <fieldset class="date">\n                  <label for="date">Date</label>\n                  <input type="date" name="date">\n                </fieldset>\n\n                <fieldset class="dropdown">\n                  <label for="eventEditAssign">Assign to</label>\n                  <select name="assign" id="eventEditAssign">\n                    <option value="">Assignee</option>\n                    <option value="HU">Heba</option>\n                    <option value="AS">Vala</option>\n                    <option value="KU">Kristrun</option>\n                    <option value="BS">Bryndís</option>\n                    <option value="TH">Tinna</option>\n                  </select>\n                </fieldset>\n\n                <button class="btn btn-modal">Update</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </section>\n    `}}
//# sourceMappingURL=events.js.map