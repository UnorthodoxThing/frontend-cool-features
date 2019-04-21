# Picture Cross fade

In a timely manner, the images will rotate with a fade animation.

# Key Notes

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

## Credits

[Demo with multiple images](http://css3.bradshawenterprises.com/cfimg/#cfimg3)
