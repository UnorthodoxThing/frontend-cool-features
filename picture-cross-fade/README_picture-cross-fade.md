# Picture Cross fade

In a timely manner, the images will rotate with a fade animation.

# Key Notes

There are two more other ways this can be done. You can loop through images with JavaScript arrays (shown in [Dudley Storey Codepen](https://codepen.io/dudleystorey/pen/qEoKzZ)), and you can add image background property in the opacity keyframes (shown in this video by [CodeKnight](https://youtu.be/A_cQcLtMJm4)).

## Via Keyframe's property background-url

All images should be of equal width and height. Otherwise, there might be some zoom side-effects.

## Via JavaScript looping images through an array

...

## Algorithm for cross-fade animation :mag:

There are three variables that needs to be considered:
1. Total `animation-duration`
2. `animation-delay` for each ordinal (index)
3. Find out the percentage of 1s in the Keyframes

![animation](https://user-images.githubusercontent.com/24542308/56655013-f15cc700-66d4-11e9-9954-d14e1f53d899.png)


## General Guide on How To Find the Pause in CSS Keyframes

Consider the dimension or context it's in. If it's to do with moving in angles use some geometry maths, and if it's to do with cross fading animation consider it's opacity.

However, for initiating a pause in the animation there's a formula we can follow. _See below_.

## How long should the animation be?
`animation-duration` = (fade-in + visible) x images
e.g. fade-in = 1s, visible = 4s, images = 3
animation-duration = (1 + 4) * 3
animation-duration = 15s


## How long should the next image(s) be delayed for?
`animation-delay` = (fade-in + visible) x (ordinal position - 1)
e.g.
animation-delay = (1 + 4) * (1-1) [first image]
animation-delay = 0s
animation-delay = (1 + 4) * (2-1) [second image]
animation-delay = 5s
animation-delay = (1 + 4) * (3-1) [third image]
animation-delay = 10s

## Math the Keyframes' Percentage
Break up 100% into seconds for the animation.

100 / animation-duration = percentage for 1s

e.g. I'm doing 1s fade-in and 4s visibility

```
0% {
  opacity: 0;
  visibility: hidden;
}
6.67% {
  opacity: 1;
  visibility: visible;
}
26.68% {
  opacity: 1;
  visibility: visible;
}
33.35% {
  opacity: 0;
}
100% {
  opacity: 0;
}
```

## Credits

-[Demo with multiple images](http://css3.bradshawenterprises.com/cfimg/#cfimg3)

-[CSS Keyframe animation with pause between keyframes](https://codeburst.io/css-keyframe-animation-with-pause-between-keyframes-50a3b3d14354)

-Stackoverflow ["Fade out, pause, then fade in an element - CSS Only"](https://stackoverflow.com/q/35870085/7719567)

-[Simple CSS Slideshow](https://snook.ca/archives/html_and_css/simplest-css-slideshow)
