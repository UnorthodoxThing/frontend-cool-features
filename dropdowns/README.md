# Drop-down

Various decorated dropdown effects.

There are various types of dropdowns. They may different with different display size. It would be more optimal for desktop view to have `hover` effect, and mobile viewers to have `onclick` (and also be associated with html `<button
>` tag)

WARNING: If anything changes from order, rename and reorder from repo and in this README file.

## UI Patterns

There are 3 types of dropdown for desktops.

Vertical dropdown menu, Accordian menu, and horizontal dropdown menu.

### Vertical dropdown menu, and Horizontal dropdown menu - Usage

* Use when there are between 2-9 sections of content that need a hierarchal navigation structure.

* Do not use when there is a need to single out the location of the current section of the site. (Then) use the navigation tabs.

Solutions

* On mouseout events (when the user takes his mouse away from the drop-down'ed box), add a delay before hiding the drop-down'ed box (typically 200-300ms (recommended: 200ms)).

* Make the area of each menu item (_tap targets_) wider than just the text of the menu item so that the user has more space to put his mouse cursor over.

Tap targets are links, buttons, ads and forms. Tap targets should have enough space around them for a fingertip to ensure users can tap their desired item without accidentally selecting another tap target.

!: Smaller screens means smaller tap targets.

For things like menus or call to action buttons, Google states that these should be at least 48 CSS pixels tall/wide. Google also recognises that not all tap target can be or should be 48 CSS pixels. They specify that if your tap targets are smaller than 48 CSS pixels, there should be at least be 32 CSS pixels between any tap targets.

If you're getting a tap target size error on mobile SEO tools, this is usually because your tap targets are too close together, rather than the actual tap target being too small.

* Change the cursor image as the user hovers over a list item.

`a:hover {
  cursor: pointer;
  }`

1. Dropdown menu ONE level

...

2. Dropdown menu TWO levels

(1) dropdown-01

Description: Highlight for first level, arrow indicator for second level.

Reference:

(2) dropdown-02

Description: TEMPORARY highlight on hover.

Use / events: on hover

Reference: [Simple CSS Dropdown](https://codepen.io/twodogstar/full/FwedC)

(3) dropdown-03

Description: Highlight on selected levels (that it pass through).

use / events: on hover

Reference: [Pure CSS multi-level drop-down menu](https://stackoverflow.com/questions/9100344/pure-css-multi-level-drop-down-menu)

(4) dropdown-04

Description: Highlight on hovered on level, darker highlight on second level, and more darker highlight on third level.

use / events: on hover

Reference: _HTML Dog_ - [CSS Dropdowns](https://htmldog.com/examples/dropdowns3/)

2. Dropdown menu MULTI levels (more than 2)

(3) dropdown-03

Description: arrow indicator for each levels.

Use / events: `OnClick`

- _W3Schools_ - [Multi-Level Dropdowns](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_dropdown_multilevel_css&stacked=h)

3. Mega dropdown menu

4. Fun Animated menu

## Tips

* Use **link** if your main concern is subcategories.

Reason: For accessibility - vistors to your page are not always going to be using a pointing device (which is required for the hovering and revealing of sub-menus)

## Supporting older browsers

The IE only style sheet is loaded using the conditional comment

<!--[if lte IE 6]>
<link rel="stylesheet" media="all" type="text/css" href="css/dropdown_ie.css" />
<![endif]-->



## Inspirations

[100 great css menu tutorials](https://www.jotform.com/blog/100-great-css-menu-tutorials/)

## Accessibility Menu

[Web A11y Tutorials](https://www.w3.org/WAI/tutorials/menus/flyout/)

## Credits

See the following...
- _Focus on Function_ - [Responsive CSS3 Multi-Level, Drop-Down Menu (no JavaScript)](http://fofwebdesign.co.uk/freebies-for-websites/css/multi-rwd-menu.htm)

- - [tap targets](https://thecontentworks.uk/tap-targets/)

- - [mobile friendly pages](https://thecontentworks.uk/mobile-friendly-pages/)
