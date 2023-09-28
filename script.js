
const xhr = new XMLHttpRequest();
// console.log(xhr.readyState);

//event parameter e.target.value
document.getElementById("button-s").addEventListener("click", loadData);

function loadData() {
  const valuee = document.getElementById("search-bu").value;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCkOAkle_EViFpNpmxZkevyyMaN3n9k7MM&q=${valuee}`;
  xhr.open("GET", url);
  // console.log(xhr.readyState);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // console.log(xhr.readyState);
      const results = JSON.parse(xhr.responseText);
      console.log(results);
      for (let i = 0; i < results.items.length; i++) {
        var output = ``;
        for (let i = 0; i < results.items.length; i++) {
          output += `
        <div class="row">
          <div class="col-md-5 video-card">
            <div class="video-thumbnail" style="height:300px">
              <iframe width="100%" height="100%"
              src="https://www.youtube.com/embed/${results.items[i].id.videoId}"
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
              </iframe>
            </div>
          </div>
          <div class="col-md-6 video-info">
            <h5 class="video-title">${results.items[i].snippet.title}</h5>
            <p class="video-description">${results.items[i].snippet.description}</p>
          </div>
        </div>

        `;
        }
        document.getElementById("results").innerHTML = output;
      }
    }
  };
  xhr.send();
}
