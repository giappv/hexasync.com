var ANIMATION_INTERVAL = 120;
var NUM_THINGS = 20;
var THING_SIZE = 40;

var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

var canvasColor = ~~(Math.random() * 360);

var things = [];

function getRandomArbitrary(min, max) {
  return (Math.random() * (max - min)) + min;
}

function makeThings() {
  var tmp;
  for (var i = 0; i < NUM_THINGS; i++) {
    var color = ~~(Math.random() * 360);
    var fillStyle = "hsl(" + color + ", 60%, 60%)";
    things.push({
      position: {
        // (x, y) from upper left corner of thing
        x: getRandomArbitrary(0, canvas.width - THING_SIZE),
        y: getRandomArbitrary(0, canvas.width - THING_SIZE)
      },
      velocity: {
        x: getRandomArbitrary(-THING_SIZE / 2, THING_SIZE / 2),
        y: getRandomArbitrary(-THING_SIZE / 2, THING_SIZE / 2)
      },
      width: THING_SIZE,
      height: THING_SIZE,
      fillStyle: fillStyle,
      strokeStyle: "white"
    });
  }
}

function drawThing(item) {
  context.fillStyle = "black";
  context.fillRect(item.position.x - item.width / 4, item.position.y - item.height / 4, item.width, item.height);
  //context.strokeStyle = item.strokeStyle;
  //context.strokeRect(item.position.x - item.width / 4, item.position.y - item.height / 4, item.width, item.height);
  
  context.fillStyle = item.fillStyle;
  context.fillRect(item.position.x, item.position.y, item.width, item.height);
  context.strokeStyle = item.strokeStyle;
  context.strokeRect(item.position.x, item.position.y, item.width, item.height);

  //context.fillRect(item.position.x + item.width / 4, item.position.y + item.height / 4, item.width, item.height);
  //context.strokeStyle = "black";
  //context.strokeRect(item.position.x + item.width / 4, item.position.y + item.height / 4, item.width, item.height);
}

function drawThings() {
  var item;
  for (var i = 0; i < things.length; i++) {
    item = things[i];
    drawThing(item);
  }
}

function drawCanvas() {
  var fillStyle = "hsl(" + canvasColor + ", 60%, 60%)";

  context.fillStyle = fillStyle;
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
}

function thingRangeCheck(item) {
  if (item.position.x < 0) {
    item.position.x = context.canvas.width;
  } else if (item.position.x > context.canvas.width) {
    item.position.x = 0;
  }
  if (item.position.y < 0) {
    item.position.y = context.canvas.height;
  } else if (item.position.y > context.canvas.height) {
    item.position.y = 0;
  }
}

function moveThings() {
  var item;
  for (var i = 0; i < things.length; i++) {
    item = things[i];
    item.position.x = item.position.x + item.velocity.x;
    item.position.y = item.position.y + item.velocity.y;

    thingRangeCheck(item);
  }
}

function renderAll() {
  // Canvas window may have been resized
  context.canvas.width = window.innerWidth;
  context.canvas.height = window.innerHeight;

  drawCanvas(); // reset canvas

  moveThings();
  drawThings();
}

//
// create animation objects & start the animation
//
makeThings();
setInterval(renderAll, ANIMATION_INTERVAL);