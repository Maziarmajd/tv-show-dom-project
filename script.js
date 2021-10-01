<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TV Show Project | My Name (My GitHub username)</title>
    <link href="style.css" rel="stylesheet" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  </head>

  <body>
    <!--Header-->
    <div class="header">
      <img src="./favicon.ico" alt="image of text TV" width="100px" />
      <span id="available"></span>
      <div class="header-right">
        <form id="content">
          <input type="text" name="input" class="input" id="search-input" />
          <button type="reset" class="search" id="search-btn"></button>
        </form>
      </div>
    </div>
    <select
      name="episodes"
      onchange="selectFilter()"
      id="selectEpisode"
    ></select>


    <div id="root"></div>

    <footer id="footer"><a href="https://www.tvmaze.com/api#licensing" target="_blank">
        © TVmaze.com </a></footer>
    

    <!-- Loads a provided function called getAllEpisodes() which returns all episodes -->
    <script src="episodes.js"></script>

    <!-- Loads YOUR javascript code -->
    <script src="script.js"></script>
  </body>
</html>
