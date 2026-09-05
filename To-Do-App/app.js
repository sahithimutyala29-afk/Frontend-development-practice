import { createTask } from "./task.js";
import { saveTasks, loadTasks } from "./storage.js";
const taskInput=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");
let tasks=loadTasks();
displayTasks();
addBtn.addEventListener("click",()=>{
    if(taskInput.value.trim()=="") return;
    tasks.push(createTask(taskInput.value));
    saveTasks(tasks);
    taskInput.value="";
    displayTasks();
});
function displayTasks(){
    taskList.innerHTML="";
    tasks.forEach((task,index)=>{
        let li=document.createElement("li");
        li.className="list-group-item d-flex justify-content-between align-items-center";
        if(task.completed){
            li.classList.add("completed");
        }
        li.innerHTML=`
            ${task.text}
            <div>
                <button class="btn btn-success btn-sm complete">✓</button>
                <button class="btn btn-danger btn-sm delete">Delete</button>
            </div>
        `;
        li.querySelector(".complete").addEventListener("click",()=>{
            task.completed=!task.completed;
            saveTasks(tasks);
            displayTasks();
        });
        li.querySelector(".delete").addEventListener("click",()=>{
            tasks.splice(index,1);
            saveTasks(tasks);
            displayTasks();
        });
        taskList.appendChild(li);
    });

}