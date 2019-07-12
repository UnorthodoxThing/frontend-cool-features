# Loaders

A range of stylized loading page.

> All you need is some transition and animation.

To check the loading animation, throttle your internet connection in the developer tools located in your browser, OR comment out the JS script in html file
and the 'loading effect' and 'boilerplate text' in the CSS file(s).

Tab into 'network', and see throttling options. Reload page.

### FAQ

#### What's the optimal size for a loading page?

**A:** 200k.

#### What if I'm using an image as a loading page?

**A:** Use PNG-8 where possible.

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

### Looking at the Loaders without throttling the Network

Using JavaScript asynchronous method, we can look at the loaders briefly.

    const loader = document.querSelector(.'loader');
    const main = document.querySelctor('.main');

    function init() {
      setTimeout(() => {
        loader.style.opactiy = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => main.style.opactiy = 1, 50);
        }, 4000);
      }

      init();

  where `main` is the context to bring forward after the page has loaded.

## Table of Contents

* [loaders-01](#loaders-01)
* [loaders-02](#loaders-02)
* [loaders-03](#loaders-03)
* [loaders-04](#loaders-04)
* [loaders-05](#loaders-05)

## loaders-01

### "Interwind Loading Animation"

Two balls rescaling in a circle loop.

## loaders-02

### "Text Loading Animation"

The text "Loading...", where the elipses (...) build up, disappear one by one and resets again.

## loaders-03

### "Bouncing Loading Animation"

Three balls bouncing in order of a  straight line.

## loaders-04

A tricolor circle loading animation with the text "Loading..." in the center. The content wriggles in animation.

## loaders-05

### "Gif Loading Animation"

A simple _GIF_ file as your loading animation.

## loaders-06

- _Florin Pop_ (Developer) - [Loading Animations](https://www.florin-pop.com/blog/2017/09/loading-animations)

## More Resources

Find more loading GIFs at [GIPHY](https://giphy.com/explore/loading).

## Credits

- _CSS-Tricks_ (website) - [What is the ideal page size for quick loading pages](https://css-tricks.com/what-is-the-ideal-page-size-for-quick-loading-pages/
)

- _CSS-Tricks_ (website) - [When to use jpg and when to use gif](https://css-tricks.com/when-to-use-jpg-and-when-to-use-gif/)

- _Traversy Media_ (Youtube) -  [Quick & Easy CSS Loaders](https://youtu.be/BwhTKJFpKSw)

- _Adam Khoury_ (Youtube) - [Page Loading Screen Document Preloader Tutorial JavaScript CSS HTML](https://youtu.be/EA27xM71m0g)

- _dcode_ (Youtube) - [Create your own Page Pre-Loader (HTML, CSS & JS) (No-jQuery Needed)](https://youtu.be/xuA83OYTE7I)

- _StackExchange_ (website) - [https://ux.stackexchange.com/questions/104606/should-a-loading-text-or-spinner-stay-a-minimum-time-on-screen](https://ux.stackexchange.com/questions/104606/should-a-loading-text-or-spinner-stay-a-minimum-time-on-screen)

- _StackExchange_ (website) - [Showing a loader for longer than required because it looks good?](https://ux.stackexchange.com/questions/35502/showing-a-loader-for-longer-than-required-because-it-looks-good)
