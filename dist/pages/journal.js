export default class JournalPage{constructor(){this.template()}template(){document.pageTitle="Journal",document.querySelector("#content").innerHTML+=`\n      <section id="journal" class="page page-journal">\n        <div class='topbar'>\n          <h1>${document.pageTitle}</h1>\n          <a href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a>\n        </div>\n        <div class="main-content">\n          <div class='content-top'>\n            <a href='#' class='btn btn-primary-add'>new</a>\n          </div>\n          <div class="journal__list table-users">\n          </div>\n          <button class="btn btn-add add-journal">Add Entry</button>\n        </div>\n      \n      \x3c!-- Add Modal --\x3e\n        <div class="add-modal add-journal-modal modal-wrapper journal-modal-wrapper">\n          <div class="modal">\n            <div class="modal-header">\n              <h3>Create Journal</h3>\n              <button class="btn add-journal-close">Close</button>\n            </div>\n            <div class="modal-body">\n              <form class="form" autocomplete="off">\n                <fieldset class="radio-btns">\n                  <h4 class="font-light">How are they feeling today?</h4>\n                  <input id="Good" type="radio" name="feeling" value="Good">\n                  <label for="Good">Good</label>\n                  <input id="Medium" type="radio" name="feeling" value="Medium">\n                  <label for="Medium">Medium</label>\n                  <input id="Bad" type="radio" name="feeling" value="Bad">\n                  <label for="Bad">Bad</label>\n                </fieldset>\n\n                <fieldset class="text-input">\n                  <label class="button-text" for="entry">Journal Entry</label>\n                  <textarea type="text" name="entry"></textarea>\n                </fieldset>\n\n                <fieldset class="date">\n                  <label for="date">Date</label>\n                  <input type="date" name="date">\n                </fieldset>\n\n                <fieldset class="dropdown">\n                  <label for="eventAddAssign">Assign to</label>\n                  <select name="assign" id="eventAddAssign">\n                  <option value="">Assignee</option>\n                  <option value="HU">Heba</option>\n                  <option value="AS">Vala</option>\n                  <option value="KU">Kristrun</option>\n                  <option value="BS">Bryndís</option>\n                  <option value="TH">Tinna</option>\n                  </select>\n                </fieldset>\n\n                <button class="btn btn-modal btn-primary-add ">Add</button>\n              </form>\n            </div>\n          </div>\n        </div>\n   \n      \x3c!-- Edit Modal --\x3e\n        <div class="edit-modal edit-journal-modal modal-wrapper journal-modal-wrapper">\n          <div class="modal">\n            <div class="modal-header">\n              <h3>Edit Journal</h3>\n              <button class="btn edit-journal-close">Close</button>\n            </div>\n            <div class="modal-body">\n              <form class="form" autocomplete="off">\n                <fieldset class="radio-btns">\n                  <h4 class="font-light">How are they feeling today?</h4>\n                  <input id="Good" type="radio" name="feeling" value="Good">\n                  <label for="Good">Good</label>\n                  <input id="Medium" type="radio" name="feeling" value="Medium">\n                  <label for="Medium">Medium</label>\n                  <input id="Bad" type="radio" name="feeling" value="Bad">\n                  <label for="Bad">Bad</label>\n                </fieldset>\n\n                <fieldset class="text-input">\n                  <label class="button-text" for="entry">Journal Entry</label>\n                  <textarea type="text" name="entry"></textarea>\n                </fieldset>\n\n                <fieldset class="date">\n                  <label for="date">Date</label>\n                  <input type="date" name="date">\n                </fieldset>\n\n                <fieldset class="dropdown">\n                  <label for="eventAddAssign">Assign to</label>\n                  <select name="assign" id="eventAddAssign">\n                  <option value="">Assignee</option>\n                  <option value="HU">Heba</option>\n                  <option value="AS">Vala</option>\n                  <option value="KU">Kristrun</option>\n                  <option value="BS">Bryndís</option>\n                  <option value="TH">Tinna</option>\n                  </select>\n                </fieldset>\n\n                <button class="btn btn-modal">Update</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </section>\n    `}}
//# sourceMappingURL=journal.js.map