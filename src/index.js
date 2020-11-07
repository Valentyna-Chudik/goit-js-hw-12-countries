import './styles.css';
import countryCardTpl from './templates/country-card.hbs';
import API from './js/fetchCountries.js';
import getRefs from './js/get-refs.js';

const refs = getRefs();

refs.searchForm.addEventListener('input', onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const searchQuery = form.elements.search.value;

  API.fetchCountries(searchQuery)
    .then(renderCountryCard)
    .catch(onFetchError)
    .finally(() => form.reset());
  
};

function renderCountryCard(countryName) {
    const markup = countryCardTpl(countryName);
    refs.cardContainer.innerHTML = markup;
};

function onFetchError(error) {
  alert('ERROR!!!');
};

