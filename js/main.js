let car;
let myObstacles = [];
let gameover = false;
let points = 0;

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
  for (let i = 0;i < myObstacles.length;i++){
    myObstacles[i].y +=1;
    myObstacles[i].draw();    
  }

  //
  // Iteration #5: collisions
  //
  gameover = myObstacles.some(function (obstacle) {
    return obstacle.hits(car);
  });

  //
  // Iteration #6: points
  //
  ctx.font = '48px serif';  
  ctx.fillText(`Score: ${points}`, 150, H-50);
}

function score(frames){
  return frames % 100 === 0 ? points += 10 : points;
}

document.onkeydown = function (e) {
  if (!car) return;
  if (e.key === "ArrowLeft"){
    car.moveLeft();
  } else if (e.key === "ArrowRight") {
    car.moveRight();
  }
}

let raf;
let frames = 0;
function animLoop() {
  frames++;
  if (frames % 360 === 0){
    myObstacles.push(new Obstacle(random()[0], 50, "#B02323", random()[1], 0)); // w, h, color, x, y
  }

  score(frames);
  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  } else {
    document.querySelector('.looser').style.visibility = "visible";
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
  document.querySelector('.looser').style.visibility = "hidden";
  car = new Car();  
  animLoop();
}

document.getElementById("start-button").onclick = function() {
  myObstacles = []; //RAZ
  points = 0;
  startGame();  
};

// auto-start
startGame();
