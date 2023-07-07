
import { fetchDataFromAPI } from './funciones.js';

async function handleDataFromAPI() {
  const urlTvData = 'discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'
   const data = await fetchDataFromAPI(urlTvData);
   showTv(data)
 
 }

 handleDataFromAPI();


   function showTv(data) {

     const containertv = document.querySelector('#tvContainer') 
    const templetetv = document.querySelector('#card').content
    const linkImg = 'https://image.tmdb.org/t/p/w500/'

    const fragment =  new DocumentFragment()


     for (const program of data.results) {

    const clone = templetetv.cloneNode(true)
      clone.querySelector('img').src = linkImg + program.poster_path;
       clone.querySelector('img').alt = program.name 
       clone.querySelector('.name').textContent = program.name;
      clone.querySelector('.people').textContent = program.popularity

      fragment.appendChild(clone)
      
     }

    containertv.appendChild(fragment)
  
  }









