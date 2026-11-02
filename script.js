/* Optional delight. Core content and links work without JavaScript. */
(() => {
  'use strict';
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const cat = document.querySelector('.mascot-button');
  const response = document.getElementById('cat-response');
  if (!cat || !response) return;

  const messages = [
    'Mrrp. Five more minutes.',
    'The cat has been notified.',
    'No drop yet. Excellent detective work.',
    'MEOW??',
    'PrrRrrrRrr..',
    'Here qitt-y qitt-y.',
    'Shhh… creative genius is napping.',
    'Follow the cat. Not the rumors.'
  ];
  let count = 0;
  cat.addEventListener('click', () => {
    response.textContent = messages[count % messages.length];
    count += 1;
  });
})();
