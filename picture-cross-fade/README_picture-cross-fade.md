# Picture Cross fade

In a timely manner, the images will rotate with a fade animation.

# Key Notes

There are two more other ways this can be done. You can loop through images with JavaScript arrays (shown in [Dudley Storey Codepen](https://codepen.io/dudleystorey/pen/qEoKzZ)), and you can add image background property in the opacity keyframes (shown in this video by [CodeKnight](https://youtu.be/A_cQcLtMJm4)).

## Via Keyframes property background-url

All images should be of equal width and height. Otherwise, there might be some zoom side-effects.

## Via JavaScript looping images through an array

...

## Algorithm for animation-delay

For "n" images You must define:
a=presentation time for one image
b=duration for cross fading
Total animation-duration is of course `t = (a+b) * n`

animation-delay `= t/n` or `= a+b`


Percentage for keyframes:

1. 0%
2. a/t*100%
3. (a+b)/t*100% = 1/n*100%
4. 100%-(b/t*100%)
5. 100%

NB: The "percentage for keyframes" aren't really necessary (I also have no clue how it works). Keep it the same, but the others are adjustable. The `animation-duration` will influence how fast the images rotate and for the `animation-delay` use `t/n` formula to equally divide the time each image are on display.

## Credits

[Demo with multiple images](http://css3.bradshawenterprises.com/cfimg/#cfimg3)
