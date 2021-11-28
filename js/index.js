'use strict';

const togglebtn = document.querySelector('.toggle-btn');

togglebtn.addEventListener('click', () => {
  document.querySelector('.nav-list').classList.toggle('hidden');
  document.querySelector('.social-icons').classList.toggle('hidden');
});
