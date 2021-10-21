class EventService {
	constructor() {
		this.defaultPage = "events";
	}
	
	init() {
		this.renderEvents();
	}

	renderEvents = doc => {
		const events = document.querySelector('#events');
		// Get modals
		const modalWrapper = events.querySelector('.event-modal-wrapper');
		const modalInner = modalWrapper.querySelector('.modal');
		// Add modal
		const addModal = events.querySelector('.add-event-modal');
		const addModalInner = addModal.querySelector('.modal');
		const addModalForm = events.querySelector('.add-event-modal .form');
		const addEventClose = events.querySelector('.add-event-close');
		// Edit modal
		const editModal = events.querySelector('.edit-event-modal');
		const editModalInner = editModal.querySelector('.modal');
		const editModalForm = events.querySelector('.edit-event-modal .form');
		const editEventClose = events.querySelector('.edit-event-close');
		// Get event list
		const eventList = events.querySelector('.event__list');
		const eventsCollection = db.collection('events');
		// Add/close button on event list
		const btnAdd = events.querySelector('.add-event');
		// const btnClose = document.querySelector('.btn-close-modal');

		let id;

		const openAddModal = () => {
			addModal.style.display = 'flex';
			addModalInner.style.cssText = 'animation: slideUp .5s ease; animation-fill-mode: forwards;';
		}
		const closeAddModal = () => {
			addModalInner.style.cssText = 'animation: slideDown .5s ease; animation-fill-mode: forwards;';
			setTimeout(() => { addModal.style.display = 'none'; }, 500);
		}
		const openEditModal = () => {
			editModal.style.display = 'flex';
			editModalInner.style.cssText = 'animation: slideUp .5s ease; animation-fill-mode: forwards;';
		}
		const closeEditModal = () => {
			editModalInner.style.cssText = 'animation: slideDown .5s ease; animation-fill-mode: forwards;';
			setTimeout(() => { editModal.style.display = 'none'; }, 500);
		}

		const days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
        const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

		// Create element and render users
		const renderEvent = doc => {
			const data = doc.data();
			//const labelClass = `${(data.label) === 'Appointment' ? 'appointment' : 'meetup'}`;
			//<div class='card event__item label-${labelClass}' data-id='${doc.id}'></div>
			const dataDate = new Date(data.date);
			const day = days[dataDate.getDay()];
			const monthDate = dataDate.getDate();
			const month = months[dataDate.getMonth()];
			const year = dataDate.getFullYear();
			const formattedDate = `${day} ${monthDate}.${month} ${year}`;


			const eventItem = /*html*/`
				<div class="card card-event card-${data.label}" data-id='${doc.id}'>
					<h4 class='card-title'>${data.title}</h4>
					<p class='card-description'>${data.description}</p>
					<p class='card-location'>${data.location}</p>
					<p class='card-date'> ${formattedDate}</p>
					<div>${data.assign}</div>
					<!-- <div>${data.label}</div> -->
					<div>
						<button class="btn btn-edit edit-event">Edit</button>
						<button class="btn btn-delete delete-event">Delete</button>
					</div>
				</div>
			`;
  
  			eventList.insertAdjacentHTML('beforeend', eventItem);

			// Click edit user
			const btnEdit = document.querySelector(`[data-id='${doc.id}'] .edit-event`);
			btnEdit.addEventListener('click', () => {
				openEditModal();

				id = doc.id;
				editModalForm.title.value = data.title;
				editModalForm.description.value = data.description;
				editModalForm.location.value = data.location;
				editModalForm.date.value = data.date;
				editModalForm.assign.value = data.assign;
				editModalForm.label.value = data.label;
			});

			// Click delete user
			const btnDelete = document.querySelector(`[data-id='${doc.id}'] .delete-event`);
			btnDelete.addEventListener('click', () => {
				eventsCollection.doc(`${doc.id}`).delete().then(() => {
					console.log('Document succesfully deleted!');
				}).catch(err => {
					console.log('Error removing document', err);
				});
			});
		}
		
		// Click add user button
		btnAdd.addEventListener('click', () => {
			openAddModal();
			addModalForm.title.value = '';
			addModalForm.description.value = '';
			addModalForm.location.value = '';
			addModalForm.date.value = '';
			addModalForm.assign.value = '';
			addModalForm.label.value = '';
		});

		// Click close button
		addEventClose.addEventListener('click', (e) => {
			e.preventDefault();
			closeAddModal();
		});
		editEventClose.addEventListener('click', (e) => {
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
		// eventsCollection.get().then(querySnapshot => {
		//   querySnapshot.forEach(doc => {
		//     renderEvent(doc);
		//   })
		// });

		// Real time listener
		eventsCollection.onSnapshot(snapshot => {
			snapshot.docChanges().forEach(change => {
				if(change.type === 'added') {
					setTimeout(() => {
						renderEvent(change.doc);
					}, 500);
				}
				if(change.type === 'removed') {
					let eventItem = document.querySelector(`[data-id='${change.doc.id}']`); // .event__item with this data-id
					let tbody = eventItem.parentElement; // .event__list
					tbody.removeChild(eventItem);// Remove specific child of .event__list
				}
				if(change.type === 'modified') {
					let eventItem = document.querySelector(`[data-id='${change.doc.id}']`);
					let tbody = eventItem.parentElement;
					tbody.removeChild(eventItem);
					renderEvent(change.doc);
				}
			})
		})

		// Click submit in add modal
		addModalForm.addEventListener('submit', e => {
			e.preventDefault();
			eventsCollection.add({
				title: addModalForm.title.value,
				description: addModalForm.description.value,
				location: addModalForm.location.value,
				date: addModalForm.date.value,
				assign: addModalForm.assign.value,
				label: addModalForm.label.value,
			});
			closeAddModal();
		});

		// Click submit in edit modal
		editModalForm.addEventListener('submit', e => {
			e.preventDefault();
			eventsCollection.doc(id).update({
				title: editModalForm.title.value,
				description: editModalForm.description.value,
				location: editModalForm.location.value,
				date: editModalForm.date.value,
				assign: editModalForm.assign.value,
				label: editModalForm.label.value,
			});
			closeEditModal();
		});
  	}
}

const eventService = new EventService();
export default eventService;