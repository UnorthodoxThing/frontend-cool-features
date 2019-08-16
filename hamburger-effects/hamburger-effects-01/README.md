# Hamburger-Effects-01:

Simple Hamburger animation.

## Keynotes

+ Bezier bounce with CSS `transition`.

+ Use `:before` and `:after` to create the top and bottom level of the hamburger icon.

+ Add `cursor:pointer`.

+ Use `<button>` to create accessibility.

## Two Ways to Create an Animated Hamburger Menu

You can achieve the animation by via `checkbox` or with JavaScript.

I've decided not to write my hamburger menu with a checkboxes because of accessibility. An input is an interaction that screenreaders may interact with. Also, using `span` tags to create lines reads for screen readers too.

### Three Lines to One Line Effect

Three lines transform into one line when clicked, and revert back to three lines when clicked again. Have JavaScript toggle a class when the menu is clicked.

HTML:

        <div class="icon-group">
        <div class="icon"></div>
        </div>

CSS:

        .icon-group {
         position: relative;
         width: 65px;
         height: 40px;
         transform: translate(-50%, -50%);
         position: absolute;
         left: 50%;
         top: 50%;
        }
        .icon-group:hover {
         cursor: pointer;
        }

        .icon {
         margin-top: 20px;
         position: absolute;
         width: 100%;
         height: 0.5em;
         background: #DB324D;
        }
        .icon:before, .icon:after {
         position: absolute;
         width: 100%;
         height: 0.5em;
         background: #DB324D;
         transition: margin-top 150ms;
         content: "";
         display: block;
         margin-top: -20px;
        }
        .icon:after {
         margin-top: 20px;
        }

        .icon-group.collapsed .icon:before {
         margin-top: 0;
        }
        .icon-group.collapsed .icon:after {
         margin-top: 0;
        }

JavaScript (JQuery):

        $(document).ready(function(){
        $('.icon-group').on('click', function(){
         $(this).toggleClass('collapsed');
        });
        });

### Three Lines to X Effect

Three lines transform into an 'X' when clicked. Have JavaScript toggle a class when the menu is clicked.

To make the lines appear to cross, all you need to employ is the transform property.

Use the same HTML source code as above.

CSS:

        .hamburgler {
         width: 300px;
         height: 300px;
         display: block;
         -webkit-transition: .3s ease all;
         transition: .3s ease all;
        }
        .hamburgler.no-hamburgler {
         -webkit-transform: rotate(-45deg);
         transform: rotate(-45deg);
        }

        .bun,
        .meat {
         display: block;
         width: 100%;
         background: #fcd455;
         height: 20%;
         -webkit-transition: .3s ease all;
         transition: .3s ease all;
         border-radius: 50px;
        }

        .no-hamburgler .top {
         height: 38%;
         width: 20%;
         margin-left: 40%;
         border-radius: 50px 50px 0 0;
        }

        .no-hamburgler .bottom {
         height: 38%;
         width: 20%;
         margin-left: 40%;
         border-radius: 0 0 50px 50px;
        }

        .meat {
         margin: 20% 0;
        }
        .no-hamburgler .meat {
         margin: 2% 0;

JavaScript (JQuery):

        $(document).ready(function() {
         $('.hamburgler').click(function(e) {
         e.preventDefault();
         $(this).toggleClass('no-hamburgler');
         });

## Thinking About accessibility

You can inform when a submenu is expanded or not to  screen-readers.

Here’s how we might toggle state:

        var navButton = document.querySelector('nav button');
        navButton.addEventListener('click', function() {
            let expanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !expanded);
            let menu = this.nextElementSibling;
            menu.hidden = !menu.hidden;
        });

HTML:

        <nav id="navigation">
        <button aria-expanded="false" aria-controls="menu-list">Menu</button>
        <ul id="menu-list" hidden>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        </nav>

Output:

Closed menu:

![1200x780 x-menu](https://user-images.githubusercontent.com/24542308/63091592-2b164e00-bfa2-11e9-8d09-a3283ccd60b3.png)

Opened menu:

![1200x780 x-menu-close](https://user-images.githubusercontent.com/24542308/63091593-2b164e00-bfa2-11e9-90ba-90e5ffe68544.png)

## Credits

- _Smashing_ (website) - [Building Accessible Menu Systems](https://www.smashingmagazine.com/2017/11/building-accessible-menu-systems/)
