'use strict';

var path = require('path');
var generate = require('markdown-it-testgen');

describe('markdown-it-video', function() {

  describe('with default options', function() {
    var md = require('markdown-it')({
      html: true,
      linkify: true,
      typography: true
    }).use(require('../'));
    generate(path.join(__dirname, 'fixtures/video.txt'), md);
  });

  describe('with bem convention', function() {
    var md = require('markdown-it')({
      html: true,
      linkify: true,
      typography: true
    }).use(require('../'), {
      outputPlayerId: false,
      elementDelimiter: '__',
      modifierDelimiter: '--'
    });
    generate(path.join(__dirname, 'fixtures/video-bem.txt'), md);
  });

  describe('without size attributes', function() {
    var md = require('markdown-it')({
      html: true,
      linkify: true,
      typography: true
    }).use(require('../'), {
      outputPlayerSize: false
    });
    generate(path.join(__dirname, 'fixtures/video-without-size-attributes.txt'), md);
  });

});
