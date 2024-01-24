let todo_title = document.querySelector(".todo");
let end_date = document.querySelector(".our_date");
let sub = document.querySelector(".btn");
let body = document.querySelector("body");
let tasks = document.querySelector(".Tasks");
let doing = document.querySelector(".Doing");
let completed = document.querySelector(".Completed");
let counter = 0;
const currentDate = new Date().toDateString();
sub.addEventListener("click", () => {
    if (todo_title.value != "") {
        task_template();
    } else {
        alert("Please enter the title of your task");
    }
});

function task_template() {
    let container = document.createElement("div");
    container.className = "task_container";
    let task_title = document.createElement("div");
    task_title.innerHTML = `${todo_title.value} ${counter}`;
    counter++;
    let start_date = document.createElement("div");
    start_date.className = "start_date";
    start_date.innerHTML = `start : ${currentDate}`;
    container.appendChild(task_title);
    container.appendChild(document.createTextNode(`end : ${end_date.value}`));
    container.appendChild(start_date);
    let remove_btn = document.createElement("button");
    remove_btn.className = "remove_btn";
    remove_btn.innerHTML = "remove";
    container.appendChild(remove_btn);
    tasks.appendChild(container);
    remove_btn.addEventListener("click", () => {
        container.style.display = "none";
    });
    let btn_Doing = document.createElement("button");
    btn_Doing.className = "btn_doing";
    btn_Doing.innerHTML = "Doing";
    container.appendChild(btn_Doing);
    btn_Doing.addEventListener("click", () => {
        doing.appendChild(container);
    });
    let btn_completed = document.createElement("button");
    btn_completed.className = "btn_completed";
    btn_completed.innerHTML = "Comleted";
    container.appendChild(btn_completed);
    btn_completed.addEventListener("click", () => {
        completed.appendChild(container);
    });
    const _task = {
        title: todo_title.value,
        id: counter,
        end_date: end_date.value,
        start_date: currentDate,
    };

    const storage = JSON.parse(localStorage.getItem("tasks")) || [];
    storage.push(_task);
    localStorage.setItem("tasks", JSON.stringify(storage));
}
function local_Storage() {
    let storage_task = localStorage.getItem("tasks");
    storage_task = JSON.parse(storage_task);
    for (let data in storage_task) {
        let container = document.createElement("div");
        container.className = "task_container";
        let task_title = document.createElement("div");
        task_title.innerHTML = `${storage_task[data]["title"]} ${storage_task[data]["id"]}`;
        let start_date = document.createElement("div");
        start_date.className = "start_date";
        start_date.innerHTML = `start : ${storage_task[data]["start_date"]}`;
        container.appendChild(task_title);
        container.appendChild(
            document.createTextNode(`end : ${storage_task[data]["end_date"]}`)
        );
        container.appendChild(start_date);
        let remove_btn = document.createElement("button");
        remove_btn.className = "remove_btn";
        remove_btn.innerHTML = "remove";
        container.appendChild(remove_btn);
        tasks.appendChild(container);
        remove_btn.addEventListener("click", () => {
            container.style.display = "none";
        });
        let btn_Doing = document.createElement("button");
        btn_Doing.className = "btn_doing";
        btn_Doing.innerHTML = "Doing";
        container.appendChild(btn_Doing);
        btn_Doing.addEventListener("click", () => {
            doing.appendChild(container);
        });
        let btn_completed = document.createElement("button");
        btn_completed.className = "btn_completed";
        btn_completed.innerHTML = "Comleted";
        container.appendChild(btn_completed);
        btn_completed.addEventListener("click", () => {
            completed.appendChild(container);
        });
    }
}
local_Storage();
