// Variables
const countryList = document.getElementById('country-container');
const triviaContainer = document.getElementById('trivia-container');
const studyBttn = document.getElementById('study-button');
const triviaBttn = document.getElementById('quiz-button');
const howToPlay = document.getElementById('how-to-play');
const languageSelect = document.getElementById('language-select');
let incorrect = 0;
let correct = 0;
const baseUrl = 'https://restcountries.com/v3.1/all';

const fetchCountries = () => {
    return fetch(baseUrl)
        .then(resp => resp.json())
};

// languageSelect.addEventListener('change', (e) => {
//     const language = e.target.value
//     console.log(language)
//     fetchCountries()
//     .then(country => {
//         country.forEach((country)=> {
//         countriesArray.push(country.translations.language)
//         })
//         renderRandomCountry(countriesArray)
//     }) //need to figure out how to use this value in renderCountries, possibly on click re-render and pass on language as varible? I'll try this in the morning!
// });

// create Card for each Country
const renderCountries = (country) => {
    const countryCard = document.createElement('div')
    countryCard.className = 'card'

    const div = document.createElement('div')
    div.className = 'flag-container'
    const countryFlag = document.createElement('img')
    countryFlag.src = country.flags.svg
    countryFlag.alt = country.name.common
    countryFlag.class = 'flags'
    div.append(countryFlag)

    const countryName = document.createElement('h3')
    countryName.textContent = country.name.common

    // const translation = document.createElement('h2')
    // translation.textContent = country.translations.kor.common //kor should be replaced by language
    // console.log(country.translations.language)

    const population = document.createElement('p')
    population.textContent= `Population: ${country.population}`

    const continent = document.createElement('p')
    continent.textContent = `Continent: ${country.continents}`

    countryCard.append(div, countryName, population, continent)
    countryList.appendChild(countryCard)
};

// const flagsArray = []
// const renderHint = (country) => {
//     flagsArray.push(country.flags.svg)
    // let hint = Object.values(country.languages);
    // console.log(hint) // convert hint from arr to string? cringes this needs work. it's kind of working but needs more work. 
    // hint.toString();
    // const h3 = document.createElement("h3");
    // const nameHintDiv  = document.querySelector("#name-hint-div");
    // h3.textContent = hint;
    // nameHintDiv.append(h3);
    // }


//Render Randomized Country to Trivia Game
const flagsArray = [];
const countriesArray = [];
const countryFlags = () => {
    fetchCountries()
    .then(country => {
        country.forEach((country)=> {
            flagsArray.push(country.flags.svg)
            countriesArray.push(country.name.common)
        })
        renderRandomFlag(flagsArray, countriesArray)
    })
}
const renderRandomFlag = (flags, countries) => {
    const randomIndex = Math.floor(Math.random() * flags.length)
    const flagImg = flags[randomIndex]
    const flagAlt = countries[randomIndex]
    appendFlagToTrivia(flagImg, flagAlt)
}
const appendFlagToTrivia = (flagImg, flagAlt) => {
    const flag = document.getElementById('country-flag')
    flag.src = flagImg
    flag.alt = flagAlt
}


