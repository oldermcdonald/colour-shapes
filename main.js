// Code for Selena July 2019

const container = document.querySelector('.shape-container');
const reloadBtn = document.querySelector('.reload-btn');

function randomShape() {
  let shapes = ['square', 'circle', 'triangle-up','triangle-down', 'oval', 'rectangle'];
  return randomElement(shapes);
}

function randomColour() {
  // replace this array with triad colour hex generator algorithm
  let colours = ['#B3465A', '#FFFA96', '#FF7C93', '50A8CC', '#4F96B3'];
  return randomElement(colours);
}

function randomElement(array)  {
  return array[Math.floor(Math.random()*array.length)];
}

function applyColour(shape) {
  switch(shape.className) {
    case "triangle-up":
      shape.style.borderBottomColor = randomColour();
      break;
    case "triangle-down":
      shape.style.borderTopColor = randomColour();
      break;
    default:
      shape.style.backgroundColor = randomColour();
  }
}

function addShape() {
  const shape = document.createElement('div');
  shape.setAttribute("class", randomShape());
  applyColour(shape)
  container.appendChild(shape);
}

function renderShapes() {
  // first remove all children of container
  let firstShape = container.firstElementChild;
  while (firstShape) {
    firstShape.remove();
    firstShape = container.firstElementChild;
  }

  // then add children to container
  addShape()
  addShape()
  addShape()

  addShape()
  addShape()
  addShape()

  addShape()
  addShape()
  addShape()
}


reloadBtn.addEventListener("click", renderShapes);
renderShapes();
