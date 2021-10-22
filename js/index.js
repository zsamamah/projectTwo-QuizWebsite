'use strict';

const togglebtn = document.querySelector('.toggle-btn');
const navbar = document.querySelector('.navbar');

togglebtn.addEventListener('click', () => {
  document.querySelector('.nav-list').classList.toggle('hidden');
  document.querySelector('.social-icons').classList.toggle('hidden');
});
