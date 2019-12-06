# dropdowns-04

Description: Highlight on hovered on level, darker highlight on second level, and more darker highlight on third level.

For: Desktops media queries. If left unattended for mobile queries, it will have a funny result.

[X] Desktop Responsive

[X] Mobile responsive

[X] Progressively Enhanced

[ ] Semantic (A11y) -> html ARIA

[ ] Accessible -> implement w/ JS ARIA

[ ] UI/UX (Clickability size/ fluidity in design)
  [X] - thumb size
  [ ] - color (?)

TODO:

- note and clean html comments, add semanitics
- CSS: clean comments, style for usability
- clean js comments, add ARIA (after html is completed)

use / events: on hover

![dropdown-04](https://user-images.githubusercontent.com/24542308/68129543-529b0800-ff4c-11e9-888b-969e09110f7d.png)

The essential presets:

        ul {
          padding: 0;
          margin: 0;
        }

        li {
          display: inline;
          position: relative;
        }

        ul ul {
          position: absolute;
          display: none;
        }

For two levels dropdown, add the following and it will be enough.

        li:hover ul {
          display: block;
        }

... However, for more than two or multiple levels, add the following instead:

        li:hover > ul {
          display: block;
        }

Default positioning for sub menus.

CSS Styles

        #main_nav li {
          padding: 20px; /* specify size */
          border: 1px solid red; /* customize */
        } /*

Reference: _HTML Dog_ - [CSS Dropdowns](https://htmldog.com/examples/dropdowns3/)

## Keynotes

Media queries reminders

- CSS @Media

Note to Self:

For mega menus, allow mobile and mini-tablets with mobile-responsive dropdowns (have hamburger), and basic tablets and desktops with desktop-responsive dropdown designs (i.e. no hamburger)

smartphones mobiles (Portrait)
@media (min-width: 320px) and (max-width: 480px) {}

Mobiles (landscape)
@media (min-width: 481px) and (max-width: 767px) {}

Tablets (landscape)
@media (min-width: 768px) and (max-width: 1024px) {}

Laptops, desktops
@media (min-width: 1025px) and (max-width: 1280px) {}

Beyond...
@media (min-width:1281px)

- @import at-rules

- To test and monitor media states using the `window.matchMedia()` and `MediaQueryList.addListener()` JavaScript methods

- _MDN_ - [Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

* Include hover effects in a different media query.

+ [Mobile Responsive] w/ JavaScript event listener BUG!!!! SOLVED!

You may encounter a bug where when you click on the submenu that's opened by clicking on the menu icon the submenu closes and resets the whole program.

The following will solve the problem. The reason is to do with a bubbling process.

[vanilla JavaScript]

          [target submenu].addEventListener('click', function(e) {
            e.preventDefault();
            })

[JQuery]

        e.stopPropogation();

+ Targeting all submenu and giving the toggle class

(1) Target the <a> tag class="has-submenu", and its <ul> tag class="submenu"

(2) Put in a variable and use `querySelectorAll`

Q. What does querySelectorAll collect?

(3) Use a for-loop to collect and assign an event listener where you may toggle CSS property 'display: block;'

ex: arrow rotating animation

+ Optimal Button size

CSS pixels at 96 DPI

Minimum: "Low priority"

42px (11mm)

Most preferred: "Medium Priority"

60px  (16mm)

Maximum: "High Priority"

72px (19mm)

+ submenu styles highlight and animation when clicked

## How to Detect Screen Resolution with JavaScript?

Answer => Use the window.screen Object

You can simply use the `width` and `height` property of the `window.screen` object to get the resolution of the screen (i.e. width and height of the screen).

To detect the native resolution of a mobile device display (e.g. retina display) you have to multiply the screen width and height with the device pixel ratio, like `window.screen.width * window.devicePixelRatio` and `window.screen.height * window.devicePixelRatio`.

The **device pixel ratio** tells the browser how many of the device's screen actual pixels should be used to draw a single CSS pixel.

Desktops screens generally have a device pixel ratio of 1.

### Find the size of the browser window

To get the outer window size use `window.outerWidth` and `window.outerHeight`.
To get the inner window size use `window.innerWidth` and `window.innerHeight`.

With IE you can get it with `document.bodyclientWidth` and `document.body.clientHeight`.

### Modern Use

=> `window.matchMedia([CSS media queries])`

Browser Compatibility:

Modern browsers, and above IE9.

## A11y (Accessibility) - WAI-ARIA

+ `aria-hidden`

Values: `false`; `true`; `undefined`.

`false`: (default) The element is exposed to the accessibility API.

NB: Currently behaves inconsistently across browsers.

`true`: The element is not exposed to the accessibility API.

Hide content from assistive technology, cannot be used on a focusable element, cannot be used on the parent of an interactive element.


+ `role="presentation"` and `role="none"` will remove the semantic meaning of an element while still exposing it to assistive technology.

+ `aria-expanded`

`true`: a section that this element denotes is currently expanded (visible).

`false`: the expandable section or items is/are currently collapsed (invisible).

## Credits

- _GTCoding_ - [How to Create Dropdown Menu using Flexbox Tutorial](https://youtu.be/B4d7Ct9wngs)

- _GTCoding_ - [Responsive Mobile Dropdown Navigation Tutorial](https://youtu.be/mmsbW4PuK9Q)

- _Caler Edwards_ [Easy Multi-Level Dropdown Menu Tutorial - Using Only CSS (With Animated Dropdown Arrows)](https://youtu.be/EalgZXjDR2Q)

- _optimizely_ - [Use screen measurements to design for responsive breakpoints](https://help.optimizely.com/Build_Campaigns_and_Experiments/Use_screen_measurements_to_design_for_responsive_breakpoints)

- _StackOverflow_ - [plain javascript version of e preventdefault](https://stackoverflow.com/questions/19172084/plain-javascript-version-of-e-preventdefault/19172113#19172113)

- _GeeksForGeeks_ - [How to avoid dropdown menu to close menu items on clicking inside](https://www.geeksforgeeks.org/hot-to-avoid-dropdown-menu-to-close-menu-items-on-clicking-inside/)
