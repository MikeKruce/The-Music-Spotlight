// Adding the constants to listen for the search button getting clicked
const searchButton = document.querySelector('#searchButton');
// Constant that will refer to the section Lyric results are added to
const results = document.getElementById('results');
// This display will be used to show information on recent searches
const recentSearchDisplay = document.getElementById('recentSearchDisplay');

// Here are some variables being set for later use
// search is for the user searching up songs. It will be modified by the function to work with the API
let search;
// Recent searches is for storing the most recent searches using local storage, to display later
let recentSearches = [];
// searchID correlates to the ID that is assigned to the song that is being looked up by the User
let searchID;
let lyrics = [];
// Retrieve recent searches from local storage
const storedSearches = localStorage.getItem('recentSearches');
if (storedSearches) {
    recentSearches = JSON.parse(storedSearches);
}

// These options are made to be used by the spotify API
const optionsSpot = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b243e9cf70msh28c3d9f6a66f292p1293bejsndd402a6d1b1b',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};

// This in the function that calls the prompt for a song search
function searchPrompt(event) {
    search = prompt("Enter your song here");
// Trims any spaces from the beginning or the end of the submitted prompt
    search = search.trim();
// Adds the search to local storage, trimming off old searches
    recentSearches.unshift(search);
    if (recentSearches.length > 4) {
    recentSearches.splice(4);}
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
// Replace spaces between words with %20, which is needed by the spotify API
      search = search.replace(/\s+/g, '%20');
    return [search, recentSearches];
}

// Put the recent searches into the page
function recentUpdate(array) {
  array.forEach(function (array) {
    const listItem = document.createElement('li')
    listItem.textContent = array;
     recentSearchDisplay.appendChild(listItem);
   })
}

// This function is to take the array of lyrics given by spotify when looking up a song,
// and inserting it into the results section of the HTML
function separateLyrics(array) {
  results.innerHTML = '';
    array.forEach(function (array) {
      const listItem = document.createElement('li')
        listItem.textContent = array.words;
        results.appendChild(listItem);
    })
}

// This function that gets the song lyrics is being set up here but will be used within the
// next function set- getSongID
function getSong(id) {
// url2 uses the spotify API to use our newly found ID attached to the URL to look up lyrics
    const url2 = `https://spotify23.p.rapidapi.com/track_lyrics/?id=${id}`;
// This retrieves data that contains the lyrics
    fetch(url2, optionsSpot)
        .then(function (response) {
            return response.json()
        })
// This separates out the lyrics and puts it into the results section of the HTML
        .then(function (data) {
            lyricsArray = data.lyrics.lines;
            separateLyrics(lyricsArray);
            results.append.lyrics;
        })
}

function getSongID() {
// url1 Takes the song search and gives us the data needed to find the song ID to
// look up more information
    const url1 = `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(search)}&type=tracks&offset=0&limit=10&numberOfTopResults=5`;
// This will take the searched song title and retrieve data for it that contains the SONG ID
// that will pull the lyrics up
    fetch(url1, optionsSpot)
        .then(function (response) {
            return response.json()
        })
// This part will take the data retrieved and pull out the needed ID
        .then(function (data) {
            searchID = data.tracks.items[0].data.id;
            getSong(searchID)
        })
}

// // Trigger the initial search and lyrics loading
window.addEventListener('load', function () {
  if (storedSearches) {
    recentUpdate(recentSearches);
  }
});

// The event listener for the search button that triggers the lookup and pasting of lyrics
searchButton.addEventListener('click', function () {
    results.textContent = '';
    recentSearchDisplay.textContent = '';
    searchPrompt();
    getSongID();
    recentUpdate(recentSearches);
})

const today = dayjs();
const formattedDate = today.format('YYYY-MM-DD')
const billboardArtistUrl = `https://billboard-api5.p.rapidapi.com/api/charts/artist-100?week=${encodeURIComponent(formattedDate)}`
const billboardGlobalUrl = `https://billboard-api5.p.rapidapi.com/api/charts/billboard-global-200?week=${encodeURIComponent(formattedDate)}`
const billboardAfrobeatUrl = `https://billboard-api5.p.rapidapi.com/api/charts/billboard-u-s-afrobeats-songs?week=${encodeURIComponent(formattedDate)}`
const billboardTopUrl = `https://billboard-api5.p.rapidapi.com/api/charts/hot-100?week=${encodeURIComponent(formattedDate)}`
const optionsTop = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '33c405c45fmsh66b0459cec78964p1cdabdjsn132baa4ed581',
    'X-RapidAPI-Host': 'billboard-api5.p.rapidapi.com'
  }
};
fetch(billboardTopUrl, optionsTop)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
  fetch(billboardGlobalUrl, optionsTop)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
  fetch(billboardAfrobeatUrl, optionsTop)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
  fetch(billboardArtistUrl, optionsTop)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });