
// Cursor dinámico
let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    header.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    header.classList.remove("active");
};

let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + "px";
    cursor1.style.left = e.pageX + "px";
    cursor2.style.top = e.pageY + "px";
    cursor2.style.left = e.pageX + "px";
};

document.querySelectorAll("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };

  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});


// Scatter plot in Canvas
var canvas = document.getElementById("scatter");
var ctx = canvas.getContext("2d");
var points = [];

// Draw the Cartesian plane
function drawAxes() {
  ctx.beginPath();
  ctx.strokeStyle = "rgb(44, 118, 135)";
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);      
  ctx.stroke();
  ctx.fillStyle= "rgb(44, 118, 135)";
  ctx.fillText("Negative impact                                                                                                                           Positive Impact", 10, canvas.height/2 +10)
  ctx.rotate(Math.PI /-2)
  ctx.fillText("Less Common                                                                                                                             More Common", -canvas.width/2 *2 + 10, canvas.width/2 - 5)
}

// Add a point when clicking on the Canvas
canvas.onclick = function (e) {
  var x = e.pageX - canvas.offsetLeft - canvas.width / 2;
  var y = canvas.height / 2 - (e.pageY - canvas.offsetTop);
  var goaltext = prompt("What is your strategy?:");
  points.push({x: x, y: y, goaltext: goaltext});
  redraw();
}

// Draw a point at the coordinates (x, y)
function drawPoint(x, y, goaltext) {      
  ctx.fillStyle = "rgb(44, 118, 135)";
  ctx.beginPath();
  ctx.arc(x + canvas.width/2, canvas.height/2 - y, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.font = "10px Roboto";
  ctx.fillText(goaltext, x + canvas.width/2 + 10, canvas.height/2 - y);
}
canvas.style.backgroundColor = "";

// Redraw the Canvas
function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawAxes();
  for (var i = 0; i < points.length; i++) {
    drawPoint(points[i].x, points[i].y, points[i].goaltext);
  }
}
redraw();





    // Aumentar una etiqueta, Coordenada.
    // Ver la forma de guardar/almacenar la data en Backend - Firebase
    // ver la posibilidad de editar los nombres, luego de plot 
    // Una vez que se agregue punto, darle save. Deberia aparecer un botón de "Show Progreso" y envie al gráfico de barras. Es ideal que aparezca en la página (probar)
  
