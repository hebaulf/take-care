class EventService{constructor(){this.defaultPage="events"}init(){this.renderEvents()}renderEvents=e=>{const t=document.querySelector("#events"),a=t.querySelector(".event-modal-wrapper"),l=(a.querySelector(".modal"),t.querySelector(".add-event-modal")),n=l.querySelector(".modal"),d=t.querySelector(".add-event-modal .form"),i=t.querySelector(".add-event-close"),o=t.querySelector(".edit-event-modal"),s=o.querySelector(".modal"),c=t.querySelector(".edit-event-modal .form"),r=t.querySelector(".edit-event-close"),v=t.querySelector(".event__list"),u=db.collection("events"),m=t.querySelector(".btn-add.add-event");let p;const y=()=>{n.style.cssText="animation: slideDown .5s ease; animation-fill-mode: forwards;",setTimeout((()=>{l.style.display="none"}),500)},S=()=>{s.style.cssText="animation: slideDown .5s ease; animation-fill-mode: forwards;",setTimeout((()=>{o.style.display="none"}),500)},f=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],b=["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g=e=>{const t=e.data(),a=new Date(t.date),l=`${f[a.getDay()]} ${a.getDate()}.${b[a.getMonth()]} ${a.getFullYear()}`,n=`\n\t\t\t\t<div class="card card-event card-${t.label}" data-id='${e.id}'>\n\t\t\t\t\t<h4 class='card-title'>${t.title}</h4>\n\t\t\t\t\t<p class='card-description'>${t.description}</p>\n\t\t\t\t\t<p class='card-location'>${t.location}</p>\n\t\t\t\t\t<p class='card-date'> ${l}</p>\n\t\t\t\t\t<div>${t.assign}</div>\n\t\t\t\t\t\x3c!-- <div>${t.label}</div> --\x3e\n\t\t\t\t\t<div hidden>\n\t\t\t\t\t\t<button class="btn btn-edit edit-event">Edit</button>\n\t\t\t\t\t\t<button class="btn btn-delete delete-event">Delete</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t`;v.insertAdjacentHTML("beforeend",n);document.querySelector(`[data-id='${e.id}'] .edit-event`).addEventListener("click",(()=>{o.style.display="flex",s.style.cssText="animation: slideUp .5s ease; animation-fill-mode: forwards;",p=e.id,c.title.value=t.title,c.description.value=t.description,c.location.value=t.location,c.date.value=t.date,c.assign.value=t.assign,c.label.value=t.label}));document.querySelector(`[data-id='${e.id}'] .delete-event`).addEventListener("click",(()=>{u.doc(`${e.id}`).delete().then((()=>{console.log("Document succesfully deleted!")})).catch((e=>{console.log("Error removing document",e)}))}))};m.addEventListener("click",(()=>{l.style.display="flex",n.style.cssText="animation: slideUp .5s ease; animation-fill-mode: forwards;",d.title.value="",d.description.value="",d.location.value="",d.date.value="",d.assign.value="",d.label.value=""})),i.addEventListener("click",(e=>{e.preventDefault(),y()})),r.addEventListener("click",(e=>{e.preventDefault(),S()})),window.addEventListener("click",(e=>{e.target===l&&y(),e.target===o&&S()})),u.onSnapshot((e=>{e.docChanges().forEach((e=>{if("added"===e.type&&g(e.doc),"removed"===e.type){let t=document.querySelector(`[data-id='${e.doc.id}']`);t.parentElement.removeChild(t)}if("modified"===e.type){let t=document.querySelector(`[data-id='${e.doc.id}']`);t.parentElement.removeChild(t),g(e.doc)}}))})),d.addEventListener("submit",(e=>{e.preventDefault(),u.add({title:d.title.value,description:d.description.value,location:d.location.value,date:d.date.value,assign:d.assign.value,label:d.label.value}),y()})),c.addEventListener("submit",(e=>{e.preventDefault(),u.doc(p).update({title:c.title.value,description:c.description.value,location:c.location.value,date:c.date.value,assign:c.assign.value,label:c.label.value}),S()}))}}const eventService=new EventService;export default eventService;
//# sourceMappingURL=event-service.js.map