
<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Pacman</title>
    <link rel="stylesheet" href="styles.css">
    <style media="screen">
      #try{
        /*display: none;*/
        position: absolute;
        left: 700px;
        top: 350px;
      }
      #vencido{
        position: absolute;
        left: 500px;
        top: 350px;
      }
      .puntajes{
        position: absolute;
        left: 600px;
        top: 50px;
        width: 300px;
        height: 400px;
        color: black;
        z-index: 2;
      }
      #bk{
        z-index: -1;
      }
      .formilla{
        display: none;
      }
      h3{
        position: absolute;
        left: 20px;
        top: 100px;
        font-family: Consolas;
        font-size: 30px;
        color: red;
        background-color: white;
      }
    </style>
  </head>
  <body>
    <div class="back" id="bk">
    <canvas id="player" width="600" height="600"></canvas>
    <img id="cementerio" src="fotos/cementerio.png">
    <img class="lab" id="rec" src="fotos/rectangulo.png">
    <img class="lab" id="semirec" src="fotos/parte_sup.png">
    <img class="lab" id="cuad" src="fotos/bloque.jpg">
    <img class="lab" id="cerrado" src="fotos/pacman_cerrado.png">
    <img class="lab" id="pasti" src="fotos/pastilla.png">
    <img class="lab" id="muerto" src="fotos/muerto.png">
    <img id="lin" src="fotos/linea.png">
    <img id="pac" src="fotos/primer pacman.png">
    <img id="ppsup" src="fotos/primer pacman_sup.png">
    <img id="cersup" src="fotos/pacman_cerrado_sup.png">
    <img id="ppbaj" src="fotos/primer pacman_bajo.png">
    <img id="cerizq" src="fotos/pacman_cerrado_izq.png">
    <img id="ppizq" src="fotos/primer pacman_izq.png">
    <img id="cerbajo" src="fotos/pacman_cerrado_bajo.png">
    <img class="fan" id="azul" src="fotos/fantasma_azul.png">
    <img class="fan" id="naranja" src="fotos/fantasma_naranja.png">
    <img class="fan" id="rosa" src="fotos/fantasma_rosa.png">
    <img class="fan" id="verde" src="fotos/fantasma_verde.png">
    <button type="button" name="button" id="try">Intentar de nuevo</button>
    <form class="formilla" action="game.php" method="post">
      <input type="text" name="puntuacion" value="" class="formilla" id="point">
      <input type="submit" name="boton" value="Darse por vencido" id="vencido">
    </form>
   </div>
   <div class="puntajes">

   </div>
   <div class="marcador">
     <p id="puntos"></p>
   </div>
<script src="script.js">

</script>

   <script src="map.js"></script>
   <script type="text/javascript" src="ghost.js"></script>
   <?php
   $jugador = "";
   $puntaje = "";
     $jugador = $_POST["usuario"];
     $puntaje = $_POST["puntuacion"];
     echo "<h2>" . $jugador . "</h2>";
     echo "<h3>" . $puntaje . "</h3>";
    ?>



  </body>
</html>
