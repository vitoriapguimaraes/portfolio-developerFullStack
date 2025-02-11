document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const resultArtist = document.getElementById("result-artist");
    const resultPlaylist = document.getElementById("result-playlist"); // Corrigi o nome do ID

    function requestApi(searchTerm) {
        console.log(`Buscando por: ${searchTerm}`); // Depuração

        const url = `http://localhost:3000/artists`; // Busca todos os artistas

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // Filtrar os artistas pelo nome digitado (case-insensitive)
                const filteredArtists = data.filter(artist =>
                    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
                );

                console.log("Artistas encontrados:", filteredArtists); // Depuração
                displayResults(filteredArtists);
            })
            .catch((error) => console.error("Erro ao buscar artistas:", error));
    }

    function displayResults(result) {
        resultPlaylist.classList.add("hidden"); // Esconde a tela principal

        if (result.length === 0) {
            resultArtist.innerHTML = '<p class="no-results">Nenhum artista encontrado</p>';
            return;
        }

        resultArtist.innerHTML = ""; // Limpa os resultados anteriores

        result.forEach(element => {
            const artistCard = document.createElement("div");
            artistCard.classList.add("artist-card");

            artistCard.innerHTML = `
                <div class="card-img">
                    <img class="artist-img" src="${element.urlImg}" alt="${element.name}">
                </div>
                <div class="card-text">
                    <p class="artist-name">${element.name}</p>
                </div>
            `;

            resultArtist.appendChild(artistCard);
        });

        resultArtist.classList.remove("hidden"); // Garante que a lista aparece
    }

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim();

        if (searchTerm === "") {
            console.log("Campo de busca vazio, voltando à tela inicial."); // Depuração
            resultPlaylist.classList.remove("hidden");
            resultArtist.classList.add("hidden");
            return;
        }

        requestApi(searchTerm);
    });
});
