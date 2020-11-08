import debounce from 'lodash.debounce';

import API from './fetch-countries.js';
import getRefs from './get-refs.js';
import errorNotification from './notice-error.js';
import markup from './render-markup.js';

const refs = getRefs();

refs.searchInput.addEventListener('input', debounce(onSearch, 500));

function onSearch(evt) {
  evt.preventDefault();
  markup.clearMarkup();

  const searchQuery = evt.target.value;
    if (searchQuery === "") return;

  API.fetchCountries(searchQuery)
    .then(markup.renderMarkup)
    .catch(errorNotification.noticeNoResults);
};