# JavaScript-bookmarklets  
[Hide webpage floating elements.js](Hide%20webpage%20floating%20elements.js) removes annoying floating elements on a webpage  

[Hide webpage floating elements (alt ver).js](Hide%20webpage%20floating%20elements%20(alt%20ver).js) different implementation (see first comment in file)  
*This one seems to work on all sites, and should be strictly superior to the original version.

Set the bookmarklet as home page, for easy Alt+Home activation

---

## Miscellaneous simple but useful ones

get document.title
```javascript
javascript:var myWindow = window.open(); myWindow.document.write(document.title); void 0;
```

toggle document.body.contentEditable
```javascript
javascript:if(document.body.contentEditable != "true") document.body.contentEditable="true"; else if(document.body.contentEditable != "false") document.body.contentEditable="false"; void 0;
```
