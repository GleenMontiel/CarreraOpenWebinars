class Videogame {
    
    constructor(title, creator, year) {
        this.title = title;
        this.creator = creator;
        this.year = year;
    }
}

var gameList = [];

gameList.push(new Videogame("ELPOLLO", "Gleen", 2021));
gameList.push(new Videogame("Metal Gear Solid", "Konami", 1998));
gameList.push(new Videogame("Crash Team Racing", "Naughty Dog", 1999));

function dropGame(title) {
    for (let index = 0; index < gameList.length; index++) {
        if(gameList[index].title === title) {
            gameList.splice(index, 1);
        }
    }
}

function showGameByYear(year) {
    for (let index = 0; index < gameList.length; index++) {
        if(gameList[index].year == year) 
        {
            console.log(`${index+1}.- Title: ${gameList[index].title} Creator: ${gameList[index].creator} Year: ${gameList[index].year}`);
        }
    }
}

function showGameList() {
    for (let index = 0; index < gameList.length; index++) {
        console.log(`${index+1}.- Title: ${gameList[index].title} Creator: ${gameList[index].creator} Year: ${gameList[index].year}`);
    }
}

dropGame("Crash Team Racing");
showGameList();
showGameByYear(1998);
