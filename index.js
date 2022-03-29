const countryList = document.getElementById('country-container')

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(resp => resp.json())
    .then(countries => countries.forEach(renderCountries))
})

const renderCountries = (country) => {
    const countryCard = document.createElement('div')
    countryCard.className = 'card'

    const countryFlag = document.createElement('img')
    countryFlag.src = country.flags.svg

    const countryName = document.createElement('h3')
    countryName.textContent = country.name.common

    const population = document.createElement('p')
    population.textContent= `Population: ${country.population}`

    const continent = document.createElement('p')
    continent.textContent = `Continent: ${country.continents}`

    countryCard.append(countryFlag, countryName, population, continent)
    countryList.appendChild(countryCard)
}