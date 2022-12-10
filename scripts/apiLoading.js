const key = config.MY_KEY;
const cardContainer = document.getElementById("card-container");
window.addEventListener("load", sendRequest);
function sendRequest(
  e,
  attack = null,
  health = null,
  cost = null,
  hearthstoneClass = null
) {
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE && hearthstoneClass != null) {
      if (this.status === 200) {
      }
    }
    if (this.readyState === this.DONE) {
      if (this.status === 200) {
        const cards = JSON.parse(this.responseText);
        cardContainer.innerHTML = "";
        displayCards(cards);
        console.log(cards.length);
        console.log(cards);
      }
    } else {
    }
  });

  if (cost != null) {
    xhr.open(
      "GET",
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/classic?cost=${cost}&collectible=1`
    );
    console.log("cost");
  }
  if (attack != null) {
    xhr.open(
      "GET",
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/classic?attack=${attack}&collectible=1`
    );
    console.log("attack");
  }
  if (health != null) {
    xhr.open(
      "GET",
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/classic?health=${health}&collectible=1`
    );
    console.log("health");
  }
  if (attack == null && health == null && cost == null) {
    xhr.open(
      "GET",
      "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/classic?collectible=1"
    );
    console.log("else");
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
      console.log(cards);
      displayCards(filterClassic(cards));
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
  //probao sam da napravim dinamicko loadovanje slika ali nisam uspeo zboog event listenera
  const createCard = (index) => {
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
      if (responseCards[i - 1].img === undefined) {
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

function filterClass(hearthstoneClassOrRace, cards, classOrRace) {
  let newCards = [],
    newCardIndex = 0;
  if (classOrRace) {
    for (let index = 0; index < cards.length; index++) {
      if (cards[index].playerClass === hearthstoneClassOrRace) {
        newCards[newCardIndex++] = cards[index];
      } else continue;
    }
  } else {
    for (let index = 0; index < cards.length; index++) {
      if (cards[index].race === hearthstoneClassOrRace) {
        newCards[newCardIndex++] = cards[index];
      } else continue;
    }
  }

  return newCards;
}
