// const BASE_URL = 'https://restcountries.eu/rest/v2/name';

// export default function fetchCountries(countryName) {
//   return fetch(`${BASE_URL}/${countryName}`).then(response =>
//     response.json(),
//   );
// };

import countryCardTpl from "../templates/country-card.hbs";

const refs = {
  cardContainer: document.querySelector('.js-card-container'), 
}

const r = fetch(`https://restcountries.eu/rest/v2/name/ukraine`)
  .then(response => {
  return response.json();
})
  .then(countryName => {
    console.log(countryName);
    const markup = countryCardTpl(countryName);
    refs.cardContainer.innerHTML = markup;
  })
  .catch(error => {
    console.log(error);
  });

