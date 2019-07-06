# loaders-02: "Text Loading Animation"

The text "Loading...", where the elipses (...) build up, disappear one by one and resets again.

NB: As it takes time to load, if the text is imported or linked to the internet THAT will need to be loaded too to use it. i.e. you won't see the font-styled text until a bit later. 

## Keynotes

+ Brought "..." (symbol) by _CSS (ISO)_. Use `\2026`.

+ The `width` is being animated. `@keyframes` the value `1.25em` is just enought to cover the "..."

    .loader::after {
      content:  '\2026';
      display: inline-block;
      overflow: hidden;
      /* `font-family: 'ZCOOL KuaiLe'` is
      preventing `vertical-align: bottom;` functionality \*
      vertical-align: bottom;
      animation: dots steps(4, end) 2s infinite;
      width: 0px;
    }

    @keyframes dots {
      to {
        /* Showing only the right amount of dots \*/
        width: 1.25em; /* similar to 45px \*/
      }
    }

## Credits

- Character Entities [&hellip;](https://brajeshwar.me/entities/)

- CSS-Tricks [vertical-align](https://css-tricks.com/almanac/properties/v/vertical-align/)
