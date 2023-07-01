//Getting elements from the dom and setting variables for them
const newTask = document.getElementById("new-task");
const todoList = document.getElementById("to-do-list");
const itemsLeft = document.getElementById("number-left");
const darkIcon = document.getElementById("moon");
const lightIcon = document.getElementById("sun");
const toggler = document.getElementById("toggler");
const topImage = document.getElementById("top");
const body = document.body;
const allTasksButton = document.getElementById("allTasks");
const activeTasksButton = document.getElementById("activeTasks");
const completedTasksButton = document.getElementById("completedTasks");
const clearCompletedButton = document.getElementById("clearCompletedButton");
const itemsLeftText = document.getElementById("items-left-text");
 

//toggles between light and dark mode by clicking in the toggle div with the moon and sun icons
toggler.addEventListener("click", () =>{

    darkIcon.classList.toggle('not-active-theme');
    lightIcon.classList.toggle('not-active-theme');  
    checkTopBackground();
    body.classList.toggle("dark-mode");
}

)


//changes top background image from light to dark and vice versa
function checkTopBackground(){
    if(darkIcon.classList.contains("not-active-theme")){
        topImage.style.backgroundImage = "url('./images/light.png')";
    }else{
        topImage.style.backgroundImage = "url('./images/dark.jpg')";
    }
    console.log("function is reading")
}


//adds up new task entered in the input box, sets it to a class name and leaves the input box empty after the new task is added to the list
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
        li.setAttribute("class","activeTask");
        


        UpdateItemsCount();
        
    }
    newTask.value = "";
    saveData();

}


//counts the number of active tasks in the list, 
function UpdateItemsCount(){
    let itemsLeftCount = document.querySelectorAll('.activeTask').length;
    itemsLeft.innerHTML = itemsLeftCount;
    itemsLeftText.innerHTML = itemsLeftCount + ' items left';

}


//toggles between completed and active task, deletes completed and unwanted tasks 
todoList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        e.target.classList.toggle("activeTask");
        e.target.classList.toggle("completedTask");
        
       UpdateItemsCount();
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        UpdateItemsCount();
        saveData();
    }
}, false);


//saves list data 
function saveData(){
    localStorage.setItem("data", todoList.innerHTML); 
}

//displays saved list 
function showList(){
    todoList.innerHTML = localStorage.getItem("data");
}
showList();
UpdateItemsCount();



//adds the color blue to the current list clicked on, displays the current list and counts the amount of items in each option
function showAllTasks(){
    activeTasksButton.classList.remove('active-list');
    allTasksButton.classList.add('active-list');
    completedTasksButton.classList.remove('active-list');

    todoList.classList.remove('completedTasksList')
    todoList.classList.remove('activeTasksList')

    let itemsLeftCount = document.querySelectorAll('.activeTask').length;
    itemsLeft.innerHTML = itemsLeftCount;
    itemsLeftText.innerHTML = itemsLeftCount + ' items left';

}

function showActiveTasks(){
    activeTasksButton.classList.add('active-list');
    allTasksButton.classList.remove('active-list');
    completedTasksButton.classList.remove('active-list');

    todoList.classList.remove('completedTasksList')
    todoList.classList.add('activeTasksList')

    let itemsLeftCount = document.querySelectorAll('.activeTask').length;
    itemsLeft.innerHTML = itemsLeftCount;
    itemsLeftText.innerHTML = itemsLeftCount + ' items left';

}

function showCompletedTasks(){
    activeTasksButton.classList.remove('active-list');
    allTasksButton.classList.remove('active-list');
    completedTasksButton.classList.add('active-list');
    
    todoList.classList.add('completedTasksList')
    todoList.classList.remove('activeTasksList')

    let itemsCompletedCount = document.querySelectorAll('.completedTask').length;
    itemsLeft.innerHTML = itemsCompletedCount;
    itemsLeftText.innerHTML = itemsCompletedCount + ' completed';
    

}


//clears all completed task
function clearCompleted(){
    const completedTasks = todoList.getElementsByClassName('completedTask');
    while(completedTasks.length > 0){
        completedTasks[0].remove();
    }

    
    UpdateItemsCount();
}


// drag and drop

new Sortable (todoList, {
    animation: 300
});
