// array for todo list
let todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const ul = document.querySelector("ul");
const dialog = document.querySelector("dialog");
const addBtn = document.querySelector(".add-btn");
const form = dialog.querySelector("form");
const input = form.querySelector("input");

// Function to render todo list
function renderList() {
  ul.innerHTML = ""; // clear old list

  todoList.forEach((item) => {
    const li = document.createElement("li");

    // checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;
    checkbox.addEventListener("change", () => {
      item.completed = checkbox.checked;
      console.log(todoList);
    });

    // label
    const label = document.createElement("label");
    label.textContent = item.task;

    // delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.addEventListener("click", () => {
      todoList = todoList.filter((t) => t.id !== item.id);
      renderList();
      console.log(todoList);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(delBtn);
    ul.appendChild(li);
  });
}

// Add item button
addBtn.addEventListener("click", () => {
  dialog.showModal();
});

// Form submit handler
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = input.value.trim();
  if (newTask) {
    const newItem = {
      id: Date.now(),
      task: newTask,
      completed: false,
    };
    todoList.push(newItem);
    renderList();
    console.log(todoList);
    input.value = "";
    dialog.close();
  }
});

// Initial render
renderList();
