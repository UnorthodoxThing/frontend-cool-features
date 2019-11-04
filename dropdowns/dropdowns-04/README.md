# dropdowns-04

Description: Highlight on hovered on level, darker highlight on second level, and more darker highlight on third level.

For: Desktops media queries. If left unattended for mobile queries, it will have a funny result.

use / events: on hover

[insert image sample]

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
        }

Reference: _HTML Dog_ - [CSS Dropdowns](https://htmldog.com/examples/dropdowns3/)
