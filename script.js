let speed = 2;
let canvas = document.getElementById("player");
let ctx = canvas.getContext("2d");
let im = document.getElementById("pac");
let cer = document.getElementById('cerrado');
let im_sup = document.getElementById("ppsup");
let cer_sup = document.getElementById('cersup');
let im_bajo = document.getElementById("ppbaj");
let cer_bajo = document.getElementById('cerbajo');
let im_izq = document.getElementById("ppizq");
let cer_izq = document.getElementById('cerizq');
let morido = document.getElementById('muerto');
let cem = document.getElementById('cementerio');
let spxpac = 0;
let spypac = 0;
let timer = 0;
let run = true;
let puntaje = 0;
let btn = document.getElementById("try");

class personaje {
  constructor(img, x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = w;
    this.img = img;
    this.di = 1;
    this.change = "d";
    this.ab = true;
    /*this.change = true; */
  }
  dibujar(){
    if (this.di != 0) {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

  }
  limit(){
    if (this.x < 0 || this.x > 600 - this.w || this.y < 0 || this.y > 600 - this.h ) {
      return true;
    }
  }
  collision(obj1){
    if ((obj1.y + obj1.h < this.y) ||
    (obj1.y > this.y + this.h) ||
    (obj1.x + obj1.w < this.x) ||
    (obj1.x > this.x + this.w)) {
      return false;
    } else {
      return true;
    }
  }
  collisionfan(obj1){
    if ((obj1.y + obj1.h <= this.y) ||
    (obj1.y >= this.y + this.h) ||
    (obj1.x + obj1.w <= this.x) ||
    (obj1.x >= this.x + this.w)) {
      return false;
    } else {
      return true;
    }
  }
}

function move(pla) {
  pla.lastx = pla.x;
  pla.lasty = pla.y;
  document.addEventListener("keydown", function(e){
      if (e.keyCode == "39"){
        spxpac = speed;
        spypac = 0;
        ex = false;
        ey = true;
        pla.change = "d";
      } else if (e.keyCode == "37") {
        spxpac = -speed;
        spypac = 0;
        ex = false;
        ey = true;
        pla.change = "i";
      }
      if (e.keyCode == "38") {
        spypac = -speed;
        spxpac = 0;
        ey = false;
        ex = true;
        pla.change = "ar";
      }else if (e.keyCode == "40") {
        spypac = speed;
        spxpac = 0;
        ey = false;
        ex = true;
        pla.change = "ab";
      }
  })
  pla.x = pla.x + spxpac;
  pla.y = pla.y + spypac;
  let col = true;
for (var i = 0; i < dibs.length; i++) {
  if (pla.collisionfan(dibs[i])) {
    pla.x = pla.lastx;
    pla.y = pla.lasty;
    col = false;
  }
 }
 if (pla.x + pla.w <= 0) {
   pla.x = 600;
 }else if (pla.x >= 600) {
   pla.x = 0;
 }
 if (timer % 10 == 0) {
   if (spxpac != 0 || spypac != 0) {
     switch (pla.change) {
       case "d":
         if (col) {
           if (pla.ab) {
             pla.img = cer;
             pla.ab = false;
           }else {
             pla.img = im;
             pla.ab = true;
           }
         }
         break;
       case "i":
           if (col) {
             if (pla.ab) {
               pla.img = cer_izq;
               pla.ab = false;
             }else {
               pla.img = im_izq;
               pla.ab = true;
             }
           }
         break;
        case "ar":
             if (col) {
               if (pla.ab) {
                 pla.img = cer_sup;
                 pla.ab = false;
               }else {
                 pla.img = im_sup;
                 pla.ab = true;
               }
             }
           break;
        case "ab":
               if (col) {
                 if (pla.ab) {
                   pla.img = cer_bajo;
                   pla.ab = false;
                 }else {
                   pla.img = im_bajo;
                   pla.ab = true;
                 }
               }
             break;
     }
   } else {
     pla.img = im;
   }
 }
 timer += 1;

}
let momento;
let Pacman = new personaje(im, 300, 520, 37, 37);
let varia;
function update() {
  if (run) {
    ctx.clearRect(0, 0, 600, 600);
    Pacman.dibujar();
    drawmap();
    move(Pacman);
    for (var i = 0; i < pas.length; i++) {
      if (Pacman.collision(pas[i])) {
        if (pas[i].dib) {
          puntaje += 1;
        }

        if (pas[i].type == "pastillota") {
          if (pas[i].dib) {
            muerte();
            momento = timer;
          }
        }
        pas[i].dib = false;
      }
    }
    if (timer == momento + 100) {
      vida();
    }
    for (var i = 0; i < fantasmas.length; i++) {
      fantasmas[i].lastx = fantasmas[i].x;
      fantasmas[i].lasty = fantasmas[i].y;
      fantasmas[i].dibujar();
      fantasmas[i].traslado();
      //fantasmas[i].dir = curdir;
      let n = Math.floor(Math.random() * 4);
      for (var j = 0; j < dibs.length; j++){
        if (fantasmas[i].collisionfan(dibs[j])) {
          fantasmas[i].x = fantasmas[i].lastx;
          fantasmas[i].y = fantasmas[i].lasty;
          switch (fantasmas[i].dir) {
            case 0:
              varia = Math.floor(Math.random() * 4);
              while (varia == 0) {
                varia = Math.floor(Math.random() * 4);
            }
              fantasmas[i].dir = varia;
              break;
            case 1:
              varia = Math.floor(Math.random() * 4);
              while (varia == 1) {
                varia = Math.floor(Math.random() * 4);
              }
                fantasmas[i].dir = varia;
              break;
              case 2:
                varia = Math.floor(Math.random() * 4);

                while (varia == 2) {
                  varia = Math.floor(Math.random() * 4);
                }
                  fantasmas[i].dir = varia;
                break;
              case 3:
                  varia = Math.floor(Math.random() * 4);

                  while (varia == 3) {
                    varia = Math.floor(Math.random() * 4);
                  }
                    fantasmas[i].dir = varia;
                  break;
          }
        }
        /* while (fantasmas[i].siguiente(n).collisionfan(dibs[i])) {
           n = Math.floor(Math.random() * 4);
         }*/
       }
      //fantasmas[i].dir = n;
      if (Pacman.collisionfan(fantasmas[i])) {
        if (fantasmas[i].img == morido) {
          fantasmas[i].img = cementerio;
        }else if (fantasmas[i].img == azul || fantasmas[i].img == verde ||
          fantasmas[i].img == naranja || fantasmas[i].img == rosa) {
              ctx.font="30pt Verdana";
  						ctx.fillStyle = "blue";
  						ctx.fillText("GameOver",200,300);
              run = false;
              btn.style.display = "inline";
        }
      }
    }
document.getElementById('puntos').innerHTML = "Puntaje: " + puntaje;
  }
 }
document.getElementById('point').value = puntaje;
setInterval(update, 20);
