# markdown-it-video

> markdown-it plugin for embedding hosted videos.

## Usage

#### Enable plugin

```js
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typography: true
}).use(require('markdown-it-video')); // <-- this use(package_name) is required
```

#### For use in the Web Browser 

Embed the script, either by hosting it yourself or using a CDN like rawgit.

```html
<script src="markdown-it-video.js"></script>
```

Then make markdown-it use the module.

```js 
var md =  window.markdownIt().use(window.markdownitVideo);
```

The module should work just fine.
#### Example

This only works in the inline style.

```md
@[youtube](dQw4w9WgXcQ)
```

is interpreted as

```html
<p><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" id="ytplayer" type="text/html" width="640" height="390"
  src="http://www.youtube.com/embed/dQw4w9WgXcQ"
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

## Currently supported services
 * YouTube
 * Vimeo
