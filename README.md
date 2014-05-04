# Orgasmatron - HTML head tag extractor

A simple easy to use HTML head scraper that provides a clean interface for extracting data from the tags within the `head` tag.

>[Wikipedia](1) - The Orgasmatron is a manually operated head massage device made of partially flexible copper wires attached to a handle. The device has been specifically designed to gently massage the head and the back of the neck.

[1]: http://en.wikipedia.org/wiki/Orgasmatron_(massage_device)

## Full access to all head tags

The usage is simple and familiar. Just provide a url and callback function and it will be supplied with an accessor object that you can use to extract head tags.

```javascript
var scraper = require('orgasmatron');
scraper('http://www.google.com', function(err, bundle){
  bundle.findWhere('meta', {name: 'description'});
});
```

The above looks for the first meta tag that has an attribute called name set to the value 'description'. In this case you would get back the object:

```javascript
{ content: 'Search the world\'s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you\'re looking for.',
  name: 'description' }
```

## Installation
`npm install orgasmatron`

## Project goals
* Easy to learn
* Leaves head tags in their original form
* Flexibly allows you to extract data

## API

### Scraper

The require call returns a function that expects a url string and a callback function.

#### function (url, callback)

The callback function takes two parameters, `(err, bundle)` where bundle is an accessor object for finding head tags.

### Extracting data

The data bundle provides methods for accessing data.

#### .where(tag, attributes)

Returns a list of all element objects that have the same tag string as the argument `tag`, and matches the attributes object. The attributes object defines attribute keys that must exist, as well as the values that must match them. If an attribute key is provided but the value is `null` or `undefined`, the attribute is checked to exist, but the value may be any value.

#### .findWhere(tag, attributes)

Returns the first element object that matches using the same criterion of `.where`.

#### Examples:

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="My First Website" />
<meta property="og:description" content="This is my first website, I hope you enjoy!" />
```

If you want to match any meta tag that has the `content` attribute set you can call the `.where` method with the key defined with no value in the attributes object.

```javascript
bundle.where('meta', {content: undefined});
```

That would return all meta tags with a `content` attribute.

```javascript
[{property: 'og:type', content: 'website'},
 {property: 'og:title' content: 'My First Website'},
 {property: 'og:description' content: 'This is my first website, I hope you enjoy!'}]
```

If you only wanted meta tags with `property` set to `og:title`, you would provide an attribute object with a key `property` set to the string `og:title`. Using findWhere would stop looking after finding the first element that matches.

```javascript
bundle.findWhere('meta', {property: 'og:title'});
```

That would only return the first meta tag with a an attribute of `property` set to `og:title`.

```javascript
{property: 'og:title' content: 'My First Website'}
```
