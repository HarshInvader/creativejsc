//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')



//Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
    event.preventDefault();

    //Generating todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check-mark button
    const complButton = document.createElement('button');
    complButton.innerHTML = '<i class="fas fa-check"></i>';
    complButton.classList.add("complete-btn")
    todoDiv.appendChild(complButton)

    //Check-mark button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)

    //Append all of the above to list
    todoList.appendChild(todoDiv);

    //Clear value
    todoInput.value = "";

}

function deleteCheck(e) {
    const item = e.target;
    //Delete
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    }
}