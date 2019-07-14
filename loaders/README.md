# Loaders

A range of stylized loading page. Popular loading designs: progress bars, loading indicators, preloaders or spinners.

They are used to  explain to users when something is happening or loading and ideally reduce mental waiting time.

> All you need is some transition and animation.

To check the loading animation, throttle your internet connection in the developer tools located in your browser, OR comment out the JS script in html file
and the 'loading effect' and 'boilerplate text' in the CSS file(s).

1) Tab into 'network', and see throttling options.

2) Reload page. (`ctrl` + `r`)

## Keynotes

+ No image should bel larger than 100kb.

+ If you don’t need a transparent background, change all of those large .png, .bmp and other images into .jpg files.

+ Cache your (very) large website.

+ Measure the speed of your website with the following tools available:

- Google Developers Pagespeed Insights
- GTMetrix.com
- Webpagetest.org
- If your hosting has WHM you can see the loading averages in the top-right corner in there. The averages are listed in 1, 5, 15-minute averages (the numbers below are based off a website that has little more than ‘hello world’).

### FAQs (and general research)

#### What's the optimal size for fast loading page?

**A:** 200k. Studies found the maximum page size is usually 1MB. That includes the HTML file, the CSS files, the images, the scripts, the multimedia - everything. Also important is the total number of objects (or total http-requests). A page that is only 100k but has 92 http-requests is probably worse off than a 200k page with only 21 http-requests.

#### What if I'm using an image as a loading page?

**A:** Use PNG-8 where possible.

#### How long should your loader page stay on screen?

**A:** 1-9 seconds. Minimum 1 second. Should be no more than 2 seconds. Users does not want to know how bad the loading is from looking at the loading page a lot. They could assume it's a bug. Vast majority might not give a second chance.

#### Should we continue making loading pages? (In Conclusion)

Not for the long run. A skeleton screen is more preferred. A skeleton screen is essentially a blank version of a page into which information is gradually loaded.

### Recommended:

When creating a loading page, it's best to have a light and fast loading graphic.

Check a web page speed report to see analysis:

http://www.websiteoptimization.com/services/analyze/

> In cases where the computer cannot provide fairly immediate response, continuous feedback should be provided to the user in form of a percent-done indicator [Myers 1985, “ The importance of percent-done progress indicators for computer-human interfaces.”].
Progress indicators have three main advantages: They reassure the user that the system has not crashed but is working on his or her problem; they indicate approximately how long the user can be expected to wait, thus allowing the user to do other activities during long waits; and they finally provide something for the user to look at, thus making the wait less painful. — Jakob Nielsen, on January 1, 1993

In a perfect world, loading animation should:

+ Be shown to the user as least as possible.

+ Give a time estimation; Have a percent-done indicator.

How many files have been uploaded from the whole amount? How many minutes the software update will take? How much progress has been done already? These UX details can set the expectation and reduce frustration.

> While we haven’t made loading less than 1 second, we decided to explain the waiting time.

**IF** you don't know the time it takes to finish up loading, use a default loading spinner or infinite loading animations.

+ Explain why the user needs to wait.

+ Make the waiting process less frustrating.

It can be achieved by putting an engaging animation.

+ Reduce a user's perception of waiting time.

It can be a catchy color combination, interesting or cute idea, or just pancakes.

+ Emphasize branding and company voice.

Just make loading experience consistent with your brand voice and let it be a tiny little detail that matters.

+ Have a _crashed page_, if page stopped uploading.

+ Between simple or well-crafted? Simple.

Also, note:

> One more thing to mention, if an app uses the loading indicator of OS instead of a custom one, users are more likely to complain about the internet connection or physical device speed instead of performance of the app. — Yi Gu, Software Engineer at Quora.


### General script:

`window.addEventListener("load", function() {
    var load_screen = document.getElementById("load_screen");
    document.body.removeChild(load_screen);
  })`

  where,

  * _load_screen_ is an `id` name of a div container [at `document.getElementById("load_screen")`]

### Looking at the Loaders without throttling the Network

Using JavaScript asynchronous method, we can look at the loaders briefly. Load the loading page, and then load the main page.

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

- _ihatetomatoes_ (website) - [How To Create A Custom Preloading Screen](https://ihatetomatoes.net/create-custom-preloading-screen/)

## More Resources

Find more loading GIFs at [GIPHY](https://giphy.com/explore/loading).

## Credits

- _FreeCodeCamp_ (website) - [You definitely want to optimize your website’s loading speed. Here’s how.](https://www.freecodecamp.org/news/website-loading-speed-optimization-in-2018-bananas-e66cc85df8dd/)

- _Medium_ (website) - [Everything you need to know about Loading Animations](https://medium.com/flawless-app-stories/everything-you-need-to-know-about-loading-animations-10db7f9b61e)

- _LukeW_ (website) - [Mobile Design Details: Avoid The Spinner](https://www.lukew.com/ff/entry.asp?1797)

- _SpeedCurve_ (website) - [The average web page is 3MB. How much should we care?](https://speedcurve.com/blog/web-performance-page-bloat/)

- _CSS-Tricks_ (website) - [What is the ideal page size for quick loading pages](https://css-tricks.com/what-is-the-ideal-page-size-for-quick-loading-pages/)

- _CSS-Tricks_ (website) - [When to use jpg and when to use gif](https://css-tricks.com/when-to-use-jpg-and-when-to-use-gif/)

- _Traversy Media_ (Youtube) -  [Quick & Easy CSS Loaders](https://youtu.be/BwhTKJFpKSw)

- _Adam Khoury_ (Youtube) - [Page Loading Screen Document Preloader Tutorial JavaScript CSS HTML](https://youtu.be/EA27xM71m0g)

- _dcode_ (Youtube) - [Create your own Page Pre-Loader (HTML, CSS & JS) (No-jQuery Needed)](https://youtu.be/xuA83OYTE7I)

- _StackExchange_ (website) - [Should a “loading” text or spinner stay a minimum time on screen?](https://ux.stackexchange.com/questions/104606/should-a-loading-text-or-spinner-stay-a-minimum-time-on-screen)

- _StackExchange_ (website) - [Showing a loader for longer than required because it looks good?](https://ux.stackexchange.com/questions/35502/showing-a-loader-for-longer-than-required-because-it-looks-good)
