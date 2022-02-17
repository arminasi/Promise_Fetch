const countryFlags = document.getElementById("countryFlags");

async function countryInfo(countryName) {
    const name = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => {
        const countryFlag = data[0].flags.png;
        const {population, area, borders} = data[0];
        return [countryFlag, population, area, borders]
    }) 
    
    countryFlag.src = name[0]
    population.textContent = `Population ${name[1]}`
    area.textContent = `Area ${name[2]} km`
    borders.textContent = `${name[3]}`
}

countryInfo("Armenia")