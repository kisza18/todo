const input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const article = document.querySelector('.article');
const section = document.querySelector('.section');
const doneBtn = document.querySelector('.btn-done');
const deleteBtn = document.querySelector('.btn-delete');
const deleteAll = document.querySelector('.btn-deleteAll');

let todoCounter = document.querySelector('.todo-counter');
todoCounter.innerHTML = article.children.length;

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
    todoCounter.innerHTML = article.children.length;

    doBtn.onclick = function(){
        if(this.parentElement.parentElement.className === "section"){
            this.parentElement.parentElement.className += " doneTodo"
        }
        todoCounter.innerHTML = article.children.length;
    }
    delBtn.onclick = function(){
        this.parentElement.parentElement.remove();
        todoCounter.innerHTML = article.children.length;
    }
});

//clear all button
deleteAll.addEventListener('click', function(){
    while(article.firstChild){
        article.removeChild(article.firstChild);
    }
    todoCounter.innerHTML = article.children.length;
})