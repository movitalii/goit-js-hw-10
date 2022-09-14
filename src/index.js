import './css/styles.css';

const DEBOUNCE_DELAY = 300; 


fetch('https://restcountries.com/v3.1/name/ukraine')
    .then(response => {
        return response.json();
    })
    .then(country => {        
        console.log(country);
//             return `<div class="card">
//     <div class="card-header">
//         <img src="${country.flags.svg}" alt="${country.name.official}">
//         <h2 class="card-title">${country.name.official}</h2>
//     </div>
//     <div class="card-body">
//         <p class="card-text">Capital: ${country.capital}</p>
//         <p class="card-text">Population: ${country.population}</p>
//         <p class="card-text">Languages: ${country.languages}</p>
//     </div>
// </div>`
    })
    .catch(error => {
        console.log(error);
    });


