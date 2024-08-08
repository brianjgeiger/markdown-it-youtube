/* eslint func-names: ["error", "never"] */
var path = require('path');
var generate = require('markdown-it-testgen');
var assert = require('assert');

function getMfrId(html) {
  return html.split('"')[1];
}

describe('markdown-it-video', function () {
  var md = require('markdown-it')({
    html: true,
    linkify: true,
    typography: true,
  }).use(require('../'));
  generate(path.join(__dirname, 'fixtures/video.txt'), md);
});

describe('markdown-it-video: options', function () {
  var md = require('markdown-it')({
    html: true,
    linkify: true,
    typography: true,
  }).use(require('../'), {
    youtube: {
      width: 640,
      height: 390,
      nocookie: true,
      parameters: {
        rel: 0,
        fs: 0,
        autoplay: 0,
      },
    },
    local: {
      controls: false,
      allowfullscreen: false,
    },
  });
  var renderedHtml;

  it('normal to nocookie', function () {
    renderedHtml = md.render('@[youtube](youtube.com/v/0zM3nApSvMg)');
    assert.equal(renderedHtml, '<p><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item youtube-player" type="text/html" width="640" height="390" src="https://www.youtube-nocookie.com/embed/0zM3nApSvMg?rel=0&fs=0&autoplay=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></p>\n');
  });

  it('overwrite parameter', function () {
    renderedHtml = md.render('@[youtube](youtube.com/embed/0zM3nApSvMg?autoplay=1&rel=0)');
    assert.equal(renderedHtml, '<p><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item youtube-player" type="text/html" width="640" height="390" src="https://www.youtube-nocookie.com/embed/0zM3nApSvMg?autoplay=0&rel=0&fs=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></p>\n');
  });

  it('local options', function () {
    renderedHtml = md.render('@[local](test_video.webm)');
    assert.equal(renderedHtml, '<p><video controls="false" allowfullscreen="false"><source src="test_video.webm" type="video/webm" /></video></p>\n');
  });
});

