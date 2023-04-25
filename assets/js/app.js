const addTodoForm = document.querySelector("#addTodoForm");
const addToDo = document.querySelector("#addToDo");

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

document
  .querySelector("addTodoForm")
  .addEventListener("submit", TakeToDoFromForm);

const TakeToDoFromForm = (
  toDoText = "",
  toDoPriority = "",
  toDoProject = ""
) => {
  const newTodo = {
    text: document.querySelector("addToDo"),
    priority: document.querySelector("highPriority"),
    project: document.querySelector("addToDo"),
    completed: false,
  };
  toDos = [newTodo, ...toDos];
};
