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

