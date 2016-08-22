'use strict';

var pjson = require('./package.json');

console.log('hello world');

setTimeout(function() {
	console.log(`my version is ${pjson.version}`);
}, 5000)