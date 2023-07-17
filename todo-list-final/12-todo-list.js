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
    <button class="removeTodo" onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
    ">Delete</button>
     `;

    todoListHTML += html;
});
/*
for(let i = 0 ; i < todoList.length ; i++){
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
     
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="removeTodo" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
    ">Delete</button>
     `;

    todoListHTML += html;
}




*/








console.log(todoListHTML);

document.querySelector('.Show-todo').innerHTML = todoListHTML;
 

}

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