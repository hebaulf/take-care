class DashboardService {
	constructor() {
		this.defaultPage = "dashboard";
	}
	
	init() {
		this.renderDashboard();
	}

    renderDashboard = doc => {
        const dashboard = document.querySelector('#dashboard');
        const dbEventList = dashboard.querySelector('.dashboard__eventlist');
        const dbTodoList = dashboard.querySelector('.dashboard__todolist');
        const dbJournalList = dashboard.querySelector('.dashboard__journallist');

        const eventsCollection = db.collection('events');
        const todosCollection = db.collection('todo');
        const journalCollection = db.collection('journal');

        const days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
        const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

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
                    
                </div>
            `;

            dbEventList.insertAdjacentHTML('beforeend', eventItem);
        }

        const renderTodo = doc => {
			const data = doc.data();

			const todoItem = /*html*/`
				<div class="card card-todo card-todo-${data.priority}" data-id='${doc.id}'>
					<h4 class='card-title'>${data.title}</h4>
					<p class='card-description'>${data.list}</p>
					<div>${data.assign}</div>
					<!-- <div>${data.priority}</div> -->
				</div>
			`;
  
            dbTodoList.insertAdjacentHTML('beforeend', todoItem);
        }

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
				</div>
			`;

            dbJournalList.insertAdjacentHTML('beforeend', journalItem);
        }

        eventsCollection.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                renderEvent(doc);
            })
        });

        todosCollection.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                renderTodo(doc);
            })
        });

        journalCollection.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                renderJournalEntry(doc);
            })
        });
        
    }

}

const dashboardService = new DashboardService();
export default dashboardService;