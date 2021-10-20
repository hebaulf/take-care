class JournalService{constructor(){this.defaultPage="journal"}init(){this.renderJournal()}renderJournal=e=>{const t=document.querySelector("#journal"),l=t.querySelector(".journal-modal-wrapper"),a=(l.querySelector(".modal"),t.querySelector(".add-journal-modal")),n=a.querySelector(".modal"),d=t.querySelector(".add-journal-modal .form"),r=t.querySelector(".add-journal-close"),o=t.querySelector(".edit-journal-modal"),i=o.querySelector(".modal"),u=t.querySelector(".edit-journal-modal .form"),s=t.querySelector(".edit-journal-close"),c=t.querySelector(".journal__list"),v=db.collection("journal"),y=t.querySelector(".add-journal");let m;const f=()=>{n.style.cssText="animation: slideDown .5s ease; animation-fill-mode: forwards;",setTimeout((()=>{a.style.display="none"}),500)},p=()=>{i.style.cssText="animation: slideDown .5s ease; animation-fill-mode: forwards;",setTimeout((()=>{o.style.display="none"}),500)},S=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],g=["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],j=e=>{const t=e.data(),l=new Date(t.date),a=`${S[l.getDay()]} ${l.getDate()}.${g[l.getMonth()]} ${l.getFullYear()}`,n=`\n\t\t\t\t<div class="journal__item" data-id='${e.id}'>\n\t\t\t\t\t<div>${t.feeling}</div>\n\t\t\t\t\t<p class='card-description'>${t.entry}</p>\n\t\t\t\t\t<p class='card-date'>${a}</p>\n\t\t\t\t\t<div>${initials}</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<button class="btn btn-edit edit-journal">Edit</button>\n\t\t\t\t\t\t\t<button class="btn btn-delete delete-journal">Delete</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t`;c.insertAdjacentHTML("beforeend",n);document.querySelector(`[data-id='${e.id}'] .edit-journal`).addEventListener("click",(()=>{o.style.display="flex",i.style.cssText="animation: slideUp .5s ease; animation-fill-mode: forwards;",console.log(t.user),m=e.id,u.feeling.value=t.feeling,u.entry.value=t.entry,u.date.value=t.date,u.user.value=t.user}));document.querySelector(`[data-id='${e.id}'] .delete-journal`).addEventListener("click",(()=>{v.doc(`${e.id}`).delete().then((()=>{console.log("Document succesfully deleted!")})).catch((e=>{console.log("Error removing document",e)}))}))};y.addEventListener("click",(()=>{a.style.display="flex",n.style.cssText="animation: slideUp .5s ease; animation-fill-mode: forwards;",d.feeling.value="",d.entry.value="",d.date.value="",d.user.value=""})),r.addEventListener("click",(e=>{e.preventDefault(),f()})),s.addEventListener("click",(e=>{e.preventDefault(),p()})),window.addEventListener("click",(e=>{e.target===a&&f(),e.target===o&&p()})),v.onSnapshot((e=>{e.docChanges().forEach((e=>{if("added"===e.type&&j(e.doc),"removed"===e.type){let t=document.querySelector(`[data-id='${e.doc.id}']`);t.parentElement.removeChild(t)}if("modified"===e.type){let t=document.querySelector(`[data-id='${e.doc.id}']`);t.parentElement.removeChild(t),j(e.doc)}}))})),d.addEventListener("submit",(e=>{e.preventDefault(),v.add({feeling:d.feeling.value,entry:d.entry.value,date:d.date.value,user:d.user.value}),f()})),u.addEventListener("submit",(e=>{e.preventDefault(),v.doc(m).update({feeling:u.feeling.value,entry:u.entry.value,date:u.date.value,user:u.user.value}),p()}))}}const journalService=new JournalService;export default journalService;
//# sourceMappingURL=journal-service.js.map