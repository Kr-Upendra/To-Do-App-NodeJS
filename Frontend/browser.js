const baseUrl = "http://127.0.0.1:5555/api/todos/";
const todoArea = document.querySelector(".todos");
const todoform = document.querySelector(".todoform");
const nameInput = document.querySelector(".todoname__input");
const indexInput = document.querySelector(".todo__index");
const priorityInput = document.querySelector(".todo__priority");

// Show all Todos

const showAllTodos = async () => {
  try {
    const response = await axios.get(baseUrl);
    const todoList = response.data.todos;
    const todoSize = response.data.totalTodos;
    if (todoSize < 1) {
      todoArea.innerHTML = `<h3>You still not have added any todo!</h3>`;
      return;
    } else {
      const allTodos = todoList
        .map((todo) => {
          const {
            _id,
            todoIndex,
            priorityIndex,
            name,
            isCompleted,
            isCanceled,
          } = todo;
          return `
        <div class="todo">
        <div class="todo__name">
          <span>${todoIndex}. ${name} (${priorityIndex}) 
            <span class="todostatus">[${
              isCompleted ? "&#10003;" : isCanceled ? "&#x292B;" : ""
            }]</span>
          </span>
        </div>
        <div class="complete__container">
          <input
            type="radio"
            class="radiobtn"
            value="completed"
            name="todo-${todoIndex}"
            id="complete-${todoIndex}"
          />
          <label for="complete-${todoIndex}" data-id="${_id}" class="todo__complete">
            <i
              data-iscompleted="${isCompleted}"
              class="fa-solid fa-circle-check todo__icons complete ccicons"
            ></i>
          </label>
        </div>
        <div class="cancel__container">
          <input
            type="radio"
            class="radiobtn"
            value="canceled"
            name="todo-${todoIndex}"
            id="cancel-${todoIndex}"
          />
          <label for="cancel-${todoIndex}" data-id="${_id}" class="todo__cancel">
            <i
              data-iscanceled="${isCanceled}"
              class="fa-solid fa-circle-xmark todo__icons cancel ccicons"
            ></i>
          </label>
        </div>
        <div data-id="${_id}" class="todo__delete">
          <i class="fa-solid fa-trash todo__icons todo__delete--icon"></i>
        </div>
      </div>`;
        })
        .join("");
      todoArea.innerHTML = allTodos;
    }
  } catch (err) {
    todoArea.innerHTML =
      "<h3>Some error occured! please try again later..</h3>";
  }
};

showAllTodos();

// delete a todo

todoArea.addEventListener("click", async (e) => {
  const element = e.target;
  if (element.parentElement.classList.contains("todo__delete")) {
    const id = element.parentElement.dataset.id;
    try {
      await axios.delete(baseUrl + `${id}`);
      showAllTodos();
    } catch (err) {
      alert("some error occured!");
    }
  }
});

// Update a todo

todoArea.addEventListener("click", async (e) => {
  const element = e.target;
  if (element.parentElement.classList.contains("todo__complete")) {
    const id = element.parentElement.dataset.id;

    try {
      await axios.patch(baseUrl + `${id}`, {
        isCompleted: true,
        isCanceled: false,
      });
      showAllTodos();
    } catch (err) {
      alertMessage.innerHTML = `<p>${err.message}</p>`;
      alertbox.style.display = "block";
      setTimeout((alertbox.style.display = "none"), 3000);
    }
  } else if (element.parentElement.classList.contains("todo__cancel")) {
    const id = element.parentElement.dataset.id;
    try {
      await axios.patch(baseUrl + `${id}`, {
        isCanceled: true,
        isCompleted: false,
      });
      showAllTodos();
    } catch (err) {
      alert("some error occured!");
    }
  }
});

// Create a todo

todoform.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const todoIndex = indexInput.value;
  const priorityIndex = priorityInput.value;
  try {
    await axios.post(baseUrl, {
      name: name,
      todoIndex: todoIndex,
      priorityIndex: priorityIndex,
    });
    showAllTodos();
    todoform.value = "";
  } catch (err) {
    alert("some error occured!");
  }
});
