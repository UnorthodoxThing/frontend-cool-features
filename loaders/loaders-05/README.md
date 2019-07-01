# loaders-05: Gif Loading Animation

A simple _GIF_ file as your loading animation.

## Keynotes

+ The image (`.loader`) CSS `position: fixed;` is so it doesn't get moved by other elements. Also, ensure that the `z-index:99;` so that
it's on top of everything else. Also, `top:0;` and `left:0;` make sure that it's on the reset of the screen position (top-left corner of the window).

+ Make sure to match the background colour with the gif you're using.

+ Adjust `img` width by the following selector: `.loader > img {...}`

+ Add an animation fade-away.

+ CSS `animation-fill-mode` property.

## Credits

- _dcode_ (Youtube) - [Create your own Page Pre-Loader (HTML, CSS & JS) (No-jQuery Needed)](https://youtu.be/xuA83OYTE7I)

- _CSS-Tricks_ (website) - [Multiple Class/ ID and Class Selectors](https://css-tricks.com/multiple-class-id-selectors/)

- _W3Chools_ (website) - [CSS animation-fill-mode Property](https://www.w3schools.com/cssref/css3_pr_animation-fill-mode.asp)
