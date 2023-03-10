const loadCountries = () => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries);
    const allCountriesHTML = countries.map(country => getCountryHTML(country));
    console.log(allCountriesHTML)
    const countryField = document.getElementById('container');
    countryField.innerHTML = allCountriesHTML.join(' ');
}

const getCountryHTML = country => {
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div>
    `
}
loadCountries();