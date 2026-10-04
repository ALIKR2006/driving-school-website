const navMenu = document.querySelector('.nav__menu')
const navMenuOpen = document.querySelector('.nav__menu-open')
const navMenuclose = document.querySelector('.nav__menu-close')

navMenuOpen.addEventListener('click', () => {
  navMenu.style.display = 'flex';
  navMenuOpen.style.display = 'none';
  navMenuclose.style.display = 'inline-block';
});

navMenuclose.addEventListener('click', () => {
  navMenu.style.display = 'none';
  navMenuOpen.style.display = 'inline-block';
  navMenuclose.style.display = 'none';
})


const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
  if(document.body.className === 'dark') {
    document.body.className = '';
    themeBtn.innerHTML = `<i class="uil uil-moon"></i>`;
    localStorage.setItem('driving-school-theme', '');
  } else {
    document.body.className = 'dark';
    themeBtn.innerHTML = `<i class="uil uil-sun"></i>`;
    localStorage.setItem('driving-school-theme', 'dark');
  }
});



window.addEventListener('load', () => {
  document.body.className = localStorage.getItem('driving-school-theme') || '';
  if (localStorage.getItem('driving-school.theme') === '') {
    themeBtn.innerHTML = `<i class="uil uil-moon"></i>`;
  } else {
    themeBtn.innerHTML = `<i class="uil uil-sun"></i>`;
  }
});

