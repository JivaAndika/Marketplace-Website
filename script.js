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
//  SIDEBAR
const sidebar = document.querySelector("aside");
function openNavbar() {
  sidebar.classList.add("translate-x-0");
  sidebar.classList.remove("-translate-x-full");
}
function closeNavbar() {
  sidebar.classList.add("-translate-x-full");
  sidebar.classList.remove("translate-x-0");
}
// ACTIVE COLOR PICKER
function addActiveClass(wrapperClass) {
  const wrapper = document.getElementsByClassName(wrapperClass)[0]; 
  const pickers = wrapper.getElementsByClassName("button_picker");

  for (var i = 0; i < pickers.length; i++) {
    pickers[i].addEventListener("click", function () {
      var current = wrapper.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", ""); 
      }
      this.className += " active"; 
    });
  }
}

addActiveClass("button_wrapper"); 
addActiveClass("size_wrapper");

// CLEAR FILTER
document.getElementById("clear").addEventListener("click", function () {
  var activeElements = document.getElementsByClassName("active");
  while (activeElements.length > 0) {
    activeElements[0].classList.remove("active");
  }
});

// FILTER BAR
// const filter_bar = document.getElementById("filter_bar");
// filter_bar.addEventListener("click", function () {
//   filter_bar.classList.toggle("flex");
// });
const filterBar = document.getElementById("filter_bar");
function openFilter() {
  filterBar.classList.add("translate-y-0");
  filterBar.classList.remove("translate-y-full");
}
function closeFilter() {
  filterBar.classList.add("translate-y-full");
  filterBar.classList.remove("translate-y-0");
}
