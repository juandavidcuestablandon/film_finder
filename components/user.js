function addPicture() {
 const profilePicInput = document.getElementById('profilePicInput');
const profilePicPreview = document.getElementById('profilePicPreview');

profilePicInput.addEventListener('change', function(event) {
  const file = event.target.files[0];


  if (file) {
 
    const reader = new FileReader();

   
    reader.onload = function() {
     profilePicPreview.src = reader.result;
     localStorage.setItem( 'img',reader.result)
    };

    // Leer el archivo como una URL de datos
    reader.readAsDataURL(file);
  }
});

}


addPicture()



function boxInfo() {
    const name = document.querySelector('#name');
    const lastName = document.querySelector('#lastname');
    const email = document.querySelector('#email');
    const sus = document.querySelector('#sus');

    name.textContent = localStorage.getItem('name')
    lastName.textContent = localStorage.getItem('lastName')
    email.textContent = localStorage.getItem('email')
  sus.textContent = localStorage.getItem('suscripcion')
    console.log(localStorage.getItem('name'));



}


boxInfo()



//guardar la foto de perfil 

  
function saveBackgroundImg() {
  
window.addEventListener('DOMContentLoaded', function() {  // cuando se recargue la pagina 
  const savedImg = localStorage.getItem('img');
  if (savedImg) {
    const img = document.querySelector('#profilePicPreview')
    img.src = savedImg;
  }
});


}




saveBackgroundImg()




