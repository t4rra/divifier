function divify({target ="div", consoleMsg=true}={}) {
  if (consoleMsg) {
    console.log(
      "\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001    \u2588\u2588\u2001\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001     \u2588\u2588\u2588\u2588\u2588\u2001 \u2588\u2588\u2001    \u2588\u2588\u2001\u2588\u2588\u2001     \u2588\u2588\u2001         \u2588\u2588\u2588\u2588\u2588\u2588\u2001 \u2588\u2588\u2001\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2001\u2588\u2588\u2001\r\n\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001    \u2588\u2588\u2001\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001    \u2588\u2588\u2001\u2001\u2001\u2588\u2588\u2001\u2588\u2588\u2001    \u2588\u2588\u2001\u2588\u2588\u2001     \u2588\u2588\u2001         \u2588\u2588\u2001\u2001\u2001\u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001\u2001\u2001\u2001\u2001\u2001\u2588\u2588\u2001\r\n\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001 \u2588\u2001 \u2588\u2588\u2001\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2001\u2588\u2588\u2001 \u2588\u2001 \u2588\u2588\u2001\u2588\u2588\u2001     \u2588\u2588\u2001         \u2588\u2588\u2001  \u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2001\u2588\u2588\u2001\r\n\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2001   \u2588\u2588\u2001\u2001\u2001\u2001    \u2588\u2588\u2001\u2001\u2001\u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2001     \u2588\u2588\u2001         \u2588\u2588\u2001  \u2588\u2588\u2001\u2588\u2588\u2001\u2001\u2588\u2588\u2001 \u2588\u2588\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2588\u2588\u2001\u2001\u2001\u2001\r\n\u2001\u2588\u2588\u2588\u2588\u2588\u2588\u2001\u2001\u2001\u2588\u2588\u2588\u2001\u2588\u2588\u2588\u2001\u2001\u2001\u2588\u2588\u2588\u2588\u2588\u2588\u2001\u2001\u2588\u2588\u2001    \u2588\u2588\u2001  \u2588\u2588\u2001\u2001\u2588\u2588\u2588\u2001\u2588\u2588\u2588\u2001\u2001\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2001\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2001    \u2588\u2588\u2588\u2588\u2588\u2588\u2001\u2001\u2588\u2588\u2001 \u2001\u2588\u2588\u2588\u2588\u2001\u2001 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2001\u2588\u2588\u2001\r\n \u2001\u2001\u2001\u2001\u2001\u2001\u2001  \u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001  \u2001\u2001\u2001\u2001\u2001\u2001\u2001 \u2001\u2001\u2001    \u2001\u2001\u2001  \u2001\u2001\u2001 \u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001 \u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001    \u2001\u2001\u2001\u2001\u2001\u2001\u2001 \u2001\u2001\u2001  \u2001\u2001\u2001\u2001\u2001  \u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001\r\n"
    );
    console.log(
      "This page was made with divifier.js, quite possibly the worst js framework to exist."
    );
    console.log(
      "You can also code with all divs at https://github.com/eaaasun/divifier!"
    );
  }

  function getAttr(sourceEl) {
    // yoinked from https://bobbyhadz.com/blog/javascript-get-all-attributes-of-element
    const element = sourceEl;

    const attrs = element.getAttributeNames().reduce((acc, name) => {
      return { ...acc, [name]: element.getAttribute(name) };
    }, {});

    return attrs;
  }

  const elements = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "slot",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
  ];

  const divs = document.querySelectorAll(target);

  // gets every div
  for (var i = divs.length - 1; i >= 0; i--) {
    var div = divs[i];
    window.replacementEl = null;
    // for every class it has
    div.classList.forEach((cssClass) => {
      // if it's a valid element matching element lists
      if (elements.includes(cssClass)) {
        var oldEl = div.innerHTML;
        var oldElAttr = getAttr(div);
        var newEl = document.createElement(cssClass);
        newEl.innerHTML = oldEl;
        Object.keys(oldElAttr).forEach((key) => {
          newEl.setAttribute(key, oldElAttr[key]);
        });
        newEl.classList.remove(cssClass);
        replacementEl = newEl;
      }
    });
    if (window.replacementEl) {
      div.parentNode.replaceChild(replacementEl, div);
    }
  }
}
