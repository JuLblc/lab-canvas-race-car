let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
  //
  let x = 0;
  ctx.clearRect(0,0,W,H);
  //1ere bande verte
  ctx.fillStyle = 'green';
  ctx.fillRect(x, 0, W/15, H);
  //1ere bande grise
  x += W/15;
  ctx.fillStyle = 'gray';
  ctx.fillRect(x, 0, W/30, H);
  // Route principale
  x += W/30 + 10;
  ctx.fillStyle = 'gray';
  ctx.fillRect(x, 0, W-220, H);
  //2eme bande grise
  x += W-220 + 10;
  ctx.fillStyle = 'gray';
  ctx.fillRect(x, 0, W/30, H);
  //2eme bande verte
  x += W/30
  ctx.fillStyle = 'green';
  ctx.fillRect(x, 0, W/15, H);
  // Rectangle ligne séparation route
  let y = 10;
  x = W/2;
  ctx.beginPath();
  ctx.setLineDash([50]);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 20;
  ctx.moveTo(x,y)
  ctx.lineTo(x, H);
  ctx.stroke(); 

  //
  // Iteration 2: car drawing
  //

  car.draw();
  
  //
  // Iteration #4: obstacles
  //

  // TODO

  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

document.onkeydown = function (e) {
  if (!car) return;

  // TODO
}

let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
  car = new Car();
  

  // TODO

  animLoop();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
