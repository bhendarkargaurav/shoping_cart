const input = document.getElementById("todoInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("todoList");

button.addEventListener("click", addTodo);

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTodo();
    }
});

function addTodo(){

    const task = input.value;

    if(task === ""){
        alert("please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        ${task}
        <button class="complete">✔</button>
        <button class="delete">❌</button>
    `;

    list.appendChild(li);

    input.value = "";

    saveTasks();
}

list.addEventListener("click", function(e){

    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
        saveTasks();
    }

    if(e.target.classList.contains("complete")){
        e.target.parentElement.classList.toggle("completed");
        saveTasks();
    }

});

function saveTasks(){
    localStorage.setItem("todos", list.innerHTML);
}

function loadTasks(){
    list.innerHTML = localStorage.getItem("todos") || "";
}

loadTasks();