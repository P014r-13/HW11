let rows = document.querySelectorAll(".row");
let hidebtn = document.querySelector(".hide");
let addbtn = document.querySelector(".add");
let table = document.querySelector(".table");
let list = [
    "blue",
    "purple",
    "green",
    "pink",
    "yellow",
    "red",
    "white",
    "black",
];

function ele() {
    for (let i = 0; i < 8; i++) {
        rows[i].style.backgroundColor = list[i];
    }
}
ele();
hidebtn.addEventListener("click", function hide() {
    for (let i = 1; i < 5; i++) {
        rows[i].style.display = "None";
    }
});
addbtn.addEventListener("click", () => {
    for (let i = 0; i < 3; i++) {
        let newrow = document.createElement("tr");
        for (let i = 0; i < 3; i++) {
            let td = document.createElement("td");
            td.style.height = "30px";
            td.style.border = "1px solid black";
            newrow.appendChild(td);
            table.appendChild(newrow);
        }
    }
});
