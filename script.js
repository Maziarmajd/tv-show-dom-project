//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

   episodeList.forEach((episode) => {
    //Create card for each episode details
    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card");

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

    //click on card will direct to the specific episode on that site
    linkToSite.append(showCover, showTitle, showEpisode, epiSummary);
    divCard.appendChild(linkToSite);
    rootElem.appendChild(divCard);
  });

}

window.onload = setup;


