class TodoService{constructor(){this.defaultPage="todos"}init(){this.renderTodo()}renderTodo=t=>{const e=document.querySelector(".todo-modal-wrapper"),d=document.querySelector(".add-todo-modal"),o=document.querySelector(".add-todo-modal .form"),i=document.querySelector(".edit-todo-modal"),l=document.querySelector(".edit-todo-modal .form"),a=document.querySelector(".todo__list"),s=db.collection("todo"),n=document.querySelector(".add-todo");let r;const c=t=>{const e=t.data(),d=`\n\t\t\t\t<div class="todo__item" data-id='${t.id}'>\n\t\t\t\t\t<div>${e.title}</div>\n\t\t\t\t\t<div>${e.list}</div>\n\t\t\t\t\t<div>${e.assign}</div>\n\t\t\t\t\t<div>${e.priority}</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button class="btn btn-edit edit-todo">Edit</button>\n\t\t\t\t\t\t<button class="btn btn-delete delete-todo">Delete</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t`;a.insertAdjacentHTML("beforeend",d);document.querySelector(`[data-id='${t.id}'] .edit-todo`).addEventListener("click",(()=>{i.classList.add("modal-show"),r=t.id,l.title.value=e.title,l.list.value=e.list,l.assign.value=e.assign,l.priority.value=e.priority}));document.querySelector(`[data-id='${t.id}'] .delete-todo`).addEventListener("click",(()=>{s.doc(`${t.id}`).delete().then((()=>{console.log("Document succesfully deleted!")})).catch((t=>{console.log("Error removing document",t)}))}))};n.addEventListener("click",(()=>{d.classList.add("modal-show"),o.title.value="",o.list.value="",o.assign.value="",o.priority.value=""})),window.addEventListener("click",(t=>{t.target===d&&d.classList.remove("modal-show"),t.target===i&&i.classList.remove("modal-show")})),s.onSnapshot((t=>{t.docChanges().forEach((t=>{if("added"===t.type&&c(t.doc),"removed"===t.type){let e=document.querySelector(`[data-id='${t.doc.id}']`);e.parentElement.removeChild(e)}if("modified"===t.type){let e=document.querySelector(`[data-id='${t.doc.id}']`);e.parentElement.removeChild(e),c(t.doc)}}))})),o.addEventListener("submit",(t=>{t.preventDefault(),s.add({title:o.title.value,list:o.list.value,assign:o.assign.value,priority:o.priority.value}),e.classList.remove("modal-show")})),l.addEventListener("submit",(t=>{t.preventDefault(),s.doc(r).update({title:l.title.value,list:l.list.value,assign:l.assign.value,priority:l.priority.value}),i.classList.remove("modal-show")}))}}const todoService=new TodoService;export default todoService;
//# sourceMappingURL=todo-service.js.map