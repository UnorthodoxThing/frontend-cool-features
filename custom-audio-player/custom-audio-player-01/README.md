# Custom Audio Player 01

- play / pause button
- current time
- mute button

## Keynotes

* `<progress>` [HTML]

`Display: inline`

The <progress> element is used to create a progress bar to serve as a visual demonstration of progress towards the completion of task or goal. The max and value attributes are used to define how much progress (value) has been made towards task completion (max).

e.g.

        <progress value="33" max-"100"></progress>

For best accessibility practices, add the `<label>` tag along with it.

Browser Compatibility: IE10 and above.

* `clientWidth` [JavaScript]

* `Audio` element

Browser Compatibility: IE9 and above.

## Developer's Notes

I would have considered writing for older browser support, but the `audio` element doesn't exist till IE9.

There is literally a couple of ways of doing this. HTML5 original vs custom, or custom via HTML audio initialisation vs custom via JS audio initialisation.

## Credits

- _YouTube Audio Library_ - Kuku by Mini Vandals

- _GeekLaunch_ - [Custom MUSIC PLAYER in JavaScript](https://youtu.be/7gG_UAx8aUU)

- _GeekLaunch_ - [Music Player](https://github.com/GeekLaunch/music-player/blob/master/music-player.js)
