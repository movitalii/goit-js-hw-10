function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=flags,name,capital,population,languages`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}

export { fetchCountries };