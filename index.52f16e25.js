document.querySelector("div"),document.querySelector("ul");document.querySelector("input").addEventListener("input",(function(a){(t=a.currentTarget.value,fetch(`https://restcountries.com/v3.1/name/${t}?fields=flags,name,capital,population,languages`).then((a=>{if(!a.ok)throw new Error(a.status);return a.json()}))).then((a=>function(a){return`<div class="card">\n    <div class="card-header">\n        <img src="${a.flags.svg}" alt="${a.name.official}">\n        <h2 class="card-title">${a.name.official}</h2>\n    </div>\n    <div class="card-body">\n        <p class="card-text">Capital: ${a.capital}</p>\n        <p class="card-text">Population: ${a.population}</p>\n        <p class="card-text">Languages: ${a.languages}</p>\n    </div>\n</div>`}(a))).catch((a=>console.log(a)));var t}));
//# sourceMappingURL=index.52f16e25.js.map
