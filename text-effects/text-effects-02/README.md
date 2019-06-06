# Glowing Neon Light - Hue Rotation with Animation

Neon light text effect that iterate through the spectrum of colors.

## Keynotes

Components to produce the text effects.

+ `filter: blur(radius)`, where _radius_ is a number value

Applies a _Gaussian blue_ to the input image. The input number value
represents the radius of blur. i.e. how many pixels on the screen blend into
each other. Thus, a larger valye will create more blur.

+ `text-shadow: /* offset-x | offset-y | blur-radius | color */ ;`

+ `mix-blend-mode: color;`

To achieve the effects with `mix-blend-mode: color;` you should combine the `background-image` and `background-color` property.
Otherwise effects won't seem so obvious. One problem could be due to
the colour you have chose.

+ `filter: hue-rotate(0deg)` to `filter: hue-rotate(360deg)`

+ `animation`

+ background color (#000) for the whole content

## Issues

### `mix-blend-mode` and Chrome 58+

> There is an issue with Chrome 58+ where mix-blend-mode will not render on elements that are set on a transparent <body>. The has been ticketed as Issue 711955 in Chrome, which is assigned at the time of this writing. In the meantime, a simple fix is to assign a white (or really, any) background color to the body element.

## Credits

- _Online Tutorials_ (Youtube) - [Glowing Neon Text Color Animation Effects | Html CSS](https://youtu.be/6t6dAxRBpXQ)

- _HTML Dog_ (website) - [CSS Property: font-weight](https://htmldog.com/references/css/properties/font-weight/)

- _Kolosek_ (website) - [CSS blend mode](https://kolosek.com/css-blend-mode/)
