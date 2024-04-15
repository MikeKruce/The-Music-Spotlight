// Adding the constants to listen for the search button getting clicked
const searchButton = document.querySelector('#searchButton');
const results = document.querySelector('#results');

// This in the function that calls the prompt for a song search
function searchPrompt (event) {
    let search = prompt("Enter your song here");
}

// The event listener for the search button
searchButton.addEventListener('click', function() {
    searchPrompt()
})


//spotify artists
// const url = 'https://spotify23.p.rapidapi.com/artist_overview/?id=2w9zwq3AktTeYYMuhMjju8';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '33c405c45fmsh66b0459cec78964p1cdabdjsn132baa4ed581',
// 		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


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
