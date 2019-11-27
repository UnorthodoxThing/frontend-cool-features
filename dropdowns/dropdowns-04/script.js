  const mq = window.matchMedia('(max-width: 480px)');

  const menuIcon = document.getElementById('menu-icon');
  const mainNav = document.getElementById('main_nav');
  const menu = document.querySelector('nav ul')

  const hasSubmenu = document.querySelectorAll('.has-submenu');
  const submenu = document.querySelectorAll('.submenu');
  // // submenu 1
  const hasSubmenu1 = document.querySelector('.has-submenu-1');
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

  // const arrow1 = document.getElementById('arrow1');
  const surfaceArrow = document.querySelectorAll('.arrow');

  // const topSubmenu = document.getElementById('top');
  const topSubmenu = document.querySelector('ul li a');

  const firstFloor = document.querySelectorAll('.first-floor');
  const secondFloor = document.querySelectorAll('.second-floor');
  const thirdFloor = document.querySelectorAll('.third-floor');

if (mq.matches) {
  menuIcon.addEventListener('click', function() {
    if (mainNav.style.display != 'block') {
      mainNav.style.display = 'block';
      this.innerHTML = '&#10006;';
    } else {
      mainNav.style.display = 'none';
      this.innerHTML = 'MENU';
    }
  });

  // BUG: submenus closes when clicked on
  // SOLUTION below:
  // Prevent submenu from closing when clicked on
  mainNav.addEventListener('click', function(e) {
    e.preventDefault();
  });

  for (let i = 0; i < hasSubmenu.length; i++) {
    hasSubmenu[i].addEventListener('click', function() {
      submenu[i].classList.toggle('display-block');
    });
    // TO ADD:
    // If click elsewhere beside inside the menu, menu resets / toggle resets
    hasSubmenu[i].addEventListener('click', function() {
      // topSubmenu.parentNode.classList.toggle('display-selected');
      hasSubmenu[i].classList.toggle('display-selected');
      console.log("Hello");
    });
  }

  // Rotates arrow when 'clicked' on
for (let i = 0; i < surfaceArrow.length; i++) {
  // Sets arrow to point left as mobile presets
  surfaceArrow[i].innerHTML = '&#x25B6;';

// BUG: Does not highlight when selected
  hasSubmenu[i].addEventListener('click', function() {
    // Add class for toggle for arrows to rotate when clicked
    surfaceArrow[i].classList.toggle('display-rotate');
    // this.classList.toggle('display-selected');

    // TO ADD:
    // If click elsewhere beside inside the menu, menu resets / toggle resets
  });
}

}
// END

// TODO:
// Loop for
// 1. first-floor and assign event listener and toggle class
// first-floor-selected
// 2. second-floor... do same as above
// second-floor-selected
// 3. third-floor
// third-floor-selected
