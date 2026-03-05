function obtenerArtista() {

  const clientId = "TU_CLIENT_ID";
  const clientSecret = "TU_CLIENT_SECRET";

  const credenciales = btoa(clientId + ":" + clientSecret);

  const parametros = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + credenciales
    },
    body: "grant_type=client_credentials"
  };


  fetch("https://accounts.spotify.com/api/token", parametros)
    .then(response => response.json())
    .then(data => {

      const token = data.access_token;

      return fetch("https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d", {
        headers: {
          "Authorization": "Bearer " + token
        }
      });

    })
    .then(response => response.json())
    .then(artista => {
      const contenedor = document.getElementById("contenedor-artista");

      contenedor.innerHTML = `
        <h2>${artista.name}</h2>
        <img src="${artista.images[0].url}" width="200">
        <p>Seguidores: ${artista.followers.total.toLocaleString()}</p>
        <a href="${artista.external_urls.spotify}" target="_blank">
          Ver en Spotify
        </a>
      `;

    })
    .catch(error => {
      console.error("Error:", error);
    });
}
