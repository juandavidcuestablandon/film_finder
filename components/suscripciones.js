
function suscripciones() {
  
    const form = document.querySelector('#suscripcionsContainer')
    const email = document.querySelector('#mail')
    const localemail = localStorage.getItem('email')
    const message = document.querySelector('#message')

    const sus = document.querySelector('#suscripciones')

    form.addEventListener('submit',(e) => {
        e.preventDefault();
    if (email.value === localemail ) {
        localStorage.setItem('suscripcion', sus.value)
        message.textContent = 'Validacion Correcta, en breve recibira el cobro..'

    } else {
        message.textContent = 'Crea una Cuenta con Nosotros'
    }
})


  }
  
  
  suscripciones()


