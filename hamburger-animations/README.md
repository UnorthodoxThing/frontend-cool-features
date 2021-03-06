# Hamburger Effects

Animations, transitions and effects.

To see list of description of available hamburger animations, see [Table of Contents](#Table-of-Contents).

## Keynotes

Usually, the hamburger icon is place at the TOP RIGHT corner and the brand logo at the top left corner. However, if you choose to add more than one icon, such as, a login icon or a search icon and place the brand logo icon in the middle, the hamburger icon should be placed at the TOP LEFT corner. If there's a back button where it should be at the top left aswell, you'll need to sacrifice one.

## Recommended Checklist

+ Big enough to tap for humans thumb to tap (or not too close to the logo)

CSS pixels at 96 DPI

Optimal Button Size

Minimum: "Low priority"

42px (11mm)

Most preferred: "Medium Priority"

60px  (16mm)

Maximum: "High Priority"

72px (19mm)

The highest accuracy was found with buttons between 42-72 pixels. i.e. most optimal for users.

The 72 pixel button produced the highest touch accuracy and was preferred by older users.

When using an array of buttons, it's important to indicate priority. This way users know which actions will lead them to the most desired result. By following the button size standard, you can indicate priority in an effective way.

The buttons users use the most frequently are now easier to spot and tap. They'll be able to tap it with a faster reaction time and higher accuracy. This is especially useful if the user's attention is divided between different tasks.

Chosen: 45px x 45px

**Button Spacing Standard** [for Mobile]

When the buttons were too far apart, users moved to the touch target much slower. And when the buttons were too close together, users had the lowest accuracy. The study concluded that a range of 12 to 48 pixels is the optimal button spacing. This wide range is useful because you can apply it different button sizes. When you divide the wide range into smaller ranges, you get a button spacing standard that corresponds to the standard button sizes.

- 12-24 pixels for a large button
- 24-36 pixels for a medium button
- 36-48 pixels for a small button

A larger button allows users to hit their target accurately even when their finger is slightly off target. But if they're off target with a smaller button. This is why smaller buttons need more spacing than larger buttons.

The user's finger can be slight off target and they'll still be able to hit the button no matter what size it is.

**Implications for Text buttons** [for Mobile]

The above standards can apply to the height of text buttons, but the width will vary.

+ accessible

When screenreader use the 'space' bar it should redirect them to the menu bar.

`aria-expanded="true"`

`area-labeled="[what it needs to do]"`

To make it progressively enhanced, you should always set the `aria-expanded` attribute as `true`. i.e. the menu is spread and always available EVEN when JavaScript is not there!

When JavaScript is there, you should add an `addEventListener` with `DOMContententLoaded` (will check if CSS and html is uploaded), and check if it is enabled and set the following codes, for example:

        document.body.classList.toggle('js-enabled');

        document.addEventListener('DOMContentLoaded', function(event) {
          let hamburger = document.getElementById('hamburger');
          hamburger.setAttribute('aria-expanded', 'false');

          hamburger.onclick = function() {
            if(this.getAttribute('aria-expanded') == 'false') {
              this.setAttribute('aria-expanded', 'true');
            } else {
              this.setAttribute('aria-expanded','false');
            }
          }
          });

_See 'hamburger-animation-01' repo_

+ Semantic

Use a semantic element for the navigation. Use `<nav>` and `role="navigation"`.

        <nav role="navigation">
          <ul>
            <!-- menu items -->
            <li role="[give functionality title]"> ...</li>
          </ul>
        </nav>

Don't hide the `<nav>` element.

> As [Heydon Pickering](https://twitter.com/heydonworks/status/766948134169620480) pointed out that we should place the toggle button inside <nav>. Now if you want to hide the navigation links in small screens, you should only hide the <ul> that’s wrap them. Then, the button element will be placed somewhere, for instance, at the top right corner of the screen.

+ Progressively enhanced

Should work when JavaScript is turned off.

In other to achieve this functionality...

1. Hide the button with CSS.

2. Check if JavaScript is available.

3. No JavaScript: keep the navigation menu.

4. JavaScript: hide the navigation menu, show the button with CSS.

### Types of Hamburger menus

1. Floating/Prominent Hamburger Menu

Pros:
Signifies Importance
Can save screen real estate
Intuitive and easy to use
Easy to reach with right thumb (depending on where you place it)
Allows for direct access

Cons:
Features still not immediately viewable
Can take up a large block of screen real estate

2. Tabbed Menus

Pros:
Able to see more core features and functionality on the home screen
Can see what page you are at a glance
Easy to reach buttons
It signals importance, and will drive users to discover the features
Allows for direct access

Cons:
Limited to only ~4–5 menu items (depending on size)
Need to clearly distinguish what the tabs do, which may require creating additional icons

3. Top Tabbed Menus

Pros:
Able to see more core features and functionality on the home screen
Can see what page you are at a glance
It signals importance, and will drive users to discover the features
Allows for direct access

Cons:
Limited to only ~4–5 menu items (depending on size)
Need to clearly distinguish what the tabs do
Buttons are not easy to reach

4. Swipe Pages

Pros:
Very clean user interface
Works well to compartmentalize different themes and related features in the app
Visually Pleasing

Cons:
Users must have implicit knowledge of navigation
Users will often be confused at first unless onboarded properly
Can’t tell what page you’re on
Have to go looking for features
Can’t do direct access
Users are unsure of what page they’re on, but can be solved by dots

5. Labelled Menu Button

Pros:
Quick and easy change to make, without reworking flows or menus
While users may not understand the hamburger icon, they will surely understand the word menu.

Cons:
All the cons of a hamburger menu, except that it has increased icon recognition

> James Foster of Exisweb ran a few very interesting A/B tests to see if simply tweaking the hamburger menu icon would significantly increase usability and reduce confusion. He found that icons labeled with the word “Menu” significantly increased the amount of clicks as compared to a normal hamburger menu, by as much as 20%.

Great to improve *usability*.

6. Slide Out Navigation Tabs

Pros:
It allows users to maximize screen real estate.
Navigational drawer is easily viewable without moving hand position
Allows for direct access to different screens of the app

Cons:
Could interfere with feed or screen navigation — if I’m trying to swipe right, I might accidentally click like, or start a video, or
Doesn’t allow users to swipe right for other functions.
Have to onboard users or get them to discover it on their own

7. A combination of a few versions

Possibly the best option is to incorporate multiple UI elements that take advantage of both the cleanliness of a navigational drawer, along with the usability of other alternatives.

Facebook is the most commonly cited example of this. Within their navigational tabs, they include a hamburger menu as a tab to access all their other features.

## Accessibility

...

## Two Ways to Animate Hamburger Menu and Many Ways to Create a Hamburger Menu

You can achieve the animation by via `checkbox` or with JavaScript.

To create the hamburger, there are a couple of ways to do it.

- CSS `::before`, `::after`, `content:'';` and some style.

- 3x `<span>` tags

- "fa fa hamburger" linked [Font Awesome](https://fontawesome.com/icons/bars?style=solid)

- image files

## Table-of-Contents

* [hamburger-effects-01](#hamburger-effects-01)
* [hamburger-effects-02](#hamburger-effects-02)

### hamburger-effects-01

**"X-Hamburger Menu"**

### hamburger-effects-02

**"Minus-Hamburger Menu"**

## Credits

- _Medium_ (website) - [Accessibility for Hamburger Menu](https://medium.com/@linlinghao/accessibility-for-hamburger-menu-a37fa9617a89)

- _Smashing_ (website) - [Building Accessible Menu Systems](https://www.smashingmagazine.com/2017/11/building-accessible-menu-systems/#top)

- _Stefany Web Design_ (youtube) - [Accessible Hamburger Grid Navigation](https://youtu.be/GaXJzMHCn14)

- _Red Stapler_ (youtube) - [10 Awesome CSS Hamburger Menu You Should See](https://youtu.be/nIgqFp7ewUk)

- _a11ymatters_ (website) - [Accessible Mobile Navigation](https://www.a11ymatters.com/pattern/mobile-nav/)

- _Adrian Roselli_ (website/ blogger) - [Don’t Use ARIA Menu Roles for Site Nav](Accessible Mobile Navigation)

- _uxmovement_ (website) - [Optimal Size and Spacing for Mobile Buttons](https://uxmovement.com/mobile/optimal-size-and-spacing-for-mobile-buttons/)
