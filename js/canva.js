var ANIMATION_INTERVAL = 120;
var NUM_THINGS = 2;
var THING_SIZE = 40;

var img_src = [
  'vendor/custom/Icons/Amazon.png',
  'vendor/custom/Icons/GoogleSheets.png',
  'vendor/custom/Icons/magento.png',
  'vendor/custom/Icons/MicrosoftDynamics.png',
  'vendor/custom/Icons/Mysql.png',
  'vendor/custom/Icons/Odoo.png',
  'vendor/custom/Icons/oracle.png',
  'vendor/custom/Icons/PointOfSales.png',
  'vendor/custom/Icons/SalesForce.png',
  'vendor/custom/Icons/SqlServer.png',
  'vendor/custom/Icons/woocommerce.png',
  'vendor/custom/Icons/Amazon.png',
  'vendor/custom/Icons/GoogleSheets.png',
  'vendor/custom/Icons/magento.png',
  'vendor/custom/Icons/MicrosoftDynamics.png',
  'vendor/custom/Icons/Mysql.png',
  'vendor/custom/Icons/Odoo.png',
  'vendor/custom/Icons/oracle.png',
  'vendor/custom/Icons/PointOfSales.png',
  'vendor/custom/Icons/SalesForce.png',
  'vendor/custom/Icons/SqlServer.png',
  'vendor/custom/Icons/woocommerce.png',
  'vendor/custom/Icons/Amazon.png',
  'vendor/custom/Icons/GoogleSheets.png',
  'vendor/custom/Icons/magento.png',
  'vendor/custom/Icons/MicrosoftDynamics.png',
  'vendor/custom/Icons/Mysql.png',
  'vendor/custom/Icons/Odoo.png',
  'vendor/custom/Icons/oracle.png',
  'vendor/custom/Icons/PointOfSales.png',
  'vendor/custom/Icons/SalesForce.png',
  'vendor/custom/Icons/SqlServer.png',
  'vendor/custom/Icons/woocommerce.png'
];

document.addEventListener('DOMContentLoaded', function(event) {  //your code right here;
  
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
        strokeStyle: "white",
        img: img_src[i],
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

  function drawImage(item) {
    var img = new Image();
    /*img.onload = function () {
      context.drawImage(img, item.position.x, item.position.y, item.width, item.height);
    }*/
    img.src = item.img;
    context.restore();
  }

  
  
  function drawThings() {
    var item;
    for (var i = 0; i < things.length; i++) {
      item = things[i];
      drawThing(item);
      //drawImage(item);
    }
  }
  
  function drawCanvas() {
    var fillStyle = "hsl(" + canvasColor + ", 60%, 60%)";
    context.fillStyle = fillStyle;
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // clear canvas
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }

  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000/60);
      };
  })();
  
  window.cancelRequestAnimFrame = (function () {
    return window.cancelAnimationFrame ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.oCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      clearTimeout
  })();
  
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
      //console.log(item.velocity.x);
      //console.log(item.velocity.y);
      //thingRangeCheck(item);
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
  

  function animloop(){
    window.requestAnimFrame(animloop);
    renderAll();
  };
  
  //
  // create animation objects & start the animation
  //
  drawCanvas();
  makeThings();
  animloop();
  //renderAll();
  
  //setInterval(renderAll, ANIMATION_INTERVAL);

  

  //window.requestAnimFrame(renderAll);

});



