import _spaService from "./services/spa.js";
import _eventService from "./services/event-service.js";
import _todoService from "./services/todo-service.js";
// import "./services/calendar.js";
import NavBar from "./components/navbar.js";
import TopBar from './components/topbar.js';

import LoginPage from './pages/login.js';
import DashboardPage from "./pages/dashboard.js";
import EventsPage from './pages/events.js';
import JournalPage from "./pages/journal.js";
import TodosPage from "./pages/todos.js";

// Declare and init
let topbar = new TopBar();
let navbar = new NavBar();
let loginPage = new LoginPage();
let dashboardPage = new DashboardPage();
let eventsPage = new EventsPage();
let journalPage = new JournalPage();
let todosPage = new TodosPage();


// init services
_spaService.init();
_eventService.init();
_todoService.init();

 