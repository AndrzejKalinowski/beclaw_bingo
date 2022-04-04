var number_of_clicked_cells = new Array(x_size)

var x_true = new Array(x_size)
for(var i = 0; i < x_size; i++){
    x_true[i] = true;
}
var y_true = new Array(y_size)
for(var i = 0; i < y_size; i++){
    y_true[i] = true;
}
var y_for_check = new Array(y_size)
for(var i = 0; i < y_size; i++){
    y_for_check[i] = false;
}

var diag_for_check_a = new Array(x_size)
for(var i = 0; i < diag_for_check_a.length; i++){
    diag_for_check_a[i] = false;
}
var diag_for_check_b = new Array(x_size)
for(var i = 0; i < diag_for_check_b.length; i++){
    diag_for_check_b[i] = false;
}

var diag_true = new Array(x_size);
for(var i = 0; i < diag_true.length; i++){
    diag_true[i] = true;
}
for (var i = 0; i < x_size; i++) {
    number_of_clicked_cells[i] = new Array(y_size);
    for(var j = 0; j < y_size; j++){
        number_of_clicked_cells[i][j] = false;
    }
}
  
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

function bingo() {
    alert("BINGO!")
    location.reload()
}

shuffle(sayings); //suffeling the array of beclaw's sayings

saying_index = 0
for (var i = 0; i < x_size; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < y_size; j++){
        // number_of_clicked_cells.push(false)
        var cell = document.createElement("td");
        let cellText = document.createElement("button");
        
        if(i == x_size/2 - 0.5 && j == y_size/2 - 0.5){
            number_of_clicked_cells[x_size/2 - 0.5][y_size/2 - 0.5] = true
            cellText.innerHTML = "free";
            cellText.classList.add("bingo_cell", "bingo_cell_unclicked");
            cellText.style.textDecoration = "line-through";
        }
        else{
            // saying_index = Math.floor(Math.random() * sayings.length);
            cellText.innerHTML = sayings[saying_index];
            cellText.id = [i, j];
            // delete sayings[saying_index]
            cellText.classList.add("bingo_cell", "bingo_cell_unclicked");
            cellText.onclick = function(event){
                console.clear()
                cellText.classList.replace("bingo_cell_unclicked", "bingo_cell_clicked");
                number_of_clicked_cells[cellText.id[0]][cellText.id[2]] = true;
                // console.log(number_of_clicked_cells);
                // console.log(cellText.id);

                // checking for horizontal bingo
                for(var a = 0; a < x_size; a++){
                    // console.log(a, number_of_clicked_cells[a])
                    if(JSON.stringify(number_of_clicked_cells[a]) == JSON.stringify(x_true)){
                        bingo()
                    }
                }
                // checking for vertical bingo
                for(var b = 0; b < y_size; b++){
                    y_for_check[b] = number_of_clicked_cells[b][cellText.id[2]]
                }                        
                // console.log(y_for_check)
                if(JSON.stringify(y_for_check) == JSON.stringify(y_true)){
                    bingo()
                }
                // checking for diagonal bingo
                if(x_size == y_size){
                    for(var i = 0; i < x_size; i++){
                        diag_for_check_a[i] = number_of_clicked_cells[i][i];
                        // console.log(number_of_clicked_cells[i][i]);
                    }
                    if(JSON.stringify(diag_for_check_a) == JSON.stringify(diag_true)){
                        bingo()
                    }
                    for(var i = x_size; i > 0; i = i - 1){
                        console.log(x_size - i, i - 1)
                        // console.log(number_of_clicked_cells[x_size - i][i - 1])
                        diag_for_check_b[x_size - i] = number_of_clicked_cells[x_size - i][i - 1]
                    }
                    if(JSON.stringify(diag_for_check_b) == JSON.stringify(diag_true)){
                        bingo()
                    }

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