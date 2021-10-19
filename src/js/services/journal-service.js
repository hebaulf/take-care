class JournalService {
	constructor() {
		this.defaultPage = "journal";
	}
	
	init() {
		this.renderJournal();
	}

	renderJournal = doc => {
		// Get modals
		const modalWrapper = document.querySelector('.journal-modal-wrapper');
		// Add modal
		const addModal = document.querySelector('.add-journal-modal');
		const addModalForm = document.querySelector('.add-journal-modal .form');
		// Edit modal
		const editModal = document.querySelector('.edit-journal-modal');
		const editModalForm = document.querySelector('.edit-journal-modal .form');
		// Get journal list
		const journalList = document.querySelector('.journal__list');
		const journalCollection = db.collection('journal');
		// Add button on svent list
		const btnAdd = document.querySelector('.add-journal');

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
		const renderJournalEntry = doc => {
			const data = doc.data();
			const dataDate = new Date(data.date);

			const day = days[dataDate.getDay()];
			const monthDate = dataDate.getDate();
			const month = months[dataDate.getMonth()];
			const year = dataDate.getFullYear();
			const formattedDate = `${day} ${monthDate}.${month} ${year}`;

			const journalItem = /*html*/`
				<div class="journal__item" data-id='${doc.id}'>
					<div>${data.feeling}</div>
					<p class='card-description'>${data.entry}</p>
					<p class='card-date'>${formattedDate}</p>
					<div>${data.user}</div>
					<div>
							<button class="btn btn-edit edit-journal">Edit</button>
							<button class="btn btn-delete delete-journal">Delete</button>
					</div>
				</div>
			`;

			
  
      journalList.insertAdjacentHTML('beforeend', journalItem);

			// Click edit user
			const btnEdit = document.querySelector(`[data-id='${doc.id}'] .edit-journal`);
			btnEdit.addEventListener('click', () => {
				editModal.classList.add('modal-show');

				id = doc.id;
				editModalForm.feeling.value = data.feeling;
				editModalForm.entry.value = data.entry;
				editModalForm.date.value = data.date;
				editModalForm.user.value = data.user;
			});

			// Click delete user
			const btnDelete = document.querySelector(`[data-id='${doc.id}'] .delete-journal`);
			btnDelete.addEventListener('click', () => {
				journalCollection.doc(`${doc.id}`).delete().then(() => {
					console.log('Document succesfully deleted!');
				}).catch(err => {
					console.log('Error removing document', err);
				});
			});
		}
		
		// Click add user button
		btnAdd.addEventListener('click', () => {
			addModal.classList.add('modal-show');
			addModalForm.feeling.value = '';
			addModalForm.entry.value = '';
			addModalForm.date.value = '';
			addModalForm.user.value = '';
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
		// journalCollection.get().then(querySnapshot => {
		//   querySnapshot.forEach(doc => {
		//     renderJournal(doc);
		//   })
		// });

		// Real time listener
		journalCollection.onSnapshot(snapshot => {
			snapshot.docChanges().forEach(change => {
				if(change.type === 'added') {
					renderJournalEntry(change.doc);
				}
				if(change.type === 'removed') {
					let journalItem = document.querySelector(`[data-id='${change.doc.id}']`); // .journal__item with this data-id
					let body = journalItem.parentElement; // .journal__list
					body.removeChild(journalItem);// Remove specific child of .journal__list
				}
				if(change.type === 'modified') {
					let journalItem = document.querySelector(`[data-id='${change.doc.id}']`);
					let body = journalItem.parentElement;
					body.removeChild(journalItem);
					renderJournalEntry(change.doc);
				}
			});
		});

		// Click submit in add modal
		addModalForm.addEventListener('submit', e => {
			e.preventDefault();
			journalCollection.add({
				feeling: addModalForm.feeling.value,
				entry: addModalForm.entry.value,
				date: addModalForm.date.value,
				user: addModalForm.user.value
			});
			modalWrapper.classList.remove('modal-show');
		});

		// Click submit in edit modal
		editModalForm.addEventListener('submit', e => {
			e.preventDefault();
			journalCollection.doc(id).update({
				feeling: editModalForm.feeling.value,
				entry: editModalForm.entry.value,
				date: editModalForm.date.value,
				user: editModalForm.user.value
			});
			editModal.classList.remove('modal-show');
		});
  }
}

const journalService = new JournalService();
export default journalService;