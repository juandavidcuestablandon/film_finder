import { fetchDataFromAPI } from "./funciones.js";

async function handleDataFromAPI() {
  const urlTvData =
    "tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";
  const data = await fetchDataFromAPI(urlTvData);
  cardTv(data);

  const urlfilm = "movie";
  const response = await fetchDataFromAPI(urlfilm);
  showFilms(response);
}

handleDataFromAPI();


function cardTv(data) {
  const btn = document.querySelector("#series");
  const containertv = document.querySelector("#apires");
  const templetetv = document.querySelector("#cardtv").content;
  const linkImg = "https://image.tmdb.org/t/p/w500/";

  btn.addEventListener("click", () => {
    clearDataApi();


    const fragment = new DocumentFragment();

    for (const program of data.results) {
      const clone = templetetv.cloneNode(true);

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




function clearDataApi() {

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

}


function addFavorites() {
  const likes = document.querySelectorAll(".like");
  for (const like of likes) {
    like.addEventListener("click", () => {
        const film = like.closest('.film');
        const tv = like.closest('.tv');
      if (film) {
        film.classList.add("active");
      } 
      if (tv){
        tv.classList.add("active");
      }
     
    });
  }
}

function seccionFavorites (){

const favorites = document.querySelector('#favorites');

favorites.addEventListener("click", () => {

  clearDataApi();
  
  const active = document.querySelectorAll('.active')
  console.log(active)
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





