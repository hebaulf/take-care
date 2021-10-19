export default class JournalPage{constructor(){this.template()}template(){document.querySelector("#content").innerHTML+='\n      <section id="journal" class="page">\n        <header>\n          <h3>Journal</h3>\n        </header>\n        <div class="journal__wrapper table-wrapper">\n          <div class="journal__list table-users">\n          </div>\n          <button class="btn btn-add add-journal">Add Entry</button>\n        </div>\n      \n      \x3c!-- Add Modal --\x3e\n        <div class="add-modal add-journal-modal modal-wrapper journal-modal-wrapper">\n          <div class="modal">\n            <div class="modal-header">\n              <h3>Create Journal</h3>\n              <button class="btn add-journal-close">Close</button>\n            </div>\n            <div class="modal-body">\n              <form class="form" autocomplete="off">\n                <label for="feeling">Feeling</label>\n                <select name="feeling" id="journalEditAssign">\n                  <option value="Good">Good</option>\n                  <option value="Medium">Medium</option>\n                  <option value="Bad">Bad</option>\n                </select>\n\n                <label class="visuallyhidden" for="entry">Journal Entry</label>\n                <textarea type="text" name="entry" placeholder="Journal Entry"></textarea>\n\n                <label for="date">Date</label>\n                <input type="date" name="date" placeholder="Date">\n\n                <label for="user">User</label>\n                <select name="assign" id="user">\n                  <option value="Heba">Heba</option>\n                  <option value="Vala">Vala</option>\n                  <option value="Kristrun">Kristrun</option>\n                  <option value="Bryndis">Bryndís</option>\n                  <option value="Tinna">Tinna</option>\n                </select>\n\n                <button class="btn btn-modal">Add</button>\n              </form>\n            </div>\n          </div>\n        </div>\n   \n      \x3c!-- Edit Modal --\x3e\n        <div class="edit-modal edit-journal-modal modal-wrapper journal-modal-wrapper">\n          <div class="modal">\n            <div class="modal-header">\n              <h3>Edit Journal</h3>\n              <button class="btn edit-journal-close">Close</button>\n            </div>\n            <div class="modal-body">\n              <form class="form" autocomplete="off">\n                <label for="feeling">Feeling</label>\n                <select name="feeling" id="feeling">\n                  <option value="Good">Good</option>\n                  <option value="Medium">Medium</option>\n                  <option value="Bad">Bad</option>\n                </select>\n\n                <label class="visuallyhidden" for="entry">Journal Entry</label>\n                <textarea type="text" name="entry" placeholder="Journal Entry"></textarea>\n\n                <label for="date">Date</label>\n                <input type="date" name="date" placeholder="Date">\n\n                <label for="user">User</label>\n                <select name="user" id="user">\n                  <option value="Heba">Heba</option>\n                  <option value="Vala">Vala</option>\n                  <option value="Kristrun">Kristrun</option>\n                  <option value="Bryndis">Bryndís</option>\n                  <option value="Tinna">Tinna</option>\n                </select>\n\n                <button class="btn btn-modal">Update</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </section>\n    '}}
//# sourceMappingURL=journal.js.map