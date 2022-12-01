<?php include "../app/header.php" ?>
<section class="section">
  <div class="container">
    <h1 class="title is-size-1" id="titleName">Hearthstone Deck Builder</h1>
    <div class="tabs">
      <ul>
        <li class="is-active"><a>Search</a></li>
        <li><a>Classes</a></li>
        <li><a>Races</a></li>
      </ul>
    </div>
    <nav class="breadcrumb is-centered has-dot-separator" aria-label="breadcrumbs" aria-label="breadcrumbs" id="breadcrumbSearch">
      <ul id="breadcrumbUl">
        <li class="is-size-5 bcjs" id="1"><a href="#" id="search">Search</a></li>
        <li class="is-size-5 bcjs" id="2"><a href="#" id="attack">Attack</a></li>
        <li class="is-size-5 bcjs" id="3"><a href="#" id="health">Health</a></li>
        <li class="is-size-5 bcjs" id="4"><a href="#" id="manaCost">Mana cost</a></li>
      </ul>
    </nav>
    <div class="columns is-multiline" id="card-container">
      <div id="loader">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    </div>
  </div>
  </div>
</section>
</body>

<script src="../scripts/navbarScript.js"></script>
<script src="../scripts/breadcrumbScript.js"></script>
<script src="../scripts/apiLoading.js"></script>



</html>