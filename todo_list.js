// Adding to-do Items

taskList = document.querySelector("#task_list");
button = document.querySelector("#add_task");

descInput = document.querySelector("#task_description_input");
dueDateInput = document.querySelector("#duedate_input");
dueTimeInput = document.querySelector("#duetime_input");

dueDateInput.addEventListener("change", (event) => {
  dueDateVal = event.target.value;
  console.log("change ", dueDateVal);
});

dueTimeInput.addEventListener("change", (event) => {
  dueTimeVal = event.target.value;
  console.log("change time ", dueTimeVal);
});

function addTask(description, dueTime = false) {
  var newItem = document.createElement("li");
  newItem.innerHTML = description;

  var dueDate = document.createElement("span");
  dueDate.setAttribute("class", "due");

  if (dueTime != false) {
    dueDate.innerHTML = " Due: " + dueTime[0] + " at " + dueTime[1];
  } else {
    dueDate.innerHTML = "";
  }
  newItem.appendChild(dueDate);

  let doneButton = document.createElement("button");

  doneButton.setAttribute("class", `btn btn-sm btn-outline-danger done`);
  doneButton.textContent = "Done";
  newItem.appendChild(doneButton);

  console.log(newItem);
  taskList.appendChild(newItem);

  console.log(document.querySelectorAll(".done"));
}

button.addEventListener("click", (e) => {
  let timeDue = [dueDateInput.value, dueTimeInput.value];

  console.log(descInput.value);
  addTask(descInput.value, timeDue);
  descInput.value = "";
});

descInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let timeDue = [dueDateInput.value, dueTimeInput.value];
    addTask(descInput.value, timeDue);
    descInput.value = "";
  }
});

let dones = document.querySelectorAll(".done");
console.log(document.querySelectorAll(".done"));

// Placeholder tasks
addTask("do the dishes");
addTask("Complete Problem Set 4", ["2/14/2022", "3:30"]);


document.addEventListener(
  "click",
  function (e) {
    if (e.target.classList.contains("done")) {
      document.querySelectorAll(".done").forEach((buttonItem) => {
        buttonItem.addEventListener("click", (e) => {
          console.log("remove");
          e.currentTarget.parentNode.remove();
        });
      });
    }
  },
  false
);

// Part 2
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Define function called addTask
    accepts two arguments
      description -- string with a task description
      duetime -- timestamp representing when the task is due 
        (is false if there is no specified due time 
    should add a new item to ul#task_list 
    hould be in following format: 
    <li>(description)<span class="due">due (due time, if specified)
    </span><button class="btn btn-sm btn-outline-danger done" type="button">
    Done</button></li>

*/

/* Add calls to addtask at the top of todolist so it has a few items when the page loads
 */

// Part 3

/* 
  clicking 'add task' will add the task whose 
    description is specified in input#task_description_input
    due date is specified in input#duedate_input
    due time is specified in input#duetime_input
*/

//Part 4
/* Add Enter shortcut so it can submit a task
  use an event listener with keydown */

// PArt 5
/* clear contents of  input#task_description_input when 
user adds a new task*/

// PArt 6
// remove completed task
