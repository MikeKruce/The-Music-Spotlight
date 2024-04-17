// Adding the constants to listen for the search button getting clicked
const searchButton = document.querySelector('#searchButton');
const results = document.getElementById('results');

// This in the function that calls the prompt for a song search
let search;
let searchID;
let lyrics = [];
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b243e9cf70msh28c3d9f6a66f292p1293bejsndd402a6d1b1b',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};


function searchPrompt(event) {
    search = prompt("Enter your song here");
}

function separateLyrics(array) {
    array.forEach(function (array) {
        console.log(array.words);
        const listItem = document.createElement('li');
        listItem.textContent = array.words;
        results.appendChild(listItem);
    })
}

function getSongID() {

    // url1 Takes the song search and gives us the data needed to find the song ID to look up more information
    const url1 = `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(search)}&type=tracks&offset=0&limit=10&numberOfTopResults=5`;

    fetch(url1, options)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            searchID = data.tracks.items[0].data.id;
            console.log(searchID);
            getSong(searchID)

        })
}

function getSong(id) {
    // url2 uses the sportify API to use our newly found ID attached to the URL to look up lyrics
    const url2 = `https://spotify23.p.rapidapi.com/track_lyrics/?id=${id}`;

    fetch(url2, options)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            lyricsArray = data.lyrics.lines;
            separateLyrics(lyricsArray);
            results.append.lyrics;
        })
}



// The event listener for the search button
searchButton.addEventListener('click', function () {
    searchPrompt();
    getSongID();
})


// Billboard
// const url = 'https://billboard-api2.p.rapidapi.com/artist-100?date=2019-05-11&range=1-10';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '33c405c45fmsh66b0459cec78964p1cdabdjsn132baa4ed581',
// 		'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
