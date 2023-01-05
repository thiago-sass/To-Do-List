// DARK MODE...
document.querySelector(".check-switcher").addEventListener("change", () => {
  document.querySelector("html").classList.toggle("dark-theme");
});

// CREATE A NEW TO DO
const todoInput = document.querySelector(".todo-input");
const addIcon = document.querySelector(".add-icon");
const todoList = document.querySelector(".todo-list");
const todoTitle = document.querySelector(".todo-title");

todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && todoInput.value !== "") {
    createNewTodo();
  }
  addIcon.addEventListener("click", () => {
    if (todoInput.value !== "") {
      createNewTodo();
    }
  });
});

function createNewTodo() {
  // creating the parent div...
  const newTodo = document.createElement("div");
  newTodo.classList.add("todo");

  // creating the done icon...
  const newTodoDone = document.createElement("span");
  newTodoDone.innerHTML = "done";
  newTodoDone.classList.add("material-symbols-outlined");
  newTodoDone.classList.add("todo-done");
  newTodoDone.addEventListener("click", () => {
    newTodo.classList.toggle("complete");
  });

  //creating the title of each todo...
  const newTodoTitle = document.createElement("div");
  newTodoTitle.classList.add("todo-title");
  newTodoTitle.innerHTML = todoInput.value;

  // creating the close icon...
  const newCloseIcon = document.createElement("span");
  newCloseIcon.innerHTML = "close";
  newCloseIcon.classList.add("material-symbols-outlined");
  newCloseIcon.classList.add("todo-close");
  newCloseIcon.addEventListener("click", () => {
    newTodo.remove();
  });

  // adding the html elements...
  todoList.appendChild(newTodo);
  newTodo.appendChild(newTodoDone);
  newTodo.appendChild(newTodoTitle);
  newTodo.appendChild(newCloseIcon);
  todoInput.value = "";

  // TODO EDITOR
  const todoEditor = document.querySelector(".todo-editor");
  const todoEditorInput = document.querySelector(".todo-editor__input");
  const todoEditorDone = document.querySelector(".todo-editor__done");
  const todoEditorClose = document.querySelector(".todo-editor__close");
  const createTodo = document.querySelector(".create-todo");

  newTodoTitle.addEventListener("click", () => {
    createTodo.style.display = "none";
    todoEditor.style.display = "flex";
    todoEditorInput.value = newTodoTitle.innerHTML;
  });

  // todo editor buttons
  todoEditorInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && todoEditorInput.value !== "") {
      newTodoTitle.innerHTML = todoEditorInput.value;
      createTodo.style.display = "flex";
      todoEditor.style.display = "none";
    }
    todoEditorDone.addEventListener("click", () => {
      if (todoEditorInput.value !== "") {
        newTodoTitle.innerHTML = todoEditorInput.value;
        createTodo.style.display = "flex";
        todoEditor.style.display = "none";
      }
    });
  });

  todoEditorClose.addEventListener("click", () => {
    createTodo.style.display = "flex";
    todoEditor.style.display = "none";
  });

  //FILTERING TODOs
  const todoAll = document.querySelector(".todo-all");
  const todoPending = document.querySelector(".todo-pending");
  const todoComplete = document.querySelector(".todo-complete");

  const isComplete = newTodo.classList.contains("complete");

  // todos all
  todoAll.addEventListener("click", () => {
    todoAll.classList.add("selected");
    todoPending.classList.remove("selected");
    todoComplete.classList.remove("selected");
    newTodo.style.display = "flex";
  });

  // todos pendings
  todoPending.addEventListener("click", () => {
    todoPending.classList.add("selected");
    todoAll.classList.remove("selected");
    todoComplete.classList.remove("selected");

    if (newTodo.classList.contains("complete")) {
      newTodo.style.display = "none";
    } else {
      newTodo.style.display = "flex";
    }
  });

  // todos completes
  todoComplete.addEventListener("click", () => {
    todoComplete.classList.add("selected");
    todoAll.classList.remove("selected");
    todoPending.classList.remove("selected");

    if (newTodo.classList.contains("complete")) {
      newTodo.style.display = "flex";
    } else {
      newTodo.style.display = "none";
    }
  });
}
