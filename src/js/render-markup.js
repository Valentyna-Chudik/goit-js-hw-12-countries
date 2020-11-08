import countryCardTpl from '../templates/country-card.hbs';
import countriesCardsTpl from '../templates/countries-cards.hbs';
import errorNotification from './notice-error.js';
import getRefs from './get-refs.js';

const refs = getRefs();

function renderCountryCard(countryName) {
    const markup = countryCardTpl(countryName);
    refs.cardContainer.innerHTML = markup;
};

function renderCountriesCards(countryName) {
    const markup = countriesCardsTpl(countryName);
    refs.cardContainer.innerHTML = markup;
};


function clearMarkup() {
  refs.cardContainer.innerHTML = '';
};

function renderMarkup(countryName) {
  if (countryName.length === 1) {
    renderCountryCard(countryName);
 }

  else if (countryName.length > 1 && countryName.length <= 10) {
    renderCountriesCards(countryName);
 }

  else if (countryName.length > 10) {
    clearMarkup();
    errorNotification.noticeTooManyMatches();
  }
  else {
    errorNotification.noticeNoResults();
  }
};

export default { renderMarkup, clearMarkup, renderCountryCard, renderCountriesCards };