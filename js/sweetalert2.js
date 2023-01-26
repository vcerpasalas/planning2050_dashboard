// Construyendo SweetAlert2 Progresivo con jQuery

$("#btn7").click(function(){
    Swal.mixin({
      input: 'text', //can be text, number, email, password, textarea, select, radio
      confirmButtonText: 'Siguiente &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Pregunta 1',
        text: '¿Color favorito?' 
      },
      {
        title: 'Pregunta 2',
        text: '¿Animal favorito?'
      },
        {
        title: 'Pregunta 3',
        text: '¿País de origen?'
      }      
    ]).then((result) => {
      if (result.value) {
        Swal.fire({
          title: '¡Completado!',
          html:
            'Tus respuestas: <pre><code>' +
              JSON.stringify(result.value) +
            '</code></pre>',
          confirmButtonText: 'Ok'
        })
      }
    });    
  });