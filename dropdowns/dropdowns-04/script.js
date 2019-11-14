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

  const submenu1 = document.querySelector('.submenu1');
  const hasSubmenu1 = document.querySelector('.has-submenu1');
  const submenu_1 = document.querySelector('.submenu-1');
  const submenu_2 = document.querySelector('.submenu-2');
  const submenu_2_1 = document.querySelector('.submenu-2-1');
  const submenu_2_2 = document.querySelector('.submenu-2-2');
  const submenu_2_2_1 = document.querySelector('.submenu-2-2-1');
  const submenu_2_3 = document.querySelector('.submenu-2-3');
  const submenu_3 = document.querySelector('.submenu-3');
  const submenu_4 = document.querySelector('.submenu-4');


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

// SOLUTION to submenu continously closing when cliced on!!!
// Return false, or
// e.preventDefault on targeted menu (vanilla js)
// e.stopPropogation (JQuery)
  mainNav.addEventListener('click', function(e) {
    e.preventDefault();
  })

  //  submenu_ = document.querySelectorAll('.submenu');

  hasSubmenu1.addEventListener('click', function(e) {
    if (submenu1.style.display != 'block') {
      submenu1.style.setProperty('display', 'block');
    } else {
      submenu1.style.setProperty('display', 'none');
    }
    // submenu1.classList.toggle('display-block');
  });
}

function displayBlock() {
  if (submenu1.style.display != 'none' || 'initial'){
    submenu1.removeProperty('display');
  } else {
    submenu1.style.display = 'block';
  }
}

// let submenu_1stfloor = 4;

// for (let i = 0; i < hasSubmenu.length; i++) {
//   hasSubmenu[i].addEventListener('click', function() {
//     submenu[i].classList.toggle('display-block');
//   });
// }


// for (let i = 0; i < submenu_1stfloor; i++) {
//   let current = submenu_[i];
//   current.addEventListener('click', function() {
//     current.classList.toggle('display-block');
//   })
// }
  // const submenu = document.querySelectorAll('.submenu');
  // const hasSubmenu = document.querySelectorAll('.has-submenu');
  // const test;
  //
  //     if (mq.matches) {
  //
  //       menuIcon.addEventListener('click', function() {
  //         if (mainNav.style.display == 'none') {
  //           mainNav.style.display = 'block';
  //           this.innerHTML = 'X';
  //         } else {
  //           mainNav.style.display = 'none';
  //           this.innerHTML = 'MENU';
  //         }
  //       });
  //
  //
  //
  //       menuIcon.style.background = 'yellow';
  //     }
  //
  //     test.onload = function display(item) {
  //       item.addEventListener('click', function() {
  //         submenu.classList.toggle('display-block');
  //       });
  //     }
