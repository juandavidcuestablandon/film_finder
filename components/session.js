
//LOGIN 


function loginUsersAdmin() {

    const form = document.querySelector("#login")
    const userEmail = document.querySelector('#user')
    const mensagge = document.querySelector('.message p')
    const pass = document.querySelector('#pass')


    const user = localStorage.getItem('email')
    const passcount = localStorage.getItem('password')

    form.addEventListener("submit", (e)=> {

        e.preventDefault()
        if (userEmail.value === "admin@admin.com" && pass.value === "1234"){
            window.location.href = '../pages/sessionuser.html'
        } if (userEmail.value === user  && pass.value === passcount) {
            window.location.href = '../pages/sessionuser.html'
        }
        
        else {
            mensagge.textContent = "Ingrese los datos correctamente!"
            userEmail.style.border = "3px solid red"
            pass.style.border = "3px solid red"
        }
        

    })
}


loginUsersAdmin();







