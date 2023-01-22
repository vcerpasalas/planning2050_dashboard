var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var points = [];
    var activePoint;

    // Dibuja el plano cartesiano
    function drawAxes() {
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
    }

    // Dibuja un punto en las coordenadas (x, y)
    function drawPoint(x, y, label) {
      ctx.fillStyle = "blue";
      ctx.beginPath();
      ctx.arc(x + canvas.width/2, canvas.height/2 - y, 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.font = "12px Arial";
      ctx.fillText(label, x + canvas.width/2 + 10, canvas.height/2 - y);
    }

    // Añade un punto al hacer clic en el canvas
    canvas.onclick = function (e) {
      var x = e.clientX - canvas.offsetLeft - canvas.width / 2;
      var y = canvas.height / 2 - (e.clientY - canvas.offsetTop);
      var label = prompt("What is your strategy?:");
      points.push({x: x, y: y, label: label});
      redraw();
    }

canvas.style.backgroundColor = "";

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
        alert("Coordenadas: (" + activePoint.x + ", " + activePoint.y + ")\nEtiqueta: " + activePoint.label);
      }
    }

    // Vuelve a dibujar el canvas
    function redraw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawAxes();
      for (var i = 0; i < points.length; i++) {
        drawPoint(points[i].x, points[i].y, points[i].label);
      }
    }

    drawAxes();
    // Aumentar una etiqueta, titulo, descripcion. Coordenada.
    // Ver la forma de guardar/almacenar la data en Backend - Firebase
    // ver la posibilidad de editar los nombres, luego de plot 

    // Una vez que se agregue punto, darle save. Deberia aparecer un botón de "Ver Progreso" y envie al gráfico de barras. Es ideal que aparezca en la página (probar)
    // el gráfico de barras aparece como una nueva página (probar)




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


// Chart.js v2.9.3 - Bar chart

var ctx = document.getElementById("myChart");
var chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040", "2041", "2042", "2043", "2044", "2045", "2046", "2047", "2048", "2049", "2050"],
    datasets: [
      {
        type: "bar",
        label: "expected progress",
        data: [0.00, 3.45, 6.90, 10.34, 13.79, 17.24, 20.69, 24.14, 30.69, 34.14, 37.59, 41.04, 44.48, 47.93, 51.38, 54.83, 58.28, 61.72, 65.17, 68.62, 72.07, 75.52, 78.97, 82.41, 85.86, 89.31, 92.76, 96.21, 100.00],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",         
          "rgba(203, 67, 56)",
          "rgba(54, 162, 235, 0.2)", 
          "rgba(54, 162, 235, 0.2)", 
          "rgba(54, 162, 235, 0.2)", 
          "rgba(54, 162, 235, 0.2)", 
          "rgba(54, 162, 235, 0.2)", 
          "rgba(54, 162, 235, 0.2)", 
          "rgba(54, 162, 235, 0.2)", 
          "rgba(54, 162, 235, 0.2)", 
          "rgba(54, 162, 235, 0.2)", 
          "rgba(54, 162, 235, 0.2)", 
          "rgba(54, 162, 235, 0.2)", 
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)", 
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(203, 67, 56)"      
        ],
        borderColor: "rgba(54, 162, 235, 1)",        
        borderWidth: 1,        
        
      },
      {
        fill: true,
        type: "line",  
        label: "progress reported",
        data: [0.00, 13, 30, 35, 25, 40],  
        borderColor: "rgba(255, 239, 109, 0.5)",       
                
      }
    ]
  }
});




