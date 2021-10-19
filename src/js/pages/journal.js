export default class JournalPage {
  constructor() {
    this.template();
  }


  template() {
    document.pageTitle = 'Journal'
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="journal" class="page page-journal">
        <div class='topbar'>
          <h1>${document.pageTitle}</h1>
          <a href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a>
        </div>
        <div class="main-content">
          <div class='content-top'>
            <a href='#' class='btn btn-primary-add'>new</a>
          </div>
          <div class="journal__list table-users">
          </div>
          <button class="btn btn-add add-journal">Add Entry</button>
        </div>
      
      <!-- Add Modal -->
        <div class="add-modal add-journal-modal modal-wrapper journal-modal-wrapper">
          <div class="modal">
            <div class="modal-header">
              <h3>Create Journal</h3>
              <button class="btn add-journal-close">Close</button>
            </div>
            <div class="modal-body">
              <form class="form" autocomplete="off">
                <fieldset class="radio-btns">
                  <h4 class="font-light">How are they feeling today?</h4>
                  <input id="Good" type="radio" name="feeling" value="Good">
                  <label for="Good">Good</label>
                  <input id="Medium" type="radio" name="feeling" value="Medium">
                  <label for="Medium">Medium</label>
                  <input id="Bad" type="radio" name="feeling" value="Bad">
                  <label for="Bad">Bad</label>
                </fieldset>

                <fieldset class="text-input">
                  <label class="button-text" for="entry">Journal Entry</label>
                  <textarea type="text" name="entry"></textarea>
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

                <button class="btn btn-modal btn-primary-add ">Add</button>
              </form>
            </div>
          </div>
        </div>
   
      <!-- Edit Modal -->
        <div class="edit-modal edit-journal-modal modal-wrapper journal-modal-wrapper">
          <div class="modal">
            <div class="modal-header">
              <h3>Edit Journal</h3>
              <button class="btn edit-journal-close">Close</button>
            </div>
            <div class="modal-body">
              <form class="form" autocomplete="off">
                <fieldset class="radio-btns">
                  <h4 class="font-light">How are they feeling today?</h4>
                  <input id="Good" type="radio" name="feeling" value="Good">
                  <label for="Good">Good</label>
                  <input id="Medium" type="radio" name="feeling" value="Medium">
                  <label for="Medium">Medium</label>
                  <input id="Bad" type="radio" name="feeling" value="Bad">
                  <label for="Bad">Bad</label>
                </fieldset>

                <fieldset class="text-input">
                  <label class="button-text" for="entry">Journal Entry</label>
                  <textarea type="text" name="entry"></textarea>
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

                <button class="btn btn-modal">Update</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}