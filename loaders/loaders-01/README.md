# loaders-01: "Interwind Loading Animation"

An animation that feature two circular objects resizing in circle motion.

## Keynotes

### The HTML

    <div class="loading-container">
        <div class="circle"></div>
        <div class="circle"></div>
    </div>

### The CSS

Add the basic styles for the `.circle`s:

    .circle {
        background-color: purple;
        border-radius: 50%;
        display: inline-block;
        margin: -10px;
        height: 40px;
        width: 40px;
    }

    .circle:nth-of-type(2) {
        background-color: palevioletred;
    }

Basically we'll have two circles next to each other (hence the `display: inline-block` property). The 2nd circle has a different `background-color`. Also the negative `margin` is used to reduce the space between the circles - this will be more obvious when animating it.

### The animation

    .loading-container {
        animation: rotate 3s linear infinite;
        height: 50px;
        transform-origin: bottom center;
    }

    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }

    .circle {
        /* The CSS from above
        New CSS \*/

        animation: grow 1.5s linear infinite;
        transform: scale(0);
    }

    .circle:nth-of-type(2) {
        animation-delay: 0.75s;
    }

    @keyframes grow {
        50% {
            transform: scale(1);
        }
    }


+ The `.loading-container` has to have a higher `height` than its children elements. This way we can set the `transform-origin` property and rotate around the `bottom center` point of the `div`, creating a nice effect.

+ `.circle`s are hidden by setting the `scale` property to `0`. The `keyframes` "grow" at 50% will scale it back to its initial size (i.e. it'll be setting it to `1`).

+ On the 2nd circle we have an `animation-delay` property set. It will make the animation start after `0.75` seconds (which is half of the time it takes the animation to complete. This way while the first circle is growing, the other one is shrinking).  

## Credits

- _Floring Pop_ - [Interwind Loading Animation](https://www.florin-pop.com/blog/2019/03/interwind-loading-animation/)
