import _spaService from"./services/spa.js";import _eventService from"./services/event-service.js";import _todoService from"./services/todo-service.js";import _journalService from"./services/journal-service.js";import NavBar from"./components/navbar.js";import LandingPage from"./pages/landingpage.js";import LoginPage from"./pages/login.js";import DashboardPage from"./pages/dashboard.js";import EventsPage from"./pages/events.js";import JournalPage from"./pages/journal.js";import TodosPage from"./pages/todos.js";import SettingsPage from"./pages/settings.js";let navbar=new NavBar,landingPage=new LandingPage,loginPage=new LoginPage,dashboardPage=new DashboardPage,eventsPage=new EventsPage,journalPage=new JournalPage,todosPage=new TodosPage,settingsPage=new SettingsPage;_spaService.init(),_eventService.init(),_todoService.init(),_journalService.init();
//# sourceMappingURL=main.js.map