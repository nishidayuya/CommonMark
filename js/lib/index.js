// stmd.js - CommomMark in JavaScript
// Copyright (C) 2014 John MacFarlane
// License: BSD3.

// Basic usage:
//
// var stmd = require('stmd');
// var parser = new stmd.DocParser();
// var renderer = new stmd.HtmlRenderer();
// console.log(renderer.render(parser.parse('Hello *world*')));

var util = require('util');

var renderAST = function(tree) {
    return util.inspect(tree, {depth: null});
}

module.exports.DocParser = require('./blocks');
module.exports.HtmlRenderer = require('./html-renderer');
module.exports.ASTRenderer = renderAST;
