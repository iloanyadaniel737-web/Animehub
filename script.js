function searchAnime() {
    const searchInput = document.getElementById("searchInput");
    const searchText = searchInput.value.toLowerCase();

    const animeCards = document.querySelectorAll(".anime-card");

    animeCards.forEach(function(card) {
        const animeName = card.querySelector("h3").textContent.toLowerCase();

        if (animeName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
function openAnime(animeName) {
    window.location.href = "anime.html?anime=" + animeName;
}

function loadNewAnime() {
    const animeGrid = document.getElementById("animeGrid");

    const savedAnime = JSON.parse(localStorage.getItem("animeList")) || [];

    savedAnime.forEach(function(anime) {
        const card = document.createElement("div");
        card.className = "anime-card";

        const image = document.createElement("img");
        image.className = "anime-cover";
        image.src = anime.image;
        image.alt = anime.title;

        const title = document.createElement("h3");
        title.textContent = anime.title;

        const description = document.createElement("p");
        description.textContent = anime.description;

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);

        animeGrid.appendChild(card);
    });
}

loadNewAnime();