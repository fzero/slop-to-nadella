walk(document.body);

function walk(node) {
  // I stole this function from here:
  // http://is.gd/mwZp7E

  let child, next;

  let tagName = node.tagName ? node.tagName.toLowerCase() : "";
  if (tagName == "input" || tagName == "textarea") {
    return;
  }
  if (node.classList && node.classList.contains("ace_editor")) {
    return;
  }

  switch (node.nodeType) {
    case 1: // Element
    case 9: // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode) {
  let v = textNode.nodeValue;

  v = v.replace(/\bSlop\b/g, "Nadella");
  v = v.replace(/\bslop\b/g, "nadella");

  textNode.nodeValue = v;
}
