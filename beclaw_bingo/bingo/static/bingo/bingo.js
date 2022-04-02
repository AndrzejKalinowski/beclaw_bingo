var number_of_clicked_cells = 0;
var body = document.getElementsByTagName("body")[0]; 
var ourTable = document.createElement("table");
var ourTableBody = document.createElement("tbody");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

shuffle(sayings); //suffeling the array of beclaw's sayings

saying_index = 0
document.write(sayings)
for (var i = 0; i < x_size; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < y_size; j++){
        var cell = document.createElement("td");
        let cellText = document.createElement("button");
        
        if(i == x_size/2 - 0.5 && j == y_size/2 - 0.5){
            cellText.innerHTML = "free";
            cellText.classList.add("bingo_cell", "bingo_cell_unclicked");
            cellText.style.textDecoration = "line-through";
        }
        else{
            // saying_index = Math.floor(Math.random() * sayings.length);
            cellText.innerHTML = sayings[saying_index];
            // delete sayings[saying_index]
            cellText.classList.add("bingo_cell", "bingo_cell_unclicked");
            cellText.onclick = function(event){
                cellText.classList.replace("bingo_cell_unclicked", "bingo_cell_clicked");
                number_of_clicked_cells++;
                console.log(number_of_clicked_cells);
                if(number_of_clicked_cells >= 5){
                    alert("BINGO!")
                    location.reload();
                }
            }
            saying_index++;
        }
        cell.appendChild(cellText);
        row.appendChild(cell);

    }
    ourTableBody.appendChild(row);
}
ourTable.appendChild(ourTableBody);
body.appendChild(ourTable);