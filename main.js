$(document).ready(() => {
    renderMovies();
});

function renderMovies(movies) {
    fetch('movie.mustache')
        .then((response) => response.text())
        .then((template) => {
            $.getJSON('movies.json', function (data) {
                movies = data.movies;
                movies.forEach(movie => {
                    var rendered = Mustache.render(template, movie);
                    $(rendered).insertAfter(".begin");
                });
            });
        });
}


