# Diagonally Cut-Off Background

#slanted #razor-blade dive shapes


## Image Cut Diagonally

Use CSS3 `-clip-path` and `polygon` in the following way:
[CSS]
```
img {
  width: 100px;
  height: 100px;
  -webkit-clip-path: polygon(0 0, 0 100px, 100px 80px, 100px 0);
  clip-path: polygon(0 0, 0 100px, 100px 80px, 100px 0);
}
```

[HTML]
```
<img src="https://picsum.photos/id/0/100/100">
```

## Website Examples

- [Mediatonic](https://www.mediatonicgames.com/)

## Reference

- _codyhouse_ - [Diagonal Containers in CSS](https://codyhouse.co/blog/post/css-diagonal-containers)

- _StackOverflow_ - [Cuttring image diagonally with CSS](https://stackoverflow.com/questions/29259935/cutting-image-diagonally-with-css)

- _StackOverflow_ - [Internet Explorer and clip-path](https://stackoverflow.com/questions/21904672/internet-explorer-and-clip-path)

- [CSS Masking](https://www.html5rocks.com/en/tutorials/masking/adobe/)

- [](http://jsfiddle.net/a9o5cmag/)

- _youtube_ - [Create Slanted or Razor-Blade Div Shapes with CSS3](https://youtu.be/6QGOhCZLdhs)