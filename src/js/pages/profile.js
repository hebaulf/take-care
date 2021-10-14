// profilePage
export default class profilePage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
     <section id='profile' class="page">
      <header class='topbar'>
        <h2>Profile</h2>
      </header>
      <form>
        <!-- should there be a form to update profile here? eg: --->
        <label for='username'>Username</label>
        <input type='text' id='username' required>
        <label for='displayname'>Display name</label>
        <input type='text' id='displayname'>
      </form>
     </section>
    `
  }
  // updateUser() function - connect to auth service to update name etc
  // logout()
}