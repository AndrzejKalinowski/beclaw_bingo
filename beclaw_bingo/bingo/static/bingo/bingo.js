var body = document.getElementsByTagName("body")[0]; 
var ourTable = document.createElement("table");
var ourTableBody = document.createElement("tbody");
// var sayings = "{{saying_list}}"

for (var i = 0; i < x_size; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < y_size; j++){
        var cell = document.createElement("td");
        // var cellText = document.createTextNode(sayings[Math.floor(Math.random() * sayings.length)]);
        let cellText = document.createElement("button");
        cellText.innerHTML = sayings[Math.floor(Math.random() * sayings.length)];
        cellText.classList.add("bingo_cell")
        cellText.onclick = function(event){
            cellText.style.backgroundColor = "#0505AF"
        }
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    ourTableBody.appendChild(row);
}
ourTable.appendChild(ourTableBody);
body.appendChild(ourTable);

// ourTable.setAttribute("border", "2");
// document.getElementById("p1").innerHTML = Math.floor(Math.random() * sayings.length);
// document.getElementById("p1").innerHTML = "hello";
// document.getElementById("p1").innerHTML = sayings.length;