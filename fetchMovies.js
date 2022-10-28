movies = [
    "taxi driver",
    //  "Pulp fiction",
    //  "Alien 1",
    //  "Apocalypse Now",
    //  "Blade Runner",
    //  "Brazil",
    //  "Eraserhead",
    //  "Exotica",
    //  "Requiem for a dream",
    //  "Reservoir Dogs",
    //  "The Shining",
    //  "The Texas Chain Saw Massacre",
    //  "Bagdad Cafe",
    //  "The Good, the Bad and the Ugly",
    //  "The Big Lebowski",
    //  "Fear and Loathing in Las Vegas",
    //  "Deadman",
    //  "Blue Velvet",
    //  "The Thing",
    //  "The Rocky Horror Picture Show",
    //  "Monty Python and the Holy Grail",
    //  "Scarface",
    //  "2001 A Space Oddyssey",
    //  "The Godfather",
    //  "Trainspotting",
    //  "Goodfellas",
    //  "The Matrix",
    //  "The Silence of the lambs",
    //  "Barry Lyndon",
    //  "Fight Club",
    //  "Das boot",
    //  "One Flew Over the Cuckoo's Nest",
    //  "The Name of the rose"
];


movies.forEach(movieTitle => {
    fetch('https://imdb-api.com/en/API/Search/k_z64c4abx/' + movieTitle)
        .then((response) => response.json())
        .then((data) => {
            //warning if no data
            if (data.results[0].title.toLowerCase() == movieTitle.toLowerCase()) {
                let movieId = data.results[0].id;
                fetch('https://imdb-api.com/en/API/Title/k_z64c4abx/' + movieId)
                    .then((response) => response.json())
                    .then((data) => {
                        let movie = {};
                        movie.title = movieTitle;
                        movie.year = data.year;
                        movie.director = data.directors
                        movie.runningTime = data.runtimeStr;
                        movie.synopsis=data.plot;
                        console.log(movie);
        })
            } else {
                console.log("title not found for: " + movieTitle);
            }
        }
        );
});

