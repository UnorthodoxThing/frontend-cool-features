  const mq = window.matchMedia('(max-width: 480px)');

  const menuIcon = document.getElementById('menu-icon');
  const mainNav = document.getElementById('main_nav');

  const hasSubmenu = document.querySelectorAll('.has-submenu');
  const submenu = document.querySelectorAll('.submenu');

  const surfaceArrow = document.querySelectorAll('.arrow');

  const firstFloor = document.querySelectorAll('.first-floor');
  const secondFloor = document.querySelectorAll('.second-floor');
  const thirdFloor = document.querySelectorAll('.third-floor');


// ===== MOBILE VIEW =====

if (mq.matches) {
  // Toggles between 'X' and 'MENU'
  menuIcon.addEventListener('click', function() {
    if (mainNav.style.display != 'block') {
      mainNav.style.display = 'block';
      this.innerHTML = '&#10006;';
    } else {
      mainNav.style.display = 'none';
      this.innerHTML = 'MENU';
    }
  });

  // BUG: menu closes when submenus are clicked on
  // SOLUTION below:
  // Prevent submenu from closing when clicked on
  mainNav.addEventListener('click', function(e) {
    e.preventDefault();
  });

  for (let i = 0; i < hasSubmenu.length; i++) {
    hasSubmenu[i].addEventListener('click', function() {
      submenu[i].classList.toggle('display-block');
    });

    // ===== WIP =====
    hasSubmenu[i].setAttribute('aria-hidden', true)
    // // TO ADD:
    // // If click elsewhere beside inside the menu, menu resets / toggle resets
  }

  // Rotates arrow when 'clicked' on
for (let i = 0; i < surfaceArrow.length; i++) {
  // Sets arrow to point left as mobile view presets
  surfaceArrow[i].innerHTML = '&#x25B6;';

  hasSubmenu[i].addEventListener('click', function() {
    surfaceArrow[i].classList.toggle('display-rotate');

    // ===== STYLE PREFERENCE option i =====
    // description: highlights selected main submenus with ONE personal styles
    hasSubmenu[i].classList.toggle('display-selected');

    // TO ADD:
    // If click elsewhere beside inside the menu, menu resets / toggle resets
  });
}

// Uncomment below to use, comment out '===== STYLE PREFERENCE option i ====='
// ===== STYLE PREFERENCE option ii =====
// description: highlights selected main submenus with the same color as its following submenus, or
// lower levels

// for (let i = 0; i < firstFloor.length; i++) {
//   firstFloor[i].addEventListener('click', function() {
//     firstFloor[i].classList.toggle('first-floor-selected');
//     console.log("Hello");
//   });
// }
//
// for (let i = 0; i < secondFloor.length; i++) {
//   secondFloor[i].addEventListener('click', function() {
//     secondFloor[i].classList.toggle('second-floor-selected');
//     console.log("Hello2");
//   });
// }
//
// for (let i = 0; i < thirdFloor.length; i++) {
//   thirdFloor[i].addEventListener('click', function() {
//     thirdFloor[i].classList.toggle('third-floor-selected');
//     console.log("Hello3");
//   });
// }
// ===== STYLE PREFERENCE option ii ===== >>> (END)

// ===== WIP =====
// A11y - Accessible controls
// Default presets on Mobile View
mainNav.setAttribute('aria-hidden', true);
menuIcon.setAttribute('aria-expanded', false);


// Mockup from another code
menuIcon.addEventListener('click', function() {
    let expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    let ariaHidden = mainNav.getAttribute('aria-hidden') === 'true' || false;
    mainNav.setAttribute('aria-hidden', !ariaHidden);
});
} // end

// Is it progressively enhanced? WITHOUT JS
// Are you using WAI-ARIA correctly?
