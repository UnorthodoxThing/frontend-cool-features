# Background Transition On-Scroll

On scroll have a background transition effect.

-Add another page with 4 transitions.

## What I've learned

`document.documentElement.scrollHeight` gets you the whole page (whereas overflow included aswell).

If you want to get the total heigh of the whole page use the following method:

`const totalHeightOfPage = document.documentElement.scrollHeight - window.innerHeight;`

Use the dev console to find out. Write the following inside:

`console.log(totalHeightOfPage);`

## Credits

-YouTube _Dev Ed_ - [Javascript Tutorial - Transition Backgrounds With CSS3](https://youtu.be/z_vvY7YX3so)

-YouTube _dcode_ - [The "scroll" event in JavaScript | window.onscroll](https://youtu.be/V9CY0F4Wc7M)
