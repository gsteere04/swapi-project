"use strict";

document.getElementById("fetch-btn").addEventListener("click", async () => {
    const allCharacters = await getAllSwapiCharacters();
    console.log(allCharacters);
    displayCharacters(allCharacters);
});

document.getElementById("fetch-btn-planets").addEventListener("click", async () => {
    const allPlanets = await getAllSwapiPlanets();
    console.log(allPlanets);
    displayPlanets(allPlanets);
});

const getAllSwapiCharacters = async () => {
    let allCharacters = [];
    let nextPage = "https://swapi.dev/api/people/";

    // Fetch all pages until there are no more pages left
    while (nextPage) {
        const response = await fetch(nextPage);
        const data = await response.json();
        allCharacters = [...allCharacters, ...data.results];
        nextPage = data.next; // The URL of the next page, or null if no more pages
    }

    return allCharacters;
};

const getAllSwapiPlanets = async () => {
    let allPlanets = [];
    let nextPage = "https://swapi.dev/api/planets/";

    // Fetch all pages until there are no more pages left
    while (nextPage) {
        const response = await fetch(nextPage);
        const data = await response.json();
        allPlanets = [...allPlanets, ...data.results];
        nextPage = data.next; // The URL of the next page, or null if no more pages
    }

    return allPlanets;
};

const displayCharacters = (characters) => {
    const outputBox = document.getElementById("output");
    outputBox.innerHTML = ""; // Clear previous content

    characters.forEach((character) => {
        const characterElement = document.createElement("div");
        characterElement.classList.add("character");
        characterElement.innerHTML = `
            <h2>${character.name}</h2>
            <p>Height: ${character.height}</p>
            <p>Mass: ${character.mass}</p>
            <p>Hair Color: ${character.hair_color}</p>
            <p>Skin Color: ${character.skin_color}</p>
            <p>Eye Color: ${character.eye_color}</p>
            <p>Birth Year: ${character.birth_year}</p>
            <p>Gender: ${character.gender}</p>
        `;
        outputBox.appendChild(characterElement);
    });
};


const displayPlanets = (planets) => {
    const outputBox = document.getElementById("output");
    outputBox.innerHTML = ""; // Clear previous content

    planets.forEach((planet) => {
        const characterElement = document.createElement("div");
        characterElement.classList.add("planet");
        characterElement.innerHTML = `
            <h2>${planet.name}</h2>
            <p>Rotation Period: ${planet.rotation_period}</p>
            <p>Mass: ${planet.orbital_period}</p>
            <p>Diameter: ${planet.diameter}</p>
            <p>Climate: ${planet.climate}</p>
            <p>Gravity: ${planet.gravity}</p>
            <p>Terrain: ${planet.terrain}</p>
            <p>Surface Water: ${planet.surface_water}</p>
            <p>Population: ${planet.population}</p>
            <p>Residents: ${planet.residents}</p>
            <p>Films: ${planet.films}</p>
        `;
        outputBox.appendChild(characterElement);
    });
};
