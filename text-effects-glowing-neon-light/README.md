# Text-Effects-Glowing-Neon-Light

A glowing, neon light text effect.

## Keynotes

_svg_ image extensions will not be on display by CSS background-image UNLESS given a dimension width and height. Otherwise, the browser uses the size that's specified in the _svg_ itself, similar to how it treats an ordinary image. e.g. If your container is 100px tall, but your _svg_ is 200px, only half of it will show. Use the `background-size` property to resize it.

-strikethrough => or simply attach it to the body ONLY via outerlink.

* HTML data-* Attribute
-used to store custom data private to the page or application.
-gives us the ability to embed custom data attributes on all HTML elements.
-Mostly used for JavaScript purposes.

* `image` elements are replacement elements. i.e. _pseudo elements_ will NOT work on image elements.

## Process

There are three layers to make the glowing, neon light effect.

### First Layer

Add `text-shadow` with chosen glowing color.

### Second Layer

Add pseudo elements `::after`.

With HTML - data-* attribute, repeat the same text to make another copy of the text. Place it with the `content: data-*` property-value.

Blur the text to create a second layer of glow effect.

_Pseudo elements_:You can't use pseudo elements without `content: '';`. Otherwise default to nothing to display. Pseudo elements will create with the content, NOT the element.

### Third Layer

Add pseudo elements `::before`.

Add a frame.

Blur the frame to create the third layer of glow effect.

## Alternatively, ...

... We could make three divs stacked on top of each other with different styles than use the _psuedo elements_ `::after` and `::before`.

## Credits

-_Online Tutorials_ - [Glowing Text Animation Effects 2](https://youtu.be/1B3FgFXn274)

-_Online Tutorials_ - [Pure CSS Neon Light Text Effects - Pure Css Tutorials - Css Text Effects](https://youtu.be/0ltdZ8CrqG8)

-"img/img1" Photograph by _Mike Bird_ - ["blocks brick brick texture"](https://www.pexels.com/photo/landscape-photography-of-orange-brick-wall-189451/)

-_W3schools.com_ - [HTML data-* Attribute](https://www.w3schools.com/tags/att_data-.asp)
