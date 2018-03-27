# jsonbridge

The idea. Convert your XML into json using bridge.json. Then copy and paste it to https://jsoneditoronline.org/ in order to explore.

Then use this bookmarklet to console.log() javscript access syntax,

```js
javascript:(function(){var selector = "";document.querySelector('.jsoneditor-treepath').querySelectorAll('span').forEach((el) => {  if  (el.innerText == "►") {    selector += ".";  } else if(el.innerText == "0") {    selector += "[0]";  } else {    selector += el.innerText;  }});console.log(selector.replace(/\.\[0\]\./g, "[0]."));})();
```

Currently the bookmarklet is a bit buggy! It assume 0 is [0], not ["0"].

THEN, you can use the long access syntax in `bridge.js` to munge and map your data.

# The Goal

Convert EndNote to BibJson