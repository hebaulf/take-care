export default class LoginPage{constructor(){this.template()}template(){document.querySelector("#content").innerHTML+='\n      <section id="login" class="page">\n        <header class="topbar">\n          <h2>Login</h2>\n        </header>\n          <form class="form" autocomplete="off">\n             <input type="text" name="firstName" placeholder="First Name">\n             <input type="text" name="lastName" placeholder="Last Name">\n             <input type="password" name="password" placeholder="password">\n             <input type="email" name="email" placeholder="Email">\n             <button class="btn btn-modal">Submit</button>\n          </form>\n      </section>\n    '}}
//# sourceMappingURL=login.js.map