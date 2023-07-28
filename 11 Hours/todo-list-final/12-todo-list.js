const todoList = [{name : 'make dinner' , dueDate: '2022-12-11'},
{name:  'wash DIshes',dueDate : '2022-12-11' }];
renderTodoList();
function renderTodoList(){


let todoListHTML = [];


todoList.forEach( (todoObject , index)=> {
     todoObject = todoList[index];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
     
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="removeTodo js-delete-todo-button">Delete</button>`;

    todoListHTML += html;
});
console.log(todoListHTML);

document.querySelector('.Show-todo').innerHTML = todoListHTML;
 

document.querySelectorAll('.js-delete-todo-button')
.forEach((deleteElement , index) =>{
  deleteElement.addEventListener('click' , ()=>{
     todoList.splice(index, 1);
        renderTodoList();
  });
});

}

document.querySelector('.js-add-event-button').addEventListener('click', () => {
  addTodo();
});
function addTodo(){

    let inputElement = document.querySelector('.js-input');
    const name = inputElement.value;

    
    let dateInputElement = document.querySelector('.js-dueDate');
    const dueDate = dateInputElement.value;



    // document.querySelector('.show-work').innerHTML = inputElement.value;
    todoList.push(
        {
            name : name,
            dueDate: dueDate
        }
    );
    // console.log(todoList);
    
    renderTodoList();

} 