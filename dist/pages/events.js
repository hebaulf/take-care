export default class EventsPage{constructor(){this.template()}template(){document.querySelector("#content").innerHTML+='\n      <section id="events" class="page">\n        <header>\n          <h3>Events</h3>\n        </header>\n        <div class="event__wrapper table-wrapper">\n          <div class="event__list table-users">\n          </div>\n          <button class="btn btn-add add-event">Add Event</button>\n        </div>\n      \n      \x3c!-- Add Modal --\x3e\n        <div class="add-modal add-event-modal modal-wrapper event-modal-wrapper">\n          <div class="modal">\n            <div class="modal-header"><h3>New Event</h3></div>\n            <div class="modal-body">\n              <form class="form" autocomplete="off">\n                <label for="title">Title</label>\n                <input type="text" name="title" placeholder="Title">\n\n                <label for="description">Description</label>\n                <textarea type="text" name="description" placeholder="Description"></textarea>\n\n                <label for="location">Location</label>\n                <input type="text" name="location" placeholder="Location">\n\n                <label for="date">Date</label>\n                <input type="date" name="date" placeholder="Date">\n\n                <label for="assign">Assign to</label>\n                <select name="assign" id="assign" placeholder="Assign to">\n                  <option value="heba">Heba</option>\n                  <option value="vala">Vala</option>\n                  <option value="kristrun">Kristrun</option>\n                  <option value="Bryndis">Bryndís</option>\n                  <option value="Tinna">Tinna</option>\n                </select>\n\n                <label for="label">Label</label>\n                <select name="label" id="label">\n                  <option value="appointment">Appointment</option>\n                  <option value="meetup">Meetup</option>\n                </select>\n                <button class="btn btn-modal">Add</button>\n              </form>\n            </div>\n          </div>\n        </div>\n   \n      \x3c!-- Edit Modal --\x3e\n        <div class="edit-modal edit-event-modal modal-wrapper event-modal-wrapper">\n          <div class="modal">\n            <div class="modal-header"><h3>New Event</h3></div>\n            <div class="modal-body">\n              <form class="form" autocomplete="off">\n                <label for="title">Title</label>\n                <input type="text" name="title" placeholder="Title">\n\n                <label for="description">Description</label>\n                <textarea type="text" name="description" placeholder="Description"></textarea>\n\n                <label for="location">Location</label>\n                <input type="text" name="location" placeholder="Location">\n\n                <label for="date">Date</label>\n                <input type="date" name="date" placeholder="Date">\n\n                <label for="assign">Assign to</label>\n                <select name="assign" id="assign" placeholder="Assign to">\n                  <option value="heba">Heba</option>\n                  <option value="vala">Vala</option>\n                  <option value="kristrun">Kristrun</option>\n                  <option value="Bryndis">Bryndís</option>\n                  <option value="Tinna">Tinna</option>\n                </select>\n\n                <label for="label">Label</label>\n                <select name="label" id="label">\n                  <option value="appointment">Appointment</option>\n                  <option value="meetup">Meetup</option>\n                </select>\n                <button class="btn btn-modal">Update</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </section>\n    '}}
//# sourceMappingURL=events.js.map