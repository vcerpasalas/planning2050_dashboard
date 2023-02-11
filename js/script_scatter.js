
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
var activePoint;
var dataGoaltext;


// Draw the Cartesian plane
function drawAxes() {
  ctx.beginPath();
  ctx.strokeStyle = "rgb(146, 209, 223)";
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);      
  ctx.stroke();
  ctx.fillStyle= "rgb(146, 209, 223)";
  ctx.fillText("Negative impact" , 10, canvas.height/2 +12)
  ctx.rotate(Math.PI /-2)
  ctx.fillText("Less Common", -canvas.width + 10, canvas.width/2 - 8)
  ctx.rotate(Math.PI /2)
  ctx.fillText("Positive impact" , canvas.width - 75, canvas.height/2 -8)
  ctx.rotate(Math.PI /-2)
  ctx.fillText("More Common", -canvas.width +canvas.width -75, canvas.width/2 + 12)
  ctx.rotate(Math.PI /2)
}


// Add a point when clicking on the Canvas
var goaltext;
var count = 0;
canvas.onclick = async function (e) {
  const { value: goaltext } = await Swal.fire({
    title: 'Please choose a name for your strategy',
    text: 'Example: "Access to transit". Try limit this to 3-10 words maximum',
    input: 'text',
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return 'You need to write something!'
      }
    }
  });

  if (goaltext) {
    var x = e.pageX - canvas.offsetLeft - canvas.width / 2;
    var y = canvas.height / 2 - (e.pageY - canvas.offsetTop);
    points.push({x: x, y: y, goaltext: goaltext});
    redraw();

    count++;
    if (count == 1) {
      const element = document.getElementById("st1");
      element.innerHTML = goaltext;
    } else if (count == 2) {
      const element = document.getElementById("st2");
      element.innerHTML = goaltext;
    } else if (count == 3) {
      const element = document.getElementById("st3");
      element.innerHTML = goaltext;
    }
  }
};

// Draw a point at the coordinates (x, y)
function drawPoint(x, y, goaltext) {      
  ctx.fillStyle = "rgb(146, 209, 223)";
  ctx.beginPath();
  ctx.arc(x + canvas.width/2, canvas.height/2 - y, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillText(goaltext, x + canvas.width/2 + 10, canvas.height/2 - y);
}

// Redraw the points
function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < points.length; i++) {
    drawPoint(points[i].x, points[i].y, points[i].goaltext);
  }
}




    // Displaying the coordinates of the point when clicking on it
    canvas.onmousedown = function (e) {
      var x = e.pageX - canvas.offsetLeft - canvas.width / 2;
      var y = canvas.height / 2 - (e.pageY - canvas.offsetTop);
      for (var i = 0; i < points.length; i++) {
        if (Math.abs(points[i].x - x) < 5 && Math.abs(points[i].y - y) < 5) {
          activePoint = points[i];
          break;
        }
        }
        }

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
  
