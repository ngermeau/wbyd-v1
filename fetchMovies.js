let moviesTitleList = [
  "taxi driver",
  "Pulp fiction",
  "Alien 1",
  "Apocalypse Now",
  "Blade Runner",
  "Brazil",
  "Eraserhead",
  "Requiem for a dream",
  "Reservoir Dogs",
  "The Shining",
  "The Texas Chain Saw Massacre",
  "Bagdad Cafe",
  "The Good, the Bad and the Ugly",
  "The Big Lebowski",
  "Fear and Loathing in Las Vegas",
  "Deadman",
  "Blue Velvet",
  "The Thing",
  "The Rocky Horror Picture Show",
  "Monty Python and the Holy Grail",
  "Scarface",
  "2001 A Space Oddyssey",
  "The Godfather",
  "Trainspotting",
  "Goodfellas",
  "The Matrix",
  "The Silence of the lambs",
  "Barry Lyndon",
  "Fight Club",
  "Das boot",
  "One Flew Over the Cuckoo's Nest",
  "The Name of the rose",
  "there will be blood",
  "A clockwork orange",
  "full metal jacket",
  "casablanca",
  "dr strangelove",
  "psycho",
  "vertigo",
  "modern times",
  "memento",
  "fargo",
  "raging bull",
  "chinatown",
  "city of the god",
  "the deer hunter",
  "platoon",
  "the mission",
  "No Country for Old Men",
  "mad max",
  "parasite",
  "birdman",
  "there will be blood",
  "Schindler's List",
  "inception",
  "jaws",
  "amadeus",
  "once upon a time in america ",
  "spirited away",
  "breaking the waves ",
  "American psycho ",
  "magnolia",
  "the terminator",
  "West Side Story",
  "the pianist ",
  "The Thin Red Line",
  "easy rider",
  "clerks",
  "Akira",
  "Lost highway ",
  "The fly",
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
            movie.thumbPath =
              "img/" + movie.title.replace(/ |'/g, "-") + ".jpg";
            if(genreList){
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
