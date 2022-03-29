// Variables
const countryList = document.getElementById('country-container')
const triviaContainer = document.getElementById('trivia-container')
const studyBttn = document.getElementById('study-button')
const triviaBttn = document.getElementById('quiz-button')
const howToPlay = document.getElementById('how-to-play')
const languageSelect = document.getElementById('language-select')


const fetchCountries = () => {
    return fetch('https://restcountries.com/v3.1/all')
        .then(resp => resp.json())
}

languageSelect.addEventListener('click', (e) => {
    const language = e.target.value
    return language
})

// create Card for each Country
const renderCountries = (country) => {
    const countryCard = document.createElement('div')
    countryCard.className = 'card'

    const div = document.createElement('div')
    div.className = 'flag-container'
    const countryFlag = document.createElement('img')
    countryFlag.src = country.flags.svg
    countryFlag.class = 'flags'
    div.append(countryFlag)

    const countryName = document.createElement('h3')
    countryName.textContent = country.name.common

    const population = document.createElement('p')
    population.textContent= `Population: ${country.population}`

    const continent = document.createElement('p')
    continent.textContent = `Continent: ${country.continents}`

    countryCard.append(div, countryName, population, continent)
    countryList.appendChild(countryCard)
}

// trivia page
const renderTrivia = () => {
    const triviaGame = document.createElement('div')
    triviaGame.id = 'trivia-game'

    const hintBttn = document.createElement('h3')
    hintBttn.id = 'hint'
    hintBttn.textContent = ' hint? '

    const startOver = document.createElement('button')
    startOver.id = 'start-over'
    startOver.textContent = 'START OVER'
    startOver.addEventListener('click', reload)
    
    const timer = document.createElement('h3')
    timer.textContent = 60
    timer.id = 'timer'
    
    const h3 = document.createElement('h3')
    h3.textContent = 'Answer:'

    const form = document.createElement('form')
    form.id = 'form'
    
    const input = document.createElement('input');
    input.type = 'text'
    input.name = 'answer'
    input.placeholder = 'Type answer here'
    
    const submit = document.createElement('input');
    submit.type = 'submit'
    submit.name = 'submit'
    submit.class = 'submit'
    
    form.append(input, submit)
    
    submit.addEventListener("submit", foo)

    function foo(foo) {
        event.preventDefault();
        console.log(event.target)
    }

    const scoreboard = document.createElement('div')
    scoreboard.id = 'scoreboard'
    const h2 = document.createElement('h2')
    h2.textContent = 'Scoreboard: '
    scoreboard.append(h2)

    triviaGame.append(hintBttn, startOver, timer, h3, form, scoreboard)
    triviaContainer.append(triviaGame)
}

const decrementCounter = () => {
    let timer = document.getElementById('timer')
    if(timer.innerText > 0 ){
        timer.innerText = parseInt(timer.innerText) - 1
    }
}

const reload = () => {
    location.reload()
}


// Event Listeners
document.addEventListener('DOMContentLoaded', fetchCountries)
studyBttn.addEventListener('click', () => {
    howToPlay.style.display = 'none'
    countryList.replaceChildren()
    triviaContainer.replaceChildren()
    fetchCountries()
    .then(countries => countries.forEach(renderCountries))
})
triviaBttn.addEventListener('click', () => {
    howToPlay.style.display = 'none'
    countryList.replaceChildren()
    triviaContainer.replaceChildren()
    renderTrivia()
    setInterval(decrementCounter, 1000)
})