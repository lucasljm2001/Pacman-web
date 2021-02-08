<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Bienvenido a Pacman</title>
    <link rel="stylesheet" href="estilos.css">
    <style media="screen">
      table, th, td {color: SlateBlue; border: 1px solid red; border-collapse:collapse;}
      a {position: absolute; left: 500px; top: 500px;}
      #tab {position: absolute; left: 100px;}
      .tabla {font-size: 30px;}
      .forma {position: absolute; left: 500px; top: 300px;}
    </style>
  </head>
  <body>
    <h1 class="titulos">Bienvenido a Pacman, el juego mas divertido de la web</h1>
    <p>Estas son las mejores puntuaciones, ¿estas listo para sumarte a ellas?</p>
    <table id="tab">
      <tr class="tabla">
        <th class="tabla" id="play">Jugador</th>
        <th class="tabla" id="point">Puntaje</th>
      </tr>
    </table>
    <div class="forma">
      <form action="game.php" method="post" id="form1">
        <label for="usuario">Ingrese su nombre</label>
        <input type="text" name="usuario" value="">
        <input form="form1" type="submit" name="submit" value="Presione aqui para aceptar el desafio">
      </form>
    </div>
   <?php
   /*$servername = "localhost";
   $username = "root";
   $password = "";
   $dbname = "mydb";
   $jugador = $_POST["usuario"];

   // Create connection
   $conn = new mysqli($servername, $username, $password, $dbname);

   $sql = "INSERT INTO puntajes (player, points)
   VALUES ($jugador, $jugador)";

   if ($conn->query($sql) === TRUE) {
     echo "Jugador agregado successfully";
   } else {
     echo "Error creating table: " . $conn->error;
   }

   $conn->close();*/

   ?>


  </body>
</html>
