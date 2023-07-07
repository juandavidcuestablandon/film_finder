


function createAcount() {
    const form  = document.querySelector('#form')
    const name = document.querySelector('#name')
    const apellido = document.querySelector('#apellido')
    const email = document.querySelector('#email')
    const pass = document.querySelector('#pass')
    const error = form.querySelectorAll('span')
    const emailValidation  = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const mensage = form.querySelector('#message')

    console.log(error);


    form.addEventListener('submit', (e) =>{
       e.preventDefault()    
       

       if (name.value === '' || name.value.length < 3) {
        error[0].textContent = "Nombre incorrecto..." 
       }
       if (apellido.value === '' || apellido.length < 3) {
        error[1].textContent = "Apellido  incorrecto..." 
       } 
       if (pass.value === '') {
       error[3].textContent = "Rellena los Campos Correctamente...";
       } 
       
       if (!emailValidation.test(email.value)) {
         error[2].textContent = "Email incorecto.."
       }
     else {
        error[0].textContent = "" 
        localStorage.setItem('name', name.value)
        error[1].textContent = "" 
        localStorage.setItem('lastName', apellido.value)
        error[2].textContent = " "
        localStorage.setItem('email', email.value)
        error[3].textContent = "";
        localStorage.setItem('password', pass.value)

        mensage.textContent = 'Cuenta Creada Correctamente..'

        
       }
 

    })



}




createAcount();