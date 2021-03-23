class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;

      this.w = 100;
      this.h = this.w/imgRatio;
      this.x = W/2 - this.w/2;
      this.y = H - this.h * 2;

      this.draw();      
    }
    img.src = "images/car.png";   
  }

  draw() {    
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img, this.x,this.y, this.w, this.h);
  }

  moveLeft() {
    if (this.x > W/15){ // Empêcher voiture d'aller sur l'herbe
      this.x -= 10;
    }    
  }
  moveRight() {
    if (this.x < W-this.w - W/15){ // Empêcher voiture d'aller sur l'herbe
      console.log(this.x)
      this.x += 10;
    }    
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.h;
  }
}