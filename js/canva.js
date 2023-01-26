var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var points = [];
var activePoint;

// Draw the cartesian plane
function drawAxes() {
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
}

// Dibuja un punto en las coordenadas (x, y)
function drawPoint(x, y, label) {
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillText(label, x + 10, y);
}

// Añade un punto al hacer clic en el canvas
canvas.onclick = function (e) {
  var x = e.clientX - canvas.offsetLeft - canvas.width / 2;
  var y = canvas.height / 2 - (e.clientY - canvas.offsetTop);
  var label = prompt("What is your strategy?:");
  points.push({ x: x, y: y, label: label });
  redraw();
};

// Muestra las coordenadas del punto al hacer clic en él
canvas.onmousedown = function (e) {
  var x = e.clientX - canvas.offsetLeft - canvas.width / 2;
  var y = canvas.height / 2 - (e.clientY - canvas.offsetTop);
  for (var i = 0; i < points.length; i++) {
    if (Math.abs(points[i].x - x) < 5 && Math.abs(points[i].y - y) < 5) {
      activePoint = points[i];
      break;
    }
  }
  if (activePoint) {
    alert(
      "Coordenadas: (" +
        activePoint.x +
        ", " +
        activePoint.y +
        ")\nEtiqueta: " +
        activePoint.label
    );
  }
};

// Vuelve a dibujar el canvas
function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawAxes();
  for (var i = 0; i < points.length; i++) {
    drawPoint(
      points[i].x + canvas.width / 2,
      canvas.height / 2 - points[i].y,
      points[i].label
    );
  }
}

drawAxes();
// Aumentar una etiqueta, titulo, descripcion. Coordenada.
// Ver la forma de guardar/almacenar la data en Backend - Firebase
// ver la posibilidad de editar los nombres, luego de plot

// Una vez que se agregue punto, darle save. Deberia aparecer un botón de "Ver Progreso" y envie al gráfico de barras. Es ideal que aparezca en la página (probar)
// el gráfico de barras aparece como una nueva página (probar)


