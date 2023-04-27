//Another way with AI help

const addToDoForm = document.querySelector("#addTodoForm");
const addToDoInputText = document.querySelector("#addToDoInputText");
const highPriority = document.querySelector("#highPriority");
const projectList = document.querySelector("#projectsToChose");
const addToDoButton = document.querySelector("#addToDoButton");
let newToDoText, toDoPriority, selectedProject;
let allToDoListOnPage = [];

const handleNewToDo = (event) => {
  event.preventDefault(); //stop refreshing the page

  newToDoText = addToDoInputText.value;
  toDoPriority = document.querySelector("#highPriority").checked;
  selectedProject = projectList.value;
  console.log(newToDoText, toDoPriority, selectedProject);

  const toDo = {
    newToDoText: newToDoText,
    toDoPriority: toDoPriority,
    selectedProject: selectedProject,
    completed: false,
  };

  allToDoListOnPage.push(toDo);
  addToDoInputText.value = "";
  highPriority.checked = "";
  projectList.value = "";

  console.log(allToDoListOnPage);
};
addToDoForm.addEventListener("submit", handleNewToDo);

const generateToDoCard = () => {};

//taking data from the form by addEventListener directly
// Not reasonable, I think, I will go with handler, but I want to save it.

/*addToDoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  newToDo = addToDoInputName.value;
  toDoPriority = document.querySelector("#highPriority").checked;
  selectedProject = projectList.value;
}); */

/*

/*const addTodoForm = document.querySelector("#addTodoForm");
let addToDo = '';
let toDoText = document.querySelector("#addToDo");
let toDoPriority = document.querySelector("#highPriority");
let toProject = document.querySelector("#toProject");*/

/*const handleSubmit = (event) => {
  event.preventDefault();
  //stop refreshing the page

  console.log("Submitted");
  //checking if click on button is working

  let addToDo = document.querySelector("#addToDo").value;
  //taking the name of ToDo from the form
  console.log(addToDo);
  //checking if the name of ToDo was taken

  let toDoPriority = document.querySelector("#highPriority").checked;
  //taking the name of toDoPriority
  console.log(toDoPriority);
  //checking if the priority was taken

  let toProject = document.querySelector("#toProject").label;
  //taking the name of toProject
  console.log(toProject);
  //checking if the toProject was taken
};

addTodoForm.addEventListener("submit", handleSubmit);

addToDo(addToDoInput.value);

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

const addToDo = (toDoText = "", toDoPriority = "", toDoProject = "") => {
  const newTodo = {
    text: toDoText,
    priority: toDoPriority,
    project: toProject,
    completed: false,
  };
  toDos = [newTodo, ...toDosArray];
};
*/
