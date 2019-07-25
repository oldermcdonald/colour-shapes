// First create div elements
// then assign random css class shape to div



const container = document.querySelector('.shape-container');

function randomShape() {
  let shapes = ['square', 'circle', 'triangle-up','triangle-down', 'oval', 'rectangle'];
  return randomElement(shapes);
}

function randomColour() {
  let colours = ['blue', 'red', 'green'];
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