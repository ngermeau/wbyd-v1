    movies = [
             "taxi driver",
             "Pulp fiction",
             "Alien 1",
             "Apocalypse Now",
             "Blade Runner",
             "Brazil",
             "Eraserhead",
             "Exotica",
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
             "The Name of the rose"
            ];


movies.forEach(movieTitle => {
fetch('https://imdb-api.com/en/API/Search//' + movieTitle)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    if (data.results[0].title == movieTitle){
        console.log(data.results[0].id)
    }//else {
      //  console.log("title not found for: " + movieTitle);
    //}
}
);
});

