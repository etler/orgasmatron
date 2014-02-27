/* Responsible for providing an access interface to the header dataset */

/* constructor: Takes data in the form of an object of tags keys,
   where each tag key is an array of element objects whose key values
   represent the element's attributes and values */
var Bundler = module.exports = function Bundler (data) {
  this.tags = data;
}

/* Utility function for checking if an element matches a key and value */
var matches = function (attributes, element) {
  for (var key in attributes) {
    var value = attributes[key];
    if (!element.hasOwnProperty(key) || (value != null && element[key] !== value)) {
      return false;
    }
  }
  return true
}

/* where: Returns a list of tags that match the given tag + attribute object
   if an attribute key is defined, but the value is undefined or null, check
   that the key exists with any value */
Bundler.prototype.where = function (tag, attributes) {
  var elements = this.tags[tag];
  return elements.filter(matches.bind(null, attributes));
}

/* findWhere: Returns the first tag that matches the tag + attribute object */
Bundler.prototype.findWhere = function (tag, attributes) {
  var elements = this.tags[tag];
  for (var index = 0; index < elements.length; index++) {
    var element = elements[index];
    if (matches(attributes, element)) return element;
  }
}
