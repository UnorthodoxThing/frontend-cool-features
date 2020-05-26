# Custom Audio Player 01

- play / pause button
- current time
- mute button
- show media that has been loaded with:

        myAudio.addEventListener("progress", function() {
          // you could let the user know the media is downloading
        });

- `canplay` to determine whether the media is ready to play:

        myAudio.addEventListener("canplay", function() {
          //audio is ready to play
        });



## Brief

Build with `<audio>` (browser Compatibility) and accessibility.

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

* `e.clientX`

* `.offsetLeft`

* `.clientWidth`

* Loading interruption events, consider later...

- suspend
- abort
- error
- emptied
- stalled

* Media Playing Events

`timeupdate`
The `timeupdate` event is triggered every time the `currentTime` property changes. This event can be used to trigger the displaying of playback progress.


        myAudio.addEventListener("timeupdate", function() {
          //update something related to playback progress
        });

`ended`
The `ended` event is initiated when the end of the media is reached.

        myAudio.addEventListener("ended", function() {
          //do something once audio track has finished playing
        });

* WebKit/Blink provides two pseudo classes to style the progress element:

`-webkit-progress-bar` is the pseudo class that can be used to style the progress element container. In this demo we’ll change the background color, border-radius and then apply inset box shadow to the progress element container.
`-webkit-progress-value` is the pseudo class to style the value inside the progress bar. The `background-color` of this element by default is green which can be verified by inspecting the user-agent stylesheet. For this demo we will create a candystrip effect using linear-gradient on background-image property.

* `<progress>` is a new semantic element in HTML 5. Use it to display a progress bar when a file is being uploaded, or your progress towards a fundraising goal.

--Okay, I believe I have misused the `<progress>` element.

Read more: https://html.com/tags/progress/#ixzz6NYdpVRn3

* SVG play / Pause Icon from YouTube

Play Icon Button:
        <svg viewBox="0 0 56 56" preserveAspectRatio="xMidYMid meet" fill="none"><polygon fill="#FFFFFF" points="18.6666667 11.6666667 18.6666667 44.3333333 44.3333333 28"></polygon><polygon points="0 0 56 0 56 56 0 56"></polygon></svg>


Pause Icon Button:
        <svg viewBox="0 0 56 56" preserveAspectRatio="xMidYMid meet" fill="none"><path fill="#FFFFFF" d="M14,44.3333333 L23.3333333,44.3333333 L23.3333333,11.6666667 L14,11.6666667 L14,44.3333333 Z M32.6666667,11.6666667 L32.6666667,44.3333333 L42,44.3333333 L42,11.6666667 L32.6666667,11.6666667 Z"></path><polygon points="0 0 56 0 56 56 0 56"></polygon></svg>

## Developer's Notes

I would have considered writing for older browser support, but the `audio` element doesn't exist till IE9.

There is literally a couple of ways of doing this. HTML5 original vs custom, or custom via HTML audio initialisation vs custom via JS audio initialisation.

The `<audio>` tag is used for one or few (not a lot) and heeds customisation. It is best used as a fallback as some skeletal html5. The `new Audio([song name])` is for multiple songs or song lists and for future-investment development.

## Credits

- _YouTube Audio Library_ - Kuku by Mini Vandals

- _GeekLaunch_ - [Custom MUSIC PLAYER in JavaScript](https://youtu.be/7gG_UAx8aUU)

- _GeekLaunch_ - [Music Player](https://github.com/GeekLaunch/music-player/blob/master/music-player.js)

- _Medium_ - [How to build an audio player with HTML5 and the Progress element](https://m.dotdev.co/how-to-build-an-audio-player-with-html5-and-the-progress-element-487cbbbaebfc)

- _MDN_ [Cross-browser audio basics](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Cross-browser_audio_basics)

- _CSS-Tricks_ [The HTML5 progress Element](https://css-tricks.com/html5-progress-element/)
