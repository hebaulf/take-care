export default class TodosPage{constructor(){this.template()}template(){document.querySelector("#content").innerHTML+='\n    <section id="todos" class="page">\n    <header>\n      <h3>Todos</h3>\n    </header>\n    <div class="todo__wrapper table-wrapper">\n      <div class="todo__list table-users">\n      </div>\n      <button class="btn btn-add add-todo">Add Todo</button>\n    </div>\n  \n  \x3c!-- Add Modal --\x3e\n    <div class="add-modal add-todo-modal modal-wrapper todo-modal-wrapper">\n      <div class="modal">\n        <div class="modal-header"><h3>New Todo</h3></div>\n        <div class="modal-body">\n          <form class="form" autocomplete="off">\n            <label for="title">Title</label>\n            <input type="text" name="title" placeholder="Title">\n\n            <label for="list">List</label>\n            <textarea type="text" name="list" placeholder="List of todos"></textarea>\n\n            <label for="assign">Assign to</label>\n            <select name="assign" id="assign">\n              <option value="heba">Heba</option>\n              <option value="vala">Vala</option>\n              <option value="kristrun">Kristrun</option>\n              <option value="Bryndis">Bryndís</option>\n              <option value="Tinna">Tinna</option>\n            </select>\n\n            <label for="priority">Priority</label>\n            <select name="priority" id="priority">\n              <option value="low">Low</option>\n              <option value="medium">Medium</option>\n              <option value="high">High</option>\n            </select>\n            <button class="btn btn-modal">Add</button>\n          </form>\n        </div>\n      </div>\n    </div>\n\n  \x3c!-- Edit Modal --\x3e\n    <div class="edit-modal edit-todo-modal modal-wrapper todo-modal-wrapper">\n      <div class="modal">\n        <div class="modal-header"><h3>New Event</h3></div>\n        <div class="modal-body">\n        <form class="form" autocomplete="off">\n        <label for="title">Title</label>\n        <input type="text" name="title" placeholder="Title">\n\n        <label for="list">List</label>\n        <textarea type="text" name="list" placeholder="List of todos"></textarea>\n\n        <label for="assign">Assign to</label>\n        <select name="assign" id="assign">\n          <option value="heba">Heba</option>\n          <option value="vala">Vala</option>\n          <option value="kristrun">Kristrun</option>\n          <option value="Bryndis">Bryndís</option>\n          <option value="Tinna">Tinna</option>\n        </select>\n\n        <label for="priority">Priority</label>\n        <select name="priority" id="priority">\n          <option value="low">Low</option>\n          <option value="medium">Medium</option>\n          <option value="high">High</option>\n        </select>\n        <button class="btn btn-modal">Update</button>\n      </form>\n        </div>\n      </div>\n    </div>\n  </section>\n    '}}
//# sourceMappingURL=todos.js.map