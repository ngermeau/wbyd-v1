let moviesTitleList = [
  "clerks",
  "Akira",
  "The fly",
  //"Lost highway ",
  //"once upon a time in america ",
  //"American psycho ",
  //"breaking the waves ",
  //"the pianist ",
  //"her",
  // "city of the god",
  // "dr strangelove",
];

importing();

async function importing() {
  let moviesObj = { movies: [] };
  for (let i = 0; i < moviesTitleList.length; i++) {
    console.log("fetching data for: " + moviesTitleList[i]);
    let movie = await getMovieDetails(moviesTitleList[i]);
    moviesObj.movies.push(movie);
  }
  console.log(JSON.stringify(moviesObj));
}

async function getMovieDetails(movieTitle) {
  let movie = {};
  await fetch("https://imdb-api.com/en/API/Search/k_z64c4abx/" + movieTitle)
    .then((response) => response.json())
    .then(async (data) => {
      //warning if no data
      if (data.results[0].title.toLowerCase() == movieTitle.toLowerCase()) {
        let movieId = data.results[0].id; //assuming the first one is the good one
        await fetch("https://imdb-api.com/en/API/Title/k_z64c4abx/" + movieId)
          .then((response) => response.json())
          .then((data) => {
            movie.title = movieTitle;
            movie.year = data.year;
            movie.director = data.directors;
            movie.runningTime = data.runtimeStr;
            movie.trailerLink="";
            movie.thumbPath =
              "img/" + movie.title.replace(/ |'/g, "-") + ".jpg";
            if(data.genreList){
              movie.tag = data.genreList.map((el) => { return el.value; } );
            }
            movie.imdbScore = data.imDbRating;
            movie.synopsis = data.plot;
          });
      } else {
        console.log("title not found for: " + movieTitle);
      }
    });
  return movie;
}
