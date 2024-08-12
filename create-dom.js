// add class dom-html to html element

const html = document.querySelector('html');
html.setAttribute('class','dom-html');

// on html element add head element with class dom-head and title element with class dom-title

const headElement = document.createElement('head');
html.appendChild(headElement);
headElement.setAttribute('class','dom-head');

const titleElement = document.createElement('title');
headElement.appendChild(titleElement);
titleElement.setAttribute('class','dom-title');

// on html element add body element with class dom-body

const bodyElement = document.createElement('body');
bodyElement.setAttribute('class','dom-body');
html.appendChild(bodyElement);

