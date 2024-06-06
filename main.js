"use strict";

document.getElementById("fetch-btn").addEventListener("click", async () => {
   const swapiData = await getSwapiData();
   console.log(swapiData);
});

const getSwapiData = async () => {
    const response = await fetch("https://swapi.dev/api/people/1/");
    const data = await response.json();
    return data;
};