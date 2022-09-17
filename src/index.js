import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;
const divEl = document.querySelector("div");
const ulvEl = document.querySelector("ul");
const inputEl = document.querySelector("input");

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY))

function onInput(event) {    
    const countryName = inputEl.value.trim();
    if (countryName === '') {
        clearCountryCard();
        clearCountriesList();
    } else if(countryName !== '') {
        fetchCountries(countryName)    
        .then(renderCountryList)
        .catch(onInputError);
    }
        
     
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
 
      
function renderCountryList(countries) {
    if (countries.length > 1 && countries.length < 10) {
        clearCountryCard();
        const markup = countries
    .map((country) => {
      return `
          <li class ="country-item">
            <img class ="country-img" src="${country.flags.svg}" alt="${country.name.official}" width="50">
            <p class="country-name">${country.name.official}</p>
          </li>
      `;
    })
    .join("");
    ulvEl.innerHTML = markup; 
    } else if (countries.length > 10) {
        clearCountryCard();
        clearCountriesList();
        Notiflix.Notify.failure("Too many matches found. Please enter a more specific name.");
    } else {
        clearCountriesList();
        const markupForOne = countries
        .map((country) => {
            return `<div class="card">
    <div class="card-header">
        <img class ="country-img" src="${country.flags.svg}" alt="${country.name.official}" width="50">
        <h2 class="card-title">${country.name.official}</h2>
    </div>
    <div class="card-body">
        <p class="card-text"><span>Capital:</span> ${country.capital}</p>
        <p class="card-text"><span>Population:</span> ${country.population}</p>
        <p class="card-text"><span>Languages:</span> ${Object.values(country.languages)}</p>
    </div>
    </div>`;
    })
    .join("");
    divEl.innerHTML = markupForOne;
    }           
}  

function clearCountriesList() {
    ulvEl.innerHTML = '';
};

function clearCountryCard() {
    divEl.innerHTML = '';
}

function onInputError() {
    Notiflix.Notify.failure("Oops, there is no country with that name");
    clearCountriesList;
    clearCountryCard;
}

                








