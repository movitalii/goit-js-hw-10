!function(){document.querySelector("div"),document.querySelector("ul");document.querySelector("input").addEventListener("input",(function(n){(t=n.currentTarget.value,fetch("https://restcountries.com/v3.1/name/".concat(t,"?fields=flags,name,capital,population,languages")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))).then((function(n){return function(n){return'<div class="card">\n    <div class="card-header">\n        <img src="'.concat(n.flags.svg,'" alt="').concat(n.name.official,'">\n        <h2 class="card-title">').concat(n.name.official,'</h2>\n    </div>\n    <div class="card-body">\n        <p class="card-text">Capital: ').concat(n.capital,'</p>\n        <p class="card-text">Population: ').concat(n.population,'</p>\n        <p class="card-text">Languages: ').concat(n.languages,"</p>\n    </div>\n</div>")}(n)})).catch((function(n){return console.log(n)}));var t}))}();
//# sourceMappingURL=index.b2a689eb.js.map