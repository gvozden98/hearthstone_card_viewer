const search = document.getElementById("search");
const classes = document.getElementById("classes");
const races = document.getElementById("races");
const breadcrumbUl = document.getElementById("breadcrumbUl");

search.addEventListener("click", function () {
  if (
    classes.classList.contains("is-active") ||
    races.classList.contains("is-active")
  ) {
    classes.classList.remove("is-active");
    races.classList.remove("is-active");
  }
  searchCrumbs();
  sendRequest();
  search.classList.add("is-active");
});
classes.addEventListener("click", function () {
  if (
    search.classList.contains("is-active") ||
    races.classList.contains("is-active")
  ) {
    search.classList.remove("is-active");
    races.classList.remove("is-active");
  }

  chooseClass();
  classes.classList.add("is-active");
});
races.addEventListener("click", function () {
  if (
    search.classList.contains("is-active") ||
    classes.classList.contains("is-active")
  ) {
    search.classList.remove("is-active");
    classes.classList.remove("is-active");
  }
  races.classList.add("is-active");
});

function chooseClass() {
  breadcrumbUl.innerHTML = `
  <li><a>Priest</a></li>
  <li><a>Warrior</a></li>
  <li><a>Mage</a></li>
  <li><a>Rogue</a></li>
  <li><a>Druid</a></li>
  <li><a>Hunter</a></li>
  <li><a>Paladin</a></li>
  <li><a>Warlock</a></li>
  `;
}
