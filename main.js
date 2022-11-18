$(document).ready(() => {
  renderMovies();
  addAboutListeners();
  addFocusOnSnap();
});

function renderMovies(movies) {
  fetch("movie.mustache")
    .then((response) => response.text())
    .then((template) => {
      $.getJSON("movies.json", function (data) {
        movies = data.movies;
        movies.forEach((movie) => {
          var rendered = Mustache.render(template, movie);
          $(rendered).insertAfter("#target");
        });
      });
    });
}

function addAboutListeners() {
  document.querySelector(".about_link").addEventListener("click", () => {
    document.querySelector(".hero").classList.add("hide_card");
    document.querySelector(".about").classList.remove("hide_card");
  });

  document.querySelector(".hero_link").addEventListener("click", () => {
    document.querySelector(".about").classList.add("hide_card");
    document.querySelector(".hero").classList.remove("hide_card");
  });
}

function addFocusOnSnap() {
  let container = document.querySelector(".container");
  let timer = null;
  container.addEventListener("scroll", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      let boarder = (window.innerHeight / 100) * 30;
      let movies = document.querySelectorAll(".movie");
      movies.forEach((movie) => {
        let distanceToTop = movie.getBoundingClientRect().top;
        // console.log(movie.id + " is candidate " + distanceToTop);
        if (distanceToTop >= boarder && distanceToTop < boarder * 2) {
          console.log(movie.id + " is active now with distance " + distanceToTop);
          let figure = movie.getElementsByTagName("figure")[0];
          movie.classList.add("active");
        }
      });
    }, 100);
  });
}
