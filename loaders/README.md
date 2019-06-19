# Loaders

A range of loaders style.

> All you need is some transition and animation.

To check the loading animation, throttle your internet connection in the developer tools in your browsers.

### Recommended:

When creating a loading page, it's best to have a light and fast loading graphic.

### General script:

`window.addEventListener("load", function() {
    var load_screen = document.getElementById("load_screen");
    document.body.removeChild(load_screen);
  })`

  where,

  * _load_screen_ is an `id` name of a div container [at `document.getElementById("load_screen")`]

### How long should your loader page stay on screen?

1-9 seconds. Minimum 1 second. Should be no more than 2 seconds. Users want doesn't want to know how bad the loading is looking at this alot.

## Table of Contents

* [loaders-01](#loaders-01)
* [loaders-02](#loaders-02)
* [loaders-03](#loaders-03)

## loaders-01

### "Interwind Loading Animation"

...

## loaders-02

...

## loaders-03

...

## loaders-04

A tricolor circle loading animation with the text "Loading..." in the center. The content wriggles in animation.

- _DarkCode_ (Youtube) - [Amazing Loading Animation Using Only HTML & CSS](https://youtu.be/QLiZ5VrhA98)

## More Resources

Find more loading GIFs at [GIPHY](https://giphy.com/explore/loading).

## Credits

- _Traversy Media_ (Youtube) -  [Quick & Easy CSS Loaders](https://youtu.be/BwhTKJFpKSw)

- _Adam Khoury_ (Youtube) - [Page Loading Screen Document Preloader Tutorial JavaScript CSS HTML](https://youtu.be/EA27xM71m0g)

- _dcode_ (Youtube) - [Create your own Page Pre-Loader (HTML, CSS & JS) (No-jQuery Needed)](https://youtu.be/xuA83OYTE7I)

- _StackExchange_ (website) - [https://ux.stackexchange.com/questions/104606/should-a-loading-text-or-spinner-stay-a-minimum-time-on-screen](https://ux.stackexchange.com/questions/104606/should-a-loading-text-or-spinner-stay-a-minimum-time-on-screen)

- _StackExchange_ (website) - [Showing a loader for longer than required because it looks good?](https://ux.stackexchange.com/questions/35502/showing-a-loader-for-longer-than-required-because-it-looks-good)
