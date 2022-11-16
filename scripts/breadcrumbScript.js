

    const breadcrumbs = document.getElementsByClassName("bcjs"); //get breadcrumb list elements
    const prvi = document.getElementById("1");
    const drugi = document.getElementById("2");
    const treci = document.getElementById("3");
    const cetvrti = document.getElementById("4");
    addEventListener("click", function(e){        //event delegation
        if(e.target && e.target.id== 'search'){
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
    addEventListener("click", function(e){
        if(e.target && e.target.id== 'attack'){
        breadcrumbs[1].innerHTML = `
        <div class="select is-small mr-2 ml-2">
            <select>
                <option selected="true" disabled="disabled">
                Select attack
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
        revertBreadcrumbs(1);
        }
    })

    addEventListener("click", function(e){
        if(e.target && e.target.id== 'health'){
        breadcrumbs[2].innerHTML = `
        <div class="select is-small mr-2 ml-2">
            <select>
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
        }
    })
    addEventListener("click", function(e){
        if(e.target && e.target.id== 'manaCost'){
        breadcrumbs[3].innerHTML = `
        <div class="select is-small mr-2 ml-2">
            <select>
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
        }
    })

    function revertBreadcrumbs(current) {
        if(current==0){        
            drugi.innerHTML=`<a href="#"id="attack">Attack</a>`;
            treci.innerHTML = `<a href="#"id="health">Health</a>`;
            cetvrti.innerHTML = `<a href="#"id="manaCost">Mana cost</a>`;}
        if(current==1){
            prvi.innerHTML=`<a href="#" id="search">Search</a>`;
            treci.innerHTML = `<a href="#"id="health">Health</a>`;
            cetvrti.innerHTML = `<a href="#"id="manaCost">Mana cost</a>`; }
        if(current==2){
            prvi.innerHTML=`<a href="#" id="search">Search</a>`;         
            drugi.innerHTML=`<a href="#"id="attack">Attack</a>`;
            cetvrti.innerHTML =`<a href="#"id="manaCost">Mana cost</a>`; }
        if(current==3){
            prvi.innerHTML=`<a href="#" id="search">Search</a>`;         
            drugi.innerHTML=`<a href="#"id="attack">Attack</a>`;
            treci.innerHTML = `<a href="#"id="health">Health</a>`; }
    }




