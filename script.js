//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
    const searchBar = document.getElementById("input");

  searchBar.addEventListener("keyup", (el) => {
    const searchString = el.target.value.toLowerCase();
    let allEpiCards = document.getElementsByClassName("card");

    const searchEpisode = document.getElementById("available");
    const filteredShow = allEpisodes.filter((episode) => {
      return (
        episode.name.toLowerCase().includes(searchString) ||
        episode.summary.toLowerCase().includes(searchString)
      );
    });

    searchEpisode.textContent = `${filteredShow.length}/`;

    Array.from(allEpiCards).forEach((e) => {
      const title = e.children[1].textContent;
      const epiSum = e.children[3].textContent;
      if (
        title.toLowerCase().indexOf(searchString) !== -1 ||
        epiSum.toLowerCase().indexOf(searchString) !== -1
      ) {
        e.style.display = "block";
      } else {
        e.style.display = "none";
      }
    });
  });
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  const totalEpisode = document.getElementById("total");
  totalEpisode.textContent = `${episodeList.length}`;
    const selectEpi = document.getElementById("selectEpisode");

    episodeList.forEach((episode) => {
      //Create card for each episode details
      const divCard = document.createElement("div");
      divCard.setAttribute("class", "card");
      divCard.setAttribute("id", `${episode.id}`);

      //Create anchors tag to link to original site for particular episode.
      const linkToSite = document.createElement("a");
      linkToSite.href = episode.url;
      linkToSite.style.textDecoration = "none";
      linkToSite.style.color = "red";

      //image of episode (medium size)
      const showCover = document.createElement("img");
      showCover.src = episode.image.medium;

      const showTitle = document.createElement("h1");
      showTitle.innerText = episode.name;

      // episode season and number combine in (S01E01) method
      const showEpisode = document.createElement("h2");
      let showSeason = episode.season.toString().padStart(2, 0);
      let episodeNumber = episode.number.toString().padStart(2, 0);
      showEpisode.innerText = `S${showSeason}E${episodeNumber}`;

      const epiSummary = document.createElement("p");
      epiSummary.innerHTML = episode.summary;

      //create episode list.
      const option = document.createElement("option");
      option.innerText = `S${showSeason}E${episodeNumber}-${episode.name}`;
      option.value = `#${episode.id}`;
      selectEpi.appendChild(option);

      //click on card will direct to the specific episode on that site
      linkToSite.appendChild(showEpisode);
      divCard.append(showCover, showTitle, linkToSite, epiSummary);
      rootElem.appendChild(divCard);
    });
}
window.onload = setup;
