/* create the SPA routing */

class SpaService {
  constructor() {
    this.defaultPage = 'dashboard';
  }

  init() {
    this.pages = document.querySelectorAll('.page');
    this.navItems = document.querySelectorAll('.navtabs a');
    //call for changing pages
    this.pageChange();
  }

  // hide all pages
  hideAllPages() {
    for (let page of this.pages) {
      page.style.display= 'none'
    }
  }

  // show a page (navtabs)
  showPage(pageId) {
    this.hideAllPages();
    // find page by link- (id/href)
    document.querySelector(`#${pageId}`).style.display = 'block';
    // set page(tab) to active
    this.setActiveTab(pageId);
  }

  // set active class to page/tab(menu item)
  setActiveTab(pageId) {
    for (let navItem of this.navItems) {
      if (`#${pageId}` === navItem.getAttribute('href')) {
        navItem.classList.add('active');
      } else {
        navItem.classList.remove('active');
      }
    }
  }

  // navigate to a new page - change href
  // onhashChange function
  pageChange() {
    let page = this.defaultPage;
    if (window.location.hash) {
      page = window.location.hash.slice(1);
    }
    // pass page into showPage() function
    this.showPage(page);
  }

  // show and hide tabs
  hideTabs(hide) {
    let tabs = document.querySelector('#navtabs');
    if (hide) {
      tabs.classList.add('hide');
    } else {
      tabs.classList.remove('hide');
    }
  }
}

const spaService = new SpaService();
export default spaService;