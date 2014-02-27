/* Responsible for making the request out to the site,
   and returning the header bundle to the callback function */

var request = require('request');
var parser = require('./parser');
var Bundler = require('./bundler');

/* scrape: Takes a url and callback, makes an html get request for the url
   then parses the html and provides the callback with a bundle object for
   extracting header data */
exports.scrape = function (url, callback) {

}
