
const url = "https://api.nasa.gov/planetary/apod?api_key=v2Cox1rcdOEgmV0pU6IHf5pAngZeYbakmFAahayl";

fetch(url)
  .then(response => response.json())
  .then(data => {

    console.log(data); // para ver qué llega

    if (data.media_type === "image") {

      document.getElementById("apod-image").src = data.url;
      document.getElementById("apod-title").textContent = data.title;
      document.getElementById("apod-date").textContent = data.date;
      document.getElementById("apod-explanation").textContent = data.explanation;
      document.getElementById("apod-copyright").textContent =
        data.copyright ? "© " + data.copyright : "";
      document.getElementById("apod-hd").href = data.hdurl;

      // Mostrar card
      document.getElementById("apod-card").classList.remove("d-none");
    }

  })
  .catch(error => {
    console.error("Error:", error);
  });
