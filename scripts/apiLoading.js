const key = config.MY_KEY;
const cardContainer = document.getElementById("card-container");
window.addEventListener("load", sendRequest);
function sendRequest(e, attack = null, health = null, cost = null) {
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      if (this.status === 200) {
        const cards = JSON.parse(this.responseText); //parsiraj json u niz objekata
        cardContainer.innerHTML = ""; //obrisi karte koje su vec prikazane
        displayCards(cards); //prikazi nove karte
      }
    }
  });

  if (cost != null) {
    xhr.open(
      //otovri novu konekciju
      "GET",
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/classic?cost=${cost}&collectible=1`
    );
  }
  if (attack != null) {
    xhr.open(
      "GET",
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/classic?attack=${attack}&collectible=1`
    );
  }
  if (health != null) {
    xhr.open(
      "GET",
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/classic?health=${health}&collectible=1`
    );
  }
  if (attack == null && health == null && cost == null) {
    xhr.open(
      "GET",
      "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/classic?collectible=1"
    );
  }
  xhr.setRequestHeader("X-RapidAPI-Key", `${key}`);
  xhr.setRequestHeader(
    "X-RapidAPI-Host",
    "omgvamp-hearthstone-v1.p.rapidapi.com"
  );

  xhr.send(data);
}

function searchCard(e, searchQuery) {
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      const cards = JSON.parse(this.responseText);
      cardContainer.innerHTML = "";
      displayCards(filterClassic(cards)); //prikazi karte i filtriraj classic
    }
  });

  xhr.open(
    "GET",
    `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${searchQuery}?collectible=1`
  );
  xhr.onloadend = function () {
    if (xhr.status == 404) {
      cardContainer.innerHTML = `
      <div class="column is-one-quarter">
    </div>
      <div class="column is-half has-background-warning mt-2">
        <p class="bd-notification">
            The card with that name does not exist, check your input!
        </p>
      </div>
      <div class="column is-one-quarter">
    </div>`;
      throw new Error("Server replied 404");
    }
  };
  xhr.setRequestHeader("X-RapidAPI-Key", `${key}`);
  xhr.setRequestHeader(
    "X-RapidAPI-Host",
    "omgvamp-hearthstone-v1.p.rapidapi.com"
  );

  xhr.send(data);
}

function cardsByClassOrRaceRequest(e, hearthstoneClassOrRace, classOrRace) {
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      const cards = JSON.parse(this.responseText);
      cardContainer.innerHTML = "";
      console.log(cards);
      const filteredCards = filterClass(
        hearthstoneClassOrRace,
        cards,
        classOrRace
      );
      displayCards(filteredCards);
    }
  });

  xhr.open(
    "GET",
    "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/classic?collectible=1"
  );
  xhr.setRequestHeader("X-RapidAPI-Key", `${key}`);
  xhr.setRequestHeader(
    "X-RapidAPI-Host",
    "omgvamp-hearthstone-v1.p.rapidapi.com"
  );

  xhr.send(data);
}
function displayCards(responseCards) {
  const createCard = (index) => {
    //kreiraj kartice sa tagovi koji omogucavaju njihov prikaz
    const card = document.createElement("div");
    card.innerHTML = `<div class="card">
  <div class="card-image">
    <figure>
      <img
        src="${responseCards[index - 1].img}"
        alt="Placeholder image"
      />
    </figure>
  </div>
</div>`;
    card.className = "column is-one-fifth";
    cardContainer.appendChild(card);
  };
  const addCards = () => {
    for (let i = 1; i <= responseCards.length; i++) {
      if (responseCards[i - 1].img === undefined) {//neke karte nemaju sliku
        continue;
      }
      createCard(i);
    }
  };

  addCards();
}
function filterClassic(cards) {
  let newCards = [],
    newCardIndex = 0;
  for (let index = 0; index < cards.length; index++) {
    if (cards[index].cardSet === "Classic") {
      newCards[newCardIndex++] = cards[index];
    } else continue;
  }
  return newCards;
}

//vrati karte u odnosu na klasu ili rasu
function filterClass(hearthstoneClassOrRace, cards, classOrRace) {
  let newCards = [],
    newCardIndex = 0;
  if (classOrRace) {//ako je potrebna klasa,vrati samo one koje imaju tu klasu
    for (let index = 0; index < cards.length; index++) {
      if (cards[index].playerClass === hearthstoneClassOrRace) {
        newCards[newCardIndex++] = cards[index];
      } else continue;
    }
  } else {//u suportnom vrati one koji su odredjene rase
    for (let index = 0; index < cards.length; index++) {
      if (cards[index].race === hearthstoneClassOrRace) {
        newCards[newCardIndex++] = cards[index];
      } else continue;
    }
  }

  return newCards;
}
