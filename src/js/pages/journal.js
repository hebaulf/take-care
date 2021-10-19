export default class JournalPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="journal" class="page">
        <header>
          <h3>Journal</h3>
        </header>
        <div class="journal__wrapper table-wrapper">
          <div class="journal__list table-users">
          </div>
          <button class="btn btn-primary-add add-journal">Add Entry</button>
        </div>
      
      <!-- Add Modal -->
        <div class="add-modal add-journal-modal modal-wrapper journal-modal-wrapper">
          <div class="modal">
            <div class="modal-header"><h3>New Journal entry</h3></div>
            <div class="modal-body">
              <form class="form" autocomplete="off">
                <label for="feeling">Feeling</label>
                <select name="feeling" id="journalEditAssign">
                  <option value="Good">Good</option>
                  <option value="Medium">Medium</option>
                  <option value="Bad">Bad</option>
                </select>

                <label class="visuallyhidden" for="entry">Journal Entry</label>
                <textarea type="text" name="entry" placeholder="Journal Entry"></textarea>

                <label for="date">Date</label>
                <input type="date" name="date" placeholder="Date">

                <label for="user">User</label>
                <select name="assign" id="user">
                  <option value="Heba">Heba</option>
                  <option value="Vala">Vala</option>
                  <option value="Kristrun">Kristrun</option>
                  <option value="Bryndis">Bryndís</option>
                  <option value="Tinna">Tinna</option>
                </select>

                <button class="btn btn-modal">Add</button>
              </form>
            </div>
          </div>
        </div>
   
      <!-- Edit Modal -->
        <div class="edit-modal edit-journal-modal modal-wrapper journal-modal-wrapper">
          <div class="modal">
            <div class="modal-header"><h3>Update Entry</h3></div>
            <div class="modal-body">
              <form class="form" autocomplete="off">
                <label for="feeling">Feeling</label>
                <select name="feeling" id="feeling">
                  <option value="Good">Good</option>
                  <option value="Medium">Medium</option>
                  <option value="Bad">Bad</option>
                </select>

                <label class="visuallyhidden" for="entry">Journal Entry</label>
                <textarea type="text" name="entry" placeholder="Journal Entry"></textarea>

                <label for="date">Date</label>
                <input type="date" name="date" placeholder="Date">

                <label for="user">User</label>
                <select name="user" id="user">
                  <option value="Heba">Heba</option>
                  <option value="Vala">Vala</option>
                  <option value="Kristrun">Kristrun</option>
                  <option value="Bryndis">Bryndís</option>
                  <option value="Tinna">Tinna</option>
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