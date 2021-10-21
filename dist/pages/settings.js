export default class SettingsPage{constructor(){this.template()}template(){document.pageTitle="Settings",document.querySelector("#content").innerHTML+=`\n      <section id="settings" class="page">\n        <header id='head' class='head'>\n          <div class='head__title'>\n            <h1 id='page-title' class='page-title'>${document.pageTitle}</h1>\n            <a role='navigation' href="#dashboard" class='btn-home'><i class='tc-icons-home-filled'></i></a>\n          </div>\n        </header>\n        <main class='main'>\n          <div class="settings__content-wrap">\n          <div>\n            <div class="user-icon h1">GT</div>\n          </div>\n          <div>\n            <h3>Profile Info</h3>\n            <div class="settings__infobox">\n              <div>\n                <div>First Name</div>\n                <div><p>Guðrún</p></div>\n                <div><i class="arrow-right"></i></div>\n              </div>\n              <div>\n                <div>Last Name</div>\n                <div><p>Tryggvadóttir</p></div>\n                <div><i class=""></i></div>\n              </div>\n              <div>\n                <div>Email</div>\n                <div><p>gudruntryggva@gmail.com</p></div>\n                <div><i class=""></i></div>\n              </div>\n            </div>\n          </div>\n          <div class="settings__infobox">\n            <h3>Account</h3>\n            <div>\n              <div>\n                <div><p>Change Password</p></div>\n                <div><i class=""></i></div>\n              </div>\n              <div>\n                <div><p>Notifications</p></div>\n                <div><i class=""></i></div>\n              </div>\n              <div>\n                <div><p>My Team</p></div>\n                <div><i class=""></i></div>\n              </div>\n            </div>\n          </div>\n          <div class="form__button">\n            <a href="#dashboard" class="button">Log Out</a>\n          </div>\n          </div>\n        </main>\n      </section>\n    `}}
//# sourceMappingURL=settings.js.map