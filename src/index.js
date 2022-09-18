import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries }  from './fetchCountries';
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
        inputEl.classList.remove("none-cards");
        inputEl.classList.remove("one-card");
        inputEl.classList.remove("several-cards");
    } else if(countryName !== ''){
        fetchCountries(countryName)    
        .then(renderCountries)
        .catch(onInputError); 
    }            
}
      
function renderCountries(countries) {
    if (countries.length >= 2 && countries.length <= 10) {
        renderCountriesList(countries);
    } else if(countries.length === 1){
        renderCountryCard(countries);
    } else {    
        lotsOfCoutriesCards();
    }            
}  

function renderCountriesList(countries) {
    inputEl.classList.remove("none-cards");
    inputEl.classList.remove("one-card");
    inputEl.classList.remove("several-cards");
    clearCountryCard();
        const markup = countries
    .map((country) => {
      return `
          <li class ="country-item">
            <img class ="country-img" src="${country.flags.svg}" alt="${country.name.official}" width="200">
            <p class="country-name">${country.name.official}</p>
          </li>
      `;
    })
    .join("");
    ulvEl.innerHTML = markup;
}
 
function renderCountryCard(countries) {
    inputEl.classList.remove("none-cards");
    inputEl.classList.add("one-card");
    inputEl.classList.remove("several-cards");
    clearCountriesList();
        const markupForOne = countries
        .map((country) => {
            return `<div class="card">
    <div class="card-header">
        <img class ="country-img" src="${country.flags.svg}" alt="${country.name.official}" width="200">
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

function lotsOfCoutriesCards() {
    inputEl.classList.remove("none-cards");
    inputEl.classList.add("several-cards");
    clearCountryCard();
    clearCountriesList();
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
}

function onInputError() {
    inputEl.classList.add("none-cards");
    inputEl.classList.remove("several-cards");
    inputEl.classList.remove("one-card");
    Notiflix.Notify.failure("Oops, there is no country with that name");
    clearCountriesList();
    clearCountryCard();  
}

function clearCountriesList() {
    ulvEl.innerHTML = '';
};

function clearCountryCard() {
    divEl.innerHTML = '';
}


                








