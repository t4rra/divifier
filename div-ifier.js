function setAttr(sourceEl, targetEl) {
  // yoinked from https://bobbyhadz.com/blog/javascript-get-all-attributes-of-element
  const element = sourceEl;

  // ✅ Get object of all {name: value}
  const attrs = element.getAttributeNames().reduce((acc, name) => {
    return { ...acc, [name]: element.getAttribute(name) };
  }, {});

  // ✅ Get array of all attribute names
  const attrNames = element.getAttributeNames();

  // ✅ Get array of all attribute values
  const attrValues = element
    .getAttributeNames()
    .map((name) => element.getAttribute(name));

  

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

const divs = document.querySelectorAll("div");

divs.forEach((div) => {
  getTags(div);
  div.classList.forEach((cssClass) => {
    if (elements.includes(cssClass)) {
      var oldEl = div.innerHTML;
      var oldElAttr = div.getAttribute("*");
      console.log(oldEl + " " + oldElAttr);
      // document.createElement(cssClass)
    }
  });
});
