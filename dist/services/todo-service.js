class TodoService{constructor(){this.defaultPage="todos"}init(){this.renderTodo()}renderTodo=t=>{const e=document.querySelector("#todos"),o=e.querySelector(".todo-modal-wrapper"),d=(o.querySelector(".modal"),e.querySelector(".add-todo-modal")),i=d.querySelector(".modal"),a=d.querySelector(".form"),l=e.querySelector(".add-todo-close"),n=e.querySelector(".edit-todo-modal"),r=n.querySelector(".modal"),s=n.querySelector(".form"),c=e.querySelector(".edit-todo-close"),u=e.querySelector(".todo__list"),v=db.collection("todo"),y=e.querySelector(".add-todo");let p;const m=()=>{i.style.cssText="animation: slideDown .5s ease; animation-fill-mode: forwards;",setTimeout((()=>{d.style.display="none"}),500)},f=()=>{r.style.cssText="animation: slideDown .5s ease; animation-fill-mode: forwards;",setTimeout((()=>{n.style.display="none"}),500)},S=t=>{const e=t.data(),o=["#C6A8F0","#D0D6FB","#F4CFA4","#FBEEDF","#909EF5","#F1E9FB"];document.querySelectorAll(".avatar").forEach((t=>{const e=t.innerText;t.style.backgroundColor=o[(t=>{const e=t.split("").map((t=>t.charCodeAt(0))).join("");return parseInt(e,17)})(e)%o.length]}));const d=`\n\t\t\t\t<div class="card card--todo card--todo-${e.priority}" data-id='${t.id}'>\n\t\t\t\t\t<div class='card--${e.priority}__line'></div>\n\t\t\t\t\t<div class='card__container card-toggle'>\n\t\t\t\t\t\t<div class='card__header'>\n\t\t\t\t\t\t\t\t<p class='card__header--label'>To Do's</p>\n\t\t\t\t\t\t\t\t<p class='card__header--date'>${e.priority} Priority</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class='card-content'>\n\t\t\t\t\t\t\t<div class='card-content__details'>\n\t\t\t\t\t\t\t\t<h4 class='card-content__details--title'>${e.title}</h4>\n\t\t\t\t\t\t\t\t<div id='description' class="card-content__details--description">\n\t\t\t\t\t\t\t\t\t<p>${e.list}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t<div class='card-content__footer'>\n\t\t\t\t\t\t\t\t<button class="edit-todo btn-circle--edit"></button>\n\t\t\t\t\t\t\t\t<button class="delete-todo btn-circle--complete"></button>\n\t\t\t\t\t\t\t\t<div class='avatar'><p>${e.assign}</p></div>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t`;u.insertAdjacentHTML("beforeend",d);document.querySelector(`[data-id='${t.id}'] .edit-todo`).addEventListener("click",(()=>{n.style.display="flex",r.style.cssText="animation: slideUp .5s ease; animation-fill-mode: forwards;",p=t.id,s.title.value=e.title,s.list.value=e.list,s.assign.value=e.assign,s.priority.value=e.priority}));document.querySelector(`[data-id='${t.id}'] .delete-todo`).addEventListener("click",(()=>{v.doc(`${t.id}`).delete().then((()=>{console.log("Document succesfully deleted!")})).catch((t=>{console.log("Error removing document",t)}))}))};y.addEventListener("click",(()=>{d.style.display="flex",i.style.cssText="animation: slideUp .5s ease; animation-fill-mode: forwards;",a.title.value="",a.list.value="",a.assign.value="",a.priority.value=""})),l.addEventListener("click",(t=>{t.preventDefault(),m()})),c.addEventListener("click",(t=>{t.preventDefault(),f()})),window.addEventListener("click",(t=>{t.target===d&&m(),t.target===n&&f()}));let _=!1;v.onSnapshot((t=>{_||(_=!0,setTimeout((()=>{_=!1})),t.docChanges().forEach((t=>{if("added"===t.type&&S(t.doc),"removed"===t.type){let e=document.querySelector(`[data-id='${t.doc.id}']`);e.parentElement.removeChild(e)}if("modified"===t.type){let e=document.querySelector(`[data-id='${t.doc.id}']`);e.parentElement.removeChild(e),S(t.doc)}})))})),a.addEventListener("submit",(t=>{t.preventDefault(),v.add({title:a.title.value,list:a.list.value,assign:a.assign.value,priority:a.priority.value}),m()})),s.addEventListener("submit",(t=>{t.preventDefault(),v.doc(p).update({title:s.title.value,list:s.list.value,assign:s.assign.value,priority:s.priority.value}),f()}))}}const todoService=new TodoService;export default todoService;
//# sourceMappingURL=todo-service.js.map