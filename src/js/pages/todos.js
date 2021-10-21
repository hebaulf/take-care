export default class TodosPage {
  constructor() {
    this.template();
  }

  template() {

     const data = {
      id: 'id',
      label: 'ToDo',
      priority: 'Low',
      date: '12 Nov 2021',
      title: 'Dinner with family',
      list: 'Grandma is having Sunday roast with us.',
      assign: 'AV'
     };
    
     
    document.pageTitle = "ToDo's"
    document.querySelector('#content').innerHTML += /*html*/ `
      <div id="todos" class="page page-todo">
        <header id='head' class='head'>
          <div class='head__title'>
            <h1 id='page-title' class='page-title'>${document.pageTitle}</h1>
            <a role='navigation' href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a>
          </div>
          <div class='page__tabs todo-tabs--low'>
            <button class='btn  btn-add add-todo btn-primary-add'>New</button> 
            <div class='tabs'>
              <button class='tabs__link'>Low</button>
              <button class='tabs__link'>Medium</button>
              <button class='tabs__link'>High</button>
            </div>
          </div>
        </header>
        <main class="main">
          <div class="todo__list card__list">
          <!-- START test card -->
          <div class="card card--todo card--todo-${data.priority}" data-id='${data.id}'>
					<div class='card--${data.priority}__line'></div>
					<div class='card__container card-toggle'>
						<div class='card__header'>
								<p class='card__header--label'>To Do's</p>
								<p class='card__header--date'>${data.priority} Priority</p>
						</div>
						
						<div class='card-content'>
							<div class='card-content__details'>
								<h4 class='card-content__details--title'>${data.title}</h4>
								<div class="card-content__details--description description">
									<p>${data.list}</p>
									<button class="edit-todo btn-circle--edit"></button>
								</div>
							</div>
					
							<div class='card-content__footer'>
								<button class="delete-todo btn-circle--complete"></button>
								<div class='avatar'><p>${data.assign}</p></div>
							</div>	
						</div>
					</div>
				</div>
            <!--END test card -->
             <!-- START test card -->
          <div class="card card--todo card--todo-${data.priority}" data-id='${data.id}'>
					<div class='card--${data.priority}__line'></div>
					<div class='card__container card-toggle'>
						<div class='card__header'>
								<p class='card__header--label'>To Do's</p>
								<p class='card__header--date'>${data.priority} Priority</p>
						</div>
						
						<div class='card-content'>
							<div class='card-content__details'>
								<h4 class='card-content__details--title'>${data.title}</h4>
								<div id='description' class="card-content__details--description">
									<p>${data.list}</p>
									<button class="edit-todo btn-circle--edit"></button>
								</div>
							</div>
					
							<div class='card-content__footer'>
								<button class="delete-todo btn-circle--complete"></button>
								<div class='avatar'><p>${data.assign}</p></div>
							</div>	
						</div>
					</div>
				</div>
            <!--END test card -->
             <!-- START test card -->
          <div class="card card--todo card--todo-${data.priority}" data-id='${data.id}'>
					<div class='card--${data.priority}__line'></div>
					<div class='card__container card-toggle'>
						<div class='card__header'>
								<p class='card__header--label'>To Do's</p>
								<p class='card__header--date'>${data.priority} Priority</p>
						</div>
						
						<div class='card-content'>
							<div class='card-content__details'>
								<h4 class='card-content__details--title'>${data.title}</h4>
								<div id='description' class="card-content__details--description">
									<p>${data.list}</p>
									<button class="edit-todo btn-circle--edit"></button>
								</div>
							</div>
					
							<div class='card-content__footer'>
								<button class="delete-todo btn-circle--complete"></button>
								<div class='avatar'><p>${data.assign}</p></div>
							</div>	
						</div>
					</div>
				</div>
            <!--END test card -->
        
             <!-- START test card -->
          <div class="card card--todo card--todo-${data.priority}" data-id='${data.id}'>
					<div class='card--${data.priority}__line'></div>
					<div class='card__container card-toggle'>
						<div class='card__header'>
								<p class='card__header--label'>To Do's</p>
								<p class='card__header--date'>${data.priority} Priority</p>
						</div>
						
						<div class='card-content'>
							<div class='card-content__details'>
								<h4 class='card-content__details--title'>${data.title}</h4>
								<div id='description' class="card-content__details--description">
									<p>${data.list}</p>
									<button class="edit-todo btn-circle--edit"></button>
								</div>
							</div>
					
							<div class='card-content__footer'>
								<button class="delete-todo btn-circle--complete"></button>
								<div class='avatar'><p>${data.assign}</p></div>
							</div>	
						</div>
					</div>
				</div>
            <!--END test card -->
               <!-- START test card -->
          <div class="card card--todo card--todo-${data.priority}" data-id='${data.id}'>
					<div class='card--${data.priority}__line'></div>
					<div class='card__container card-toggle'>
						<div class='card__header'>
								<p class='card__header--label'>To Do's</p>
								<p class='card__header--date'>${data.priority} Priority</p>
						</div>
						
						<div class='card-content'>
							<div class='card-content__details'>
								<h4 class='card-content__details--title'>${data.title}</h4>
								<div id='description' class="card-content__details--description">
									<p>${data.list}</p>
									<button class="edit-todo btn-circle--edit"></button>
								</div>
							</div>
					
							<div class='card-content__footer'>
								<button class="delete-todo btn-circle--complete"></button>
								<div class='avatar'><p>${data.assign}</p></div>
							</div>	
						</div>
					</div>
				</div>
            <!--END test card -->
               <!-- START test card -->
          <div class="card card--todo card--todo-${data.priority}" data-id='${data.id}'>
					<div class='card--${data.priority}__line'></div>
					<div class='card__container card-toggle'>
						<div class='card__header'>
								<p class='card__header--label'>To Do's</p>
								<p class='card__header--date'>${data.priority} Priority</p>
						</div>
						
						<div class='card-content'>
							<div class='card-content__details'>
								<h4 class='card-content__details--title'>${data.title}</h4>
								<div id='description' class="card-content__details--description">
									<p>${data.list}</p>
									<button class="edit-todo btn-circle--edit"></button>
								</div>
							</div>
					
							<div class='card-content__footer'>
								<button class="delete-todo btn-circle--complete"></button>
								<div class='avatar'><p>${data.assign}</p></div>
							</div>	
						</div>
					</div>
				</div>
            <!--END test card -->
      
          </div>
        </main>
        
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
                  <input id="todoAddLow" type="radio" name="priority" value="Low" checked>
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
      </div>
    `;
  }
}