// const url = 'https://billboard2.p.rapidapi.com/hot_100?date=2020-01-06';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '33c405c45fmsh66b0459cec78964p1cdabdjsn132baa4ed581',
// 		'X-RapidAPI-Host': 'billboard2.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }



const today = dayjs();
const formattedDate = today.format('YYYY-MM-DD')
const billboardArtistUrl = `https://billboard-api5.p.rapidapi.com/api/charts/artist-100?week=${encodeURIComponent(formattedDate)}`
const billboardGlobalUrl = `https://billboard-api5.p.rapidapi.com/api/charts/billboard-global-200?week=${encodeURIComponent(formattedDate)}`
const billboardAfrobeatUrl = `https://billboard-api5.p.rapidapi.com/api/charts/billboard-u-s-afrobeats-songs?week=${encodeURIComponent(formattedDate)}`
const billboardTopUrl = `https://billboard-api5.p.rapidapi.com/api/charts/hot-100?week=${encodeURIComponent(formattedDate)}`
const options = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': '33c405c45fmsh66b0459cec78964p1cdabdjsn132baa4ed581',
		'X-RapidAPI-Host': 'billboard-api5.p.rapidapi.com'
	}
};

fetch(billboardTopUrl, options)

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });



  fetch(billboardGlobalUrl, options)

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

 

  fetch(billboardAfrobeatUrl, options)

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


  fetch(billboardArtistUrl, options)

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

    // for (let index = 0; index < 4; index++) {
    //     const element = array[index];
        
  








// function chartInfo() {
//   const container 
// }
// let chartthree = document.getElementById('chartthree')
// document.body.appendChild(chartthree)

 
  