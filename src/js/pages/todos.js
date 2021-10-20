export default class TodosPage {
  constructor() {
    this.template();
  }

  template() {
    document.pageTitle = "ToDo's"
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="todos" class="page page-todo">
        <div class='topbar'>
          <h1>${document.pageTitle}</h1>
          <a href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a>
        </div>
        <div class="main-content">
          <div class='content-top'>
            <a href='#' class='btn btn-primary-add'>new</a>
          </div>

          <div class="todo__list table-users">
          </div>
          <button class="btn btn-add add-todo">Add Todo</button>
        </div>
        

      <!-- Add Modal -->
        <div class="add-modal add-todo-modal modal-wrapper todo-modal-wrapper">
          <div class="modal">
            <div class="modal-header">
              <h3>Create Todo</h3>
              <button class="btn add-todo-close">Close</button>
            </div>
            <div class="modal-body">
              <form class="form" autocomplete="off">
                <fieldset class="radio-btns">
                  <legend><h4 class="font-light">Priority</h4></legend>
                  <input id="todoAddLow" type="radio" name="priority" value="Low">
                  <label class="btn btn-first btn-low" for="todoAddLow">Low</label>
                  <input id="todoAddMedium" type="radio" name="priority" value="Medium">
                  <label class="btn btn-medium" for="todoAddMedium">Medium</label>
                  <input id="todoAddHigh" type="radio" name="priority" value="High">
                  <label class="btn btn-last btn-medium" for="todoAddHigh">High</label>
                </fieldset>

                <fieldset class="text-input">
                  <label class="button-text" for="title">Title</label>
                  <input type="text" name="title">
                </fieldset>

                <fieldset class="text-input">
                  <label class="button-text" for="list">Todo List</label>
                  <textarea type="text" name="list"></textarea>
                </fieldset>

                <fieldset class="dropdown">
                  <label class="button-text" for="todoAddAssign">Assign to</label>
                  <select name="assign" id="todoAddAssign">
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
        <div class="edit-modal edit-todo-modal modal-wrapper todo-modal-wrapper">
          <div class="modal">
            <div class="modal-header">
              <h3>Edit Todo</h3>
              <button class="btn edit-todo-close">Close</button>
            </div>
            <div class="modal-body">
              <form class="form" autocomplete="off">
                <fieldset class="radio-btns">
                  <legend><h4 class="font-light">Priority</h4></legend>
                  <input id="todoEditLow" type="radio" name="priority" value="Low">
                  <label class="btn btn-first btn-low" for="todoEditLow">Low</label>
                  <input id="todoEditMedium" type="radio" name="priority" value="Medium">
                  <label class="btn btn-medium" for="todoEditMedium">Medium</label>
                  <input id="todoEditHigh" type="radio" name="priority" value="High">
                  <label class="btn btn-last btn-medium" for="todoEditHigh">High</label>
                </fieldset>

                <fieldset class="text-input">
                  <label class="button-text" for="title">Title</label>
                  <input type="text" name="title">
                </fieldset>

                <fieldset class="text-input">
                  <label class="button-text" for="list">Todo List</label>
                  <textarea type="text" name="list"></textarea>
                </fieldset>

                <fieldset class="dropdown">
                  <label class="button-text" for="todoEditAssign">Assign to</label>
                  <select name="assign" id="todoEditAssign">
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