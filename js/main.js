// función de abrir el menu

function abrirMenu() {
  document.getElementById("menu").style.width = "100%";
  document.getElementById("toogle-boton").style.display = "none";
  document.getElementById("close-boton").style.display = "block";
}

// funcion de ocultar el menú

function cerrarMenu() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("toogle-boton").style.display = "block";
  document.getElementById("close-boton").style.display = "none";
}

