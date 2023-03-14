const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('mobile-menu');
let isMenuOpen = false;

const showMenu = () => {
  menu.classList.remove('hidden');
  menu.classList.add('flex');
  isMenuOpen = true;
};

const hideMenu = () => {
  menu.classList.remove('flex');
  menu.classList.add('hidden');
  isMenuOpen = false;
};

menuBtn.addEventListener('click', () => {
  !isMenuOpen ? showMenu() : hideMenu();
});

const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hideMenu();
  });
});
