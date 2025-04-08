////////////////// API \\\\\\\\\\\\\\\\\\\

const version = "15.7.1";

async function fetchChampions(version = "15.7.1") {
    const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/pt_BR/champion.json`;

    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro ao buscar dados: ${response.status}`);
    const data = await response.json();

    return data.data;
}

////////////////// DOM \\\\\\\\\\\\\\\\\\\

function getImageUrl(id) {
    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${id}.png`;
}


function createChampionCardList(displayName, imageUrl) {
    const card = document.createElement("div");
    card.className = "champion-card";
    card.innerHTML = `
      <img src="${imageUrl}" alt="${displayName}">
      <p>${displayName}</p>
    `;
    return card;
}

function createChampionCard(displayName, imageUrl) {
    const card = document.createElement("div");
    card.className = "champion-card-team";
    card.innerHTML = `
      <img src="${imageUrl}" alt="${displayName}">
      <p>${displayName}</p>
    `;
    return card;
}

function renderTeam(teamArray, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    teamArray.forEach(id => {
        const card = createChampionCard(
            GameState.championInfo[id].name,
            getImageUrl(id)
        );
        container.appendChild(card);
    });
}

////////////////// GAME \\\\\\\\\\\\\\\\\\\

const GameState = {
    myTeam: [],
    enemyTeam: [],
    totalForce: {},
    championInfo: {}
};

function selectChampion(cardElement, id) {
    if (GameState.myTeam.includes(id)) {
        GameState.myTeam = GameState.myTeam.filter(n => n !== id);
        cardElement.classList.remove('selected');
    } else if (GameState.myTeam.length < 3) {
        GameState.myTeam.push(id);
        cardElement.classList.add('selected');
    } else {
        throw new Error("Você só pode selecionar 3 campeões");
    }
}

function calculateTeamForce(team) {
    return team.reduce((sum, id) => sum + GameState.totalForce[id], 0);
}

function getRandomEnemyTeam(excluded, allChampions, teamSize = 3) {
    const available = allChampions.filter(id => !excluded.includes(id));
    const team = [];

    while (team.length < teamSize) {
        const randIndex = Math.floor(Math.random() * available.length);
        const selected = available[randIndex];
        if (!team.includes(selected)) team.push(selected);
    }

    return team;
}

////////////////// MAIN \\\\\\\\\\\\\\\\\\\

document.addEventListener("DOMContentLoaded", async () => {
    const champions = await fetchChampions(version);
    const championListElement = document.getElementById("champion-list");

    Object.entries(champions).forEach(([id, champ]) => {
        const displayName = champ.name;
        const imageUrl = getImageUrl(id);

        GameState.championInfo[id] = champ;
        GameState.totalForce[id] = champ.info.attack + champ.info.magic + champ.info.defense;

        const card = createChampionCardList(displayName, imageUrl);
        card.addEventListener("click", () => {
            try {
                selectChampion(card, id);
                renderTeam(GameState.myTeam, "myTeamComplete");
            } catch (error) {
                alert(error.message);
            }
        });

        championListElement.appendChild(card);
    });

    const playButton = document.getElementById("play-button");
    playButton.addEventListener("click", startGameBattle);

    const clearButton = document.getElementById("clear-button");
    clearButton.addEventListener("click", clearSelect)
});

function startGameBattle() {
    const resultText = document.querySelector(".result-game p");
    const playButton = document.querySelector("button");

    if (GameState.myTeam.length !== 3) {
        resultText.innerHTML = `Escolha exatamente 3 campeões para jogar!`;
        return;
    }

    GameState.enemyTeam = getRandomEnemyTeam(
        GameState.myTeam,
        Object.keys(GameState.totalForce)
    );

    renderTeam(GameState.enemyTeam, "enemyTeamComplete");

    const myForce = calculateTeamForce(GameState.myTeam);
    const enemyForce = calculateTeamForce(GameState.enemyTeam);

    if (myForce > enemyForce) {
        resultText.innerHTML = `
            <strong>Você venceu!</strong><br>
            Seu time de ${myForce} pontos de força venceu o adversário com ${enemyForce} pontos.
        `;
    } else if (myForce < enemyForce) {
        resultText.innerHTML = `
            <strong>Você perdeu!</strong><br>
            O time adversário com ${enemyForce} pontos de força venceu seu time de ${myForce}.
        `;
    } else {
        resultText.innerHTML = `
            <strong>Empate!</strong><br>
            Ambos os times têm ${myForce} pontos de força.
        `;
    }
}

function clearSelect() {
    GameState.myTeam = [];

    const allCards = document.querySelectorAll(".champion-card");
    allCards.forEach(card => {
        card.classList.remove("selected");
    });

    renderTeam([], "myTeamComplete");

    const resultText = document.querySelector(".result-game p");
    if (resultText) resultText.innerHTML = "";
}