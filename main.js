$(document).ready(() => {
    renderMovies();
    addAboutListeners();
});

function renderMovies(movies) {
    fetch('movie.mustache')
        .then((response) => response.text())
        .then((template) => {
            $.getJSON('movies.json', function (data) {
                movies = data.movies;
                movies.forEach(movie => {
                    var rendered = Mustache.render(template, movie);
                    $(rendered).insertAfter("#target");
                });
            });
        });
}

function addAboutListeners(){
   document.querySelector(".about_info_link").addEventListener('click', () => {
        document.querySelector(".hero").classList.add("hide");
        document.querySelector(".about").classList.remove("hide");
   });

   document.querySelector(".about_hero_link").addEventListener('click', () => {
        document.querySelector(".about").classList.add("hide");
        document.querySelector(".hero").classList.remove("hide");
   });
}



