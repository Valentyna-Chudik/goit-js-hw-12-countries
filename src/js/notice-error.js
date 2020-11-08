import { error } from '@pnotify/core';

function noticeTooManyMatches() {
  error({
    title: '400',
    text: 'Too many matches found. Please enter a more specific query.',
    delay: 1000,
  });
}

function noticeNoResults() {
  error({
    title: '404',
    text: 'No results found. Please try another search.',
    delay: 1000,
  });
}

export default { noticeTooManyMatches, noticeNoResults };