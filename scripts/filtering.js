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
  <li class="is-size-5"><a>Priest</a></li>
  <li class="is-size-5"><a>Warrior</a></li>
  <li class="is-size-5"><a>Mage</a></li>
  <li class="is-size-5"><a>Rogue</a></li>
  <li class="is-size-5"><a>Druid</a></li>
  <li class="is-size-5"><a>Hunter</a></li>
  <li class="is-size-5"><a>Paladin</a></li>
  <li class="is-size-5"><a>Warlock</a></li>
  `;
}
