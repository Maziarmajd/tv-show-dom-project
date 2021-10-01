//Global variable to reuse again in many function.
const episodeList = document.getElementById("root");
const searchBar = document.getElementById("search-input");
const currentEpisodes = document.getElementById("available");
const selectEpi = document.getElementById("selectEpisode");
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
let showEpisodes = [];

function setup() {
  loadEpisode();
}

//<----------------------------------------fetch data------------------------------------->
const loadEpisode = async () => {
  try {
    const res = await fetch("https://api.tvmaze.com/shows/82/episodes");

    showEpisodes = await res.json();
    displayEpisodes(showEpisodes);
    displayEpisodeList(showEpisodes);
  } catch (err) {
    console.error(err);
  }
};

//<--------------------------------------Create card for each episode----------------------->
const displayEpisodes = (episodes) => {
  const htmlString = episodes
    .map((episode) => {
      return `
            <div class="card">
                <img src="${episode.image.medium}"></img>
                <h1>${episode.name}</h1>
                <h2>S${episode.season
                  .toString()
                  .padStart(2, 0)}E${episode.number
        .toString()
        .padStart(2, 0)}</h2>
                <div>${episode.summary}</div>
                
            </div>
        `;
    })
    .join("");
  episodeList.innerHTML = htmlString;
};

// <-----------------------------------Create option tag for select list--------------------->
const displayEpisodeList = (episodeList) => {
  const listOption = episodeList
    .map((episode) => {
      return `<option value="${episode.name}">${episode.season
        .toString()
        .padStart(2, 0)}E${episode.number.toString().padStart(2, 0)}-${
        episode.name
      }</option>`;
    })
    .join("");
  selectEpi.innerHTML = listOption;
};

//<----------------------this function will display the episode that user choose-------------->
function selectFilter() {
  const usersOptionValue = document.querySelector("select");
  let selectedValue = usersOptionValue.value;
  const filterUserSelectedEpisode = showEpisodes.filter((episode) => {
    return episode.name.includes(selectedValue);
  });
  displayEpisodes(filterUserSelectedEpisode);
}

// <-----------This function will display the episode according to alphabet on search bar------->
searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredEpisodes = showEpisodes.filter((episode) => {
    return (
      episode.name.toLowerCase().includes(searchString) ||
      episode.summary.toLowerCase().includes(searchString)
    );
  });
  displayEpisodes(filteredEpisodes);
  currentEpisodes.innerText = `Displaying ${filteredEpisodes.length}/${showEpisodes.length} episodes`;
});

// <---search bar anime function--->
const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
  currentEpisodes.innerText = "";
  displayEpisodes(showEpisodes);
};

searchBtn.addEventListener("click", expand);

window.onload = setup;
