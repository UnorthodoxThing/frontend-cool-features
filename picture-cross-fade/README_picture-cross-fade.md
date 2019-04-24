# Picture Cross fade

In a timely manner, the images will rotate with a fade animation.

# Key Notes

There are two more other ways this can be done. You can loop through images with JavaScript arrays (shown in [Dudley Storey Codepen](https://codepen.io/dudleystorey/pen/qEoKzZ)), and you can add image background property in the opacity keyframes (shown in this video by [CodeKnight](https://youtu.be/A_cQcLtMJm4)).

## Via Keyframe's property background-url

All images should be of equal width and height. Otherwise, there might be some zoom side-effects.

## Via JavaScript looping images through an array

...

## Algorithm for animation-delay :mag:

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

## General Guide on How To Find the Pause in CSS Keyframes

Consider the dimension or context it's in. If it's to do with moving in angles use some geometry maths, and if it's to do with cross fading animation consider it's opacity.

However, for initiating a pause in the animation there's a formula we can follow. _See below_.

### Find the total time of the animation

`total time = (animation time + animation pause) * number of iteration`

e.g. animation time (you decide) 2s, animation pause (you decide) 5s, number of iteration (what is being displayed every course or how many moves should it have) 1 (our _picture cross fade_ should be displayed only once)
total time = (2s + 5s) * 1
total time = 7s

### Calculate the percentage (%) of the animation Keyframes

  `animation time(%) = (animation / total time) * 100`

  `animation pause(%) = animation pause / total time) * 100`

animation time(%) = (animation time / total time) * 100
animation time(%) = (2 / 7) * 100
animation time(%) = 28.57% (i.e. 28.57% = 2s of the time)

animation pause(%) = (animation pause / total time) * 100
animation pause(%) = (5/7) * 100
animation pause(%) =  71.42% (i.e. 71.42% = 5s of the time)
71.42
What the results should add up to:
e.g.

0%(0s) + 28.57%(2s animate) = 28.57%(2s)
28.57%(2s) + 71.43%(5s pause) = 99.99%(7s) [1st iteration]
<!-- 33.32%(7s) + 28.57%(2s animate) = 42.84%(9s)
42.84%(9s) + 71.42%(5s pause) = 66.64%(14s) [2nd iteration]
66.64%(14s) + 28.57%(2s animate) = 58.33%(16s)
58.33%(16s) + 71.42%(5s pause) = 76.16%(21s) [3rd iteration] -->
Now we have,
0%→ 9.52%→ 33.32%→ 42.84%→ 66.64%→ 58.33%→75%→ 76.16%→ 100%

How long should the animation be?
animation-duration = (fade-in + visible) x images
e.g. fade-in = 1s, visible = 4s, images = 3
animation-duration = (1 + 4) * 3
animation-duration = 15s


How long should the next image(s) be delayed for?
animation-delay = (fade-in + visible) x (ordinal position - 1)
e.g.
animation-delay = (1 + 4) * (1-1) [first image]
animation-delay = 0s
animation-delay = (1 + 4) * (2-1) [second image]
animation-delay = 5s
animation-delay = (1 + 4) * (3-1) [third image]
animation-delay = 10s

Keyframes
Break up 100% into seconds for the animation.
100 / animation-duration = percentage for 1s
e.g. I'm doing 1s fade-in and 4s visibility


## Credits

-[Demo with multiple images](http://css3.bradshawenterprises.com/cfimg/#cfimg3)

-[CSS Keyframe animation with pause between keyframes](https://codeburst.io/css-keyframe-animation-with-pause-between-keyframes-50a3b3d14354)

-Stackoverflow ["Fade out, pause, then fade in an element - CSS Only"](https://stackoverflow.com/q/35870085/7719567)

-[Simple CSS Slideshow](https://snook.ca/archives/html_and_css/simplest-css-slideshow)
