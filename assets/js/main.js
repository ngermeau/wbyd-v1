$(document).ready(async () => {
  await renderMovies();
  addAboutListeners();
  addMoreInfoListeners();
});

async function renderMovies(movies) {
  await fetch("assets/mustache/movie.mustache")
    .then((response) => response.text())
    .then(async (template) => {
      await $.getJSON("movies.json", function (data) {
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

function addMoreInfoListeners() {
  let moreElements = document.querySelectorAll(".movie");
  moreElements.forEach((moreElem) => {
    moreElem.addEventListener("click", (e) => {
      let movieClassList = e.target.closest(".movie").classList;
      if (movieClassList.contains("expanded")) {
        movieClassList.remove("expanded");
        return;
      }
      movieClassList.add("expanded");
    });
  });
}
