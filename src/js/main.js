import NavBar from "./components/navbar.js";
import LoginPage from './pages/login.js';
import DashboardPage from "./pages/dashboard.js";
import EventsPage from './pages/events.js';
import JournalPage from "./pages/journal.js";
import TodosPage from "./pages/todos.js";
import _spaService from "./services/spa.js";



// Declare and init
let navbar = new NavBar();
let loginPage = new LoginPage();
let dashboardPage = new DashboardPage();
let eventsPage = new EventsPage();
let journalPage = new JournalPage();
let todosPage = new TodosPage();



// init services
_spaService.init();
 