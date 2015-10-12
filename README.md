# markdown-it-video

> markdown-it plugin for embedding hosted videos.

## Usage

#### Enable plugin

```js
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typography: true
}).use(require('markdown-it-video', { // <-- this use(package_name) is required
  youtube: { width: 640, height: 390 },
  vimeo: { width: 500, height: 281 },
  vine: { width: 600, height: 600, embed: 'simple' }
}));
```

#### YouTube

This only works in the inline style.

```md
@[youtube](dQw4w9WgXcQ)
```

is interpreted as

```html
<p><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" id="youtubeplayer" type="text/html" width="640" height="390"
  src="//www.youtube.com/embed/dQw4w9WgXcQ"
  frameborder="0"/></div></p>
```

Alternately, you could use a number of different YouTube URL formats rather than just the video id.

```md
@[youtube](http://www.youtube.com/embed/dQw4w9WgXcQ)
@[youtube](https://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=feedrec_centerforopenscience_index)
@[youtube](http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o)
@[youtube](http://www.youtube.com/v/dQw4w9WgXcQ?fs=1&amp;hl=en_US&amp;rel=0)
@[youtube](http://www.youtube.com/watch?v=dQw4w9WgXcQ#t=0m10s)
@[youtube](http://www.youtube.com/embed/dQw4w9WgXcQ?rel=0)
@[youtube](http://www.youtube.com/watch?v=dQw4w9WgXcQ)
@[youtube](http://youtu.be/dQw4w9WgXcQ)
```

#### Vimeo

This only works in the inline style.

```md
@[vimeo](19706846)
```

is interpreted as

```html
<p><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" id="vimeoplayer" type="text/html" width="500" height="281"
  src="//player.vimeo.com/video/19706846"
  frameborder="0"/></div></p>
```

Alternately, you could use the url instead of just the video id.

```md
@[vimeo](https://vimeo.com/19706846)
@[vimeo](https://player.vimeo.com/video/19706846)
```

#### Vine

This only works in the inline style.

```md
@[vine](etVpwB7uHlw)
```

is interpreted as

```html
<p><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" id="vineplayer" type="text/html" width="600" height="600"
  src="//vine.co/v/etVpwB7uHlw/embed/simple"
  frameborder="0"/></div></p>
```

Alternately, you could use the url, or even the whole embed tag instead of just the video id.

```md
@[vine](https://vine.co/v/etVpwB7uHlw/embed/simple)
@[vine](https://vine.co/v/etVpwB7uHlw/embed/postcard?audio=1)
@[vine](<iframe src="https://vine.co/v/etVpwB7uHlw/embed/simple?audio=1" width="600" height="600" frameborder="0"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script>)
```


## Options

```js

```
