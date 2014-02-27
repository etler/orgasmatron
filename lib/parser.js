/* Responsible for parsing the header data and transforming
   it into a state usable by the bundler module */

cheerio = require('cheerio');

/* parse: Takes raw html and returns it in a tag object in a
   form that is acceptable by the bundler */
exports.parse = function (html) {
  var $ = cheerio.load(html);
  var children = $('head').children();
  var tags = {};
  for (var index = 0; index < children.length; index++) {
    var child = children.eq(index);
    // attribs is internal but we're only using cheerio one so it doesn't matter
    var object = child[0].attribs;
    // Expose text content through _text. This may change.
    object._text = child.text();
    // If the tags object tag array isn't created yet, create it
    // before using the array
    (tags[child[0].name] = tags[child[0].name] || []).push(object);
  }
  return tags;
}
