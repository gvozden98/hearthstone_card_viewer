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
  getCardsByClassOrRace(true);
});
races.addEventListener("click", function () {
  if (
    search.classList.contains("is-active") ||
    classes.classList.contains("is-active")
  ) {
    search.classList.remove("is-active");
    classes.classList.remove("is-active");
  }
  chooseRace();
  races.classList.add("is-active");
  getCardsByClassOrRace(false);
});

function chooseClass() {
  breadcrumbUl.innerHTML = `
  <li class="is-size-5 hearthStoneClasses"><a>Priest</a></li>
  <li class="is-size-5 hearthStoneClasses"><a>Warrior</a></li>
  <li class="is-size-5 hearthStoneClasses"><a>Mage</a></li>
  <li class="is-size-5 hearthStoneClasses"><a>Rogue</a></li>
  <li class="is-size-5 hearthStoneClasses"><a>Druid</a></li>
  <li class="is-size-5 hearthStoneClasses"><a>Hunter</a></li>
  <li class="is-size-5 hearthStoneClasses"><a>Paladin</a></li>
  <li class="is-size-5 hearthStoneClasses"><a>Warlock</a></li>
  `;
}
function chooseRace() {
  breadcrumbUl.innerHTML = `
  <li class="is-size-5 "><a>Dragon</a></li>
  <li class="is-size-5 "><a>Murloc</a></li>
  <li class="is-size-5 "><a>Demon</a></li>
  <li class="is-size-5 "><a>Beast</a></li>
  <li class="is-size-5 "><a>Pirate</a></li>
  <li class="is-size-5 "><a>Totem</a></li>
  <li class="is-size-5 "><a>Mech</a></li>
  `;
}
function getCardsByClassOrRace(classOrRace) {
  let liItems = breadcrumbUl.getElementsByTagName("li");//uzmi sve li elemente
  for (let index = 0; index < liItems.length; index++) {//dodaj event click listener na njih
    liItems[index].addEventListener("click", function (e) {
      //na osnovu kliknutog li elementa, pozovi API
      cardsByClassOrRaceRequest(e, liItems[index].innerText, classOrRace);
    });
  }
}
