export default class TodosPage {
  constructor() {
    this.template();
  }

  template() {
    document.pageTitle = "ToDo's";
    document.querySelector('#content').innerHTML += /*html*/ `
      <section id="todos" class="page page-todo">
        <div class='page__head'>
          <div class='heading'>
            <h1>${document.pageTitle}</h1>
            <a href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a>
          </div>
        </div>
        <div class="page__contents page__contents--todo">
          <button class='btn btn-add add-todo btn-primary-add btn-home-add'>New</button>
          <div class="page__tabs">
            <div class='tabs'>
              <button class='tabs__link'>low</button>
              <button class='tabs__link'>medium</button>
              <button class='tabs__link'>high</button>
            </div>
          </div>
          <div class="todo__list cards">
            
          </div>
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
                <label for="title">Title</label>
                <input type="text" name="title" placeholder="Title">

                <label for="list">List</label>
                <textarea type="text" name="list" placeholder="List of todos"></textarea>

                <label for="todoAddAssign">Assign to</label>
                <select name="assign" id="todoAddAssign">
                  <option value="">Choose assignee</option>
                  <option value="Heba">Heba</option>
                  <option value="Vala">Vala</option>
                  <option value="Kristrun">Kristrun</option>
                  <option value="Bryndis">Bryndís</option>
                  <option value="Tinna">Tinna</option>
                </select>

                <label for="todoAddPriority">Priority</label>
                <select name="priority" id="todoAddPriority">
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
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
            <label for="title">Title</label>
            <input type="text" name="title" placeholder="Title">

            <label for="list">Todo List</label>
            <textarea type="text" name="list" placeholder="List of todos"></textarea>

            <label for="todoEditAssign">Assign to</label>
            <select name="assign" id="todoEditAssign">
              <option value="Heba">Heba</option>
              <option value="Vala">Vala</option>
              <option value="Kristrun">Kristrun</option>
              <option value="Bryndis">Bryndís</option>
              <option value="Tinna">Tinna</option>
            </select>

            <label for="todoEditPriority">Priority</label>
            <select name="priority" id="todoEditPriority">
              <option value="">Choose priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
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