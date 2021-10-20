<<<<<<< HEAD
export default class JournalPage{constructor(){this.template()}template(){document.pageTitle="Journal",document.querySelector("#content").innerHTML+=`\n      <section id="journal" class="page page-journal">\n        <div class='topbar'>\n          <h1>${document.pageTitle}</h1>\n          <a href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a>\n        </div>\n        <div class="main-content">\n          <div class='content-top'>\n            <a href='#' class='btn btn-primary-add'>new</a>\n          </div>\n          <div class="journal__list cards">\n          </div>\n          <button class="btn btn-primary-add add-journal">Add Entry</button>\n        </div>\n      \n      \x3c!-- Add Modal --\x3e\n        <div class="add-modal add-journal-modal modal-wrapper journal-modal-wrapper">\n          <div class="modal">\n            <div class="modal-header">\n              <h3>Create Journal</h3>\n              <button class="btn add-journal-close">Close</button>\n            </div>\n            <div class="modal-body">\n              <form class="form" autocomplete="off">\n                <label for="feeling">Feeling</label>\n                <select name="feeling" id="journalEditAssign">\n                  <option value="Good">Good</option>\n                  <option value="Medium">Medium</option>\n                  <option value="Bad">Bad</option>\n                </select>\n\n                <label class="visuallyhidden" for="entry">Journal Entry</label>\n                <textarea type="text" name="entry" placeholder="Journal Entry"></textarea>\n\n                <label for="date">Date</label>\n                <input type="date" name="date" placeholder="Date">\n\n                <label for="user">User</label>\n                <select name="assign" id="user">\n                  <option value="Heba">Heba</option>\n                  <option value="Vala">Vala</option>\n                  <option value="Kristrun">Kristrun</option>\n                  <option value="Bryndis">Bryndís</option>\n                  <option value="Tinna">Tinna</option>\n                </select>\n\n                <button class="btn btn-modal btn-primary-add ">Add</button>\n              </form>\n            </div>\n          </div>\n        </div>\n   \n      \x3c!-- Edit Modal --\x3e\n        <div class="edit-modal edit-journal-modal modal-wrapper journal-modal-wrapper">\n          <div class="modal">\n            <div class="modal-header">\n              <h3>Edit Journal</h3>\n              <button class="btn edit-journal-close">Close</button>\n            </div>\n            <div class="modal-body">\n              <form class="form" autocomplete="off">\n                <label for="feeling">Feeling</label>\n                <select name="feeling" id="feeling">\n                  <option value="Good">Good</option>\n                  <option value="Medium">Medium</option>\n                  <option value="Bad">Bad</option>\n                </select>\n\n                <label class="visuallyhidden" for="entry">Journal Entry</label>\n                <textarea type="text" name="entry" placeholder="Journal Entry"></textarea>\n\n                <label for="date">Date</label>\n                <input type="date" name="date" placeholder="Date">\n\n                <label for="user">User</label>\n                <select name="user" id="user">\n                  <option value="Heba">Heba</option>\n                  <option value="Vala">Vala</option>\n                  <option value="Kristrun">Kristrun</option>\n                  <option value="Bryndis">Bryndís</option>\n                  <option value="Tinna">Tinna</option>\n                </select>\n\n                <button class="btn btn-modal">Update</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </section>\n    `}}
=======
export default class JournalPage{constructor(){this.template()}template(){document.pageTitle="Journal",document.querySelector("#content").innerHTML+=`\n      <section id="journal" class="page page-journal">\n        <div class='topbar'>\n          <h1>${document.pageTitle}</h1>\n          <a href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a>\n        </div>\n        <div class="main-content">\n          <div class='content-top'>\n            <a href='#' class='btn btn-primary-add'>new</a>\n          </div>\n          <div class="journal__list table-users">\n          </div>\n          <button class="btn btn-add add-journal">Add Entry</button>\n        </div>\n      \n      \x3c!-- Add Modal --\x3e\n        <div class="add-modal add-journal-modal modal-wrapper journal-modal-wrapper">\n          <div class="modal">\n            <div class="modal-header">\n              <h3>Create Journal</h3>\n              <button class="btn add-journal-close">Close</button>\n            </div>\n            <div class="modal-body">\n              <form class="form" autocomplete="off">\n                <fieldset class="radio-btns">\n                  <h4 class="font-light">How are they feeling today?</h4>\n                  <input id="journalAddGood" type="radio" name="feeling" value="Good">\n                  <label for="journalAddGood">Good</label>\n                  <input id="journalAddMedium" type="radio" name="feeling" value="Medium">\n                  <label for="journalAddMedium">Medium</label>\n                  <input id="journalAddBad" type="radio" name="feeling" value="Bad">\n                  <label for="journalAddBad">Bad</label>\n                </fieldset>\n\n                <fieldset class="text-input">\n                  <label class="button-text" for="entry">Journal Entry</label>\n                  <textarea type="text" name="entry"></textarea>\n                </fieldset>\n\n                <fieldset class="date">\n                  <label for="date">Date</label>\n                  <input type="date" name="date">\n                </fieldset>\n\n                <fieldset class="dropdown">\n                  <label for="eventAddAssign">Assign to</label>\n                  <select name="user" id="journalAddAssign">\n                    <option value="">Assignee</option>\n                    <option value="HU">Heba</option>\n                    <option value="AS">Vala</option>\n                    <option value="KU">Kristrun</option>\n                    <option value="BS">Bryndís</option>\n                    <option value="TH">Tinna</option>\n                  </select>\n                </fieldset>\n\n                <button class="btn btn-modal btn-primary-add ">Add</button>\n              </form>\n            </div>\n          </div>\n        </div>\n   \n      \x3c!-- Edit Modal --\x3e\n        <div class="edit-modal edit-journal-modal modal-wrapper journal-modal-wrapper">\n          <div class="modal">\n            <div class="modal-header">\n              <h3>Edit Journal</h3>\n              <button class="btn edit-journal-close">Close</button>\n            </div>\n            <div class="modal-body">\n              <form class="form" autocomplete="off">\n                <fieldset class="radio-btns">\n                  <h4 class="font-light">How are they feeling today?</h4>\n                  <input id="journalEditGood" type="radio" name="feeling" value="Good">\n                  <label for="journalEditGood">Good</label>\n                  <input id="journalEditMedium" type="radio" name="feeling" value="Medium">\n                  <label for="journalEditMedium">Medium</label>\n                  <input id="journalEditBad" type="radio" name="feeling" value="Bad">\n                  <label for="journalEditBad">Bad</label>\n                </fieldset>\n\n                <fieldset class="text-input">\n                  <label class="button-text" for="entry">Journal Entry</label>\n                  <textarea type="text" name="entry"></textarea>\n                </fieldset>\n\n                <fieldset class="date">\n                  <label for="date">Date</label>\n                  <input type="date" name="date">\n                </fieldset>\n\n                <fieldset class="dropdown">\n                  <label for="eventAddAssign">Assign to</label>\n                  <select name="user" id="journalEditAssign">\n                  <option value="">Assignee</option>\n                  <option value="HU">Heba</option>\n                  <option value="AS">Vala</option>\n                  <option value="KU">Kristrun</option>\n                  <option value="BS">Bryndís</option>\n                  <option value="TH">Tinna</option>\n                  </select>\n                </fieldset>\n\n                <button class="btn btn-modal">Update</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </section>\n    `}}
>>>>>>> 71f704a98f6f07b2a9da6747818c570a7df97c73
//# sourceMappingURL=journal.js.map