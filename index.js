const newTask = document.getElementById("new-task");
const todoList = document.getElementById("to-do-list");
const itemsLeft = document.getElementById("number-left");

function addTask(){
    if (newTask.value.trim() === ''){
        alert("Type something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = newTask.value;
        todoList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        // li.draggable ="true";
        // li.classList.add("item");


        UpdateItemsCount();
        
    }
    newTask.value = "";
    saveData();
    

}

function UpdateItemsCount(){
    let itemsLeftCount = todoList.children.length;
    itemsLeft.innerHTML = itemsLeftCount;

}


todoList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        UpdateItemsCount();
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        UpdateItemsCount();
        saveData();
    }
}, false);


//save data 
function saveData(){
    localStorage.setItem("data", todoList.innerHTML); 
}

function showList(){
    todoList.innerHTML = localStorage.getItem("data");
}
showList();
UpdateItemsCount();