// trivia page
const renderTrivia = () => {
    const triviaGame = document.createElement('div')
    triviaGame.id = 'trivia-game'

    const hintBttn = document.createElement('h3')
    hintBttn.id = 'hint'
    hintBttn.textContent = ' hint? '
    // hintBttn.addEventListener("click", () => {
    //     fetchHints()
    //     .then(nationData => nationData.forEach(renderHint))
    // })

    const startOver = document.createElement('button');
    startOver.id = 'start-over'
    startOver.textContent = 'START OVER'
    startOver.addEventListener('click', reload);
    
    const timer = document.createElement('h3');
    timer.textContent = 60
    timer.id = 'timer'
    
    const nameAndHint = document.createElement("div"); 
    nameAndHint.id = "name-hint-div"

    const flag = document.createElement("img");
    flag.id = 'country-flag'
    nameAndHint.append(flag);

    const h3 = document.createElement('h3');
    h3.textContent = 'Answer:'

    const form = document.createElement('form');
    form.id = 'form'
    
    const input = document.createElement('input');
    input.type = 'text'
    input.name = 'answer'
    input.placeholder = 'Type answer here'
    input.id = "answer"
    
    const submit = document.createElement('input');
    submit.type = 'submit'
    submit.name = 'submit'
    submit.class = 'submit'
    submit.id = "submit-input"
    
    form.append(input, submit)

    const scoreboard = document.createElement('div');
    scoreboard.id = 'scoreboard'
    const h2 = document.createElement('h2');
    h2.textContent = 'Scoreboard: '
    scoreboard.append(h2);
    const score = document.createElement('p')
    score.id = 'score'
    score.textContent = `Correct: ${correct} Incorrect: ${incorrect}`
    
    // REMINDER: FETCH BELOW IS USED TO VIEW API ARRAY/OBJECT ELEMENTS IN CONSOLE. DO NOT DELETE!!! 
    // fetch(baseUrl)
    // .then(response => response.json())
    // .then(countries => {
    //     countries.forEach(country => console.log(country))
    // })

    // add a submit event listener to the answer form with a callback function that appends the input value into the div "#scoreboard"
    // select the value of the input form, and assign it to a variable. 
    // 
    // callback function will: 
        // append variabled input value to the scoreboard? 
        // remember the convert to array option, potentially use forEach to create a list tag for each input value? (can style out the bullet points, etc. later. might be useful to group like this under same tag type)
    // 

    form.addEventListener("submit", (e) => submitAnswer(e));

    // alt version of the submit answer event:

    // const ul = document.createElement("ul")
    // ul.id = "ul"
    // scoreboard.append(ul)

    // form.addEventListener("submit", submitAnswer);

    // function submitAnswer(event) {
    //     event.preventDefault();
    //     // console.log("frog submit!")
        
    //     const newAnswer = document.querySelector("#text-input").value;
    //     // console.log(newAnswer);
    //     const answersArr = [];
    //     answersArr.unshift(newAnswer);

    //     answersArr.forEach((answer) => {
    //        const li = document.createElement("li");
    //        li.append(answer);
    //         ul.append(li);
    //     });
    // }
    // note: answers are currently within li elements that are appended to a ul tag that is appended to the scoreboard div. however, if needed we could take away the parent ul tag and append each li (with appended answer) to the scoreboard div directly. 


    triviaGame.append(hintBttn, startOver, timer, nameAndHint, h3, form, scoreboard, score);
    triviaContainer.append(triviaGame);
}

function submitAnswer(e) {
    e.preventDefault();
    const correctAnswer = document.getElementById('country-flag')
    const score = document.getElementById('score')
    const timer = document.getElementById('timer')
    if(e.target.answer.value.toLowerCase() === correctAnswer.alt.toLowerCase()){
        score.textContent = `Correct: ${++correct} Incorrect: ${incorrect}`
        timer.innerText = parseInt(timer.innerText) + 10
    } else {
        score.textContent = `Correct: ${correct} Incorrect: ${++incorrect}`
        timer.innerText = parseInt(timer.innerText) - 5

    }
    const triviaBoard = document.getElementById('trivia-game')
    const answer = document.createElement('li')
    answer.innerText = e.target.answer.value
    triviaBoard.append(answer)
    countryFlags()
    form.reset();
};


const decrementCounter = () => {
    let timer = document.getElementById('timer')
    if(timer.innerText > 0 ){
        timer.innerText = parseInt(timer.innerText) - 1
    }
};
const reload = () => {
    location.reload();
};


// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // countryNames()
})
studyBttn.addEventListener('click', () => {
    // howToPlay.style.display = 'none'
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
    countryFlags()
})
