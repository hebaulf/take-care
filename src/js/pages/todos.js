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
            <div class="modal-header"><h3>New Todo</h3></div>
            <div class="modal-body">
              <form class="form" autocomplete="off">
                <label for="title">Title</label>
                <input type="text" name="title" placeholder="Title">

                <label for="list">List</label>
                <textarea type="text" name="list" placeholder="List of todos"></textarea>

                <label for="todoAddAssign">Assign to</label>
                <select name="assign" id="todoAddAssign">
                  <option value="Heba">Heba</option>
                  <option value="Vala">Vala</option>
                  <option value="Kristrun">Kristrun</option>
                  <option value="Bryndis">Bryndís</option>
                  <option value="Tinna">Tinna</option>
                </select>

                <label for="todoAddPriority">Priority</label>
                <select name="priority" id="todoAddPriority">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <button class="btn btn-modal">Add</button>
              </form>
            </div>
          </div>
        </div>

      <!-- Edit Modal -->
        <div class="edit-modal edit-todo-modal modal-wrapper todo-modal-wrapper">
          <div class="modal">
            <div class="modal-header"><h3>New Todo</h3></div>
            <div class="modal-body">
            <form class="form" autocomplete="off">
            <label for="title">Title</label>
            <input type="text" name="title" placeholder="Title">

            <label for="list">Todo List</label>
            <textarea type="text" name="list" placeholder="List of todos"></textarea>

            <label for="todoEditAssign">Assign to</label>
            <select name="assign" id="todoEditAssign">
              <option value="heba">Heba</option>
              <option value="vala">Vala</option>
              <option value="kristrun">Kristrun</option>
              <option value="Bryndis">Bryndís</option>
              <option value="Tinna">Tinna</option>
            </select>

            <label for="todoEditPriority">Priority</label>
            <select name="priority" id="todoEditPriority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
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