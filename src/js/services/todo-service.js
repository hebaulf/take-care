class TodoService {
	constructor() {
		this.defaultPage = "todos";
	}
	
	init() {
		this.renderTodo();
	}

	renderTodo = doc => {
		// Get modals
		const modalWrapper = document.querySelector('.todo-modal-wrapper');
		// Add modal
		const addModal = document.querySelector('.add-todo-modal');
		const addModalForm = document.querySelector('.add-todo-modal .form');
		// Edit modal
		const editModal = document.querySelector('.edit-todo-modal');
		const editModalForm = document.querySelector('.edit-todo-modal .form');
		// Get todo list
		const todoList = document.querySelector('.todo__list');
		const todosCollection = db.collection('todo');
		// Add button on svent list
		const btnAdd = document.querySelector('.add-todo');

		let id;

		// Create element and render users
		const renderTodo = doc => {
			const data = doc.data();

			const todoItem = /*html*/`
				<div class="card card-todo card-todo-${data.priority}" data-id='${doc.id}'>
					<h4 class='card-title'>${data.title}</h4>
					<p class='card-description'>${data.list}</p>
					<div>${data.assign}</div>
					<!-- <div>${data.priority}</div> -->
					<div hidden>
						<button class="btn btn-edit edit-todo">Edit</button>
						<button class="btn btn-delete delete-todo">Delete</button>
					</div>
				</div>
			`;
  
  			todoList.insertAdjacentHTML('beforeend', todoItem);

			// Click edit user
			const btnEdit = document.querySelector(`[data-id='${doc.id}'] .edit-todo`);
			btnEdit.addEventListener('click', () => {
				editModal.classList.add('modal-show');

				id = doc.id;
				editModalForm.title.value = data.title;
				editModalForm.list.value = data.list;
				editModalForm.assign.value = data.assign;
				editModalForm.priority.value = data.priority;
			});

			// Click delete user
			const btnDelete = document.querySelector(`[data-id='${doc.id}'] .delete-todo`);
			btnDelete.addEventListener('click', () => {
				todosCollection.doc(`${doc.id}`).delete().then(() => {
					console.log('Document succesfully deleted!');
				}).catch(err => {
					console.log('Error removing document', err);
				});
			});
		}
		
		// Click add user button
		btnAdd.addEventListener('click', () => {
			addModal.classList.add('modal-show');
			addModalForm.title.value = '';
			addModalForm.list.value = '';
			addModalForm.assign.value = '';
			addModalForm.priority.value = '';
		});

		// User click anyware outside the modal
		window.addEventListener('click', e => {
			if(e.target === addModal) {
				addModal.classList.remove('modal-show');
			}
			if(e.target === editModal) {
				editModal.classList.remove('modal-show');
			}
		});

		// Get all users
		// todosCollection.get().then(querySnapshot => {
		//   querySnapshot.forEach(doc => {
		//     renderTodo(doc);
		//   })
		// });

		// Real time listener
		todosCollection.onSnapshot(snapshot => {
			snapshot.docChanges().forEach(change => {
				if(change.type === 'added') {
					renderTodo(change.doc);
				}
				if(change.type === 'removed') {
					let todoItem = document.querySelector(`[data-id='${change.doc.id}']`); // .todo__item with this data-id
					let todoList = todoItem.parentElement; // .todo__list
					todoList.removeChild(todoItem);// Remove specific child of .todo__list
				}
				if(change.type === 'modified') {
					let todoItem = document.querySelector(`[data-id='${change.doc.id}']`);
					let todoList = todoItem.parentElement;
					todoList.removeChild(todoItem);
					renderTodo(change.doc);
				}
			})
		})

		// Click submit in add modal
		addModalForm.addEventListener('submit', e => {
			e.preventDefault();
			todosCollection.add({
				title: addModalForm.title.value,
				list: addModalForm.list.value,
				assign: addModalForm.assign.value,
				priority: addModalForm.priority.value,
			});
			modalWrapper.classList.remove('modal-show');
		});

		// Click submit in edit modal
		editModalForm.addEventListener('submit', e => {
			e.preventDefault();
			todosCollection.doc(id).update({
				title: editModalForm.title.value,
				list: editModalForm.list.value,
				assign: editModalForm.assign.value,
				priority: editModalForm.priority.value,
			});
			editModal.classList.remove('modal-show');
		});
  	}
}

const todoService = new TodoService();
export default todoService;