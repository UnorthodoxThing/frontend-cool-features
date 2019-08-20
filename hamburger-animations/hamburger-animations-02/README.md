# Hamburger-Animations: "Minus-Hamburger Menu"

A hamburger menu when clicked on, the top and bottom lines collapsed into a minus sign or a single line.

Hamburger is created with CSS.

Features: toggle-able.

## Keynotes

+ CSS animation

+ Toggle between classes via JavaScript.

### Three Lines to One Line Effect

Three lines transform into one line when clicked, and revert back to three lines when clicked again. Have JavaScript toggle a class when the menu is clicked.

HTML:

        <div class="icon-container">
        <div class="hamburger"></div>
        </div>

CSS:

        .icon-container {
         position: relative;
         width: 65px;
         height: 40px;
         transform: translate(-50%, -50%);
         position: absolute;
         left: 50%;
         top: 50%;
        }
        .icon-container:hover {
         cursor: pointer;
        }

        .hamburger {
         margin-top: 20px;
         position: absolute;
         width: 100%;
         height: 0.5em;
         background: #DB324D;
        }
        .hamburger:before, .hamburger:after {
         position: absolute;
         width: 100%;
         height: 0.5em;
         background: #DB324D;
         transition: margin-top 150ms;
         content: "";
         display: block;
         margin-top: -20px;
        }
        .hamburger:after {
         margin-top: 20px;
        }

        .icon-container.collapsed .hamburger:before {
         margin-top: 0;
        }
        .icon-container.collapsed .hamburger:after {
         margin-top: 0;
        }

JavaScript:

        let icon = document.querySelector('.icon-container');

        icon.addEventListener("click", function() {
          icon.classList.toggle('collapsed');
        });

JavaScript (JQuery):

        $(document).ready(function(){
        $('.icon-container').on('click', function(){
         $(this).toggleClass('collapsed');
        });
        });
