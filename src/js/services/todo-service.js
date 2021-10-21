class TodoService {
	constructor() {
		this.defaultPage = "todos";
	}
	
	init() {
		this.renderTodo();
	}

	renderTodo = doc => {
		const todos = document.querySelector('#todos');
		// Get modals
		const modalWrapper = todos.querySelector('.todo-modal-wrapper');
		const modalInner = modalWrapper.querySelector('.modal');
		// Add modal
		const addModal = todos.querySelector('.add-todo-modal');
		const addModalInner = addModal.querySelector('.modal');
		const addModalForm = addModal.querySelector('.form');
		const addTodoClose = todos.querySelector('.add-todo-close');
		// Edit modal
		const editModal = todos.querySelector('.edit-todo-modal');
		const editModalInner = editModal.querySelector('.modal');
		const editModalForm = editModal.querySelector('.form');
		const editTodoClose = todos.querySelector('.edit-todo-close');
		// Get todo list
		const todoList = todos.querySelector('.todo__list');
		const todosCollection = db.collection('todo');
		// Add button on svent list
		const btnAdd = todos.querySelector('.add-todo');

		let id;

		const openAddModal = () => {
			addModal.style.display = 'flex';
			addModalInner.style.cssText = 'animation: slideUp .5s ease; animation-fill-mode: forwards;';
		}

		const closeAddModal = () => {
			addModalInner.style.cssText = 'animation: slideDown .5s ease; animation-fill-mode: forwards;';
			setTimeout(() => {
				addModal.style.display = 'none';
			}, 500);
		}
		const openEditModal = () => {
			editModal.style.display = 'flex';
			editModalInner.style.cssText = 'animation: slideUp .5s ease; animation-fill-mode: forwards;';
		}

		const closeEditModal = () => {
			editModalInner.style.cssText = 'animation: slideDown .5s ease; animation-fill-mode: forwards;';
			setTimeout(() => {
				editModal.style.display = 'none';
			}, 500);
		}
		const closeModal = () => {
			modalInner.style.cssText = 'animation: slideDown .5s ease; animation-fill-mode: forwards;';
			setTimeout(() => {
				modalWrapper.style.display = 'none';
			}, 500);
		}

		// Create element and render users
		const renderTodo = doc => {
			const data = doc.data();
			//const priorityClass = `${(data.priority) === 'Low' ? 'low' : ''}${(data.priority) === 'Medium' ? 'med' : ''}${(data.priority) === 'High' ? 'high' : ''}`;
			//<div class="card todo__item priority-${priorityClass}" data-id="${doc.id}">

			// Add colored background to avatar from initials
			const avatarColors = ['#C6A8F0', '#D0D6FB', '#F4CFA4', '#FBEEDF', '#909EF5', '#F1E9FB'];
			
			const numberFromInitials = (text) => {
				const charCodes = text
					.split('')
					.map(char => char.charCodeAt(0))
					.join('')
				return parseInt(charCodes, 17);
			};
			const avatars = document.querySelectorAll('.avatar');
			avatars.forEach(avatar => {
				const text = avatar.innerText;
				avatar.style.backgroundColor = avatarColors[numberFromInitials(text) % avatarColors.length];
			});



			const todoItem = /*html*/`
				<div class="card card--todo card--todo-${data.priority}" data-id='${doc.id}'>
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

			`;
  
  			todoList.insertAdjacentHTML('beforeend', todoItem);

			// Click edit user
			const btnEdit = document.querySelector(`[data-id='${doc.id}'] .edit-todo`);
			btnEdit.addEventListener('click', () => {
				openEditModal();

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

		
		// Click add todo button
		btnAdd.addEventListener('click', () => {
			openAddModal();
			addModalForm.title.value = '';
			addModalForm.list.value = '';
			addModalForm.assign.value = '';
			addModalForm.priority.value = '';
		});

		// Click close button
		addTodoClose.addEventListener('click', (e) => {
			e.preventDefault();
			closeAddModal();
		});
		editTodoClose.addEventListener('click', (e) => {
			e.preventDefault();
			closeEditModal();
		});

		// User click anyware outside the modal
		window.addEventListener('click', e => {
			if(e.target === addModal) {
				closeAddModal();
			}
			if(e.target === editModal) {
				closeEditModal();
			}
		});

		// Get all users
		// todosCollection.get().then(querySnapshot => {
		//   querySnapshot.forEach(doc => {
		//     renderTodo(doc);
		//   })
		// });


		let tooSoon = false; //the first time it is not too soon
		// Real time listener
		todosCollection.onSnapshot(snapshot => {
			if(tooSoon) return;
            tooSoon = true;
            setTimeout(() => { tooSoon = false });
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
			closeAddModal();
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
			closeEditModal();
		});
  	}
}

const todoService = new TodoService();
export default todoService;