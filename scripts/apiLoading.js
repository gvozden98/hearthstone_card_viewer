const key = config.MY_KEY;
const cardContainer = document.getElementById("card-container");
window.addEventListener("load", sendRequest);
function sendRequest(e, attack = null, health = null, cost = null) {
  //iz nekog tazloga cost nije null pri prvom ocitavanju stranice, ne rauzmem zasto
  console.log(cost);
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      if (this.status === 200) {
        const cards = JSON.parse(this.responseText);
        cardContainer.innerHTML = "";
        displayCards(cards, cards.length);
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
    console.log(
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/classic?attack=${attack}&collectible=1`
    );
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

function displayCards(responseCards, responseLength) {
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
    for (let i = 1; i <= responseLength; i++) {
      createCard(i);
    }
  };

  addCards();
}
