# DocHead for Meteor

DocHead is an isomorphic way to manipulate `document.head` for Meteor apps.

With DocHead, you can easily set title and meta tags in client using a single API.

## Installation

~~~
meteor add zamphyr:dochead
~~~

## Usage

You can use `DocHead` anywhere in the client side of your app.

## API

#### DocHead.setTitle(titleName)

Set title to the page.

~~~js
var title = "New title"
DocHead.setTitle(title)
~~~

#### DocHead.getTitle()

Get the document title.

> This API is reactive on the client. It only detect changes you made with `DocHead.setTitle()`.

~~~js
var title = DocHead.getTitle()
console.log("This is the document.title", title)
~~~

#### DocHead.addMeta(metaInfo)

Add a Meta tag.

~~~js
var metaInfo = {name: "description", content: "Just some random description."}
DocHead.addMeta(metaInfo)
~~~

#### DocHead.addLink(metaInfo)

Add a Link tag.

~~~js
var linkInfo = {rel: "icon", type: "image/png", href: "/icon.png"}
DocHead.addLink(linkInfo)
~~~

#### DocHead.addLdJsonScript(jsonObj)

Add a Script tag with type of `application/ld+json`.

~~~js
var richSnippet = { '@context': 'http://schema.org', '@type': 'Organization', url: 'http://www.example.com', logo: 'http://www.example.com/images/logo.png' }
DocHead.addLdJsonScript(richSnippet)
~~~

#### DocHead.loadScript(scriptName, options, callback)

Load an script dynamically from the client side of your app. Both `options` and `callback` are optional.

Behind the scene `DocHead.loadScript` uses [`load-script`](https://www.npmjs.com/package/load-script) npm module. Visit here to learn more about [options](https://www.npmjs.com/package/load-script#opts).

~~~js
var gaScript = 'https://www.google-analytics.com/analytics.js'
DocHead.loadScript(gaScript, function() {
    // Google Analytics loaded
    ga('create', 'UA-XXXX-Y', 'auto')
    ga('send', 'pageview')
})
~~~

#### DocHead.removeDocHeadAddedTags()

When you add meta tags multiple times, older tags will be kept in the `document.head`. So, we need to clean them. For that, we can use this API.

Practially, we can use this before a route change happen.

## Testing the package
```sh
meteor test-packages ./ --port 3010
```
