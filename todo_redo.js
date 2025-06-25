// DOM elements
const todoInput = document.querySelector('#js-todo-input');
const todoList  = document.querySelector('#js-todo-list');
const todoBtn   = document.querySelector('#js-todo-btn');

// Get input value from user
function getInputValue(){
    const inputValue = todoInput.value;
    todoInput.value = "";

    console.log(inputValue);

    return inputValue;
}


// Add user todo item to todoList
function addTodoItemList(){
    const inputValue = getInputValue();

    const trimmedInput = inputValue.trim();

    if(trimmedInput !== ""){
        const 
    }
}