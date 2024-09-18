const searchBar = document.querySelector(".search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("dblclick", function () {
  searchBar.classList.add("-translate-y-full");
  searchBar.classList.add("opacity-0");
  searchBar.classList.remove("opacity-100");
  searchBar.classList.remove("translate-y-full");
});
function openSearch() {
  searchBar.classList.add("translate-y-full");
  searchBar.classList.add("opacity-100");
  searchBar.classList.remove("opacity-0");
  searchBar.classList.remove("-translate-y-full");
}
function closeSearch() {
  searchBar.classList.add("-translate-y-full");
  searchBar.classList.add("opacity-0");
  searchBar.classList.remove("opacity-100");
  searchBar.classList.remove("translate-y-full");
}

// SLIDER IMAGE
