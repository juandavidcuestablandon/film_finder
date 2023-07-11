
//llamado a la api y recibir los datos 

export async function fetchDataFromAPI(ubication) {
    const options = {
                 method: 'GET',
                 headers: {
                   accept: 'application/json',
                   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDNmZmRmN2YzODA3ODJkYmEyYTUzYjNjZjc2NmM0YSIsInN1YiI6IjY0NzIzMGZhZGQ3MzFiMDBhNzIwNzJmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ylp58le_hPQpM7v8DaxgaJQ61zV7LYcPJb3CmbHltuo'
                 }
              };
   const url = 'https://api.themoviedb.org/3/';
    try {
        const response = await fetch(url + ubication, options);
    const data = await response.json();
     return data;
       } catch (error) {
   console.error('Error al obtener los datos de la API:', error);
   }
 }



 // Sirve para limpiar la pantalla en los resultados de la api para simular  una SPA

//limpiar 

 export function clearDataApi() {

  const img = document.querySelector("#img")
  img.style.display = "none";
  
  const results = document.querySelectorAll(".tv");
  for (const tv of results) {
    tv.setAttribute("style", "display: none;");
  }

  const filmresult = document.querySelectorAll(".film");
  for (const film of filmresult) {
    film.setAttribute("style", "display: none;");
  }

const searchResults = document.querySelectorAll('.busqueda');
for (const search of searchResults) {
  search.setAttribute("style", "display: none;");
}

const filmsTens = document.querySelectorAll('.tendencia')
console.log(filmsTens)
 for (const filmTre of filmsTens) {
   filmTre.setAttribute("style", "display: none;");
 }

 
 }


// funcionalidad de favoritos

 export  function addFavorites() {
  const likes = document.querySelectorAll(".like");
  for (const like of likes) {
    like.addEventListener("click", () => {
      
        const film = like.closest('.film');
        const tv = like.closest('.tv');
        const search = like.closest('.busqueda');
        const tendencia = like.closest('.tendencia')
      if (film) {
        film.classList.add("active");
      } 
      if (tv){
        tv.classList.add("active");
      }
      if (search) {
        search.classList.add("active");
      }

      if (tendencia) {
        tendencia.classList.add("active");
       
      }
     
    });
  }
}


 export function seccionFavorites(){

const favorites = document.querySelector('#favorites');
favorites.addEventListener("click", () => {

  clearDataApi();

  
  const active = document.querySelectorAll('.active')
  
  const activebtn = document.querySelectorAll('.active .like')
  
  for (const like of active) {
    like.setAttribute("style", "display: row;");
  }
  
  
  for (const btn of activebtn) {
    btn.innerHTML = "<i class='bx bxs-dislike bx-tada' style='color:#f90909'></i>";
    btn.addEventListener('click', () => {
      const parentBox = btn.closest('.active');
      parentBox.style.display = "none";
    });
  }

});

}

