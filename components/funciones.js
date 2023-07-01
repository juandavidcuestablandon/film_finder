

export async function fetchDataFromAPI(ubication) {
    const options = {
                 method: 'GET',
                 headers: {
                   accept: 'application/json',
                   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDNmZmRmN2YzODA3ODJkYmEyYTUzYjNjZjc2NmM0YSIsInN1YiI6IjY0NzIzMGZhZGQ3MzFiMDBhNzIwNzJmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ylp58le_hPQpM7v8DaxgaJQ61zV7LYcPJb3CmbHltuo'
                 }
              };
   const url = 'https://api.themoviedb.org/3/discover/';
    try {
        const response = await fetch(url + ubication, options);
    const data = await response.json();
     return data;
       } catch (error) {
   console.error('Error al obtener los datos de la API:', error);
   }
 }