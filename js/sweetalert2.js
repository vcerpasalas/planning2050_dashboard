// Building SweetAlert2 Progressive with jQuery

$("#btn7").click(function(){
    Swal.mixin({
      input: 'text', // can be text, number, email, password, textarea, select, radio
      confirmButtonText: 'Siguiente &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Question 1',
        text: 'Describe your strategy in less than 20 words' // text box with word limit
      },
      {
        title: 'Question 2',
        text: 'What is the expected metric for 2050?' // menu
      },
        {
        title: 'Question 3',
        text: 'What is your commitment year?'
      }      
    ]).then((result) => {
      if (result.value) {
        Swal.fire({
          title: '¡Thank you!',
          html:
            'Tus respuestas: <pre><code>' +
              JSON.stringify(result.value) +
            '</code></pre>',
          confirmButtonText: 'Ok'
        })
      }
    });    
  });