# Hamburger-Effects-01: "X-Hamburger Menu"

A hamburger menu when clicked on, animates to an 'X' shape.

Hamburger is created with CSS.

Features: toggle-able.

## Keynotes

+ Bezier bounce with CSS `transition`.

+ Use `::before` and `::after` to create the top and bottom level of the hamburger icon.

+ Add `cursor:pointer`.

+ Use `<button>` to create accessibility.

+ Use clear-contrast CSS `:focus` pseudo effect.

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

Output:

Closed menu:

![1200x780 x-menu](https://user-images.githubusercontent.com/24542308/63091592-2b164e00-bfa2-11e9-8d09-a3283ccd60b3.png)

Opened menu:

![1200x780 x-menu-close](https://user-images.githubusercontent.com/24542308/63091593-2b164e00-bfa2-11e9-90ba-90e5ffe68544.png)

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

* As a User:

- I should be able to open the navigation with a keyboard.
- As a user, I should be able to navigate even if JavaScript is not available.
- As a user, I should be able to navigate using my screen reader

* Don't hide the <nav>, if anything. Hide the <ul> instead.

* `aria-hidden="true"` vs `role="presentation"`

It’s true, that both these attributes will remove objects from the accessibility tree, but they act at different levels and report varying semantics to assistive technology.

`role="presentation"`

you’d use it when it doesn’t make sense for an image to have alternative text so it can be removed from the tree

`aria-hidden="true"`

_ARIA HIDING_

Completely hiding an element from a screen reader is pretty common in a couple different situations:

1. A UI element is detrimental or unimportant to assistive technology (you see this a lot with icons – for better or worse)
2. You’re mimicking the visual UI (like menus opening and closing)

Using `aria-hidden="true"` will completely remove all elements, child elements, and content from the accessibility tree regardless of the default semantic nature and they will remain removed until the aria state is changed to false it functions in much the same way as CSS’s `display:none`. This is where it differs from `role="presentation"`.

When you’re thinking about removing an element from the accessibility tree first think, “Am I removing the element all together or just the semantics?” If you do that, it will be sure to lead you down the right path and make your UI all the more pleasurable for assistive technology to consume.

* `role="menuitem"`

In this implementation, an HTML button element reveals a menu structure made with an HTML ul element. The menuitem role is on the HTML a element contained by each li element so link behaviors are available when focus is set on the menu item. Another reason the menuitem role is not on the li element is that the semantics of descendants of ARIA menuitem elements are not exposed in the accessibility tree. That is, an item in a menu can only be a menuitem because accessibility APIs do not enable assistive technologies to render elements contained inside of an item in a menu.

## Browser Compatibility

- CSS `:target` is not supported in IE 8 or earlier versions.

- For :focus to work in IE8, a <!DOCTYPE> must be declared.

## Credits

- _Smashing_ (website) - [Building Accessible Menu Systems](https://www.smashingmagazine.com/2017/11/building-accessible-menu-systems/)

- _mmtuts_ (Youtube) - [How to Create an HTML Dropdown Menu | Learn HTML and CSS | HTML Tutorial | HTML for Beginners](https://youtu.be/rgUp302f_lY)

- _Useful Angle_ (website) - [CSS :focus-within](https://usefulangle.com/post/128/css-focus-within)

- _Stefany Web Design_ (website) - [Accessible Hamburger Grid Navigation](https://youtu.be/GaXJzMHCn14)

- [A11y Matters - Mobile Nav](https://www.a11ymatters.com/pattern/mobile-nav/)

- _WAI ARIA_ [Menu Button Links](https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-links.html)
