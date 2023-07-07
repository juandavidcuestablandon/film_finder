
import { fetchDataFromAPI } from './components/funciones.js';



 async function handleDataFromAPI() {
   const urlfilm = 'discover/movie'
     const data = await fetchDataFromAPI(urlfilm);
     showFilms(data)
    
 }

 handleDataFromAPI();

  function showFilms(response) {
  const fragment = new DocumentFragment();
  
  const container = document.querySelector('#filmContainer')
  const templete = document.querySelector('#card').content
   const imglink = 'https://image.tmdb.org/t/p/w500/'
   
   
    for (const film of response.results) {

      const clone = templete.cloneNode(true)
      clone.querySelector('img').src = imglink + film.poster_path
      clone.querySelector('img').alt = film.title 
      clone.querySelector('.name').textContent = film.title
      clone.querySelector('.language').textContent = film.original_language

      fragment.appendChild(clone)
      
    }
    
    container.appendChild(fragment)

  }

