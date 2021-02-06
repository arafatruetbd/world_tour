fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));


const displayCountries = data => {
    const countriesDiv = document.getElementById('countries');
    data.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
        <h3 class="country-name">${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="country('${country.name}')">Details</button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}

const country = name => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => countryDetails(data[0]))
}

const countryDetails = country => {
    const countryDetailsDiv = document.getElementById('countryDetails');
    const countryInfo =
        `
        <p>name: ${country.name}</p>
        <p>population: ${country.population}</p>
        <p>Area: ${country.area}</p>
         <img src='${country.flag}'/>
        `
    countryDetailsDiv.innerHTML = countryInfo;
}
