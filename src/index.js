import './styles.css';
import debounce from 'lodash.debounce';
import countryCardTpl from './templates/country-card.hbs';
import API from './js/fetchCountries.js';
import getRefs from './js/get-refs.js';

const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(evt) {
  evt.preventDefault();
  const searchQuery = refs.searchForm.value;
  API.fetchCountries(searchQuery)
    .then(renderCountryCard)
    .catch(onFetchError);
};

function renderCountryCard(countryName) {
    const markup = countryCardTpl(countryName);
    refs.cardContainer.innerHTML = markup;
};

function onFetchError(error) {
  alert(error);
};

