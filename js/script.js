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

///VARIABLES AND CODE FOR BAR CHART////
var years;
years = [
  2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034,
  2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047,
  2048, 2049, 2050,
];
console.log(years);
barcolors = [
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
  "rgba(203, 67, 56)",
];

var Cyear;
Cyear = prompt("Enter Commitment Year: ");

while (Cyear >= years[8]) {
  console.log(
    "year outside of range, enter year between 2022 and 2029. Assuming 2029"
  );
  Cyear--;
}
while (Cyear < years[0]) {
  console.log(
    "year outside of range, enter year between 2022 and 2029. Assuming 2022"
  );
  Cyear++;
}

function Yrsto2050() {
  return 2050 - Cyear;
}

function DivFactorBars() {
  return 1 / Yrsto2050(Cyear);
}

function CYIndexLoc() {
  return years.findIndex((index) => index >= Cyear);
}

var yearlist = years.slice(CYIndexLoc(Cyear));

listBars = [];
i = 0;
while (i <= 2050 - Cyear) {
  value = i * DivFactorBars(Cyear) * 100;
  listBars.push(value);
  i++;
}

///VARIABLES AND CODE FOR BAR CHART////
var years;
years = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050];
console.log(years);
barcolors = [
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
]

var Cyear;
Cyear = prompt("Enter Commitment Year: ");


while (Cyear >= years[8]){
    console.log("year outside of range, enter year between 2022 and 2029. Assuming 2029");
    Cyear--;
}
while (Cyear < years[0]){
    console.log("year outside of range, enter year between 2022 and 2029. Assuming 2022");
    Cyear++;
}

function Yrsto2050(){
    return 2050 - Cyear;
}

function DivFactorBars(){
   return 1 / (Yrsto2050(Cyear));
}

function CYIndexLoc(){
   return years.findIndex(index => index >= Cyear);
}

var yearlist = years.slice(CYIndexLoc(Cyear));

listBars = [];
i=0;
while (i <= 2050-Cyear) {
    value = i*DivFactorBars(Cyear)*100;
    listBars.push(value);
    i++;
}



// Chart.js v2.9.3 - Bar chart

var ctx = document.getElementById("myChart");
var chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: yearlist,
    datasets: [
      {
        type: "bar",
        label: "Expected Progress",
        data: listBars,
        backgroundColor: barcolors.slice(CYIndexLoc(Cyear)),
<<<<<<< HEAD
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        fill: true,
        type: "line",
        label: "Progress Reported",
        data: [0.0, 13, 30, 35, 25, 40],
        borderColor: "rgba(255, 239, 109, 0.5)",
      },
    ],
  },
=======
        borderColor: "rgba(54, 162, 235, 1)",        
        borderWidth: 1,        
        
      },
      {
        fill: true,
        type: "line",  
        label: "Progress Reported",
        data: [0.00, 13, 30, 35, 25, 40],  
        borderColor: "rgba(255, 239, 109, 0.5)",       
                
      }
    ]
  }
>>>>>>> main
});

/// Scatter plot section code ///

var canvas = document.getElementById("scat");
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

// Añade un punto al hacer clic en el canvas
canvas.onclick = function (e) {
  var x = e.pageX - canvas.offsetLeft - canvas.width / 2;
  var y = canvas.height / 2 - (e.pageY - canvas.offsetTop);
  var goaltext = prompt("What is your strategy?:");
  points.push({ x: x, y: y, goaltext: goaltext });
  redraw();
};

// Dibuja un punto en las coordenadas (x, y)
function drawPoint(x, y, goaltext) {
  ctx.fillStyle = "rgb(44, 118, 135)";
  ctx.beginPath();
  ctx.arc(x + canvas.width / 2, canvas.height / 2 - y, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.font = "12px Roboto";
  ctx.fillText(goaltext, x + canvas.width / 2 + 10, canvas.height / 2 - y);
}

canvas.style.backgroundColor = "";

// Muestra las coordenadas del punto al hacer clic en él
canvas.onmousedown = function (e) {
  var x = e.pageX - canvas.offsetLeft - canvas.width / 2;
  var y = canvas.height / 2 - (e.pageY - canvas.offsetTop);
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
        activePoint.goaltext
    );
  }
};

// Vuelve a dibujar el canvas
function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawAxes();
  for (var i = 0; i < points.length; i++) {
    drawPoint(points[i].x, points[i].y, points[i].goaltext);
  }
}

drawAxes();
// Aumentar una etiqueta, titulo, descripcion. Coordenada.
// Ver la forma de guardar/almacenar la data en Backend - Firebase
// ver la posibilidad de editar los nombres, luego de plot

// Una vez que se agregue punto, darle save. Deberia aparecer un botón de "Ver Progreso" y envie al gráfico de barras. Es ideal que aparezca en la página (probar)
// el gráfico de barras aparece como una nueva página (probar)


/// Scatter plot section code ///

var canvas = document.getElementById("scat");
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


    // Añade un punto al hacer clic en el canvas
    canvas.onclick = function (e) {
      var x = e.pageX - canvas.offsetLeft - canvas.width / 2;
      var y = canvas.height / 2 - (e.pageY - canvas.offsetTop);
      var goaltext = prompt("What is your strategy?:");
      points.push({x: x, y: y, goaltext: goaltext});
      redraw();
    }

    // Dibuja un punto en las coordenadas (x, y)
    function drawPoint(x, y, goaltext) {
      
      ctx.fillStyle = "rgb(44, 118, 135)";
      ctx.beginPath();
      ctx.arc(x + canvas.width/2, canvas.height/2 - y, 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.font = "12px Roboto";
      ctx.fillText(goaltext, x + canvas.width/2 + 10, canvas.height/2 - y);
    }

canvas.style.backgroundColor = "";


    // Muestra las coordenadas del punto al hacer clic en él
    canvas.onmousedown = function (e) {
      var x = e.pageX - canvas.offsetLeft - canvas.width / 2;
      var y = canvas.height / 2 - (e.pageY - canvas.offsetTop);
      for (var i = 0; i < points.length; i++) {
        if (Math.abs(points[i].x - x) < 5 && Math.abs(points[i].y - y) < 5) {
          activePoint = points[i];
          break;
        }
      }
      if (activePoint) {
        alert("Coordenadas: (" + activePoint.x + ", " + activePoint.y + ")\nEtiqueta: " + activePoint.goaltext);
      }
    }

    // Vuelve a dibujar el canvas
    function redraw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawAxes();
      for (var i = 0; i < points.length; i++) {
        drawPoint(points[i].x, points[i].y, points[i].goaltext);
      }
    }

    drawAxes();
    // Aumentar una etiqueta, titulo, descripcion. Coordenada.
    // Ver la forma de guardar/almacenar la data en Backend - Firebase
    // ver la posibilidad de editar los nombres, luego de plot 

    // Una vez que se agregue punto, darle save. Deberia aparecer un botón de "Ver Progreso" y envie al gráfico de barras. Es ideal que aparezca en la página (probar)
    // el gráfico de barras aparece como una nueva página (probar)




