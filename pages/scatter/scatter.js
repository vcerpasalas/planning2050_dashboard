// Scatter diagram in a Canvas

var canvas = document.getElementById("scat");
    var ctx = canvas.getContext("2d");
    var points = [];
    var activePoint;
    var goaltext;
    var metric;
    var metric_unit;
    var year;

    // Drawing the Cartesian plane
    function drawAxes() {
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
    }

    // Adding a point when clicking on the Canvas
    canvas.onclick = function (e) {
      var x = e.pageX - canvas.offsetLeft - canvas.width / 2;
      var y = canvas.height / 2 - (e.pageY - canvas.offsetTop);
      var goaltext = prompt("What is your strategy?:");
      points.push({x: x, y: y, goaltext: goaltext});
      redraw();
    }

    // Drawing a point at the coordinates (x, y)
    function drawPoint(x, y, goaltext) {      
      ctx.fillStyle = "rgb(44, 118, 135)";
      ctx.beginPath();
      ctx.arc(x + canvas.width/2, canvas.height/2 - y, 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.font = "12px Roboto";
      ctx.fillText(goaltext, x + canvas.width/2 + 10, canvas.height/2 - y);
    }

    canvas.style.backgroundColor = "";

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
      if (activePoint) {

      // Plotting Sweetalert2
        // First Window
        Swal.fire({
          title: 'Describe your strategy in less than 50 words',
          input: 'text',
          inputPlaceholder: 'Describe your strategy',
          showCancelButton: true,
          confirmButtonText: 'Next →',
          allowOutsideClick: false,
          inputAttributes: {
          maxlength: '50'
          }
          }).then((result) => {
          if (result.value) {
          // Guardar la respuesta de la primera ventana en una variable
          var strategy = result.value;


        Swal.fire({
        title: 'What is the expected metric for 2050?',
            input: 'text',
            inputPlaceholder: 'Escribe el valor',
            inputAttributes: {
              type: 'number',
              step: 'any'
            },
            showCancelButton: true,
            confirmButtonText: 'Siguiente',
            preConfirm: (result) => {
              activePoint.metric = result;
              return sweetalert2.fire({
                title: 'What is your commitment year?',
                input: 'text',
                inputPlaceholder: 'Escribe el año',
                inputAttributes: {
                  type: 'number',
                  step: 'any'
                },
                showCancelButton: true,
                confirmButtonText: 'Next →',
                preConfirm: (result) => {
                  activePoint.year = result;
                  return activePoint;
                }
              });
            }
          });
        }
      });
    }
  }

    // Redrawing the Canvas
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
  


