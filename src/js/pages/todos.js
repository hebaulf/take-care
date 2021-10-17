export default class TodosPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#content').innerHTML += /*html*/ `
    <section id="todos" class="page">
    <header>
      <h3>Todos</h3>
    </header>
    <div class="todo__wrapper table-wrapper">
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

            <label for="assign">Assign to</label>
            <select name="assign" id="assign">
              <option value="heba">Heba</option>
              <option value="vala">Vala</option>
              <option value="kristrun">Kristrun</option>
              <option value="Bryndis">Bryndís</option>
              <option value="Tinna">Tinna</option>
            </select>

            <label for="priority">Priority</label>
            <select name="priority" id="priority">
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
        <div class="modal-header"><h3>New Event</h3></div>
        <div class="modal-body">
        <form class="form" autocomplete="off">
        <label for="title">Title</label>
        <input type="text" name="title" placeholder="Title">

        <label for="list">List</label>
        <textarea type="text" name="list" placeholder="List of todos"></textarea>

        <label for="assign">Assign to</label>
        <select name="assign" id="assign">
          <option value="heba">Heba</option>
          <option value="vala">Vala</option>
          <option value="kristrun">Kristrun</option>
          <option value="Bryndis">Bryndís</option>
          <option value="Tinna">Tinna</option>
        </select>

        <label for="priority">Priority</label>
        <select name="priority" id="priority">
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