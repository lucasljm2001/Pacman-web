let blocksize = 40;
let pastisize = 20;
let sup = document.getElementById('semirec');
let re = document.getElementById('rec');
let linea = document.getElementById('lin');
let cuadra = document.getElementById('cuad');
let pastilla = document.getElementById('pasti');
let dibs = [];
let pas = [];

class map {
  constructor(img, x, y, w, h, type, dib) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.type = type;
    this.dib = true;
  }
  drawtile(){
    if (this.type == "block" || this.type == "pastillota") {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }else if (this.type == "pastillita") {
      ctx.drawImage(this.img, this.x + 10, this.y + 10, this.w, this.h);
    }
  }
}
let tmap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2 ,2, 2, 3, 1],
    [1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 3, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 0, 0, 1, 2, 1, 1, 2, 1],
    [0, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 0],
    [1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2 ,1, 1, 2, 1],
    [1, 3, 2, 2, 2, 2, 2, 0, 0, 2, 2 ,2, 2, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
for (var r = 0; r < tmap.length; r++) {
    for (var c = 0; c < tmap[0].length; c++) {
      let tile = tmap[r][c];
      if (tile == 1) {
        dibs.push(new map(cuadra, c * blocksize, r * blocksize, blocksize, blocksize, "block", true));
      } else if (tile == 2) {
        pas.push(new map(pastilla, c * blocksize, r * blocksize, pastisize, pastisize, "pastillita", true));
      }else if (tile == 3) {
        pas.push(new map(pastilla, c * blocksize, r * blocksize, blocksize, blocksize, "pastillota", true));
      }
    }
  }

function drawmap() {
  for (var i = 0; i < dibs.length; i++) {
    dibs[i].drawtile();
  }
  for (var i = 0; i < pas.length; i++) {
    if (pas[i].dib) {
      pas[i].drawtile();
    }
  }
}
