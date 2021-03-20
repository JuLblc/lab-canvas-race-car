function random(from, to) {
  // TODO
  var minGap = 200;
  var maxGap = 400;
  var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

  var myWidth = W - 220 - gap; // Largeur de la route - gap

  var posX = Math.floor(Math.random() * (gap - 110 + 1) + 110); // Obtenir posX random entre 110 (départ de la route) et gap sans que l'obstacle dépasse
  return [myWidth,posX];
}

class Obstacle {
  constructor(w, h, color, x, y) {
    this.w = w;
    this.h = h;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  draw() {
    // TODO
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  hits(car) {
    // TODO
  }
}