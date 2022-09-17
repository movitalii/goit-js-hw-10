import './css/styles.css';
const DEBOUNCE_DELAY = 300;
const divEl = document.querySelector("div");
const ulvEl = document.querySelector("ul");
const inputEl = document.querySelector("input");

inputEl.addEventListener('input', onInput)

function onInput(event) {
    const countryName = event.currentTarget.value;
    fetchCountries(countryName)    
        .then((country) => renderCard(country))
        .catch((error) => console.log(error));
}

function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=flags,name,capital,population,languages`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}
        
      
function renderCard(country) { 

        return `<div class="card">
    <div class="card-header">
        <img src="${country.flags.svg}" alt="${country.name.official}">
        <h2 class="card-title">${country.name.official}</h2>
    </div>
    <div class="card-body">
        <p class="card-text">Capital: ${country.capital}</p>
        <p class="card-text">Population: ${country.population}</p>
        <p class="card-text">Languages: ${country.languages}</p>
    </div>
</div>`
}            
                








