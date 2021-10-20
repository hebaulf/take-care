class JournalService {
	constructor() {
		this.defaultPage = "journal";
	}
	
	init() {
		this.renderJournal();
	}

	renderJournal = doc => {
		const journal = document.querySelector('#journal');
		// Get modals
		const modalWrapper = journal.querySelector('.journal-modal-wrapper');
		const modalInner = modalWrapper.querySelector('.modal');
		// Add modal
		const addModal = journal.querySelector('.add-journal-modal');
		const addModalInner = addModal.querySelector('.modal');
		const addModalForm = journal.querySelector('.add-journal-modal .form');
		const addJournalClose = journal.querySelector('.add-journal-close');
		// Edit modal
		const editModal = journal.querySelector('.edit-journal-modal');
		const editModalInner = editModal.querySelector('.modal');
		const editModalForm = journal.querySelector('.edit-journal-modal .form');
		const editJournalClose = journal.querySelector('.edit-journal-close');
		// Get journal list
		const journalList = journal.querySelector('.journal__list');
		const journalCollection = db.collection('journal');
		// Add button on svent list
		const btnAdd = journal.querySelector('.add-journal');

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
					<div>${initials}</div>
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
				openEditModal();
				console.log(data.user);
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


		
		// Click add journal button
		btnAdd.addEventListener('click', () => {
			openAddModal();
			addModalForm.feeling.value = '';
			addModalForm.entry.value = '';
			addModalForm.date.value = '';
			addModalForm.user.value = '';
		});

		// Click close button
		addJournalClose.addEventListener('click', (e) => {
			e.preventDefault();
			closeAddModal();
		});
		editJournalClose.addEventListener('click', (e) => {
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
			closeAddModal();
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
			closeEditModal();
		});
  }
}

const journalService = new JournalService();
export default journalService;