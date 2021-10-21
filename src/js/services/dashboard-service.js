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
			const dataDate = new Date(data.date);
			const day = days[dataDate.getDay()];
			const monthDate = dataDate.getDate();
			const month = months[dataDate.getMonth()];
			const year = dataDate.getFullYear();
			const formattedDate = `${day} ${monthDate}.${month} ${year}`;
            
            const eventItem = /*html*/`
                <div class="card card--event card--${data.label}" data-id='${doc.id}'>
                    <div class='card--${data.label}__line'></div>
                    <div class='card__container card-toggle'>
                        <div class='card__header'>
                            <p class='card__header--label'>${data.label}</p>
                            <p class='card__header--date'>${formattedDate}</p>
                        </div>
                        <div class='card-content'>
                            <div class='card-content__details'>
                                <h4 class='card-content__details--title'>${data.title}</h4>
                                <p class='card-content__details--location'>${data.location}</p>
                                <div id='description' class="card-content__details--description">
                                    <p>${data.description}</p>
                                </div>
                            </div>
                            <div class='card-content__footer'>
                                <div class='avatar'><p>${data.assign}</p></div>
                            </div>	
                        </div>
                    </div>
                </div>
            `;

            dbEventList.insertAdjacentHTML('beforeend', eventItem);
        }

        const renderTodo = doc => {
			const data = doc.data();
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
                                </div>
                            </div>	
                        </div>
                    </div>
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
                <div class="card card--journal" data-id='${doc.id}'>
                    <div class='card__container'>
                        <div class='card__header'>
                            <hr hidden></hr>
                            <p class='card__header--date'>${formattedDate}</p>
                        </div>
                        <div class='card-content'>
                            <div title='Feeling ${data.feeling}' class='card-content__feeling'>
                                <i class='tc-icons-${data.feeling}'></i>
                            </div>
                            <div id='description' class="card-content__entry">
                                <div>
                                    <p>${data.entry}</p>
                                </div>
                            </div>
                        </div>
                    </div>
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