# Landing Page 01

Simple landing page that also snaps into place. The "snapping into place" feature is only available in modern browsers. Otherwise, smooth scroll effect is possible with vanilla JavaScript.
See for browser compatibility.
"scroll-behaviour" is available in Firefox, Chrome and Opera. Not available in Safari, Edge and IE... yet. However, you may use JQuery and a lightweight script called "Smooth Scroll" to give the same "smooth scroll" effect. I used vanilla JavaScript, which is 20x more efficient (and faster).

# Keynotes

## CSS Smooth Scroll Behaviour

-`scroll-behavior: smooth` - Allows the smooth transition or jump from sections of the page.

-`scroll-snap-type: y mandatory` - Target the vertical axis scroll feature and imperative. This makes for a more consistent user experience. Beware of a scrolling container taller than the viewport. `mandatory` value will always snape either to the top of the element or the top of the one below, making the middle part of the tall element impossible to scroll to.
_Solution_ => always make container (targeted page) 100vh size.

-`scroll-snap-align: center` - Where part of the container should the view snap back to. The value `center` centers on that container element.

Not cross-browser compatible (e.g. Opera does not have this feature).

-`Element.scrollTop` - The property gets or sets the number of pixels that an element's content is scrolled vertically.

### Discontinued CSS Property

`scroll-snap-points-y` - Defines the vertical positioning of snap points within the content of the scroll container they are applied to. It is similar to `scroll-snap-align`.

## Vanilla JavaScript Smooth Scroll

Prerequisite:

-Basic knowledge of DOM

-`window.scrollTo`

-`window.requestAnimationFrame`

-`Element.getBoundingClientRect`

### Implementing the Smooth Scroll

Grab our anchor tags and apply a _click event listener_ in which we stop/prevent it's default behaviour and put some custom behaviour of our own.

Target's position (e.g. anchor tags #home, #service etc.) `getBoundingClientRect()`

Get starting position `windows.pageYOffset` (which is relative to the window, not the element).

`window.requestAnimationFrame()` with the aid of the browser, it helps make your animation very nice and smooth.


## Credits

Youtube _Traversy Media_ [Landing Page With Smooth Scroll - 3 options](https://youtu.be/y9nlfqT4s9s)

[Page Scrolling In Vanilla JavaScript](https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/)

[Smooth Scroll With Vanilla JavaScript](https://medium.com/@gurjitmehta/smooth-scroll-with-javascript-571283e9a3cd)

[How to Implement Smooth Scrolling in Vanilla JavaScript](https://www.sitepoint.com/smooth-scrolling-vanilla-javascript/)

Youtube _Dev Ed_ [Vanilla Javascript Smooth Scroll Tutorial](https://youtu.be/oUSvlrDTLi4)
