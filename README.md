# Phase-1 Project

1. turn the api into a local db.json file within this project
2. when the timer runs out, trivia game runs the same function that is run when the user triggers the submit event via the submit button
3. when the timer runs out/submit event is triggered, create a delete request that deletes the translated nation title from the local db.json file (ex: china in swedish. once it is used, deletes china in swedish from local db.json file)
4. the start over/ go back to how to play button submits a fetch request of the data from the api to the db.json file and REPLACES the existing information within (which will reset the information that can be pulled, ex: china in swedish will, by proxy, be added back to the pool of grabbable translated nation names to use in the trivia game).