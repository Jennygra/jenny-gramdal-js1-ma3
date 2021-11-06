const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=70535c27c24544ee9bd3a7e59f37d91b"; 

const gameContainer = document.querySelector(".game_container");

async function getGames() {
    try {
        const response = await fetch(url); 
        const results = await response.json(); 
        const data = results.results;

        console.log(data);

        gameContainer.innerHTML = "";

        for(let i = 0; i < data.length; i++) {
            const name = data[i].name; 
            const rating = data[i].rating;
            const tags = data[i].tags; 

            if (i === 8) {
                break; 
            }

            gameContainer.innerHTML += 
            `<div class="games">
            <h4>${name}</h4> 
            <p class="ratings">Ratings: ${rating}</p>
            <p> Tags: ${tags.length}</p>
            </div>`;
        }

    } catch (error){
        console.log(error);
        gameContainer.innerHTML = displayError("oh no... an error occurred when calling API");
    } 
}

getGames();



