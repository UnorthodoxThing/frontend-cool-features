# Background Transition On-Scroll

On scroll have a background transition effect. For every 100vh (your window's height) there's a background colour transition. Tab on to "4 Page Scroll" to see four background colour transitions.

![bg-transition-effect1](https://user-images.githubusercontent.com/24542308/56127543-be258400-5fc0-11e9-8ffc-452067905c6b.png)

## What I've Learned

`document.documentElement.scrollHeight` gets you the whole page (whereas overflow included aswell).

If you want to get the total height of the whole page use the following method:

`const totalHeightOfPage = document.documentElement.scrollHeight - window.innerHeight;`

Use the dev console to find out. Write the following inside:

`console.log(totalHeightOfPage);`

## Credits

-YouTube _Dev Ed_ - [Javascript Tutorial - Transition Backgrounds With CSS3](https://youtu.be/z_vvY7YX3so)

-YouTube _dcode_ - [The "scroll" event in JavaScript | window.onscroll](https://youtu.be/V9CY0F4Wc7M)
