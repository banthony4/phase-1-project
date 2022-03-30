# Phase-1 Project

1. turn the api into a local db.json file within this project
2. when the timer runs out, trivia game runs the same function that is run when the user triggers the submit event via the submit button
3. when the timer runs out/submit event is triggered, create a delete request that deletes the translated nation title from the local db.json file (ex: china in swedish. once it is used, deletes china in swedish from local db.json file)
4. the start over/ go back to how to play button submits a fetch request of the data from the api to the db.json file and REPLACES the existing information within (which will reset the information that can be pulled, ex: china in swedish will, by proxy, be added back to the pool of grabbable translated nation names to use in the trivia game).


if else syntax

if (the form is submitted) {run the submit event} 
else (the timer runs out) {}

to do (bella): 
<!-- 1. create an addlistenerevent for submit for the answer form , which appends the input text onto the scoreboard --> (DONE!)
2. try fetch for the hints, even if its just console logging. then try to append below where the fetched translated nation names will be

plan for randomized grabbing name function:
- manually select each nation from a fetch request, and assign a variable to each. 
    - ie if Sweden's name object is country.name
- create an array of nation names

fetch()
.then
.then(country => {
    const china = country.name.ch
    const sweden = country.name.swe
    
    [china, sweden]
    
    (china is returned)
    
    (input value) === china
    

    })

    const people = ['Ben', 'troy', 'max', 'luke']
    const [b, , m,l] = people
    console.log(b)

    const countryArray = [US, China, Italy, Sweden...]
    const [us, country.name.ch, it, swe] = countryArray
    console.log(it) --> Italy

Backup: 
    -use flags instead of translations, set alt = 'country name'
    -compare input value with alt value