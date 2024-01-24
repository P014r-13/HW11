let body = document.querySelector(".body");
let list = [
    { name: "James", age: 9, country: "United States" },
    { name: "Rony", age: 31, country: "United Kingdom" },
    { name: "Peter", age: 58, country: "Canada" },
    { name: "Marks", age: 20, country: "Spain" },
];
let table = document.createElement("table");
let thead = document.createElement("thead");
let inner_th = ["Name", "Age", "Country"];
for (let i = 0; i < 3; i++) {
    let th = document.createElement("th");
    th.innerHTML = inner_th[i];
    th.style.border = "1px solid black";
    thead.appendChild(th);
}
table.appendChild(thead);
body.appendChild(table);
let tbody = document.createElement("tbody");
for (let item in list) {
    let tr = document.createElement("tr");
    if (list[item]["age"] < 10) {
        for (let key in list[item]) {
            let td = document.createElement("td");
            td.style.backgroundColor = "yellow";
            td.innerHTML = list[item][key];
            td.style.border = "1px solid black";
            tr.appendChild(td);
        }
    } else if (10 < list[item]["age"] && list[item]["age"] < 39) {
        for (let key in list[item]) {
            let td = document.createElement("td");
            td.style.backgroundColor = "green";
            td.innerHTML = list[item][key];
            td.style.border = "1px solid black";
            tr.appendChild(td);
        }
    } else if (40 < list[item]["age"] && list[item]["age"] < 79) {
        for (let key in list[item]) {
            let td = document.createElement("td");
            td.style.backgroundColor = "red";
            td.innerHTML = list[item][key];
            td.style.border = "1px solid black";
            tr.appendChild(td);
        }
    }
    tbody.appendChild(tr);
    table.appendChild(tbody);
    body.appendChild(table);
}
