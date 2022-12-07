window.onload = searchCrumbs;
function searchCrumbs() {
  document.getElementById("breadcrumbUl").innerHTML = `
      <li class="is-size-5 bcjs" id="1"><a href="#" id="search">Search</a></li>
      <li class="is-size-5 bcjs" id="2"><a href="#" id="attack">Attack</a></li>
      <li class="is-size-5 bcjs" id="3"><a href="#" id="health">Health</a></li>
      <li class="is-size-5 bcjs" id="4"><a href="#" id="manaCost">Mana cost</a></li>`;
  const breadcrumbs = document.getElementsByClassName("bcjs"); //get breadcrumb list elements
  const prvi = document.getElementById("1");
  const drugi = document.getElementById("2");
  const treci = document.getElementById("3");
  const cetvrti = document.getElementById("4");
  addEventListener("click", function (e) {
    //event delegation
    if (e.target && e.target.id == "search") {
      breadcrumbs[0].innerHTML = `
          <label for="search" class="is-size-5 mr-2">Find a card: </label>
          <input
            class="input is-small mr-4"
            type="text"
            placeholder="Leeroy Jenkins"
            id="search"
          />`;

      revertBreadcrumbs(0);
    }
  });
  addEventListener("click", function (e) {
    if (e.target && e.target.id == "attack") {
      breadcrumbs[1].innerHTML = `
          <div class="select is-small mr-2 ml-2">
              <select id="selectAttack">
                  <option selected="true" disabled="disabled">
                  Select attack
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
              </select>
          </div>`;
      revertBreadcrumbs(1);
      let attackOptions = document.getElementById("selectAttack");
      attackOptions.addEventListener("change", function () {
        let attack = attackOptions.options[attackOptions.selectedIndex].text; //get selected option text
        sendRequest(e, attack, null, null);
      });
    }
  });

  addEventListener("click", function (e) {
    if (e.target && e.target.id == "health") {
      breadcrumbs[2].innerHTML = `
          <div class="select is-small mr-2 ml-2">
              <select id=selectHealth>
                  <option selected="true" disabled="disabled">
                  Select health
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
              </select>
          </div>`;

      revertBreadcrumbs(2);
      //moras da ih stavis u try catch i da hendlas 404
      let selectHealth = document.getElementById("selectHealth");
      selectHealth.addEventListener("change", function () {
        let health = selectHealth.options[selectHealth.selectedIndex].text; //get selected option text
        sendRequest(e, null, health, null);
      });
    }
  });
  addEventListener("click", function (e) {
    if (e.target && e.target.id == "manaCost") {
      breadcrumbs[3].innerHTML = `
          <div class="select is-small mr-2 ml-2">
              <select id="selectManaCost">
                  <option selected="true" disabled="disabled">
                  Select mana cost
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
              </select>
          </div>`;

      revertBreadcrumbs(3);
      let selectManaCost = document.getElementById("selectManaCost");
      selectManaCost.addEventListener("change", function () {
        let cost = selectManaCost.options[selectManaCost.selectedIndex].text; //get selected option text
        sendRequest(e, null, null, cost);
      });
    }
  });

  function revertBreadcrumbs(current) {
    if (current == 0) {
      drugi.innerHTML = `<a href="#"id="attack">Attack</a>`;
      treci.innerHTML = `<a href="#"id="health">Health</a>`;
      cetvrti.innerHTML = `<a href="#"id="manaCost">Mana cost</a>`;
    }
    if (current == 1) {
      prvi.innerHTML = `<a href="#" id="search">Search</a>`;
      treci.innerHTML = `<a href="#"id="health">Health</a>`;
      cetvrti.innerHTML = `<a href="#"id="manaCost">Mana cost</a>`;
    }
    if (current == 2) {
      prvi.innerHTML = `<a href="#" id="search">Search</a>`;
      drugi.innerHTML = `<a href="#"id="attack">Attack</a>`;
      cetvrti.innerHTML = `<a href="#"id="manaCost">Mana cost</a>`;
    }
    if (current == 3) {
      prvi.innerHTML = `<a href="#" id="search">Search</a>`;
      drugi.innerHTML = `<a href="#"id="attack">Attack</a>`;
      treci.innerHTML = `<a href="#"id="health">Health</a>`;
    }
  }
  if (document.getElementById("selectAttack") != null) {
    let attackOptions = document.getElementById("selectAttack");
    attackOptions.addEventListener("change", function () {
      let attack = attackOptions.options[attackOptions.selectedIndex].text;
      console.log(attack);
    });
  }
}
