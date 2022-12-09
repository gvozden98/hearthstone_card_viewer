//Mislim da ovo moze da bude jedna funkcija ali nisam bas siguran kako to da uradim
function getCardsByClassOrRace(classOrRace) {
  let liItems = breadcrumbUl.getElementsByTagName("li");
  for (let index = 0; index < liItems.length; index++) {
    liItems[index].addEventListener("click", function (e) {
      console.log(liItems[index].innerText);
      cardsByClassOrRaceRequest(e, liItems[index].innerText, classOrRace);
    });
  }
}