// Because the mfr iframe requires a random id these tests cannont be part of
// the markdown-it-testgen fixture
describe('markdown-it-mfr', function () {
  var md = require('markdown-it')({
    html: true,
    linkify: true,
    typography: true,
  }).use(require('../'));
  var renderedHtml;
  var id;

  it('make sure normal iframe generates properly when empty', function () {
    renderedHtml = md.render('@[osf]()');
    id = getMfrId(renderedHtml);
    assert.equal(renderedHtml, '<p></p>\n');
  });

  it('make sure normal iframe generates properly with guid', function () {
    renderedHtml = md.render('@[osf](xxxxx)');
    id = getMfrId(renderedHtml);
    assert.equal(renderedHtml, '<p><div id="' + id + '" class="mfr mfr-file"></div><script>$(document).ready(function () {new mfr.Render("' + id + '", "https://mfr.osf.io/render?url=https://osf.io/xxxxx/?action=download%26mode=render");    }); </script></p>\n');
  });

  it('make sure normal iframe generates properly with guid and line break', function () {
    renderedHtml = md.render('@[osf](xxxxx\n)');
    id = getMfrId(renderedHtml);
    assert.equal(renderedHtml, '<p><div id="' + id + '" class="mfr mfr-file"></div><script>$(document).ready(function () {new mfr.Render("' + id + '", "https://mfr.osf.io/render?url=https://osf.io/xxxxx/?action=download%26mode=render");    }); </script></p>\n');
  });

  it('make sure normal iframe generates properly with guid and extra space', function () {
    renderedHtml = md.render('@[osf](xxxxx )');
    id = getMfrId(renderedHtml);
    assert.equal(renderedHtml, '<p><div id="' + id + '" class="mfr mfr-file"></div><script>$(document).ready(function () {new mfr.Render("' + id + '", "https://mfr.osf.io/render?url=https://osf.io/xxxxx/?action=download%26mode=render");    }); </script></p>\n');
  });

  it('make sure normal iframe generates properly with guid and two extra spaces', function () {
    renderedHtml = md.render('@[osf]( xxxxx )');
    id = getMfrId(renderedHtml);
    assert.equal(renderedHtml, '<p><div id="' + id + '" class="mfr mfr-file"></div><script>$(document).ready(function () {new mfr.Render("' + id + '", "https://mfr.osf.io/render?url=https://osf.io/xxxxx/?action=download%26mode=render");    }); </script></p>\n');
  });

  it('make sure normal iframe generates properly with link', function () {
    renderedHtml = md.render('@[osf](https://mfr.osf.io/render?url=https://osf.io/xxxxx/?action=download%26mode=render)');
    id = getMfrId(renderedHtml);
    assert.equal(renderedHtml, '<p><div id="' + id + '" class="mfr mfr-file"></div><script>$(document).ready(function () {new mfr.Render("' + id + '", "https://mfr.osf.io/render?url=https://osf.io/xxxxx/?action=download%26mode=render");    }); </script></p>\n');
  });

  it('make sure normal iframe generates properly with link and extra space', function () {
    renderedHtml = md.render('@[osf](https://mfr.osf.io/render?url=https://osf.io/xxxxx/?action=download%26mode=render )');
    id = getMfrId(renderedHtml);
    assert.equal(renderedHtml, '<p><div id="' + id + '" class="mfr mfr-file"></div><script>$(document).ready(function () {new mfr.Render("' + id + '", "https://mfr.osf.io/render?url=https://osf.io/xxxxx/?action=download%26mode=render");    }); </script></p>\n');
  });

  it('make sure normal iframe generates properly with link and two extra spaces', function () {
    renderedHtml = md.render('@[osf](https://mfr.osf.io/render?url=https://osf.io/xxxxx/?action=download%26mode=render )');
    id = getMfrId(renderedHtml);
    assert.equal(renderedHtml, '<p><div id="' + id + '" class="mfr mfr-file"></div><script>$(document).ready(function () {new mfr.Render("' + id + '", "https://mfr.osf.io/render?url=https://osf.io/xxxxx/?action=download%26mode=render");    }); </script></p>\n');
  });

  it('make sure normal iframe generates properly with link to staging', function () {
    renderedHtml = md.render('@[osf](https://mfr-staging3.osf.io/render?url=https://staging3.osf.io/xxxxx/?action=download%26mode=render)');
    id = getMfrId(renderedHtml);
    assert.equal(renderedHtml, '<p><div id="' + id + '" class="mfr mfr-file"></div><script>$(document).ready(function () {new mfr.Render("' + id + '", "https://mfr-staging3.osf.io/render?url=https://staging3.osf.io/xxxxx/?action=download%26mode=render");    }); </script></p>\n');
  });

  it('make sure normal iframe generates properly with link to local', function () {
    renderedHtml = md.render('@[osf](https://localhost:7778/render?url=https://localhost:5000/xxxxx/?action=download%26mode=render)');
    id = getMfrId(renderedHtml);
    assert.equal(renderedHtml, '<p><div id="' + id + '" class="mfr mfr-file"></div><script>$(document).ready(function () {new mfr.Render("' + id + '", "https://localhost:7778/render?url=https://localhost:5000/xxxxx/?action=download%26mode=render");    }); </script></p>\n');
  });

  it('make sure normal iframe generates properly with link to local ip', function () {
    renderedHtml = md.render('@[osf](http://localhost:7778/render?mode=render&url=http://192.168.168.167:5000/y98tn/?action=download%26mode=render%26direct)');
    id = getMfrId(renderedHtml);
    assert.equal(renderedHtml, '<p><div id="' + id + '" class="mfr mfr-file"></div><script>$(document).ready(function () {new mfr.Render("' + id + '", "http://localhost:7778/render?mode=render&amp;url=http://192.168.168.167:5000/y98tn/?action=download%26mode=render%26direct");    }); </script></p>\n');
  });
});
