
let fantasmas = [];

let azul = document.getElementById("azul");
fantasmas.push(azul);
let verde = document.getElementById("verde");
fantasmas.push(verde);
let naranja = document.getElementById("naranja");
fantasmas.push(naranja);
let rosa = document.getElementById("rosa");
fantasmas.push(rosa);



class fantasma extends personaje {
  constructor(img, x, y, w, h, dir) {
    super(img);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = w;
    this.dir = dir;
    this.vida = img;
    this.sigx;
    this.sigy;
  }
  traslado(){
    if (this.dir == 0) {
      this.x += -speed;
    }else if (this.dir == 1) {
      this.x += speed;
    }else if (this.dir == 2) {
      this.y += -speed;
    }else if (this.dir == 3) {
      this.y += speed;
    }
    if (this.x + this.w <= 0) {
      this.x = 600;
    }else if (this.x >= 600) {
      this.x = 0;
    }
  }
  siguiente(d){
    let futuro = new fantasma(this.x, this.y, this.w, this.h, d)
    futuro.traslado();
    return futuro;
    }
  }


//direcciones[Math.floor(Math.random() * 3)]
for (var i = 0; i < fantasmas.length; i++) {
  fantasmas[i] = new fantasma (fantasmas[i],
    i * 30 + 250, 280, 40, 40, Math.floor(Math.random() * 4));
}
function muerte(){
  for (var i = 0; i < fantasmas.length; i++) {
    fantasmas[i].img = morido;
  }
}
function vida(){
  for (var i = 0; i < fantasmas.length; i++) {
    fantasmas[i].img = fantasmas[i].vida;
  }
}
