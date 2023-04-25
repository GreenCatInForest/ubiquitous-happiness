const addTodoForm = document.querySelector("#addTodoForm");
const addToDo = document.querySelector("#addToDo");
let toDoText = document.querySelector("#addToDo");
let toDoPriority = document.querySelector("#highPriority");
let toProject = document.querySelector("#toProject");

let toDosArray = [
  {
    text: "ToDo1",
    priority: false,
    project: false,
    completed: false,
  },
  {
    text: "ToDo2",
    priority: false,
    project: false,
    completed: false,
  },
  {
    text: "ToDo3",
    priority: false,
    project: false,
    completed: false,
  },
];

const TakeToDoFromForm = (
  toDoText = "",
  toDoPriority = "",
  toDoProject = ""
) => {
  const newTodo = {
    text: toDoText,
    priority: toDoPriority,
    project: toProject,
    completed: false,
  };
  toDos = [newTodo, ...toDosArray];
};

document
  .querySelector("#addTodoForm")
  .addEventListener("submit", TakeToDoFromForm);
