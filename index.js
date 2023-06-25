const newTask = document.getElementById("new-task");
const todoList = document.getElementById("to-do-list");
const itemsLeft = document.getElementById("number-left");
const darkIcon = document.getElementById("moon");
const lightIcon = document.getElementById("sun");
const toggler = document.getElementById("toggler");
const topImage = document.getElementById("top");
const body = document.body;
// const checkBox = document.getElementById("check-box");
const activeMenu = document.getElementById("current");
const completedMenu = document.getElementById("done");
 
// const activeMenu = document.getElementById("current");



completedMenu.addEventListener("click", () =>{
    if(li === 'checked')
    completedMenu.setAttribute("class", "active");
    console.log("active");
    
})


toggler.addEventListener("click", () =>{

    darkIcon.classList.toggle('not-active-theme');
    lightIcon.classList.toggle('not-active-theme');
   
    checkTopBackground();

    body.classList.toggle("dark-mode");

  

}


)

function checkTopBackground(){
    if(darkIcon.classList.contains("not-active-theme")){
        topImage.style.backgroundImage = "url('./images/light.png')";
    }else{
        topImage.style.backgroundImage = "url('./images/dark.jpg')";
    }
    console.log("function is reading")
}

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
        li.setAttribute("class","active");
        // li.draggable ="true";
        // li.classList.add("item");


        UpdateItemsCount();
        
    }
    newTask.value = "";
    saveData();

}

// function changeCheckbox(){
//     if(checkBox.classList.contains("check-box")){

//     }
// }

function UpdateItemsCount(){
    let itemsLeftCount = todoList.children.length;
    itemsLeft.innerHTML = itemsLeftCount;

}




todoList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        
        // if (target.checked) {
        //     itemsLeftCount--;
        // } else {
        //     itemsLeftCount++;
        // }

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

const listPicture = document.querySelector('ul li::before');



var color = window.getComputedStyle( document.querySelector('ul li'), ':before').getPropertyValue('background-image');


console.log(color)