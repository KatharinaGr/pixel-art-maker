
const color = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');
const grid = document.createElement('table');
const col = document.getElementById('inputHeight');
const row = document.getElementById('inputWidth');

document.getElementById("sizePicker").onsubmit = function(event) {
  event.preventDefault();
  //table.remove('tbody');
  makeGrid();
}

function makeGrid() {

  if (grid.firstChild) {
    grid.firstChild.remove();
  };

  table.appendChild(grid);
  grid.deleteRow(-1);

  for (var i = 0; i < row.value; i++) {
    const r = grid.insertRow(i);
    for (var j = 0; j < col.value; j++) {
      const c = r.insertCell(j);
      c.addEventListener("click",(b) => {
      c.style.backgroundColor = color.value;
    })
  }};

};


makeGrid();
