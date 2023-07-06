import { fetchDataFromAPI, clearDataApi, addFavorites, seccionFavorites } from "./funciones.js";
import { options } from "./key.js";

async function handleDataFromAPI() {
  const urlTvData =
    "discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";
  const data = await fetchDataFromAPI(urlTvData);
  cardTv(data);

  const urlfilm = "/discover/movie";
  const response = await fetchDataFromAPI(urlfilm);
  showFilms(response);

  const urltrending = "trending/all/day?language=en-US"
  const responseTre = await fetchDataFromAPI(urltrending)
  showTrending(responseTre)

}

handleDataFromAPI();


function cardTv(data) {
  const btn = document.querySelector("#series");
  const containertv = document.querySelector("#apires");
  const templetetv = document.querySelector("#card").content;
  const linkImg = "https://image.tmdb.org/t/p/w500/";

  btn.addEventListener("click", () => {
    clearDataApi();


    const fragment = new DocumentFragment();

    for (const program of data.results) {
      const clone = templetetv.cloneNode(true);
      clone.querySelector('div').classList.add('tv')
      clone.querySelector("img").src = linkImg + program.poster_path;
      clone.querySelector("img").alt = program.name;
      clone.querySelector(".name").textContent = program.name;

      fragment.appendChild(clone);
    }

    containertv.appendChild(fragment);

    addFavorites();
    seccionFavorites()

  });
}



function showFilms(data) {
  const fragmentfilm = new DocumentFragment();
  // console.log(response.results)
  const container = document.querySelector("#apires");
  const templete = document.querySelector("#card").content;
  const imglink = "https://image.tmdb.org/t/p/w500/";
  const btnfilm = document.querySelector("#films");
  btnfilm.addEventListener("click", () => {
    clearDataApi();

    for (const film of data.results) {
      const clone = templete.cloneNode(true);
      clone.querySelector('div').classList.add('film');
      clone.querySelector("img").src = imglink + film.poster_path;
      clone.querySelector("img").alt = film.title;
      clone.querySelector(".name").textContent = film.title;

      fragmentfilm.appendChild(clone);
    }
    container.appendChild(fragmentfilm);
    addFavorites();
    seccionFavorites()

  });
}



function showTrending(data) {
  const fragment = new DocumentFragment();
  // console.log(response.results)
  const container = document.querySelector("#apires");
  const templete = document.querySelector("#card").content;
  const imglink = "https://image.tmdb.org/t/p/w500/";
  const btn = document.querySelector("#tranding");
  btn.addEventListener("click", () => {
    clearDataApi();

    for (const film of data.results) {
      const clone = templete.cloneNode(true);
      clone.querySelector('div').classList.add('tendencia');
      clone.querySelector("img").src = imglink + film.poster_path;
      clone.querySelector("img").alt = film.title;
      clone.querySelector(".name").textContent = film.title;

      fragment.appendChild(clone);
    }
    container.appendChild(fragment);

    addFavorites();
    seccionFavorites()

  });
}




function searchContet() {
  
  const input = document.querySelector('#buscar')
  const btn = document.querySelector('#btn');
  const templete = document.querySelector('#card').content
  const fragment = new DocumentFragment();
  const linkImg = "https://image.tmdb.org/t/p/w500/";
  const container = document.querySelector('#apires');

  btn.addEventListener('click', async () => {


    clearDataApi();

    if (input.value === "") {
      alert('por favor  ponga la serie o pelicula que busca..')
    } if (input.value) {

      let query = input.value.toLowerCase()

      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

      const res = await fetch(url, options);
      const data = await res.json()



      for (const result of data.results) {
        const clone = templete.cloneNode(true);
        clone.querySelector('div').classList.add('busqueda');
        clone.querySelector('img').src = linkImg + result.backdrop_path;
        clone.querySelector('img').alt = result.name
        if (result.name) {
          clone.querySelector('.name').textContent = result.name
        } else {
          clone.querySelector('.name').textContent = result.title
        }


        fragment.appendChild(clone);
      }

      container.appendChild(fragment);


      addFavorites()
      seccionFavorites()



    }
  })
}


searchContet()







