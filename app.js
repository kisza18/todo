window.onload = function(){
    todoCount();
}

const input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const article = document.querySelector('.article');
const section = document.querySelector('.section');
const doneBtn = document.querySelector('.btn-done');
const deleteBtn = document.querySelector('.btn-delete');
const deleteAll = document.querySelector('.btn-deleteAll');

//todos counter
let todoCounter = document.querySelector('.todo-counter');

let todoCount = function(){
    let count = 0;
    for(let i = 0; i < article.children.length; i++){
        if(article.children[i].className === "section"){
            count++;
        }
    }
    todoCounter.innerHTML = count;
}

//create new todo
addBtn.addEventListener('click', function(){
    let todo = document.createElement('section');
    let h1 = document.createElement('h1');
    let div = document.createElement('div');
    let doBtn = document.createElement('button');
    let delBtn = document.createElement('button');

    div.className = "buttons";
    doBtn.className = "btn-done";
    doBtn.innerHTML = "done";
    delBtn.className = "btn-delete";
    delBtn.innerHTML = "delete";
    h1.textContent = input.value;
    todo.className = "section";
    todo.appendChild(h1);
    div.appendChild(doBtn);
    div.appendChild(delBtn);
    todo.appendChild(div);
    article.appendChild(todo);
    input.value = "";
    todoCount();

    doBtn.onclick = function(){
        if(this.parentElement.parentElement.className === "section"){
            this.parentElement.parentElement.className += " doneTodo"
            todoCount();
        }
    }
    delBtn.onclick = function(){
        this.parentElement.parentElement.remove();
        todoCount();
    }
});

//clear all button
deleteAll.addEventListener('click', function(){
    while(article.firstChild){
        article.removeChild(article.firstChild);
    }
    todoCounter.innerHTML = article.children.length;
})