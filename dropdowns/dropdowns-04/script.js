// TODO:
// 1. add na event listener to '#menu-icon' when clicked the whole menu displays and the '#menu-icon' is a replaced With
// with the text 'X', and
// when toggled again menu closes and is replaced with the text 'menus'.
// 2. Add an event listener where you can toggle display on 'click' with the submenus.
// NB: all sub menus should display none in CSS mobile media queries

// BUG:
// Menu disappears when I click on the submenus
  const mq = window.matchMedia('(max-width: 480px)');

  const menuIcon = document.getElementById('menu-icon');
  const mainNav = document.getElementById('main_nav');
  const menu = document.querySelector('nav ul')

  const hasSubmenu = document.querySelectorAll('.has-submenu');
  const submenu = document.querySelectorAll('.submenu');
  // // submenu 1
  // const hasSubmenu1 = document.querySelector('.has-submenu-1');
  // const submenu1 = document.querySelector('.submenu-1');
  // // submenu 2
  // const hasSubmenu2 = document.querySelector('.has-submenu-2');
  // const submenu2 = document.querySelector('.submenu-2');
  // const submenu2_1 = document.querySelector('.submenu-2-1');
  // const submenu2_2 = document.querySelector('.submenu-2-2');
  // const submenu2_2_1 = document.querySelector('.submenu-2-2-1');
  // const submenu2_3 = document.querySelector('.submenu-2-3');
  // // submenu 3
  // const submenu3 = document.querySelector('.submenu-3');
  // // submenu 4
  // const submenu4 = document.querySelector('.submenu-4');

if (mq.matches) {
  menuIcon.addEventListener('click', function() {
    if (mainNav.style.display != 'block') {
      mainNav.style.display = 'block';
      this.innerHTML = 'X';
    } else {
      mainNav.style.display = 'none';
      this.innerHTML = 'MENU';
    }
  });
}

// BUG: submenus closes when clicked on
// Solution. below:
// Prevent submenu from closing when clicked on
  mainNav.addEventListener('click', function(e) {
    e.preventDefault();
  });

for (let i = 0; i < hasSubmenu.length; i++) {
  hasSubmenu[i].addEventListener('click', function() {
    submenu[i].classList.toggle('display-block');
  });
}
