export default class NavBar{constructor(){this.component()}component(){document.querySelector("#navbar").innerHTML+="\n      <div class=\"navbar__links\">\n        <a href=\"#events\"><i class='tc-icons-calendar'></i><span class='navbar__links--text'>Events</span></a>\n        <a href=\"#journal\"><i class='tc-icons-journal'></i><span class='navbar__links--text'>Journal</span></a>\n        <a href=\"#todos\"><i class='tc-icons-task-list'></i><span class='navbar__links--text'>Todos</span></a>\n        <a href=\"#settings\"><i class='tc-icons-settings'></i><span class='navbar__links--text'>Settings</span></a>\n      </div>\n    "}}
//# sourceMappingURL=navbar.js.map