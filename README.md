# JavaScript-bookmarklets  
[Hide webpage floating elements.js](Hide%20webpage%20floating%20elements.js) removes annoying floating elements on a webpage  

[Hide webpage floating elements (alt ver).js](Hide%20webpage%20floating%20elements%20(alt%20ver).js) different implementation (see first comment in file)  
*This one seems to work on all sites, and should be strictly superior to the original version.

Set the bookmarklet as home page, for easy Alt+Home activation

---

## Miscellaneous simple but useful ones

get document.title
```js
javascript:var myWindow = window.open(); myWindow.document.write(document.title); void 0;
```

toggle document.body.contentEditable
```js
javascript:if(document.body.contentEditable != "true") document.body.contentEditable="true"; else if(document.body.contentEditable != "false") document.body.contentEditable="false"; void 0;
```

view on sci-hub 
```js
javascript:location.href = location.origin.replace(/^https/, 'http') + '.sci-hub.se' + location.pathname + location.search
```

view on sci-hub (new tab)
```js
javascript: (function(){ window.open(location.origin.replace%28/%5Ehttps/, 'http') + '.sci-hub.se' + location.pathname + location.search, '_blank')})();
```
