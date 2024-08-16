function createTable() {
    var table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    
    for (var i = 0; i < 3; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 3; j++) {
            var td = document.createElement('td');
            td.textContent = 'Row ' + (i + 1) + ', Column ' + (j + 1); 
            td.style.border = '1px solid black';
            td.style.padding = '8px'; 
            tr.appendChild(td);
        }
        
        table.appendChild(tr);
    }
    
    var container = document.getElementById('table-container');
    container.appendChild(table);
}

createTable();