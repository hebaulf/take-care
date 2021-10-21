import _spaService from "./services/spa.js";
import _eventService from "./services/event-service.js";
import _todoService from "./services/todo-service.js";
import _journalService from "./services/journal-service.js";
import _dashboardService from "./services/dashboard-service.js";
// import * from "./services/calendar.js";
import NavBar from "./components/navbar.js";
//import TopBar from './components/topbar.js';
import LandingPage from './pages/landingpage.js';
import LoginPage from './pages/login.js';
import DashboardPage from "./pages/dashboard.js";
import EventsPage from './pages/events.js';
import JournalPage from "./pages/journal.js";
import TodosPage from "./pages/todos.js";
import SettingsPage from './pages/settings.js';

// Declare and init
let navbar = new NavBar();
let landingPage = new LandingPage();
let loginPage = new LoginPage();
let dashboardPage = new DashboardPage();
let eventsPage = new EventsPage();
let journalPage = new JournalPage();
let todosPage = new TodosPage();
let settingsPage = new SettingsPage();

// init services
_spaService.init();
_eventService.init();
_todoService.init();
_journalService.init();
_dashboardService.init();
 