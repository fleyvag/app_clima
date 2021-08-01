function modalbuscar(){
    Swal.fire({
        title: 'Ingrese Pais',
        icon: 'question',
        input: 'select',
  inputOptions: {
    'Fruits': {
      apples: 'Apples',
      bananas: 'Bananas',
      grapes: 'Grapes',
      oranges: 'Oranges'
    },
    'Vegetables': {
      potato: 'Potato',
      broccoli: 'Broccoli',
      carrot: 'Carrot'
    },
    'icecream': 'Ice cream'
  },
        
        // input: 'text',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<a href="www.google.com" class="botonbuscar"><i class="fas fa-search"></i> Buscar!</a>',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          'cerrar',
        cancelButtonAriaLabel: 'Thumbs down'
      })}
// function alerta(){
//       alert('provando datos')
//   }