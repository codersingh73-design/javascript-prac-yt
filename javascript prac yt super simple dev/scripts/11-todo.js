const todoList = [];

renderTodoList();

function addTodo() {
    //getting input value
    const inputEl = document.querySelector('.js-name-input');
    const inputdateEl = document.querySelector('.js-due-date-input');

    //validation for empty input
    const name = inputEl.value !== '' ? inputEl.value : '';
    const date = inputdateEl.value !== '' ? inputdateEl.value : '';

    //adding todo to the list
    if (name === '') {
        alert('Please enter a task');
    } else if (date === '') {
        alert('Please fill both fields');
    } else {
        todoList.push({ name, date });
    }
    
    console.log(todoList);

    //clearing the input fields
    inputEl.value = '';
    inputdateEl.value = '';

    //rendering the updated todo list
    renderTodoList();
}

//delete todo function
function deleteTodo(index) {
    const todoItem = document.querySelectorAll('.js-todo-list li')[index];
    todoItem.style.animation = 'removeTodo 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
    
    setTimeout(() => {
        todoList.splice(index, 1);
        renderTodoList();
    }, 300);
}

//render todo list function
function renderTodoList() {
    let todolistHTML = '';

    //checking if todo list is not empty
    if (todoList.length !== 0) {
         for (let i = 0; i < todoList.length; i++) {
            todoObject = todoList[i];

//Destructuring the todo object
            //const name=todoObject.name;
            //const date=todoObject.date;
            const {name, date} = todoObject;


            //adding each todo item to the list
            const isNewItem = i === todoList.length - 1;
            todolistHTML += `
                <li style="animation: ${isNewItem ? 'addTodo' : 'fadeIn'} 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.1}s both;">
                    <div>
                        <strong>${name}</strong>
                        <span class="due-date">Due: ${date}</span>
                    </div>
                    <button onclick="deleteTodo(${i})">Delete</button>
                </li>`;
         }
    }
    //updating the todo list in the DOM
    document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}