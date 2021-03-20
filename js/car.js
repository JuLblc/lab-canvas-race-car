class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.draw();      
    }
    img.src = "images/car.png";
    this.w = 100;
    this.h = 150;
    this.x = W/2 - this.w/2;
    this.y = H - this.h * 2;
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img, this.x,this.y, this.w, this.h);
  }

  moveLeft() {
    // TODO
  }
  moveRight() {
    // TODO
  }
}