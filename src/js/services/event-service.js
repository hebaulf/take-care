class EventService {
	constructor() {
		this.defaultPage = "events";
	}
	
	init() {
		this.renderEvents();
	}

	renderEvents = doc => {
		// Get modals
		const modalWrapper = document.querySelector('.event-modal-wrapper');
		// Add modal
		const addModal = document.querySelector('.add-event-modal');
		const addModalForm = document.querySelector('.add-event-modal .form');
		// Edit modal
		const editModal = document.querySelector('.edit-event-modal');
		const editModalForm = document.querySelector('.edit-event-modal .form');
		// Get event list
		const eventList = document.querySelector('.event__list');
		const eventsCollection = db.collection('events');
		// Add button on svent list
		const btnAdd = document.querySelector('.btn-add.add-event');

		let id;

		const days = [
		'Sun',
		'Mon',
		'Tue',
		'Wed',
		'Thu',
		'Fri',
		'Sat'
		];

		const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'Mai',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
		];

		// Create element and render users
		const renderEvent = doc => {
			const data = doc.data();
			const dataDate = new Date(data.date);

			const day = days[dataDate.getDay()];
			const monthDate = dataDate.getDate();
			const month = months[dataDate.getMonth()];
			const year = dataDate.getFullYear();
			const formattedDate = `${day} ${monthDate}.${month} ${year}`;

			const eventItem = /*html*/`
				<div class="event__item" data-id='${doc.id}'>
					<div>${data.title}</div>
					<div>${data.description}</div>
					<div>${data.location}</div>
					<div>${formattedDate}</div>
					<div>${data.assign}</div>
					<div>${data.label}</div>
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
				editModal.classList.add('modal-show');

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
			addModal.classList.add('modal-show');
			addModalForm.title.value = '';
			addModalForm.description.value = '';
			addModalForm.location.value = '';
			addModalForm.date.value = '';
			addModalForm.assign.value = '';
			addModalForm.label.value = '';
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
		// eventsCollection.get().then(querySnapshot => {
		//   querySnapshot.forEach(doc => {
		//     renderEvent(doc);
		//   })
		// });

		// Real time listener
		eventsCollection.onSnapshot(snapshot => {
			snapshot.docChanges().forEach(change => {
				if(change.type === 'added') {
					renderEvent(change.doc);
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
			modalWrapper.classList.remove('modal-show');
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
			editModal.classList.remove('modal-show');
		});
  }
}

const eventService = new EventService();
export default eventService;