// First create div elements
// then assign random css class shape to div



const container = document.querySelector('.shape-container');

function randomShape() {
  let shapes = ['square', 'circle', 'triangle', 'oval', 'rectangle'];
  return randomElement(shapes);
}

function randomColour() {
  let colours = ['blue', 'red', 'green'];
  return randomElement(colours);
}

function randomElement(array)  {
  return array[Math.floor(Math.random()*array.length)];
}

function addShape() {
  let shape = document.createElement('div');
  container.appendChild(shape);
}