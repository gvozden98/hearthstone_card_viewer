const key = config.MY_KEY;
window.addEventListener("load", sendRequest);
function sendRequest() {
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      const cards = JSON.parse(this.responseText);
      displayCards(cards);
      console.log(cards);
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
  const cardContainer = document.getElementById("card-container");
  const cardLimit = 255;
  const cardIncrease = 10;
  const pageCount = Math.ceil(cardLimit / cardIncrease);
  let currentPage = 1;

  let throttleTimer;

  const throttle = (callback, time) => {
    //proveri sta se ovde desava, nije ti nista jasno https://webdesign.tutsplus.com/tutorials/how-to-implement-infinite-scrolling-with-javascript--cms-37055
    if (throttleTimer) return;

    throttleTimer = true;

    setTimeout(() => {
      callback();
      throttleTimer = false;
    }, time);
  };

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
  const addCards = (pageIndex) => {
    currentPage = pageIndex;

    const startRange = (pageIndex - 1) * cardIncrease;
    const endRange =
      currentPage == pageCount ? cardLimit : pageIndex * cardIncrease;

    for (let i = startRange + 1; i <= endRange; i++) {
      createCard(i);
    }
  };

  const handleInfiniteScroll = () => {
    //i ovde nemas pojma sta se desava
    throttle(() => {
      const endOfPage =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

      if (endOfPage) {
        addCards(currentPage + 1);
      }

      if (currentPage === pageCount) {
        removeInfiniteScroll();
      }
    }, 500);
  };

  const removeInfiniteScroll = () => {
    window.removeEventListener("scroll", handleInfiniteScroll);
  };

  addCards(currentPage);

  window.addEventListener("scroll", handleInfiniteScroll);
}
